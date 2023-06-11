import { createServer } from "vite";
import { pluginIndexHtml } from "./plugin-docuit/inndexHtml";
import pluginReact from "@vitejs/plugin-react";

export function createDevServer(root = process.cwd()) {
    return createServer({
        root,
        server: {
            port: 81,
        },
        plugins: [pluginIndexHtml(), pluginReact()]
    });
}
