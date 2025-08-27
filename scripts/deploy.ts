import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

import { ethers } from "ethers";
import * as fs from "fs";
import * as path from "path";

async function main() {
  // Connect to local Hardhat node
  const provider = new ethers.JsonRpcProvider("http://127.0.0.1:8080");
  // Use the first account from the local node
  const signer = await provider.getSigner();

  // Read the compiled artifact
  const artifactPath = path.join(__dirname, "../artifacts/contracts/SimpleStorage.sol/SimpleStorage.json");
  const artifact = JSON.parse(fs.readFileSync(artifactPath, "utf8"));

  const factory = new ethers.ContractFactory(artifact.abi, artifact.bytecode, signer);
  const contract = await factory.deploy();
  await contract.waitForDeployment();
  console.log(`SimpleStorage deployed to: ${contract.target}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
