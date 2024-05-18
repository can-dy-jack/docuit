import { createServer as createViteDevServer } from "vite";
import { pluginIndexHtml } from "./plugin-docuit/indexHtml";
import pluginReact from "@vitejs/plugin-react";
import { resolveConfig } from "./config";
import { pluginConfig } from './plugin-docuit/config';
import { PACKAGE_ROOT } from "./constants";

export async function createDevServer(root = process.cwd(), restartServer: () => Promise<void>) {
  const config = await resolveConfig(root, 'serve', 'development');

  return createViteDevServer({
    root,
    plugins: [
      pluginIndexHtml(),
      pluginReact(),
      pluginConfig(config, restartServer)
    ],
    server: {
      fs: {
        allow: [PACKAGE_ROOT]
      }
    }
  })
}
