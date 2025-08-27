import { ethers } from "ethers";
import * as fs from "fs";
import * as path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

async function main() {
  // Address of deployed contract
  const address = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
  // Connect to local Hardhat node
  const provider = new ethers.JsonRpcProvider("http://127.0.0.1:8080");
  // Use the first account from the local node
  const signer = await provider.getSigner();

  // Read the compiled artifact
  const artifactPath = path.join(__dirname, "../artifacts/contracts/SimpleStorage.sol/SimpleStorage.json");
  const artifact = JSON.parse(fs.readFileSync(artifactPath, "utf8"));

  // Connect to the deployed contract
  const contract = new ethers.Contract(address, artifact.abi, signer);

  // Read the stored value (assuming function is called 'retrieve')
  const value = await contract.retrieve();
  console.log("Stored value:", value.toString());
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
