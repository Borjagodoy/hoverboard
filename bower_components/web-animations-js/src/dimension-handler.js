!function(e,r){function n(e){function r(){var r=d.exec(e);o=r?r[0]:void 0}function n(){var e=Number(o);return r(),e}function t(){if("("!==o)return n();r();var e=a();return")"!==o?NaN:(r(),e)}function i(){for(var e=t();"*"===o||"/"===o;){var n=o;r();var i=t();"*"===n?e*=i:e/=i}return e}function a(){for(var e=i();"+"===o||"-"===o;){var n=o;r();var t=i();"+"===n?e+=t:e-=t}return e}var o,d=/([\+\-\w\.]+|[\(\)\*\/])/g;return r(),a()}function t(e,r){if("0"==(r=r.trim().toLowerCase())&&"px".search(e)>=0)return{px:0};if(/^[^(]*$|^calc/.test(r)){r=r.replace(/calc\(/g,"(");var t={};r=r.replace(e,function(e){return t[e]=null,"U"+e});for(var i="U("+e.source+")",a=r.replace(/[-+]?(\d*\.)?\d+([Ee][-+]?\d+)?/g,"N").replace(new RegExp("N"+i,"g"),"D").replace(/\s[+-]\s/g,"O").replace(/\s/g,""),o=[/N\*(D)/g,/(N|D)[*\/]N/g,/(N|D)O\1/g,/\((N|D)\)/g],d=0;d<o.length;)o[d].test(a)?(a=a.replace(o[d],"$1"),d=0):d++;if("D"==a){for(var g in t){var u=n(r.replace(new RegExp("U"+g,"g"),"").replace(new RegExp(i,"g"),"*0"));if(!isFinite(u))return;t[g]=u}return t}}}function i(e,r){return a(e,r,!0)}function a(r,n,t){var i,a=[];for(i in r)a.push(i);for(i in n)a.indexOf(i)<0&&a.push(i);return r=a.map(function(e){return r[e]||0}),n=a.map(function(e){return n[e]||0}),[r,n,function(r){var n=r.map(function(n,i){return 1==r.length&&t&&(n=Math.max(n,0)),e.numberToString(n)+a[i]}).join(" + ");return r.length>1?"calc("+n+")":n}]}var o="px|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc",d=t.bind(null,new RegExp(o,"g")),g=t.bind(null,new RegExp(o+"|%","g")),u=t.bind(null,/deg|rad|grad|turn/g);e.parseLength=d,e.parseLengthOrPercent=g,e.consumeLengthOrPercent=e.consumeParenthesised.bind(null,g),e.parseAngle=u,e.mergeDimensions=a;var s=e.consumeParenthesised.bind(null,d),c=e.consumeRepeated.bind(void 0,s,/^/),p=e.consumeRepeated.bind(void 0,c,/^,/);e.consumeSizePairList=p;var l=function(e){var r=p(e);if(r&&""==r[1])return r[0]},m=e.mergeNestedRepeated.bind(void 0,i," "),f=e.mergeNestedRepeated.bind(void 0,m,",");e.mergeNonNegativeSizePair=m,e.addPropertiesHandler(l,f,["background-size"]),e.addPropertiesHandler(g,i,["border-bottom-width","border-image-width","border-left-width","border-right-width","border-top-width","flex-basis","font-size","height","line-height","max-height","max-width","outline-width","width"]),e.addPropertiesHandler(g,a,["border-bottom-left-radius","border-bottom-right-radius","border-top-left-radius","border-top-right-radius","bottom","left","letter-spacing","margin-bottom","margin-left","margin-right","margin-top","min-height","min-width","outline-offset","padding-bottom","padding-left","padding-right","padding-top","perspective","right","shape-margin","stroke-dashoffset","text-indent","top","vertical-align","word-spacing"])}(webAnimations1,webAnimationsTesting);