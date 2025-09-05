
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'C:/Program Files/Git/portofolio-asraf/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/Program%20Files/Git/portofolio-asraf"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 5039, hash: 'e4252f52c4ebae8c6681934de2a46f3303df1db873ebaaa6c7a671c268e03d73', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1155, hash: 'd5a003146c605248340a1d1b878fa9d14a64ae9347ebeecd008b9142c73f83fc', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-NNY77U4R.css': {size: 231628, hash: 'OlqGS/IEcKQ', text: () => import('./assets-chunks/styles-NNY77U4R_css.mjs').then(m => m.default)}
  },
};
