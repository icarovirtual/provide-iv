import { getRenderer } from '/Users/icaro/Code/codedoc/provide-iv/.codedoc/node_modules/@codedoc/core/dist/es6/transport/renderer.js';
import { initJssCs } from '/Users/icaro/Code/codedoc/provide-iv/.codedoc/node_modules/@codedoc/core/dist/es6/transport/setup-jss.js';initJssCs();
import { installTheme } from '/Users/icaro/Code/codedoc/provide-iv/.codedoc/content/theme.ts';installTheme();
import { codeSelection } from '/Users/icaro/Code/codedoc/provide-iv/.codedoc/node_modules/@codedoc/core/dist/es6/components/code/selection.js';codeSelection();
import { sameLineLengthInCodes } from '/Users/icaro/Code/codedoc/provide-iv/.codedoc/node_modules/@codedoc/core/dist/es6/components/code/same-line-length.js';sameLineLengthInCodes();
import { initHintBox } from '/Users/icaro/Code/codedoc/provide-iv/.codedoc/node_modules/@codedoc/core/dist/es6/components/code/line-hint/index.js';initHintBox();
import { initCodeLineRef } from '/Users/icaro/Code/codedoc/provide-iv/.codedoc/node_modules/@codedoc/core/dist/es6/components/code/line-ref/index.js';initCodeLineRef();
import { initSmartCopy } from '/Users/icaro/Code/codedoc/provide-iv/.codedoc/node_modules/@codedoc/core/dist/es6/components/code/smart-copy.js';initSmartCopy();
import { copyHeadings } from '/Users/icaro/Code/codedoc/provide-iv/.codedoc/node_modules/@codedoc/core/dist/es6/components/heading/copy-headings.js';copyHeadings();
import { contentNavHighlight } from '/Users/icaro/Code/codedoc/provide-iv/.codedoc/node_modules/@codedoc/core/dist/es6/components/page/contentnav/highlight.js';contentNavHighlight();
import { loadDeferredIFrames } from '/Users/icaro/Code/codedoc/provide-iv/.codedoc/node_modules/@codedoc/core/dist/es6/transport/deferred-iframe.js';loadDeferredIFrames();
import { smoothLoading } from '/Users/icaro/Code/codedoc/provide-iv/.codedoc/node_modules/@codedoc/core/dist/es6/transport/smooth-loading.js';smoothLoading();
import { tocHighlight } from '/Users/icaro/Code/codedoc/provide-iv/.codedoc/node_modules/@codedoc/core/dist/es6/components/page/toc/toc-highlight.js';tocHighlight();
import { postNavSearch } from '/Users/icaro/Code/codedoc/provide-iv/.codedoc/node_modules/@codedoc/core/dist/es6/components/page/toc/search/post-nav/index.js';postNavSearch();
import { zoomOnFormula } from '/Users/icaro/Code/codedoc/provide-iv/.codedoc/node_modules/@codedoc/core/dist/es6/components/formula/zoom-on-formula.js';zoomOnFormula();
import { reloadOnChange } from '/Users/icaro/Code/codedoc/provide-iv/.codedoc/node_modules/@codedoc/core/dist/es6/serve/reload.js';reloadOnChange();
import { ToCPrevNext } from '/Users/icaro/Code/codedoc/provide-iv/.codedoc/node_modules/@codedoc/core/dist/es6/components/page/toc/prevnext/index.js';
import { CollapseControl } from '/Users/icaro/Code/codedoc/provide-iv/.codedoc/node_modules/@codedoc/core/dist/es6/components/collapse/collapse-control.js';
import { GithubSearch } from '/Users/icaro/Code/codedoc/provide-iv/.codedoc/node_modules/@codedoc/core/dist/es6/components/misc/github/search.js';
import { ToCToggle } from '/Users/icaro/Code/codedoc/provide-iv/.codedoc/node_modules/@codedoc/core/dist/es6/components/page/toc/toggle/index.js';
import { DarkModeSwitch } from '/Users/icaro/Code/codedoc/provide-iv/.codedoc/node_modules/@codedoc/core/dist/es6/components/darkmode/index.js';
import { ConfigTransport } from '/Users/icaro/Code/codedoc/provide-iv/.codedoc/node_modules/@codedoc/core/dist/es6/transport/config.js';

const components = {
  '+K/jC5RAOACZ8YQij4AHKg==': ToCPrevNext,
  '32YRLusQS2BM/8al4+GfwA==': CollapseControl,
  'gC6f69UMw7EniJ6x4ADGfw==': GithubSearch,
  '0dEGb0wdKhc4kZuaaEPz3Q==': ToCToggle,
  '3p8ugGcl9k30E3YK+5HE0g==': DarkModeSwitch,
  'WX2jsp4/ahEkQp/BUwnfCw==': ConfigTransport
};

const renderer = getRenderer();
const ogtransport = window.__sdh_transport;
window.__sdh_transport = function(id, hash, props) {
  if (hash in components) {
    const target = document.getElementById(id);
    renderer.render(renderer.create(components[hash], props)).after(target);
    target.remove();
  }
  else if (ogtransport) ogtransport(id, hash, props);
}
