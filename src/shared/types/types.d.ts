declare module 'ducuit:site-data' {
  import type { UserConfig } from 'shared/types';
  const siteData: UserConfig;
  export default siteData;
}
declare module '*.module.scss' {
  const classes: { [key: string]: string };
  export default classes;
}
