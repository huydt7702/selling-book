// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"ikkB3":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "9559a66ea5535e9f";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets, assetsToDispose, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets); // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                } // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
             // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle, id) {
    // Execute the module.
    bundle(id); // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            }); // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"1E7ZB":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _runtime = require("regenerator-runtime/runtime");
var _firebaseConstants = require("../../app/constants/FirebaseConstants");
var _firebaseConstantsDefault = parcelHelpers.interopDefault(_firebaseConstants);
var _productService = require("../../app/services/ProductService");
var _productServiceDefault = parcelHelpers.interopDefault(_productService);
var _categoryService = require("../../app/services/CategoryService");
var _categoryServiceDefault = parcelHelpers.interopDefault(_categoryService);
var _urlHelper = require("../../app/helpers/UrlHelper");
var _urlHelperDefault = parcelHelpers.interopDefault(_urlHelper);
var _363488Final1511Jpg = require("../images1/banner/363488_final1511.jpg");
var _363488Final1511JpgDefault = parcelHelpers.interopDefault(_363488Final1511Jpg);
var _goldDongA600X350Jpg = require("../images1/banner/Gold_DongA_600X350.jpg");
var _goldDongA600X350JpgDefault = parcelHelpers.interopDefault(_goldDongA600X350Jpg);
var _megabookGlod600X350Png = require("../images1/banner/megabook-glod600X350.png");
var _megabookGlod600X350PngDefault = parcelHelpers.interopDefault(_megabookGlod600X350Png);
var _36310705Jpg = require("../images1/banner/363107_05.jpg");
var _36310705JpgDefault = parcelHelpers.interopDefault(_36310705Jpg);
var _36310406Jpg = require("../images1/banner/363104_06.jpg");
var _36310406JpgDefault = parcelHelpers.interopDefault(_36310406Jpg);
var _sliderRightPng = require("../images1/banner/slider-right.png");
var _sliderRightPngDefault = parcelHelpers.interopDefault(_sliderRightPng);
//Get the button
var mybutton = document.getElementById("myBtn-scroll");
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {
    scrollFunction();
};
function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) mybutton.style.display = "block";
    else mybutton.style.display = "none";
}
// -------------------------------------
$(document).ready(function() {
    const productService = new (0, _productServiceDefault.default)((0, _firebaseConstantsDefault.default).RealTimeDB, "Token");
    const amountOrdersElement = $(".header__notice")[0];
    const getAmountOrders = ()=>{
        const listProductInfo = JSON.parse(localStorage.getItem("cart")) ?? [];
        amountOrdersElement.innerText = listProductInfo.length;
    };
    const getAllProducts = async ()=>{
        try {
            const data = await productService.findAllProducts();
            const listProducts = $(".row.product__panel");
            const listBestseller = $(".list-bestseller");
            let list = "";
            let listMostSeller = "";
            for(const key in data){
                const element = data[key];
                const { image , name , price  } = element;
                list += `
            <div class="product__panel-item col-lg-3 col-md-4 col-sm-6">
              <div class="product__panel-item-wrap">
                  <div class="product__panel-img-wrap">
                      <img height='100%' src=${image} alt=${name} class="product__panel-img">
                  </div>
                  <h3 class="product__panel-heading">
                      <a href="product.html?id=${key}" class="product__panel-link">${name}</a>
                  </h3>
                  <div class="product__panel-rate-wrap">
                      <i class="fas fa-star product__panel-rate"></i>
                      <i class="fas fa-star product__panel-rate"></i>
                      <i class="fas fa-star product__panel-rate"></i>
                      <i class="fas fa-star product__panel-rate"></i>
                      <i class="fas fa-star product__panel-rate"></i>
                  </div>

                  <div class="product__panel-price">
                      <span class="product__panel-price-old">
                        20.000đ
                      </span>
                      <span class="product__panel-price-current">
                          ${price}
                      </span>
                  </div>

                  <div class="product__panel-price-sale-off">
                    -11%
                  </div>
              </div>
            </div>
        `;
                listMostSeller += `
            <div class="bestselling__product col-lg-4 col-md-6 col-sm-12">
            <div class="bestselling__product-img-box" style="display: flex; justify-content: center;">
                <img src=${image} style="height: 100%;" alt="Biểu tượng thất truyền" class="bestselling__product-img">
            </div>
            <div class="bestselling__product-text">
                <h3 class="bestselling__product-title">
                    <a href="#" class="bestselling__product-link">${name}</a>
                </h3>

                <div class="bestselling__product-rate-wrap">
                    <i class="fas fa-star bestselling__product-rate"></i>
                    <i class="fas fa-star bestselling__product-rate"></i>
                    <i class="fas fa-star bestselling__product-rate"></i>
                    <i class="fas fa-star bestselling__product-rate"></i>
                    <i class="fas fa-star bestselling__product-rate"></i>
                </div>

                <span class="bestselling__product-price">
                    ${price}
                </span>

                <div class="bestselling__product-btn-wrap">
                    <a href="product.html?id=${key}" class="bestselling__product-btn" style="color: #fff;">Xem hàng</a>
                </div>
            </div>
        </div>
        `;
            }
            listProducts.append(list);
            listBestseller.append(listMostSeller);
        } catch (error) {
            console.log(error);
        }
    };
    getAllProducts();
    getAmountOrders();
    // Handle show products by category
    const url = location.href;
    const urlHelper = new (0, _urlHelperDefault.default)();
    const cateId = urlHelper.readParam(url, "cateId");
    const categoryService = new (0, _categoryServiceDefault.default)((0, _firebaseConstantsDefault.default).RealTimeDB, "Token");
    const renderCategories = async ()=>{
        try {
            const data = await categoryService.findAllCategories();
            const listCategories = $(".menu__list");
            let list = `
      <li class="menu__item">
        <input type="text" />
      </li>
      `;
            for(const key in data){
                const element = data[key];
                const { name  } = element;
                list += `
          <li class="menu__item ${key === cateId ? "menu__item--active" : ""}">
            <a 
              href="index.html?cateId=${key}" 
              class="menu__link" style="display: block;text-decoration: none;color: #000;font-size: 14px;padding: 10px;"
            >${name}
            </a>
          </li>
          `;
            }
            listCategories.append(list);
        } catch (error) {
            console.log(error);
        }
    };
    renderCategories();
    const renderProductsByCategory = async ()=>{
        const listProductsByCategoryBlock = $(".listProductsByCategory")[0];
        const allProducts = await productService.findAllProducts();
        let listProductsByCategory = "";
        for(let key in allProducts){
            const product = allProducts[key];
            if (product.categoryId === cateId) listProductsByCategory += `
        <div class="product__panel-item col-lg-3 col-md-4 col-sm-6">
        <div class="product__panel-item-wrap">
            <div class="product__panel-img-wrap">
                <img height='100%' src=${product.image} alt=${product.name} class="product__panel-img">
            </div>
            <h3 class="product__panel-heading">
                <a href="product.html?id=${key}" class="product__panel-link">${product.name}</a>
            </h3>
            <div class="product__panel-rate-wrap">
                <i class="fas fa-star product__panel-rate"></i>
                <i class="fas fa-star product__panel-rate"></i>
                <i class="fas fa-star product__panel-rate"></i>
                <i class="fas fa-star product__panel-rate"></i>
                <i class="fas fa-star product__panel-rate"></i>
            </div>

            <div class="product__panel-price">
                <span class="product__panel-price-old">
                  20.000đ
                </span>
                <span class="product__panel-price-current">
                    ${product.price}
                </span>
            </div>

            <div class="product__panel-price-sale-off">
              -11%
            </div>
        </div>
      </div>
        `;
        }
        if (listProductsByCategory === "") listProductsByCategory = `
      <div class="row">
      <div class="slide__left col-lg-8 col-md-0 col-sm-0">
          <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel" data-interval="3000">
              <!-- <ol class="carousel-indicators">
                  <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                  <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                  <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
              </ol> -->
              <div class="carousel-inner">
                  <div class="carousel-item active">
                      <img src=${0, _363488Final1511JpgDefault.default} class="d-block w-100" alt="banner1">
                  </div>
                  <div class="carousel-item">
                    <img src=${0, _goldDongA600X350JpgDefault.default} class="d-block w-100" alt="banner2">
                  </div>
                  <div class="carousel-item">
                    <img src=${0, _megabookGlod600X350PngDefault.default} class="d-block w-100" alt="banner3">
                  </div>
              </div>
              <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="sr-only">Previous</span>
              </a>
              <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="sr-only">Next</span>
              </a>
          </div>
          <div class="slide__left-bottom">
              <div class="slide__left-botom-one">
                  <img src=${0, _36310705JpgDefault.default} class="slide__left-bottom-one-img">
              </div>
              <div class="slide__left-bottom-two">
                  <img src=${0, _36310406JpgDefault.default} class="slide__left-bottom-tow-img">
              </div>
          </div>
      </div>

      <div class="slide__right col-lg-4 col-md-0 col-sm-0">
          <img src=${0, _sliderRightPngDefault.default} class="slide__right-img">
      </div>
  </div>
      `;
        listProductsByCategoryBlock.innerHTML = listProductsByCategory;
    };
    renderProductsByCategory();
});

},{"regenerator-runtime/runtime":"dXNgZ","../../app/constants/FirebaseConstants":"ar8Y5","../../app/services/ProductService":"63Op7","../../app/services/CategoryService":"1bIMI","../../app/helpers/UrlHelper":"9C87C","../images1/banner/363488_final1511.jpg":"cLcx1","../images1/banner/Gold_DongA_600X350.jpg":"gZLqH","../images1/banner/megabook-glod600X350.png":"Utgcp","../images1/banner/363107_05.jpg":"Ifv2n","../images1/banner/363104_06.jpg":"7MYU3","../images1/banner/slider-right.png":"8UKFy","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"63Op7":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _axios = require("axios");
var _axiosDefault = parcelHelpers.interopDefault(_axios);
class ProductService {
    constructor(realtimeDb, accessToken){
        this.collectionName = "products.json";
        this.realtimeDb = realtimeDb;
        this.accessToken = accessToken;
    }
    insertProduct = async (entity)=>{
        const response = await (0, _axiosDefault.default).post(this.realtimeDb + this.collectionName, entity);
        const insertedId = await response.data.name;
        return insertedId;
    };
    updateProduct = async (id, entity)=>{
        const response = await (0, _axiosDefault.default).put(`${this.realtimeDb}products/${id}.json`, entity);
        return response.data;
    };
    deleteProduct = async (id)=>{
        const response = await (0, _axiosDefault.default).delete(`${this.realtimeDb}products/${id}.json`);
        return response.data;
    };
    findById = async (id)=>{
        const response = await (0, _axiosDefault.default).get(`${this.realtimeDb}products/${id}.json`);
        return response.data;
    };
    findAllProducts = async (entity)=>{
        const response = await (0, _axiosDefault.default).get(this.realtimeDb + this.collectionName);
        return response.data;
    };
}
exports.default = ProductService;

},{"axios":"jo6P5","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1bIMI":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _axios = require("axios");
var _axiosDefault = parcelHelpers.interopDefault(_axios);
class CategoryService {
    constructor(realtimeDb, accessToken){
        this.collectionName = "categories.json";
        this.realtimeDb = realtimeDb;
        this.accessToken = accessToken;
    }
    insertCategory = async (entity)=>{
        const response = await (0, _axiosDefault.default).post(this.realtimeDb + this.collectionName, entity);
        const insertedId = await response.data.name;
        return insertedId;
    };
    updateCategory = async (id, entity)=>{
        const response = await (0, _axiosDefault.default).put(`${this.realtimeDb}categories/${id}.json`, entity);
        return response.data;
    };
    deleteCategory = async (id)=>{
        const response = await (0, _axiosDefault.default).delete(`${this.realtimeDb}categories/${id}.json`);
        return response.data;
    };
    findById = async (id)=>{
        const response = await (0, _axiosDefault.default).get(`${this.realtimeDb}categories/${id}.json`);
        return response.data;
    };
    findAllCategories = async (entity)=>{
        const response = await (0, _axiosDefault.default).get(this.realtimeDb + this.collectionName);
        return response.data;
    };
}
exports.default = CategoryService;

},{"axios":"jo6P5","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9C87C":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class UrlHelper {
    readParamsFromUrl = (url)=>{
        const vars = [];
        const parts = url.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m, key, value) {
            vars[key] = value;
        });
        return vars;
    };
    readParam = (url, paramName)=>{
        const vars = this.readParamsFromUrl(url);
        return vars[paramName];
    };
}
exports.default = UrlHelper;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cLcx1":[function(require,module,exports) {
module.exports = require("29b754cfebf4b595").getBundleURL("cOZeh") + "363488_final1511.364dbaa0.jpg" + "?" + Date.now();

},{"29b754cfebf4b595":"lgJ39"}],"lgJ39":[function(require,module,exports) {
"use strict";
var bundleURL = {};
function getBundleURLCached(id) {
    var value = bundleURL[id];
    if (!value) {
        value = getBundleURL();
        bundleURL[id] = value;
    }
    return value;
}
function getBundleURL() {
    try {
        throw new Error();
    } catch (err) {
        var matches = ("" + err.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);
        if (matches) // The first two stack frames will be this function and getBundleURLCached.
        // Use the 3rd one, which will be a runtime in the original bundle.
        return getBaseURL(matches[2]);
    }
    return "/";
}
function getBaseURL(url) {
    return ("" + url).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/, "$1") + "/";
} // TODO: Replace uses with `new URL(url).origin` when ie11 is no longer supported.
function getOrigin(url) {
    var matches = ("" + url).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^/]+/);
    if (!matches) throw new Error("Origin not found");
    return matches[0];
}
exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
exports.getOrigin = getOrigin;

},{}],"gZLqH":[function(require,module,exports) {
module.exports = require("1250fb42ff642f56").getBundleURL("cOZeh") + "Gold_DongA_600X350.e53003df.jpg" + "?" + Date.now();

},{"1250fb42ff642f56":"lgJ39"}],"Utgcp":[function(require,module,exports) {
module.exports = require("ad9c5a089286f60f").getBundleURL("cOZeh") + "megabook-glod600X350.04ca1865.png" + "?" + Date.now();

},{"ad9c5a089286f60f":"lgJ39"}],"Ifv2n":[function(require,module,exports) {
module.exports = require("8c37522f9c91c941").getBundleURL("cOZeh") + "363107_05.a009d26a.jpg" + "?" + Date.now();

},{"8c37522f9c91c941":"lgJ39"}],"7MYU3":[function(require,module,exports) {
module.exports = require("25b6a162518cee88").getBundleURL("cOZeh") + "363104_06.72c55f73.jpg" + "?" + Date.now();

},{"25b6a162518cee88":"lgJ39"}],"8UKFy":[function(require,module,exports) {
module.exports = require("b66fa4c5cf2a56ce").getBundleURL("cOZeh") + "slider-right.865f5103.png" + "?" + Date.now();

},{"b66fa4c5cf2a56ce":"lgJ39"}]},["ikkB3","1E7ZB"], "1E7ZB", "parcelRequire5df1")

//# sourceMappingURL=index.a5535e9f.js.map
