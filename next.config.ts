import path from "path";
import type { NextConfig } from "next";

// Ensure Turbopack uses this project folder as the workspace root.
// This prevents Next from inferring the user's home directory as the root
// when multiple lockfiles are present (which can pull in unrelated types).
const nextConfig: NextConfig & { turbopack?: { root?: string } } = {
  /* config options here */
  turbopack: {
    // __dirname resolves to the project directory where this file lives.
    root: path.join(__dirname),
  },
};

export default nextConfig;
