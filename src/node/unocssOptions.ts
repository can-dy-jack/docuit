import { VitePluginConfig } from 'unocss/vite';
import { presetAttributify, presetWind, presetIcons } from 'unocss';

const options: VitePluginConfig = {
  presets: [presetAttributify(), presetWind({}), presetIcons()],
  rules: [
    [
      /^divider-(\w+)$/,
      ([, w]) => ({
        [`border-${w}`]: '1px solid var(--docuit-c-divider-light)'
      })
    ],
    [
      "menu-item-before",
      {
        "margin-right": "12px",
        "margin-left": "12px",
        width: "1px",
        height: "24px",
        "background-color": "var(--docuit-c-divider-light)",
        content: '" "'
      }
    ]
  ],
  shortcuts: {
    'flex-center': 'flex justify-center items-center'
  },
  theme: {
    colors: {
      brandLight: 'var(--docuit-c-brand-light)',
      brandDark: 'var(--docuit-c-brand-dark)',
      brand: 'var(--docuit-c-brand)',
      text: {
        1: 'var(--docuit-c-text-1)',
        2: 'var(--docuit-c-text-2)',
        3: 'var(--docuit-c-text-3)',
        4: 'var(--docuit-c-text-4)'
      },
      divider: {
        default: 'var(--docuit-c-divider)',
        light: 'var(--docuit-c-divider-light)',
        dark: 'var(--docuit-c-divider-dark)'
      },
      gray: {
        light: {
          1: 'var(--docuit-c-gray-light-1)',
          2: 'var(--docuit-c-gray-light-2)',
          3: 'var(--docuit-c-gray-light-3)',
          4: 'var(--docuit-c-gray-light-4)'
        }
      },
      bg: {
        default: 'var(--docuit-c-bg)',
        soft: 'var(--docuit-c-bg-soft)',
        mute: 'var(--docuit-c-bg-mute)'
      }
    }
  }
};

export default options;
