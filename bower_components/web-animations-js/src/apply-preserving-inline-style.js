!function(t,e){function r(t,e){return!(!e.namespaceURI||-1==e.namespaceURI.indexOf("/svg"))&&(o in t||(t[o]=/Trident|MSIE|IEMobile|Edge|Android 4/i.test(t.navigator.userAgent)),t[o])}function s(t,e,r){r.enumerable=!0,r.configurable=!0,Object.defineProperty(t,e,r)}function n(t){WEB_ANIMATIONS_TESTING&&console.assert(!(t.style instanceof n),"Element must not already have an animated style attached."),this._element=t,this._surrogateStyle=document.createElementNS("http://www.w3.org/1999/xhtml","div").style,this._style=t.style,this._length=0,this._isAnimatedProperty={},this._updateSvgTransformAttr=r(window,t),this._savedTransformAttr=null;for(var e=0;e<this._style.length;e++){var s=this._style[e];this._surrogateStyle[s]=this._style[s]}this._updateIndices()}function i(t){if(!t._webAnimationsPatchedStyle){var e=new n(t);try{s(t,"style",{get:function(){return e}})}catch(e){t.style._set=function(e,r){t.style[e]=r},t.style._clear=function(e){t.style[e]=""}}t._webAnimationsPatchedStyle=t.style}}var o="_webAnimationsUpdateSvgTransformAttr",a={cssText:1,length:1,parentRule:1},l={getPropertyCSSValue:1,getPropertyPriority:1,getPropertyValue:1,item:1,removeProperty:1,setProperty:1},u={removeProperty:1,setProperty:1};n.prototype={get cssText(){return this._surrogateStyle.cssText},set cssText(t){for(var e={},r=0;r<this._surrogateStyle.length;r++)e[this._surrogateStyle[r]]=!0;this._surrogateStyle.cssText=t,this._updateIndices();for(var r=0;r<this._surrogateStyle.length;r++)e[this._surrogateStyle[r]]=!0;for(var s in e)this._isAnimatedProperty[s]||this._style.setProperty(s,this._surrogateStyle.getPropertyValue(s))},get length(){return this._surrogateStyle.length},get parentRule(){return this._style.parentRule},_updateIndices:function(){for(;this._length<this._surrogateStyle.length;)Object.defineProperty(this,this._length,{configurable:!0,enumerable:!1,get:function(t){return function(){return this._surrogateStyle[t]}}(this._length)}),this._length++;for(;this._length>this._surrogateStyle.length;)this._length--,Object.defineProperty(this,this._length,{configurable:!0,enumerable:!1,value:void 0})},_set:function(e,r){this._style[e]=r,this._isAnimatedProperty[e]=!0,this._updateSvgTransformAttr&&"transform"==t.unprefixedPropertyName(e)&&(null==this._savedTransformAttr&&(this._savedTransformAttr=this._element.getAttribute("transform")),this._element.setAttribute("transform",t.transformToSvgMatrix(r)))},_clear:function(e){this._style[e]=this._surrogateStyle[e],this._updateSvgTransformAttr&&"transform"==t.unprefixedPropertyName(e)&&(this._savedTransformAttr?this._element.setAttribute("transform",this._savedTransformAttr):this._element.removeAttribute("transform"),this._savedTransformAttr=null),delete this._isAnimatedProperty[e]}};for(var h in l)n.prototype[h]=function(t,e){return function(){var r=this._surrogateStyle[t].apply(this._surrogateStyle,arguments);return e&&(this._isAnimatedProperty[arguments[0]]||this._style[t].apply(this._style,arguments),this._updateIndices()),r}}(h,h in u);for(var y in document.documentElement.style)y in a||y in l||function(t){s(n.prototype,t,{get:function(){return this._surrogateStyle[t]},set:function(e){this._surrogateStyle[t]=e,this._updateIndices(),this._isAnimatedProperty[t]||(this._style[t]=e)}})}(y);t.apply=function(e,r,s){i(e),e.style._set(t.propertyName(r),s)},t.clear=function(e,r){e._webAnimationsPatchedStyle&&e.style._clear(t.propertyName(r))},WEB_ANIMATIONS_TESTING&&(e.ensureStyleIsPatched=i,e.updateSvgTransformAttr=r)}(webAnimations1,webAnimationsTesting);