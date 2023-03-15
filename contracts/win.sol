// SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "./Contract.sol"; 

contract Winner {
    Contract private contractInstance;

    constructor(address _contractAddress) {
        contractInstance = Contract(_contractAddress);
    }

    // Call the attempt method of original contract in this contract so the tx.origin - will become this contract address.
    // The account which is calling this function after deploying will become msg.sender so the attempt executes successfully.
    function callAttempt() external {
        contractInstance.attempt();
    }
}
