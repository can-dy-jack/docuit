import { InlineConfig, build as viteBuild } from 'vite';
import { CLIENT_ENTRY_PATH, SERVER_ENTRY_PATH } from "./constants";
import pluginReact from '@vitejs/plugin-react';
import { join } from 'path';
import { renderPage } from './renderPage';
import type { RollupOutput } from "rollup";

export async function build(root: string = process.cwd()) {
  const [clientBundle, serverBundle] = await bundle(root);
  // 引入 ssr 入口模块
  const serverEntryPath = join(root, ".temp", "ssr-entry.js");
  const { render } = require(serverEntryPath);
  await renderPage(render, root, clientBundle);
}

export async function bundle(root: string) {
  const resolveViteConfig = (isServer: boolean): InlineConfig => ({
    mode: "production",
    root,
    plugins: [pluginReact()],
    build: {
      ssr: isServer,
      outDir: isServer ? ".temp" : "build",
      rollupOptions: {
        input: isServer ? SERVER_ENTRY_PATH : CLIENT_ENTRY_PATH,
        output: {
          format: isServer ? "cjs" : "esm",
        },
      },
    },
  });

  console.log(`Building client + server bundles...`);
  
  try {
    const [clientBundle, serverBundle] = await Promise.all([
      // client build
      viteBuild(resolveViteConfig(false)),
      // server build
      viteBuild(resolveViteConfig(true)),
    ]);
    return [clientBundle, serverBundle] as [RollupOutput, RollupOutput];
  } catch (e) {
    console.log(e);
  }
}
