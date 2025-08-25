# Sample Hardhat 3 Beta Project (`mocha` and `ethers`)

This project showcases a Hardhat 3 Beta project using `mocha` for tests and the `ethers` library for Ethereum interactions.

To learn more about the Hardhat 3 Beta, please visit the [Getting Started guide](https://hardhat.org/docs/getting-started#getting-started-with-hardhat-3). To share your feedback, join our [Hardhat 3 Beta](https://hardhat.org/hardhat3-beta-telegram-group) Telegram group or [open an issue](https://github.com/NomicFoundation/hardhat/issues/new) in our GitHub issue tracker.

## Project Overview

This example project includes:

- A simple Hardhat configuration file.
- Foundry-compatible Solidity unit tests.
- TypeScript integration tests using `mocha` and ethers.js
- Examples demonstrating how to connect to different types of networks, including locally simulating OP mainnet.

## Usage

### Running Tests

To run all the tests in the project, execute the following command:

```shell
npx hardhat test
```

You can also selectively run the Solidity or `mocha` tests:

```shell
npx hardhat test solidity
npx hardhat test mocha
```

# SimpleStorage Solidity Project

This project demonstrates a basic Solidity smart contract and uses the Hardhat development environment for compiling and testing smart contracts.

## Project Structure

```
1_SECTION1_SIMPLE_STORAGE/
├── contracts/
│   └── SimpleStorage.sol      # The main Solidity contract
├── artifacts/                 # Compiled contract artifacts (auto-generated)
├── cache/                     # Hardhat cache (auto-generated)
├── hardhat.config.ts          # Hardhat configuration file
├── package.json               # Node.js project file
└── README.md                  # Project documentation
```

## What I Learned Today

- How to set up a Hardhat project for Solidity development
- How to write a basic Solidity contract using different data types:
  - `bool`, `uint256`, `int256`, `string`, `address`, `bytes32`
- How to configure the Solidity compiler version in both Hardhat and VS Code
- How to compile a Solidity contract using Hardhat
- How to resolve version mismatch warnings in VS Code by setting the correct remote compiler version

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)
- [Hardhat](https://hardhat.org/)

### Installation

1. Install dependencies:

    ```bash
    npm install
    ```

2. Compile the contract:

    ```bash
    npx hardhat compile
    ```

### VS Code Solidity Extension

To avoid version mismatch warnings, set your Solidity extension to use version `0.8.18`:

    {
      "solidity.compileUsingRemoteVersion": "v0.8.18"
    }

## License

This project is licensed under the MIT License.
