
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://miftahulasraf.github.io/portofolio-asraf/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/portofolio-asraf"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 4939, hash: '63105db37b4cadccd81e0ffce836800a884ef1dd7060d4919a89763a92058ab0', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1055, hash: 'b0acedaacd032d9956c48c26250849b4cb6100e5b30942ef7c7ddf1a66807183', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 27983, hash: '8e77b3ac5fbbaa44bc0e2daef0b2cd87dcaf3de6604e94fe9973089adc61f78c', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-DZ6UBGXD.css': {size: 231612, hash: 'B2Fy9V+bfZo', text: () => import('./assets-chunks/styles-DZ6UBGXD_css.mjs').then(m => m.default)}
  },
};
