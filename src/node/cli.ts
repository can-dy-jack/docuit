import { cac } from 'cac';
import { build } from './build';
import path from 'path';
import { resolveConfig } from './config';

const version = require('../../package.json').version;

const cli = cac('docuit').version(version).help();

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
  .command('build [root]', 'build in production')
  .action(async (root: string) => {
    try {
      root = path.resolve(root);
      // console.log('root:', root);
      const config = await resolveConfig(root, 'build', 'production');
      console.log('resolveConfig成功:', config);
      await build(root, config);
    } catch (e) {
      console.log('build出错：', e);
    }
  });
cli.parse();
