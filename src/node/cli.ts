import { cac } from "cac";
import { createDevServer } from "./dev";
import { build } from "./build";
const path = require('node:path'); 

const version = require("../../package.json").version;

const cli = cac("docuit").version(version).help();

cli
  .command("[root]", "start dev server")
  .alias("dev")
  .action(async (root: string) => {
    const pos = root ? path.resolve(root) : process.cwd();
    const server = await createDevServer(pos);
    await server.listen();
    server.printUrls();
  });

cli
  .command("build [root]", "build for production")
  .action(async (root: string) => {
    const pos = root ? path.resolve(root) : process.cwd();
    try {
      await build(pos);
    } catch(e) {
      console.log(e)
    }
  });

cli.parse();
