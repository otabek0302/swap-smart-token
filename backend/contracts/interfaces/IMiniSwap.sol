// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

interface IMiniSwap {
  function swap(uint amountIn, address from, address to) external;
  function getAmountOut(uint amountIn, address from, address to) external view returns (uint);
  function getBalance(address token, address user) external view returns (uint);
}