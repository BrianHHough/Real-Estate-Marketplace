// create a second migrations contract
const SquareVerifier = artifacts.require("./SquareVerifier.sol");
const SolnSquareVerifier = artifacts.require("./SolnSquareVerifier.sol");
// const IntREstellarToken = artifacts.require('IntREstellarToken');

// exports based on function
module.exports = function (deployer) {
    // deploy Verifier
    // await deployer.deploy(SquareVerifier);
    // await deployer.deploy(IntREstellarToken);
    // await deployer.deploy(SolnSquareVerifier, SquareVerifier.address);
    deployer.deploy(SquareVerifier).then(() => {
        return deployer.deploy(SolnSquareVerifier, SquareVerifier.address);
    });
};
