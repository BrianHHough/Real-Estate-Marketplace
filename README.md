# 🏘 Decentralized Real Estate Marketplace

## Programming Libraries/Technologies Used:
- **Truffle v5.1.14-nodeLTS.0 (core: 5.1.13):** used in project to deploy, test, and deploy DApp's smart contracts.
- **Solidity v0.5.16 (solc-js):** an object-oriented, high-level langauge for writing, designing, and implementing smart contracts.
- **OpenZeppelin v2.1.2:** minimizes risk by using battle-tested libraries of smart contracts.
- **Ganache CLI v6.9.1 (ganache-core: 2.10.2):** used to create a local, test blockchain network.
- **Node v12.16.2:** used for easily building fast and scalable network applications - integral for deploying UI to the browswer.
- **Web3.js v1.2.1:** used to allow the DApp to interact with a local/remote Ethereum node with an HTTP, HTTPS, or IPC connection.

# Process
- Install with: 
`npm install`
- Get truffle set up with:
`truffle compile`
- Install [Docker](https://docs.docker.com/install/)
- Run ZoKrates docker container
- ![](./images/zokrates-process.png)
- Implement the ZoKrates framework with the five step process:
    ## 1. Compile program
    **Get to Docker**
    `docker run -v /.../.../.../.../Real-Estate-Marketplace:/home/zokrates/code -ti zokrates/zokrates /bin/bash`
    **Get to the square.code file** (ended up using ls to go through it manually)
    `ls --> cd code --> ls --> cd zokrates --> cd code --> cd square`
    Overall, you're going to: ~/code/zokrates/code/square
    **Compile the `smart.code` file:
    `~/code/zokrates/code/szokrates@XXXXXXXXXX:~/code/zokrates/code/szokrates@XXXXXXXXXX:~/cozokrates@6XXXXXXXXXX:~/code/zokrazokrates@XXXXXXXXXX:~/code/zokrateszokrates@zokrzozokrates@XXXXXXXXXX:~/code/zokrates/code/square$ ~/zokrates compile -i square.code`
    
    ## 2. Trusted setup
    Run: `~/zokrates setup`

    ## 3. Compute-Witness
    Run: `~/code/zokrates/code/square$ ~/zokrates compute-witness -a 3 9`

    ## 4. Generate-Proof
    Run: `~/zokrates generate-proof`

    ## 5. Export-Verifier
    Run: `~/zokrates export-verifier`

## Testing Procedures
- Run Ganache-CLI in terminal window #1:
`ganache-cli -m "seed phrase"`
- Run Truffle Tests in terminal window #2 to assess the usability of the Solidity Smart Contracts:
     - Test #1: Square Verifier 
     `truffle test ./test/TestSquareVerifier.js`
     - Test #2: Soln Square Verifier
     `truffle test ./test/TestSolnSquareVerifier.js`
     - Test #3: ERC-721 Mintable
     `truffle test ./test/TestERC721Mintable.js`

## Rinkeby Setup
- update `truffle-config.js` with what Infura settings are
- run the following command in another terminal window:
`truffle migrate --network rinkeby`

## Preface
At present, property titles are often paper-based, creating opportunities for errors and fraud. Title professionals find defects in 25% of all titles during the transaction process, according to the American Land Title Association. Any identified defect makes it illegal to transfer a property title to a buyer until it is rectified. This means property owners often incur high legal fees to ensure authenticity and accuracy of their property titles. Moreover, title fraud poses a risk to homeowners worldwide. US losses associated with title fraud reportedly averaged around $103,000 per case in 2015, compelling many property buyers to purchase title insurance. These title management issues could potentially be mitigated by using blockchain technology to build immutable digital records of land titles and using blockchain for transparent transactions. This approach could simplify property title management, making it more transparent and helping to reduce the risk of title fraud and the need for additional insurance.

Some companies and governments around the globe have already implemented blockchain technology for the title management process. Ghanaian blockchain company Bitland has been working on a solution for Ghana, where it is estimated that almost 80% of land is unregistered, according to Forbes. Those that possess unregistered land find it more difficult to prove legal ownership, increasing their exposure to the risk of land seizures or property theft. Bitland is seeking to create secure digital public records of ownership on its blockchain platform, with the aim of protecting land owners from title fraud. Bitland has expanded to operate in 7 African nations, India, and is also working with Native Americans in the US.

## Project Scope
This project involves minting a token to represent the title to the properties, first by verifying ownership of the property on the blockchain and then using zk-SNARKs to create a verification system for proving ownership of the title to the property without revealing that specific information on the property. After verification, it is placed on a blockchain market place (OpenSea) for others to purchase. 

# Project Resources

## Links
* [Remix - Solidity IDE](https://remix.ethereum.org/)
* [Visual Studio Code](https://code.visualstudio.com/)
* [Truffle Framework](https://truffleframework.com/)
* [Ganache - One Click Blockchain](https://truffleframework.com/ganache)
* [Open Zeppelin ](https://openzeppelin.org/)
* [Interactive zero knowledge 3-colorability demonstration](http://web.mit.edu/~ezyang/Public/graph/svg.html)
* [Docker](https://docs.docker.com/install/)
* [ZoKrates](https://github.com/Zokrates/ZoKrates)
* [OpenSea](https://docs.opensea.io/docs)

## OpenSea
OpenSea is a decentralized marketplace that is used for selling for crypto assets such as CryptoKitties and other digital assets that are powered off Ethereum. On OpenSea, you can buy or sell any of these items through a smart contract, meaning that no central authority ever holds custody of your items. You can even check out the source code for this smart contract [here](https://etherscan.io/address/0x7be8076f4ea4a4ad08075c2508e481d6c946d12b). Check out the documentation [here](https://docs.opensea.io/docs).

![](./images/opensea-logo-full-colored-blue.png)

OpenSea is used in this project to list the property tokens for sale. In order to list a property, you'll need to go to the item on your account page. On the item detail page, click "Sell". This will walk you through the steps for selling an item. Note that the first time you auction an item, you will need to complete several MetaMask transactions in order to give the exchange contracts access to your items. After you complete these initial steps, creating an auction will only require signing a MetaMask message. This means that you can auction items without paying gas.

## ZoKrates
Succinct Zero-Knowledge proofs (zkSnarks) are proving to be one of the most promising frameworks for enhancing privacy and scalability in the blockchain space. Projects like Zcash are using zkSnarks to make payments anonymous (rather than pseudonymous). Other projects such as Coda are experimenting with trustless light clients by using recursive zkSnarks to dramatically reduce the number of state verifications blockchain clients have to perform when coming online. Ethereum founder, [Vitalik Buterin wrote how zkSnarks can be used to scale transaction speed on Ethereum](https://ethresear.ch/t/on-chain-scaling-to-potentially-500-tx-sec-through-mass-tx-validation/3477).

![](./images/Zokrates.png)

This project leverages ZoKrates, a toolbox for zkSNARKS on Ethereum, to implement zkSnarks for the decentralized real estate marketplace. Traditionally, snarks are written using NP complete arithmetic circuits which can be compared to writing assembly code in traditional machine programming. ZoKrates provides a higher level programming language (something like C in the same metaphor) which compiles down to the underlying constraint system and thus allows programmers to write snarks much closer to how they are used to programming.

# Screenshots of Generating Zero-Knowledge Proofs with Zokrates

## 1. Compile program
![](./images/Zokrates1_access_code-zokrates-square.png) 
 
## 2. Trusted setup
![](./images/Zokrates2_compile_squarecode.png) 

## 3. Compute-Witness
![](./images/Zokrates3_setup.png) 

## 4. Generate-Proof
![](./images/Zokrates4_compute_witness.png) 

## 5. Export-Verifier
![](./images/Zokrates5_generate_proof.png) 
