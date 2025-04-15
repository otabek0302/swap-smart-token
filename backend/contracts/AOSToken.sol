// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract AOSToken is ERC20 {
  constructor(uint256 initialSupply) ERC20("AOS Token", "AOS") {
    _mint(msg.sender, initialSupply);
  }
}