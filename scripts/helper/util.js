window.debugLog=function(n){"use strict";"prod"!==window.ENV&&console.log.apply(console,arguments)},HOVERBOARD.Util=HOVERBOARD.Util||function(){"use strict";function n(){var n,e;return{promise:new Promise(function(t,r){n=t,e=r}),resolve:n,reject:e}}function e(){return/(iPhone|iPad|iPod)/gi.test(navigator.platform)}function t(){return/Android/gi.test(navigator.userAgent)}function r(){var n=navigator.userAgent;return/Safari/gi.test(n)&&!/Chrome/gi.test(n)}function o(){return/Trident/gi.test(navigator.userAgent)}function i(){return/Edge/i.test(navigator.userAgent)}function a(){return/Firefox/gi.test(navigator.userAgent)}function u(){return"ontouchstart"in window||window.DocumentTouch&&document instanceof DocumentTouch}function c(){var n=document.documentElement.querySelector('meta[name="theme-color"]');return n?n.content:null}function s(n){var e=document.documentElement.querySelector('meta[name="theme-color"]');e&&(e.content=n)}function g(n){if(window.location.search){var e=new RegExp(n+"=([^&]*)").exec(window.location.search.substring(1));if(e)return decodeURIComponent(e[1])}}function m(n,e){"?"===n[0]&&(n=n.substring(1));for(var t=n.split("&"),r=[],o=0;o<t.length;o++){t[o].split("=")[0]!==e&&r.push(t[o])}return n=r.join("&"),n.length>0&&(n="?"+n),n}function d(n,e,t){return n=m(n,e),""===n&&(n="?"),n.length>1&&(n+="&"),n+e+"="+encodeURIComponent(t)}var f=function(n){var e=n&&"string"==typeof n.stack?n.stack.slice(-500):"Unknown Location";HOVERBOARD.Analytics.trackError(e,n)},l=function(n,e){for(var t=Polymer.dom(n).path,r=null,o=0;o<t.length;++o){var i=t[o];if(i.localName===e){r=i;break}}return r},w=function(){if(window.chrome&&window.chrome.loadTimes){var n=window.chrome.loadTimes(),e=1e3*(n.firstPaintTime-n.startLoadTime);return Math.round(e)}if("performance"in window){var t=window.performance.timing;if(t&&t.msFirstPaint&&0!==t.navigationStart)return t.msFirstPaint-t.navigationStart}return null},v=function(){var n=navigator.userAgent.match(/Chrome\/([0-9]+)\./);return!!n&&parseInt(n[1],10)},h=function(){var n=navigator.userAgent.match(/Firefox\/([0-9]+)\./);return!!n&&parseInt(n[1],10)},p=function(n,e){n||(n={});for(var t in e)e.hasOwnProperty(t)&&(n[t]=e[t]);return n},E=function(){var n=window.navigator.languages?window.navigator.languages[0]:null;return n=n||window.navigator.language||window.navigator.browserLanguage||window.navigator.userLanguage,-1!==n.indexOf("-")&&(n=n.split("-")[0]),-1!==n.indexOf("_")&&(n=n.split("_")[0]),n};return{createDeferred:n,isFF:a,isIE:o,isEdge:i,isIOS:e,isAndroid:t,isSafari:r,isTouchScreen:u,getMetaThemeColor:c,setMetaThemeColor:s,getURLParameter:g,setSearchParam:d,removeSearchParam:m,supportsHTMLImports:"import"in document.createElement("link"),getFPIfSupported:w,getEventSender:l,reportError:f,getChromeVersion:v,getFirefoxVersion:h,extend:p,getUserLanguage:E}}();