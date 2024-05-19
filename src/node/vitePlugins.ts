import { pluginIndexHtml } from './plugin-docuit/indexHtml';
import pluginReact from '@vitejs/plugin-react';
import { pluginConfig } from './plugin-docuit/config';
import { pluginRoutes } from './plugin-routes';
import { SiteConfig } from 'shared/types';

export async function createVitePlugins(
  config: SiteConfig,
  restartServer?: () => Promise<void>
) {
  return [
    pluginIndexHtml(),
    pluginReact({
      jsxRuntime: 'automatic'
    }),
    pluginConfig(config, restartServer),
    
    pluginRoutes({
      root: config.root
    }),
  ];
}
