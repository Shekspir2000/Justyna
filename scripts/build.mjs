import { spawnSync } from "node:child_process";

const isVercel = process.env.VERCEL === "1" || Boolean(process.env.VERCEL_ENV);
const command = isVercel ? "next" : "vinext";
const args = isVercel ? ["build", "--webpack"] : ["build"];

const result = spawnSync(command, args, {
  stdio: "inherit",
  env: {
    ...process.env,
    WRANGLER_LOG_PATH: process.env.WRANGLER_LOG_PATH ?? ".wrangler/wrangler.log",
  },
});

process.exit(result.status ?? 1);
