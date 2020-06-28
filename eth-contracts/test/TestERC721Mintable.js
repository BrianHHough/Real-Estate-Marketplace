// var SquareVerifier = artifacts.require('SquareVerifier');
var ERC721MintableComplete = artifacts.require('IntREstellarToken');
// let proof = require("../../zokrates/code/square/proof");

// var ERC721MintableComplete = artifacts.require('ERC721MintableComplete');

contract('TestERC721Mintable', accounts => {

    const account_one = accounts[0];
    const account_two = accounts[1];
    // const account_three = accounts[2];

    describe('match erc721 spec', function () {
        beforeEach(async function () { 
            // let verifierContract = await SquareVerifier.new({from: account_one});
            
            this.contract = await ERC721MintableComplete.new({from: account_one});

            // TODO: mint multiple tokens
            // await this.contract.mint(account_two, 1, {from: account_one});
            for (var i = 3; i < 13; i ++) {
                await this.contract.mint(accounts[i], i, "RealEstateToken")
            }
        })

        it('should return total supply', async function () { 
            var tokens = await this.contract.totalSupply();
            assert.equal(tokens, 10, "The total tokens supply here isn't correct");
            
        })

        it('should get token balance', async function () { 
            var balance = await this.contract.balanceOf(accounts[3]);
            assert.equal(balance, 1, "The number of tokens called here doesn't match the record");
            
        })

        // token uri should be complete i.e: https://s3-us-west-2.amazonaws.com/udacity-blockchain/capstone/1
        it('should return token uri', async function () { 
            var tokenURI = await this.contract.tokenURI(3);
            //var uri = await this.contract.tokenURI(1);
            assert.equal(tokenURI, "https://s3-us-west-2.amazonaws.com/udacity-blockchain/capstone/3");
        })

        it('should transfer token from one owner to another', async function () { 
            await this.contract.transferFrom(accounts[3], accounts[4], 3, {from: accounts[3]});
            var balance = await this.contract.balanceOf(accounts[4]);
            assert.equal(balance, 2, "The Account #4 should possess only 2 IntREstellarTokens now");

            var ownerOfToken = await this.contract.ownerOf(3);
            assert.equal(ownerOfToken, accounts[4], "The Account #4 should possess IntREstellarToken #3 now");
            
        })
    });

    describe('have ownership properties', function () {
        beforeEach(async function () { 
            this.contract = await ERC721MintableComplete.new({from: account_one});
        })

        it('should fail when minting when address is not contract owner', async function () { 
            let failed = false;
            try {
                await instance.mint(accounts[2], 1, {from: accounts[2]});
                console.log("this worked well :(")
            } catch (err) {
                failed = true;
            }
            assert.equal(failed, true, "Someone who isn't the owner shouldn't be able to mint IntREstellarTokens");
        });


        it('should return contract owner', async function () { 
            const returnedOwner = await instance.getOwner();
            assert.equal(returnedOwner, owner, "This contract owner is not the right one!");
        });

    });
})