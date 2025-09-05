
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 5002, hash: 'd65827b598367aaa5244d3170853e5ffc4177417c8452c400cd01187116a6793', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1118, hash: 'e00070b9980fecceaab858efec84874017b3f15b64ac0deb8de8ea8e3ae03cd2', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 34475, hash: '7d59197479d2d7ac3ef3378b3a2c8ab9b211f75db9b7175f4513dd31d0566cd6', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-NNY77U4R.css': {size: 231628, hash: 'OlqGS/IEcKQ', text: () => import('./assets-chunks/styles-NNY77U4R_css.mjs').then(m => m.default)}
  },
};
