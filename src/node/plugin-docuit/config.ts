import { relative, join } from 'path';
import { Plugin } from 'vite';
import { SiteConfig } from '../../shared/types/index';
import { ViteDevServer } from 'vite';
import { PACKAGE_ROOT } from '../../node/constants';

const SITE_DATA_ID = 'docuit:site-data';

export function pluginConfig(
  config: SiteConfig,
  restartServer: () => Promise<void>
): Plugin {
  let server: ViteDevServer | null = null;
  return {
    name: 'dcuit:config',
    configureServer(s) {
      server = s;
    },
    resolveId(id) {
      if (id === SITE_DATA_ID) {
        return '\0' + SITE_DATA_ID;
      }
    },
    load(id) {
      if (id === '\0' + SITE_DATA_ID) {
        return `export default ${JSON.stringify(config.siteData)}`;
      }
    },
    async handleHotUpdate(ctx) {
      const customWatchedFiles = [config.configPath];
      // const customWatchedFiles = [config.configPath?.replaceAll('\\', '/')];
      const include = (id: string) =>
        customWatchedFiles.some((file) => id.includes(file || ''));

      if (include(ctx.file)) {
        console.log(
          `\n${relative(config.root, ctx.file)} changed, restarting server...`
        );
        // 重启 Dev Server
        await restartServer();
      }
    },
    // 插件钩子
    config() {
      return {
        root: PACKAGE_ROOT,
        resolve: {
          alias: {
            '@runtime': join(PACKAGE_ROOT, 'src', 'runtime', 'index.ts')
          }
        }
      };
    }
  };
}
