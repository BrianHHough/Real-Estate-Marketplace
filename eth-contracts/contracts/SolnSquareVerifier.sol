// REAL ESTATE TOKEN NAME: IntREstellarToken
pragma solidity >=0.4.21 <0.6.0;

import './ERC721Mintable.sol';
// TODO define a contract call to the zokrates generated solidity contract <Verifier> or <renamedVerifier>
import './SquareVerifier.sol';
import '../../node_modules/openzeppelin-solidity/contracts/drafts/Counters.sol';

// TODO define another contract named SolnSquareVerifier that inherits from your ERC721Mintable class
contract SolnSquareVerifier is IntREstellarToken {

    using Counters for Counters.Counter;
    Verifier private verifierContract;
    enum SolutionState { Verified, Minted }

    // TODO define a solutions struct that can hold an index & an address
    struct Solution {
        uint256 tokenId;
        address owner;
    }

    // TODO define an array of the above struct
    // Solution[tokenId, owner]
    Counters.Counter private solutionsCount;

    // TODO define a mapping to store unique solutions submitted
    mapping(bytes32 => Solution)
    private solutionsMapping;


    // TODO Create an event to emit when a solution is added
    event SolutionAdded(address owner, uint256 index);

    // Add in a definition of the Verifier here:
    SquareVerifier public verifier;

    constructor (address verifierContractAddress)
    public {
        verifierContract = Verifier(verifierContractAddress);
    }


    // TODO Create a function to add the solutions to the array and emit the event
    function addSolution(
        uint256 index,
        address user,
        bytes32 key)
        internal {
        
        Solution memory sol = Solution({
            tokenId: index,
            owner: user
            });
        solutionsMapping[key] = sol;
        emit SolutionAdded(user, index);
    }


// TODO Create a function to mint new NFT only after the solution has been verified
//  - make sure the solution is unique (has not been used before)
//  - make sure you handle metadata as well as tokenSuplly
    function mintVerified(
        address to,
        uint256 tokenId,
        uint[2] memory a,
        uint[2] memory a_p,
        uint[2][2] memory b,
        uint[2] memory b_p,
        uint[2] memory c,
        uint[2] memory c_p,
        uint[2] memory h,
        uint[2] memory k,
        uint[2] memory input
        )
        public {
            bytes32 key = keccak256(abi.encodePacked(a, a_p, b, b_p, c, c_p, h, k, input));
            // Ensure soltuion is unique (not used/repeated previously)
            require(solutionsMapping[key].owner == address(0), "This solution has already been used before");
            // Require the use of SquareVerifier
            require(Verifier.verifyTx(a, a_p, b, b_p, c, c_p, h, k, input), "Not able to verify this proof.");
            addSolution(tokenId, to, key);
            // metadata + total supply of tokens
            super.mint(to, tokenId);
        }
}









