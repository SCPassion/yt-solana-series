import {
  getExplorerLink,
  getKeypairFromEnvironment,
} from "@solana-developers/helpers";
import { createMint } from "@solana/spl-token";
import { clusterApiUrl, Connection, Signer } from "@solana/web3.js";
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

// Create the token
const token = await createMint(
  connection,
  // Payer of the transaction
  owner as Signer,
  // Mint authority - who can mint new tokens
  owner.publicKey,
  // Freeze authority - can freeze token accounts (e.g., for blacklisting bad actors). null = no freeze authority
  null,
  // Decimals - how many decimal places the token has
  2
);

// To view that token created
// return link of the token address on the explorer
const link = getExplorerLink("address", token.toBase58(), "devnet");
console.log(`✅ Done! Token created: ${link}`);
