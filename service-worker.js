/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren */
'use strict';





/* eslint-disable quotes, comma-spacing */
var PrecacheConfig = [["/bower_components/app-layout/app-box/app-box.html","ed2950f30d2cddf8ee269d6e4b537600"],["/bower_components/app-layout/app-drawer-layout/app-drawer-layout.html","79ea07d76fe9c4e5638ff7672bd192a1"],["/bower_components/app-layout/app-drawer/app-drawer.html","67dceb205196ca40ccb25a743a17934c"],["/bower_components/app-layout/app-grid/app-grid-style.html","be832c2882cf7fde0791f63bb0c464c6"],["/bower_components/app-layout/app-header-layout/app-header-layout.html","0eb63600f2213fec1e8c465606fc674a"],["/bower_components/app-layout/app-header/app-header.html","fed4200da07712004d3246cd9210ff2b"],["/bower_components/app-layout/app-layout.html","8c1748893c5a70c63a6cf83cc85fad1f"],["/bower_components/app-layout/app-scroll-effects/app-scroll-effects-behavior.html","e72d2053c9d6d462083e5a3c47279f2c"],["/bower_components/app-layout/app-scroll-effects/effects/blend-background.html","4723ce7f6429640a812ad866ddddb719"],["/bower_components/app-layout/app-scroll-effects/effects/parallax-background.html","391d025dcffee3f042c9d2bdd83be377"],["/bower_components/app-layout/app-scroll-effects/effects/waterfall.html","6cbd757de769cd5af213aaebb8780745"],["/bower_components/app-layout/app-scrollpos-control/app-scrollpos-control.html","bc1ca312eb9192253e0c8a2a267eb45e"],["/bower_components/app-layout/app-toolbar/app-toolbar.html","eff35dece1ab70dd02fe4254c2459ffe"],["/bower_components/app-layout/helpers/helpers.html","6a9eeb74102bb1e3ba297c47c441f869"],["/bower_components/app-localize-behavior/app-localize-behavior.html","9f3c59ea36dcb0bfb560dd6adf3d1372"],["/bower_components/app-route/app-location.html","0c082f44abb664591f5b99e57a3855e6"],["/bower_components/app-route/app-route-converter-behavior.html","3b85a02b434cbccdcb87396be3554258"],["/bower_components/app-route/app-route.html","f3550c2eff5c339841d95e47c26dfba6"],["/bower_components/font-roboto/roboto.html","01b36ac4d07cf779104a1cdbd1fac3bc"],["/bower_components/google-apis/google-maps-api.html","ffc39026137fb50797ebfc9c7c8cf562"],["/bower_components/google-apis/google-youtube-api.html","95c7667f30f21ec613a3ffd1f716832e"],["/bower_components/google-map/google-map-marker.html","ca5a1c5eb9de7974c926bcede0a6e9ae"],["/bower_components/google-map/google-map.html","724afe8eef96bc8068b66c6ffb614a7f"],["/bower_components/google-youtube/google-youtube.html","9f1e2b89fe10df946189c510455d532a"],["/bower_components/intl-messageformat/dist/intl-messageformat.min.js","b3c4eb1e2f75f393d6feb80220e03b1b"],["/bower_components/iron-a11y-announcer/iron-a11y-announcer.html","7fa51a3de8ea9987c430344fee81b55c"],["/bower_components/iron-a11y-keys-behavior/iron-a11y-keys-behavior.html","9b51ca6689770fc9c7efb27129b7c5d7"],["/bower_components/iron-ajax/iron-ajax.html","6fe26e77115b2757c9db65a71153509c"],["/bower_components/iron-ajax/iron-request.html","1881ad6ae9bf637ce49ad766bb17701a"],["/bower_components/iron-behaviors/iron-button-state.html","19d308128b6a339b7125c28e142dd04b"],["/bower_components/iron-behaviors/iron-control-state.html","1c12ee539b1dbbd0957ae26b3549cc13"],["/bower_components/iron-checked-element-behavior/iron-checked-element-behavior.html","6fd1055c2c04382401dc910a0db569c6"],["/bower_components/iron-dropdown/iron-dropdown-scroll-manager.html","ef2165f4e5fad0fda7f73ec0f2b4063a"],["/bower_components/iron-dropdown/iron-dropdown.html","0a037474641d374c3cf937136a54ca80"],["/bower_components/iron-fit-behavior/iron-fit-behavior.html","e048e061e5752630ff76e4597db84d22"],["/bower_components/iron-flex-layout/iron-flex-layout.html","5c3b9ee56ba66cb2a2e9c03c0990375b"],["/bower_components/iron-form-element-behavior/iron-form-element-behavior.html","a64177311979fc6a6aae454cb85ea2be"],["/bower_components/iron-icon/iron-icon.html","f9379c380aced4b3eca0fd118c3b06ee"],["/bower_components/iron-iconset-svg/iron-iconset-svg.html","62a95d01f3502a0f1c21230b96ecd038"],["/bower_components/iron-image/iron-image.html","7a4328f2e0a5499ef10d93f1b41dd969"],["/bower_components/iron-input/iron-input.html","67f0e89aedb2f7c742d17d3bf83d5eb5"],["/bower_components/iron-jsonp-library/iron-jsonp-library.html","03056d5faf12fc51861e6d1fc6d983b4"],["/bower_components/iron-localstorage/iron-localstorage.html","acb3df7483568a40df937ed2eb161c3c"],["/bower_components/iron-location/iron-location.html","8a4f71232319aed73115b2e356c19fde"],["/bower_components/iron-location/iron-query-params.html","32a96be5536aea89a925d16146cb7015"],["/bower_components/iron-media-query/iron-media-query.html","7436f9608ebd2d31e4b346921651f84b"],["/bower_components/iron-menu-behavior/iron-menu-behavior.html","094bb8b9546dcf49b5a3e5d2572c1b53"],["/bower_components/iron-menu-behavior/iron-menubar-behavior.html","a0cc6674fc6d9d7ba0b68ff680b4e56b"],["/bower_components/iron-meta/iron-meta.html","dd4ef14e09c5771e70292d70963f6718"],["/bower_components/iron-overlay-behavior/iron-focusables-helper.html","6f9ea0b495a22d3c4c51773a1b94e19e"],["/bower_components/iron-overlay-behavior/iron-overlay-backdrop.html","77e57b30cac5c360d4a21f4fae2a6c33"],["/bower_components/iron-overlay-behavior/iron-overlay-behavior.html","b0f11806f873e049d1a79fd2ed8ba4cd"],["/bower_components/iron-overlay-behavior/iron-overlay-manager.html","ba435264a6aaeda615475a29ee5965fc"],["/bower_components/iron-pages/iron-pages.html","08c5b7aacd9ef5fdb5ae583b47bd2df5"],["/bower_components/iron-resizable-behavior/iron-resizable-behavior.html","0ba4675c3ec856c26912022dd5b05036"],["/bower_components/iron-scroll-target-behavior/iron-scroll-target-behavior.html","d0eb39331820f58f3cdcebaa0eed0209"],["/bower_components/iron-selector/iron-multi-selectable.html","91eeea310058c0a1b837b685922c03a5"],["/bower_components/iron-selector/iron-selectable.html","65b04f3f5f1b551d91a82b36f916f6b6"],["/bower_components/iron-selector/iron-selection.html","83545b7d1eae4020594969e6b9790b65"],["/bower_components/iron-selector/iron-selector.html","4d2657550768bec0788eba5190cddc66"],["/bower_components/iron-validatable-behavior/iron-validatable-behavior.html","02bf0434cc1a0d09e18413dea91dcea1"],["/bower_components/marked-element/marked-element.html","6c5a6fe370fffbc1bf4ed1ab7c3681a8"],["/bower_components/marked-element/marked-import.html","935603373e4046660d3944abb73939f1"],["/bower_components/marked/lib/marked.js","28f2ad14b66213781998ea2ede542d63"],["/bower_components/neon-animation/animations/cascaded-animation.html","3a5a8c22afe014a904557b66938c44ba"],["/bower_components/neon-animation/animations/fade-in-animation.html","b814c818dbcffe2bb50563e1406497df"],["/bower_components/neon-animation/animations/fade-out-animation.html","44988226230af0e6d92f0988fc8688e2"],["/bower_components/neon-animation/animations/hero-animation.html","fe704e523f555b2ced65da035f9f3a01"],["/bower_components/neon-animation/animations/opaque-animation.html","8e2f63bbc648796f3ed96834a5553d07"],["/bower_components/neon-animation/animations/reverse-ripple-animation.html","1e08f758cb172f8fb19fabffc163a180"],["/bower_components/neon-animation/animations/ripple-animation.html","4d33252f387c84d0702efaaf510990b0"],["/bower_components/neon-animation/animations/scale-down-animation.html","e9cedffa151b388200cb2a610b2252fc"],["/bower_components/neon-animation/animations/scale-up-animation.html","20059304b9b7e9377379ad75110ef2fc"],["/bower_components/neon-animation/animations/slide-down-animation.html","31286bfe0b2cb6f28ef5e1f9d181f641"],["/bower_components/neon-animation/animations/slide-from-bottom-animation.html","12eea18013bf5b89c642fde725469a62"],["/bower_components/neon-animation/animations/slide-from-left-animation.html","cb18058340412077b0b0a8a7228a79a6"],["/bower_components/neon-animation/animations/slide-from-right-animation.html","79f28e3d4580cef016e6ae8c63384e98"],["/bower_components/neon-animation/animations/slide-from-top-animation.html","565391366846573f1725585d15b9baad"],["/bower_components/neon-animation/animations/slide-left-animation.html","a44c677c010daf7872b77f53bcd86e58"],["/bower_components/neon-animation/animations/slide-right-animation.html","b9908b67414ba0dfc7442eb1207d05fc"],["/bower_components/neon-animation/animations/slide-up-animation.html","bee63970c6ffc2706419533c9b2bd65e"],["/bower_components/neon-animation/animations/transform-animation.html","c64feaff2d50eb6f6633c644063c6aa3"],["/bower_components/neon-animation/neon-animatable-behavior.html","270f52231303cae4cb8e3fadb5a805c1"],["/bower_components/neon-animation/neon-animatable.html","9f08f804b30273de4024b18407ec2c40"],["/bower_components/neon-animation/neon-animated-pages.html","1f5a7579d49222a78e72925fa84226db"],["/bower_components/neon-animation/neon-animation-behavior.html","eb1cdd9cd9d780a811fd25e882ba1f8e"],["/bower_components/neon-animation/neon-animation-runner-behavior.html","782cac67e6cb5661d36fb32d9129ff03"],["/bower_components/neon-animation/neon-animation.html","64a31fddf24983589825e7f0feaedbb8"],["/bower_components/neon-animation/neon-animations.html","3b6524b3cc95f27b4b6d7821a7097137"],["/bower_components/neon-animation/neon-shared-element-animatable-behavior.html","d891492be81d44fcf6dfb54fd8d73ae2"],["/bower_components/neon-animation/neon-shared-element-animation-behavior.html","59b343c52eef4ff93901a3cba99577d6"],["/bower_components/neon-animation/web-animations.html","b310811179297697d51eac3659df7776"],["/bower_components/paper-behaviors/paper-button-behavior.html","edddd3f97cf3ea944f3a48b4154939e8"],["/bower_components/paper-behaviors/paper-checked-element-behavior.html","59702db25efd385b161ad862b8027819"],["/bower_components/paper-behaviors/paper-inky-focus-behavior.html","51a1c5ccd2aae4c1a0258680dcb3e1ea"],["/bower_components/paper-behaviors/paper-ripple-behavior.html","b6ee8dd59ffb46ca57e81311abd2eca0"],["/bower_components/paper-button/paper-button.html","2e9487e595d34734446ddde0a9206d9e"],["/bower_components/paper-card/paper-card.html","96e2a3aa8d9a35f41d246e1b0cbc6e3a"],["/bower_components/paper-checkbox/paper-checkbox.html","2b8702a391fb8a04c16cdbee5160cc04"],["/bower_components/paper-dialog-behavior/paper-dialog-behavior.html","b9cf5384b29cd12a724965080916b6f1"],["/bower_components/paper-dialog-behavior/paper-dialog-shared-styles.html","1d272748882199e0e9a9b3cdce6333cf"],["/bower_components/paper-fab/paper-fab.html","e8f4f27292ad5e4840196b538dbc6b00"],["/bower_components/paper-icon-button/paper-icon-button-light.html","7b0771729fe6ecaefdeace69f5a39261"],["/bower_components/paper-icon-button/paper-icon-button.html","4a5cbc3fe046e2c070d4bf34ec7463d6"],["/bower_components/paper-input/paper-input-addon-behavior.html","de7b482dc1fb01847efba9016db16206"],["/bower_components/paper-input/paper-input-behavior.html","650398d9823281ebeec32c6eca3a1f8d"],["/bower_components/paper-input/paper-input-char-counter.html","c9e52a2d75b93ea3abd87022d87c0c6a"],["/bower_components/paper-input/paper-input-container.html","adc601ce6ebce04dee94bf10268985bd"],["/bower_components/paper-input/paper-input-error.html","3cec14d4d86f4e4b5ad349ba8a2dac9f"],["/bower_components/paper-input/paper-input.html","6029dc108d8becff338874e7302a8211"],["/bower_components/paper-item/paper-icon-item.html","d9f23641c16cbcf83b20e3ba51de18e7"],["/bower_components/paper-item/paper-item-behavior.html","82636a7562fd8b0be5b15646ee461588"],["/bower_components/paper-item/paper-item-body.html","40b8696a53a6bde10f223f9cf798cfe6"],["/bower_components/paper-item/paper-item-shared-styles.html","389eedfc65ee58b1f0d67281d0bad1a1"],["/bower_components/paper-item/paper-item.html","5099885c3bd34e04df7796d48851c4a4"],["/bower_components/paper-material/paper-material-shared-styles.html","3a5f381dbdbdabbfd7c122e1c02a60e3"],["/bower_components/paper-material/paper-material.html","64f92af0f2c81b686cb56bcb9665c148"],["/bower_components/paper-menu-button/paper-menu-button-animations.html","a6d6ed67a145ca00d4487c40c4b06273"],["/bower_components/paper-menu-button/paper-menu-button.html","33512bfe2b8f7b8ec84223531e1807aa"],["/bower_components/paper-menu/paper-menu-shared-styles.html","71e767ead4e519f5c94324e90385752e"],["/bower_components/paper-menu/paper-menu.html","51a2d016875ec14fd546304b1ab28722"],["/bower_components/paper-ripple/paper-ripple.html","575805e6be19150586a0d992a6842a34"],["/bower_components/paper-scroll-header-panel/paper-scroll-header-panel.html","e8935bc1ddd62647c9683068dd703493"],["/bower_components/paper-spinner/paper-spinner-behavior.html","7e58a415d4a9b43fbef2651029d61ad0"],["/bower_components/paper-spinner/paper-spinner-styles.html","41385e612365d851bb3c3611fc9bddb6"],["/bower_components/paper-spinner/paper-spinner.html","940e64bbde54dad918d0f5c0e247a8bd"],["/bower_components/paper-styles/color.html","c53abb41659bf242d420a7f93b977e91"],["/bower_components/paper-styles/default-theme.html","25d95202be2ff5b60f651924e66abed2"],["/bower_components/paper-styles/shadow.html","7df5e03d09d3e176c881e2c958e19725"],["/bower_components/paper-styles/typography.html","3f95c68bcd0bd4710f3469c4900533d6"],["/bower_components/paper-tabs/paper-tab.html","d79000eb3d5fe30b93443b352289a4d3"],["/bower_components/paper-tabs/paper-tabs-icons.html","9fb57777c667562392afe684d85ddbe2"],["/bower_components/paper-tabs/paper-tabs.html","273cf8d3596c49de67aea9c11276556d"],["/bower_components/paper-toast/paper-toast.html","ce2270c5dfe0479d7e12749e38a71f4c"],["/bower_components/paper-toolbar/paper-toolbar.html","e54bc7361f1e80997c80621b908dafdd"],["/bower_components/paper-tooltip/paper-tooltip.html","f3653487a01e1cfabece016431f50a50"],["/bower_components/polymer/polymer-micro.html","a11f64d8321f3e71c82828b5fb542bd5"],["/bower_components/polymer/polymer-mini.html","73a0cdb103a3b261353eeffec8053cc9"],["/bower_components/polymer/polymer.html","9acddfec33d9f02f440df2dd269a4e26"],["/bower_components/promise-polyfill/Promise.js","543d053e97b2f3bf434212aa4db1fb2a"],["/bower_components/promise-polyfill/promise-polyfill-lite.html","06470312beff013fc54695e0bdda2cb3"],["/bower_components/time-elements/time-elements.js","5deb6d9dbb7459e4a8798c23eb864d74"],["/bower_components/web-animations-js/web-animations-next-lite.min.js","fd72c8d9d64ba9d6f51888b916e1fced"],["/bower_components/webcomponentsjs/webcomponents-lite.min.js","aa09f9774d69281033593d2a5cf13e9d"],["/data/blog.json","966dfc623f261b214a06d7435f2068ee"],["/data/en/resources.json","8ae4914ec226b48883448a98252d3f6b"],["/data/es/resources.json","ec8b940b13f631f691e3837f8441e4ac"],["/data/hoverboard.config.json","609d9b11c155c9cced0e7ef14db91f6b"],["/data/partners.json","7aa1ee2714f186d4d556b5a135c15e9a"],["/data/posts/2015-10-24-devfest-ua-summary.markdown","68c408c5dac1a4299379a031482c63f5"],["/data/posts/2016-05-04-devfest-2016-announced.markdown","bdb4d8f7d8c62d4ffc6ef7d65bcc6876"],["/data/posts/2016-05-06-c4p-time.markdown","db8d211a74193948c77ba37a29ac9feb"],["/data/posts/code-of-conduct.markdown","9662e190449131b5292e5d75cc3e057b"],["/data/schedule.json","013c8e2280c7b8c9fbecfb121ecba6db"],["/data/sessions.json","224acc12d851d6266de2c8b3d24a5552"],["/data/speakers.json","83638b744838a728be61712e89d514b8"],["/data/team.json","8fe3f1fd1276ff67eafd6b72358a4541"],["/data/tweets.json","80b8481b23c5a2e43a316f24b8973f04"],["/data/uk/resources.json","7650c844e95268aa69c0b47f867881f2"],["/data/videos.json","af0677a5f38a3b04c53d05880a506f25"],["/images/backgrounds/2015_1.jpg","bc9d13af2b3e38b4556be691c63b7889"],["/images/backgrounds/2015_2.jpg","22ce360278168687e87cd0a728c43328"],["/images/backgrounds/2015_3.jpg","d76b9241e72a3f004b7c8f32452b0692"],["/images/backgrounds/closing.jpg","0d2666a42b5feb51dbddae4a6e76cf59"],["/images/backgrounds/coffee-break.jpg","283b8d543ba287acda89bade3e1a7eb4"],["/images/backgrounds/home.png","fe306df643ed447e2a94e102e35a62c9"],["/images/backgrounds/hub.jpg","f1db7c47dff6b3bc54c64f0db9d975d2"],["/images/backgrounds/location_1.jpg","8de2dd2dd6247cda89a487a1aa38804e"],["/images/backgrounds/location_2.jpg","38683197f335140f8807bec868c5c4dd"],["/images/backgrounds/location_3.jpg","5a4ce654301d6d264e5f4fb48ae890f0"],["/images/backgrounds/lunch.jpg","1b7f9ec019a4391c25584c3bce7843d6"],["/images/backgrounds/morning.jpg","ee01e33624472918bb981c02b2c31855"],["/images/backgrounds/opening.jpg","3ebf00d4f85ca044eff1dc17ed56d034"],["/images/backgrounds/party.jpg","62bdfc8ded3b33861fecade528d92837"],["/images/backgrounds/registration.jpg","4afd4b01198cc95c2232e06dd35eb640"],["/images/favicon/favicon-72.png","8a50435f9af90132f255eb24018c68dc"],["/images/favicon/favicon.ico","b86585686052335d3f7ef73973e18aef"],["/images/favicon/favivon-32.png","a9509ca258731e12d52dd223ad1ba4c8"],["/images/gdg-logo.svg","a124fcbb532a30ad2342b16662695bdf"],["/images/logos/47degicon.jpg","19489a22a3b3490d245ab368284a7793"],["/images/logos/CARTO-logo-positive.png","7818fac7641822207ad3eeb465f608ca"],["/images/logos/Leiva.jpg","71824be6052d2734d3125c8890d9ca47"],["/images/logos/Leiva.png","01dfa622b8617bce4b98d689d8154a1a"],["/images/logos/Schibstedlogo.jpg","d42810ed0556ab0e6f3960d7889b3839"],["/images/logos/cabifylogo.png","c2af65fcb21b640077e3adfaa666d96d"],["/images/logos/codemotion-logo.jpeg","465feccdc3493583c008e860f9cddb1b"],["/images/logos/consejoEpcc.png","0f8f7229cad1a54c7ad3bd6a12cf458d"],["/images/logos/fictizia.svg","ffb3ba6fab2b6344f31beb47cec8e9c3"],["/images/logos/gdg-lviv.svg","557e52d18aed88a36197d1388c67c985"],["/images/logos/gdg-x.svg","f8fb99f2d34c78761130651f9d46c5ed"],["/images/logos/gloin.png","b2eba7daa7c536829519fa2b22e5f5aa"],["/images/logos/google.svg","888b314b2d82dac34ba4f7d1df8e0a84"],["/images/logos/logoExFest.png","25cd2b50d71c19271bebf35425547980"],["/images/logos/logoExFest.svg","d9db6563e9f5fb29db1697ab92d75426"],["/images/logos/metadol.png","fee894230aa5ead40db4c09d2f8a5d09"],["/images/logos/optiva.png","2b52e4b746693b955f5990c55b40b4cd"],["/images/logos/vertical_gallery_banner.png","2324c020ab6f0e2a32ea22758b7fcac6"],["/images/people/Albertogragera.jpg","fe8eebdcf334fbfc8e6d771c13064bea"],["/images/people/Borja.jpeg","dbc65d8146549e215f17761a4696d759"],["/images/people/JoseUgia.jpeg","6da6f2be132aee261f1b25beae221aa5"],["/images/people/JuanCarlos.jpg","13ae7ca2d1486361338ba14525d0d293"],["/images/people/Kike.jpg","dd64d3eb4740b07a075ae168d1af05f7"],["/images/people/Leiva.jpg","5f1178e298a08f86d952b32a091413d5"],["/images/people/Maria.jpg","f57604e9b42807e6bc4121091b607917"],["/images/people/MiguelAngelDuran.jpg","3cf0690ad7467f3f3ebb8bc2c52b0846"],["/images/people/RaulRaja.jpg","7b8a85cf5aa787dc80cb45fa747f5662"],["/images/people/albaroza.jpg","235297e4dd6b9c73bed55207e4711463"],["/images/people/capi.jpg","2923b7a6e2dd6a5f3c5b6985dbafa4d7"],["/images/people/elenatorro.jpg","eea16a81ae54d42f1dbd31e41521bb5f"],["/images/people/jorge-barroso.png","360e9923deadaa10ca61d9ffe69e14a1"],["/images/people/jorgeCastillo.jpg","bf70b8c42ba8343a493ab431f9d7ea1a"],["/images/people/yeray.jpeg","a53a4f784de2ad21a31d61a9392b8d5f"],["/images/posts/announce.jpg","bc9412e05d6ceaf809583f52c0631e6e"],["/images/posts/c4p-is-open.jpg","e70275316abad0afb9e145ef75472351"],["/images/posts/summary.jpg","6df056d37ca45e05cd240db2e902a02c"],["/images/posts/summary1.jpg","c6deb766b3d711b16dd54836cec831be"],["/images/posts/summary10.jpg","7c475adf3f762770eab64ac2336088b2"],["/images/posts/summary11.jpg","ba56a01a1b012252657c15f362814898"],["/images/posts/summary2.jpg","b04919da708d9332358696c24dde6f0c"],["/images/posts/summary3.jpg","cca9bbf45d05d6b129e4b87b249c368f"],["/images/posts/summary4.jpg","176b9543955b84c0bbda8f21a80aa7f0"],["/images/posts/summary5.jpg","2c75cba81c06eac75fdbfac4edbed79d"],["/images/posts/summary6.jpg","4637db009b49463d40be52c9e57c367a"],["/images/posts/summary7.jpg","18f9515bb11dcf2e2a98a856b939b23d"],["/images/posts/summary8.jpg","51a6357257d94790599645aa1059e0f5"],["/images/posts/summary9.jpg","63bbe0210affa537342e33e7a203bbc6"],["/images/sessions/Cesar.png","cb70ba56d908a3c489165bfdcaa4ab29"],["/images/sessions/Isma.png","b1544c7f4353d23348dcfa233eb49c37"],["/images/sessions/Jorge.png","c08f11c2072a64849bff6aa455f9f603"],["/images/sessions/PedroVicente.png","3610464ca08422b8729230be30f63b4b"],["/images/sessions/Salva.png","89d4800ad504afef9af3eb755e49a7c8"],["/images/sessions/kini.png","5b5868e9e4f8cf7eed453d9ab22647be"],["/images/social-share.png","79ca6494383081d924064ed71e116e70"],["/images/touch/homescreen-144.png","777fba2c9ab035808a6925ca611bc67f"],["/images/touch/homescreen-168.png","fc1f8e5f1a213ad6c2731c089fef3de1"],["/images/touch/homescreen-192.png","1775ae0aca4e1db5d5b1650a3b2c7eac"],["/images/touch/homescreen-256.png","c30a7a4972a7b4a5c0ad7c9572cb3e87"],["/images/touch/homescreen-48.png","0a740b7afb3040a80eb0622ee24b35ac"],["/images/touch/homescreen-72.png","8a50435f9af90132f255eb24018c68dc"],["/images/touch/homescreen-96.png","0f6e04240af1efb86d43d278564d46ac"],["/index.html","45c47e36153a04305662e0b1796b5347"],["/manifest.json","1825d5e26fb6f784b0e0ee1ef6a85c1f"],["/scripts/bootstrap.js","c1229483ace9fcdfac150a7778d0387c"],["/scripts/helper/deferred.js","3eb0f91ce4fc648332a28dac6449f3e7"],["/scripts/helper/elements.js","0ca8fba3ee9ce7cba1d836a0bed8afea"],["/scripts/helper/promise-polyfill.js","88c5e1f12c3fb1ae9f6c6dc7d351999f"],["/scripts/helper/service-worker-registration.js","c5e083f1ff7f6e67f42a23f20bc115ca"],["/scripts/helper/util.js","4180e07aeee012d77da2d06ba2479fad"],["/scripts/metrics.js","6876b83ec7c9744837901ccfc1bc6a99"],["/src/behaviors/localize-behavior.html","5c9051994ed4cb58f9ca0a2cfbf0c483"],["/src/behaviors/page-behavior.html","7a14e88bebe781a58ef61c15252a8e4d"],["/src/behaviors/share-behavior.html","cb664197f584d8b10b94d069c119214c"],["/src/behaviors/utils-behavior.html","2e544f9c4b49f3af3a1152174baa2916"],["/src/effects/fade-effect.html","8ee4b618e5e00c5b2c822a7bdddfa1b1"],["/src/elements/about-block.html","51e3b883bd86c9aa28cf5e33055ca5bc"],["/src/elements/animatable-content.html","eefc85f4b367f5276169a1a622c3a2d4"],["/src/elements/app-data.html","2d5850928498309e76a4f02486517899"],["/src/elements/call-to-action.html","73853a73764803563296bf9089ff41ec"],["/src/elements/drawer-block.html","f31d71a429f5fca27053fadbda3fbfc9"],["/src/elements/featured-people.html","90856919cc72b81a9b49f9e2ee9c3fda"],["/src/elements/featured-videos.html","e5699f4edcf923a9773c5b60fe2cd483"],["/src/elements/footer-block.html","1092fdaa52ed35a9b2f8958c1a56ccd6"],["/src/elements/header-content.html","52c88c67709429c11c0792bb7d747c73"],["/src/elements/latest-posts.html","1a13eafa0f25540df4b25e9fe76ca61a"],["/src/elements/logos-block.html","a1e5aecb2f31635e84dda54d775248e0"],["/src/elements/mailchimp-subscribe.html","fab801882025b1a9d4ef9847f1a6cd27"],["/src/elements/map-block.html","c8539e30741a7c1752d7307b135e39c6"],["/src/elements/photo-block.html","fb72e52b5aff55a147f54aede72ceeb7"],["/src/elements/schedule-day.html","497f362f95aa1a757c2183e7be7a63d0"],["/src/elements/schedule-subnav.html","c0434bdfa31a2aa811d95a716bf81c86"],["/src/elements/session-details.html","4ddeabbff0e5f37e91166c7eb7e0afea"],["/src/elements/social-feed.html","bfa43dd1457e18b51d841fadb55d23fa"],["/src/elements/social-post.html","8d2fb6ff532348468ddd8fb9e5f644e0"],["/src/elements/speaker-details.html","b187afdc96c187597deb35f382d2ebcf"],["/src/elements/statistics-block.html","05b2f7be0678dc734d38abcacf546419"],["/src/elements/ticket-element.html","133e2db0030161b75c6e9e41c7ecb408"],["/src/elements/tickets-block.html","b8abcd513802f7b3fe95eb97893e97a1"],["/src/elements/toast-element.html","305d0b3a3585a5d8e6e569d0a1b26249"],["/src/elements/toolbar-block.html","b9743064e686c0132cdddf142111bac5"],["/src/elements/truncate-marked-text.html","08ddfebc1a5e843b7d2412f471902666"],["/src/elements/video-dialog.html","b09a93f3121f8b394f8b5476afbc5e77"],["/src/hoverboard-app.html","f00b4b11f6e09fd42f6f69a2360ffd9f"],["/src/js-wrappers/g-plusone.html","abcc292603de43782fa49f6fd952a4a6"],["/src/js-wrappers/time-element-wrapper.html","cc26ded5c3021fdfb09304414b2e0af1"],["/src/pages/blog-list.html","ed72d9f6f8b42641b1b3c073ca56b2f1"],["/src/pages/blog-page.html","8e7322adf87219ac6e6462f51f5461e6"],["/src/pages/cod-page.html","9638159168aa80d8d6537111a97c04df"],["/src/pages/home-page.html","678fbc6e1d4e507985ac6b4667c6d013"],["/src/pages/post-page.html","09b41b7132b077b8bf4837deec108d5b"],["/src/pages/schedule-page.html","d3f1f0cbe7cbbbe704a691e5340657e3"],["/src/pages/speakers-page.html","1e4906fd64d5465dbebde0fb0015c96c"],["/src/pages/team-page.html","3447328d12200e1237ddc6be033e4660"],["/src/styles/dialog-styles.html","7e366580f8ace2845d0297550a9801af"],["/src/styles/icons.html","bc6fc739ddabc1dce834e1d8c9df1a69"],["/src/styles/mixins.html","5e9fd71785b723f45e28fef871231e73"],["/src/styles/shared-styles.html","aa6d645e2095e4afeef8b2b6ff02d8e3"]];
/* eslint-enable quotes, comma-spacing */
var CacheNamePrefix = 'sw-precache-v1--' + (self.registration ? self.registration.scope : '') + '-';


var IgnoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var getCacheBustedUrl = function(url, param) {
    param = param || Date.now();

    var urlWithCacheBusting = new URL(url);
    urlWithCacheBusting.search += (urlWithCacheBusting.search ? '&' : '') +
      'sw-precache=' + param;

    return urlWithCacheBusting.toString();
  };

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var populateCurrentCacheNames = function(precacheConfig,
    cacheNamePrefix, baseUrl) {
    var absoluteUrlToCacheName = {};
    var currentCacheNamesToAbsoluteUrl = {};

    precacheConfig.forEach(function(cacheOption) {
      var absoluteUrl = new URL(cacheOption[0], baseUrl).toString();
      var cacheName = cacheNamePrefix + absoluteUrl + '-' + cacheOption[1];
      currentCacheNamesToAbsoluteUrl[cacheName] = absoluteUrl;
      absoluteUrlToCacheName[absoluteUrl] = cacheName;
    });

    return {
      absoluteUrlToCacheName: absoluteUrlToCacheName,
      currentCacheNamesToAbsoluteUrl: currentCacheNamesToAbsoluteUrl
    };
  };

var stripIgnoredUrlParameters = function(originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var mappings = populateCurrentCacheNames(PrecacheConfig, CacheNamePrefix, self.location);
var AbsoluteUrlToCacheName = mappings.absoluteUrlToCacheName;
var CurrentCacheNamesToAbsoluteUrl = mappings.currentCacheNamesToAbsoluteUrl;

function deleteAllCaches() {
  return caches.keys().then(function(cacheNames) {
    return Promise.all(
      cacheNames.map(function(cacheName) {
        return caches.delete(cacheName);
      })
    );
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    // Take a look at each of the cache names we expect for this version.
    Promise.all(Object.keys(CurrentCacheNamesToAbsoluteUrl).map(function(cacheName) {
      return caches.open(cacheName).then(function(cache) {
        // Get a list of all the entries in the specific named cache.
        // For caches that are already populated for a given version of a
        // resource, there should be 1 entry.
        return cache.keys().then(function(keys) {
          // If there are 0 entries, either because this is a brand new version
          // of a resource or because the install step was interrupted the
          // last time it ran, then we need to populate the cache.
          if (keys.length === 0) {
            // Use the last bit of the cache name, which contains the hash,
            // as the cache-busting parameter.
            // See https://github.com/GoogleChrome/sw-precache/issues/100
            var cacheBustParam = cacheName.split('-').pop();
            var urlWithCacheBusting = getCacheBustedUrl(
              CurrentCacheNamesToAbsoluteUrl[cacheName], cacheBustParam);

            var request = new Request(urlWithCacheBusting,
              {credentials: 'same-origin'});
            return fetch(request).then(function(response) {
              if (response.ok) {
                return cache.put(CurrentCacheNamesToAbsoluteUrl[cacheName],
                  response);
              }

              console.error('Request for %s returned a response status %d, ' +
                'so not attempting to cache it.',
                urlWithCacheBusting, response.status);
              // Get rid of the empty cache if we can't add a successful response to it.
              return caches.delete(cacheName);
            });
          }
        });
      });
    })).then(function() {
      return caches.keys().then(function(allCacheNames) {
        return Promise.all(allCacheNames.filter(function(cacheName) {
          return cacheName.indexOf(CacheNamePrefix) === 0 &&
            !(cacheName in CurrentCacheNamesToAbsoluteUrl);
          }).map(function(cacheName) {
            return caches.delete(cacheName);
          })
        );
      });
    }).then(function() {
      if (typeof self.skipWaiting === 'function') {
        // Force the SW to transition from installing -> active state
        self.skipWaiting();
      }
    })
  );
});

if (self.clients && (typeof self.clients.claim === 'function')) {
  self.addEventListener('activate', function(event) {
    event.waitUntil(self.clients.claim());
  });
}

self.addEventListener('message', function(event) {
  if (event.data.command === 'delete_all') {
    console.log('About to delete all caches...');
    deleteAllCaches().then(function() {
      console.log('Caches deleted.');
      event.ports[0].postMessage({
        error: null
      });
    }).catch(function(error) {
      console.log('Caches not deleted:', error);
      event.ports[0].postMessage({
        error: error
      });
    });
  }
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    var urlWithoutIgnoredParameters = stripIgnoredUrlParameters(event.request.url,
      IgnoreUrlParametersMatching);

    var cacheName = AbsoluteUrlToCacheName[urlWithoutIgnoredParameters];
    var directoryIndex = 'index.html';
    if (!cacheName && directoryIndex) {
      urlWithoutIgnoredParameters = addDirectoryIndex(urlWithoutIgnoredParameters, directoryIndex);
      cacheName = AbsoluteUrlToCacheName[urlWithoutIgnoredParameters];
    }

    var navigateFallback = '/index.html';
    // Ideally, this would check for event.request.mode === 'navigate', but that is not widely
    // supported yet:
    // https://code.google.com/p/chromium/issues/detail?id=540967
    // https://bugzilla.mozilla.org/show_bug.cgi?id=1209081
    if (!cacheName && navigateFallback && event.request.headers.has('accept') &&
        event.request.headers.get('accept').includes('text/html') &&
        /* eslint-disable quotes, comma-spacing */
        isPathWhitelisted([], event.request.url)) {
        /* eslint-enable quotes, comma-spacing */
      var navigateFallbackUrl = new URL(navigateFallback, self.location);
      cacheName = AbsoluteUrlToCacheName[navigateFallbackUrl.toString()];
    }

    if (cacheName) {
      event.respondWith(
        // Rely on the fact that each cache we manage should only have one entry, and return that.
        caches.open(cacheName).then(function(cache) {
          return cache.keys().then(function(keys) {
            return cache.match(keys[0]).then(function(response) {
              if (response) {
                return response;
              }
              // If for some reason the response was deleted from the cache,
              // raise and exception and fall back to the fetch() triggered in the catch().
              throw Error('The cache ' + cacheName + ' is empty.');
            });
          });
        }).catch(function(e) {
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});




