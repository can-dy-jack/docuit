import { build as viteBuild } from 'vite';
import { CLIENT_ENTRY_PATH, SERVER_ENTRY_PATH } from './constants';
import pluginReact from '@vitejs/plugin-react';
import { InlineConfig } from 'vite';
import path from 'path';
import fs from 'fs-extra';
import { pathToFileURL } from 'url';

export async function bundle(root: string) {
  const resolveViteConfig = (isServer: boolean): InlineConfig => ({
    mode: 'production',
    root,
    // 注意加上这个插件，自动注入 import React from 'react'，避免 React is not defined 的错误
    plugins: [pluginReact()],
    build: {
      ssr: isServer,
      outDir: isServer ? '.temp' : 'build',
      rollupOptions: {
        input: isServer ? SERVER_ENTRY_PATH : CLIENT_ENTRY_PATH,
        output: {
          format: isServer ? 'cjs' : 'esm'
        }
      }
    }
  });

  console.log('Building client + server bundles...');

  try {
    const [clientBundle, serverBundle] = await Promise.all([
      // client build
      viteBuild(resolveViteConfig(false)),
      // server build
      viteBuild(resolveViteConfig(true))
    ]);
    return [clientBundle, serverBundle];
  } catch (e) {
    console.warn(e);
    return []; // 解决报错
  }
}

export async function build(root: string = process.cwd()) {
  const [clientBundle, serverBundle] = await bundle(root);
  // 引入 ssr 入口模块
  const serverEntryPath = path.join(root, '.temp', 'ssr-entry.js');
  // const { render } = await import(serverEntryPath);

  const { render } = await import(pathToFileURL(serverEntryPath).toString());

  await renderPage(render, root, clientBundle);
}

export async function renderPage(
  render: () => string,
  root: string,
  clientBundle: any // RollupOutput
) {
  const clientChunk = clientBundle.output.find(
    (chunk: any) => chunk.type === 'chunk' && chunk.isEntry
  );
  console.log('Rendering page in server side...');
  const appHtml = render();
  const html = `
    <!DOCTYPE html>
    <html>
        <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width,initial-scale=1">
        <title>title</title>
        <meta name="description" content="xxx">
        </head>
        <body>
        <div id="docuit-app">${appHtml}</div>
        <script type="module" src="/${clientChunk?.fileName}"></script>
        </body>
    </html>`.trim();
  await fs.ensureDir(path.join(root, 'build'));
  await fs.writeFile(path.join(root, 'build/index.html'), html);
  await fs.remove(path.join(root, '.temp'));
}

const dynamicImport = new Function('m', 'return import(m)');
