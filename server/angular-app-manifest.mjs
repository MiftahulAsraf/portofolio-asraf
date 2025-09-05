
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/porto-asraf/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/porto-asraf"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 5014, hash: '1cd551c3b65226e5570a21591f216d5c2c808d6474e38d7489ecac2bad88a31e', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1130, hash: '8d3ed6125c07184a4c0b6979010beefa6c6167677b89e4fea2950cf9eace8cb0', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 34487, hash: 'b4a0415c182bf05f4aa8f49ab7e6b6b718d6e9c5ffcc8f2375f42a218e48bcfd', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-NNY77U4R.css': {size: 231628, hash: 'OlqGS/IEcKQ', text: () => import('./assets-chunks/styles-NNY77U4R_css.mjs').then(m => m.default)}
  },
};
