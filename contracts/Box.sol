// SPDX-License-Identifier: MIT
pragma solidity 0.8.24;

contract Box {
    uint256 internal value;

    function store(uint256 newValue) public {
        value = newValue;
    }

    function retrieve() public view returns(uint256) {
        return value;
    }

    function version() public pure returns(uint256) {
        return 1;
    } 
}