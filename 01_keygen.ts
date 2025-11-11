// This script generates a new keypair and prints the public and secret keys.

import { Keypair } from "@solana/web3.js";

const keypair = Keypair.generate(); // generate a fresh keypair

// convert to 58 base string for human readability
console.log(`This is the public key: ${keypair.publicKey.toBase58()}`);
console.log(`This is the secret key: ${keypair.secretKey}`); // store it to .env file. so that we can use it in the next steps.
console.log(`key pair: ${keypair}`);
