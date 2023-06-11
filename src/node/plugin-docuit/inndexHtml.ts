import { readFile } from 'fs/promises';
import { Plugin } from 'vite';
import { DEFAULT_HTML_PATH, CLIENT_ENTRY_PATH } from '../constants/index.js';

export function pluginIndexHtml(): Plugin {
  return {
    name: 'docuit:index-html',
    apply: 'serve',
    transformIndexHtml(html) {
      return {
        html,
        tags: [
          {
            tag: 'script',
            attrs: {
              type: 'module',
              src: `/@fs/${CLIENT_ENTRY_PATH}`
            },
            injectTo: 'body'
          }
        ]
      };
    },
    configureServer(server) {
      return () => {
        server.middlewares.use(async (req, res, next) => {
          let html = await readFile(DEFAULT_HTML_PATH, 'utf-8');

          try {
            html = await server.transformIndexHtml(
              req.url!,
              html,
              req.originalUrl
            );
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/html');
            res.end(html);
          } catch (e) {
            // res.statusCode = 500;
            // res.end(e);
            return next(e);
          }
        });
      };
    }
  };
}
