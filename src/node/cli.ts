import { cac } from "cac";
// import { createDevServer } from "./dev";
import { build } from "./build";
const path = require('node:path'); 

const version = require("../../package.json").version;

const cli = cac("docuit").version(version).help();

cli.command('dev [root]', 'start dev server').action(async (root: string) => {
  const createServer = async () => {
    const { createDevServer } = await import('./dev.js');
    const server = await createDevServer(root, async () => {
      await server.close();
      await createServer();
    });
    await server.listen();
    server.printUrls();
  };
  await createServer();
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
