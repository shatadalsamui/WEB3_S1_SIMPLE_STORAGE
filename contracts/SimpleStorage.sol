// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18; // Use Solidity version 0.8.18 or above

contract SimpleStorage {
    // Basic types demonstration
    bool hasFavNumber = false; // Boolean variable, default false
    uint256 number = 77; // Unsigned integer, value 77
    int256 number2 = -77; // Signed integer, value -77
    string favoriteNumber = "88"; // String variable, value "88"
    address myAddress = 0x3de7A543fD2b4f6a9D675F3Ceca39D5fe9F40F76; // Ethereum address
    bytes32 favBytes32 = "cat"; // 32-byte fixed-size byte array, value "cat"
}