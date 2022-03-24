# MetaLinks

This project contains the MetaLink smart contract & the graph api.

Try running some of the following tasks:

To get accounts
```shell
npx hardhat accounts
```


To compile contract
```shell
npx hardhat compile
```

To deploy contract
```shell
npx hardhat run scripts/deploy_ml.js
```

# Etherscan verification
To try out Etherscan verification, you first need to deploy a contract to an Ethereum network that's supported by Etherscan, such as Rinkeby.

In this project, copy the .env.example file to a file named .env, and then edit it to fill in the details. Enter your Etherscan API key, your Rinkeby node URL (eg from Infura), and the private key of the account which will send the deployment transaction. With a valid .env file in place, first deploy your contract:

```shell
hardhat run --network ropsten scripts/deploy.js
```

Then, copy the deployment address and paste it in to replace `DEPLOYED_CONTRACT_ADDRESS` in this command:

```shell
npx hardhat verify --network ropsten DEPLOYED_CONTRACT_ADDRESS
```
