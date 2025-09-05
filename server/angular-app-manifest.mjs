
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/portofolio-asraf/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/portofolio-asraf"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 5019, hash: '62c3e6a40ed90bd757eccabf2d4d0f786fa407e4c10c86b216ed6a4f0791716a', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1135, hash: '201d11d019e9c796f5df8d425ac5bff8662e45b8ef8571cb43433b4df96038ad', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 34492, hash: 'bb00cebe2a27cf649fd51310cb53cf17696ccec2f9869c1ccb40e01e3e21eba1', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-NNY77U4R.css': {size: 231628, hash: 'OlqGS/IEcKQ', text: () => import('./assets-chunks/styles-NNY77U4R_css.mjs').then(m => m.default)}
  },
};
