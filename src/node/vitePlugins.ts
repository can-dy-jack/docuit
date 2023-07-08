import { pluginIndexHtml } from './plugin-docuit/indexHtml';
import pluginReact from '@vitejs/plugin-react';
import { pluginConfig } from './plugin-docuit/config';
import { pluginRoutes } from './plugin-routes';
import { SiteConfig } from 'shared/types';
import { pluginMdx } from './plugin-mdx';
import pluginUnocss from 'unocss/vite';
import unocssOptions from './unocssOptions';

export async function createVitePlugins(
  config: SiteConfig,
  restartServer?: () => Promise<void>,
  isSSR = false
) {
  return [
    pluginUnocss(unocssOptions),
    pluginIndexHtml(),
    pluginReact({
      jsxRuntime: 'automatic'
    }),
    pluginConfig(config, restartServer || (() => new Promise(() => void 0))),
    pluginRoutes({
      root: config.root,
      isSSR
    }),
    await pluginMdx()
  ];
}
