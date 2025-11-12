import { getKeypairFromEnvironment } from "@solana-developers/helpers";
import {
  clusterApiUrl,
  PublicKey,
  Connection,
  LAMPORTS_PER_SOL,
} from "@solana/web3.js";
import "dotenv/config";

const keyPair = process.env.KEYPAIR || null;

if (!keyPair) {
  console.log("Please provide a keypair");
  process.exit(1);
}

// Establish a connection to the cluster
const connection = new Connection(clusterApiUrl("devnet"));
// Get the address from the environment variable
const address = getKeypairFromEnvironment("KEYPAIR");
// Get the balance of the address

const balance = await connection.getBalance(address.publicKey);
// Convert the balance to SOL
const solBalance = balance / LAMPORTS_PER_SOL;

console.log(`Balance: ${solBalance} SOL in address: ${address.publicKey}`);
