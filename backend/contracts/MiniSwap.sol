// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract MiniSwap {
    address public tokenA;
    address public tokenB;
    uint public rate;

    event Swapped(address indexed user, address tokenIn, address tokenOut, uint amountIn, uint amountOut);

    constructor(address _tokenA, address _tokenB, uint _rate) {
        tokenA = _tokenA;
        tokenB = _tokenB;
        rate = _rate;
    }

    function swap(uint amountIn, address from, address to) external {
        require(
            (from == tokenA && to == tokenB) || (from == tokenB && to == tokenA),
            "Invalid token pair"
        );

        IERC20(from).transferFrom(msg.sender, address(this), amountIn);

        uint amountOut = getAmountOut(amountIn, from, to);
        IERC20(to).transfer(msg.sender, amountOut);

        emit Swapped(msg.sender, from, to, amountIn, amountOut);
    }

    function getAmountOut(uint amountIn, address from, address to) public view returns (uint) {
        if (from == tokenA && to == tokenB) return amountIn * rate;
        else if (from == tokenB && to == tokenA) return amountIn / rate;
        else revert("Invalid pair");
    }

    function getBalance(address token, address user) external view returns (uint) {
        return IERC20(token).balanceOf(user);
    }
}