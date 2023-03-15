
# Alchemy Week 4 Assignment

Here we have to make sure that `tx.origin` must not be be equal to to `msg.sender`.

`Original contract` -> Alchemy University official contract.

`tx.origin` -> The address which originally started/initiated transaction. 

`mas.sender` -> The address which is making/executing the transaction.

### Approach

In above approach I have created same `Contract` file of original contract, so that we can take/create an instance of the contract by it's address.

Then we have a `callAttempt` function which calls the `attempt` method of Original contract. 

When we deploy the contract in `deploy.js`, contract will be deployed in `goerli` testnet (refer ***hardhat.config.js***).

So when we call `callAttempt` function in `win.js`, the contract `Winner` *(win.sol)* `tx.origin` will be the contract because it is calling the function & `msg.sender` will be the address who is calling the function.

#### So `require(msg.sender != tx.origin, "msg.sender is equal to tx.origin");` passes 👍.

### Commands for Running 

1. `npx hardhat run scripts/deploy.js --network goerli`
    for deploying the contract.

2. `npx hardhat run scripts/win.js --network goerli` for calling the function *callAttempt*

#### Thankyou



