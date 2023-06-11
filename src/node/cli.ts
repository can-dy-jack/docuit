import { cac } from "cac";
import { createDevServer } from "./dev";
import { build } from "./build";
import path from "path";

const version = require("../../package.json").version;

const cli = cac("docuit").version(version).help();

cli.command("[root]", "start dev server")
    .alias("dev")
    .action(async (root: string) => {
        let base = root ? path.resolve(root) : process.cwd();
        const server = await createDevServer(base);
        await server.listen();
        server.printUrls()
    });

cli.command("build [root]", "build for production")
    .action(async (root: string) => {
        try {
            const base = path.resolve(root);
            await build(base);
        } catch(e) {
            console.warn(e);
        }
    });

cli.parse();
