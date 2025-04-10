// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract TokenSwap {
    IERC20 public tokenAOG;
    IERC20 public tokenAOS;
    uint public rate; // Example: 1 AOG = 2 AOS

    constructor(address _tokenAOG, address _tokenAOS, uint _rate) {
        tokenAOG = IERC20(_tokenAOG);
        tokenAOS = IERC20(_tokenAOS);
        rate = _rate;
    }

    function swapAOGforAOS(uint _amount) external {
        require(tokenAOG.transferFrom(msg.sender, address(this), _amount), "AOG transfer failed");
        require(tokenAOS.transfer(msg.sender, _amount * rate), "AOS transfer failed");
    }

    function swapAOSforAOG(uint _amount) external {
        require(tokenAOS.transferFrom(msg.sender, address(this), _amount), "AOS transfer failed");
        require(tokenAOG.transfer(msg.sender, _amount / rate), "AOG transfer failed");
    }
}
