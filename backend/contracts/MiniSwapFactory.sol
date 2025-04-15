// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "./MiniSwap.sol";

contract MiniSwapFactory {
    address[] public allPairs;

    event PairCreated(address indexed pair, address tokenA, address tokenB, uint rate);

    function createPair(address tokenA, address tokenB, uint rate) external returns (address) {
        MiniSwap pair = new MiniSwap(tokenA, tokenB, rate);
        allPairs.push(address(pair));
        emit PairCreated(address(pair), tokenA, tokenB, rate);
        return address(pair);
    }

    function getAllPairs() external view returns (address[] memory) {
        return allPairs;
    }
}