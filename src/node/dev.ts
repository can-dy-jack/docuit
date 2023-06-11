import { createServer } from 'vite';
import { pluginIndexHtml } from './plugin-docuit/inndexHtml';
import pluginReact from '@vitejs/plugin-react';
import { PACKAGE_ROOT } from './constants';

export function createDevServer(root = process.cwd()) {
  return createServer({
    root,
    server: {
      fs: {
        allow: [PACKAGE_ROOT]
      }
    },
    plugins: [pluginIndexHtml(), pluginReact()]
  });
}
