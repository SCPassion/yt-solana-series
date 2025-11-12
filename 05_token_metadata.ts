import {
  getExplorerLink,
  getKeypairFromEnvironment,
} from "@solana-developers/helpers";
import { createMint } from "@solana/spl-token";
import { clusterApiUrl, Connection, PublicKey, Signer } from "@solana/web3.js";
import "dotenv/config";

const keyPair = process.env.KEYPAIR || null;

if (!keyPair) {
  console.log("Please provide a keypair");
  process.exit(1);
}

// Establish a connection to the cluster
const connection = new Connection(clusterApiUrl("devnet"));
// Owner of the token we are about to create
const owner = getKeypairFromEnvironment("KEYPAIR");

// This token account is created in the 04_create_token.ts script
const tokenAccount = new PublicKey(process.env.TOKEN_ACCOUNT || "");
// Create the metadata account

console.log(`Token account: ${tokenAccount}`);
