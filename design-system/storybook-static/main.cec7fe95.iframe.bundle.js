(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"./.storybook/preview.js-generated-config-entry.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var preview_namespaceObject={};__webpack_require__.r(preview_namespaceObject),__webpack_require__.d(preview_namespaceObject,"parameters",(function(){return parameters}));__webpack_require__("./node_modules/core-js/modules/es.object.keys.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.array.filter.js"),__webpack_require__("./node_modules/core-js/modules/es.object.get-own-property-descriptor.js"),__webpack_require__("./node_modules/core-js/modules/es.array.for-each.js"),__webpack_require__("./node_modules/core-js/modules/web.dom-collections.for-each.js"),__webpack_require__("./node_modules/core-js/modules/es.object.get-own-property-descriptors.js"),__webpack_require__("./node_modules/core-js/modules/es.object.define-properties.js"),__webpack_require__("./node_modules/core-js/modules/es.object.define-property.js");var ClientApi=__webpack_require__("./node_modules/@storybook/client-api/dist/esm/ClientApi.js"),parameters={actions:{argTypesRegex:"^on[A-Z].*"},controls:{matchers:{color:/(background|color)$/i,date:/Date$/}}};function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}Object.keys(preview_namespaceObject).forEach((function(key){var value=preview_namespaceObject[key];switch(key){case"args":return Object(ClientApi.d)(value);case"argTypes":return Object(ClientApi.b)(value);case"decorators":return value.forEach((function(decorator){return Object(ClientApi.f)(decorator,!1)}));case"loaders":return value.forEach((function(loader){return Object(ClientApi.g)(loader,!1)}));case"parameters":return Object(ClientApi.h)(function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}({},value),!1);case"argTypesEnhancers":return value.forEach((function(enhancer){return Object(ClientApi.c)(enhancer)}));case"argsEnhancers":return value.forEach((function(enhancer){return Object(ClientApi.e)(enhancer)}));case"render":return Object(ClientApi.i)(value);case"globals":case"globalTypes":var v={};return v[key]=value,Object(ClientApi.h)(v,!1);case"__namedExportsOrder":case"decorateStory":case"renderToDOM":return null;default:return console.log(key+" was not supported :( !")}}))},"./generated-stories-entry.js":function(module,exports,__webpack_require__){"use strict";(function(module){(0,__webpack_require__("./node_modules/@storybook/react/dist/esm/client/index.js").configure)([__webpack_require__("./src sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.mdx)$"),__webpack_require__("./src sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.(js|jsx|ts|tsx))$")],module,!1)}).call(this,__webpack_require__("./node_modules/webpack/buildin/module.js")(module))},"./src sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.(js|jsx|ts|tsx))$":function(module,exports,__webpack_require__){var map={"./stories/BaseInput.stories.tsx":"./src/stories/BaseInput.stories.tsx","./stories/BoolInput.stories.tsx":"./src/stories/BoolInput.stories.tsx","./stories/HeroBanner.stories.tsx":"./src/stories/HeroBanner.stories.tsx","./stories/StyleGuide.stories.tsx":"./src/stories/StyleGuide.stories.tsx"};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id="./src sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.(js|jsx|ts|tsx))$"},"./src sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.mdx)$":function(module,exports,__webpack_require__){var map={"./stories/Introduction.stories.mdx":"./src/stories/Introduction.stories.mdx"};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id="./src sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.mdx)$"},"./src/stories/BaseInput.stories.tsx":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Primary",(function(){return Primary}));__webpack_require__("./node_modules/core-js/modules/es.object.assign.js"),__webpack_require__("./node_modules/core-js/modules/es.function.bind.js"),__webpack_require__("./node_modules/core-js/modules/es.string.replace.js"),__webpack_require__("./node_modules/core-js/modules/es.regexp.exec.js"),__webpack_require__("./node_modules/core-js/modules/es.object.to-string.js"),__webpack_require__("./node_modules/core-js/modules/es.regexp.to-string.js"),__webpack_require__("./node_modules/core-js/modules/es.date.to-string.js"),__webpack_require__("./node_modules/react/index.js");var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),BaseInput_BaseInput=function BaseInput(props){var type=props.type,placeholder=props.placeholder,label=props.label,required=props.required,readonly=props.readonly,id=function generateUUID(){return"xx-4x-yxx".replace(/[xy]/g,(function(c){var r=16*Math.random()|0;return("x"==c?r:3&r|8).toString(16)}))}();return Object(jsx_runtime.jsxs)("div",{className:"baseInput",children:[Object(jsx_runtime.jsx)("label",{className:"baseInput__label",for:id,children:label}),Object(jsx_runtime.jsx)("input",{id:id,type:type,placeholder:placeholder,required:required||!1,readOnly:readonly||!1})]})};BaseInput_BaseInput.displayName="BaseInput";try{BaseInput_BaseInput.displayName="BaseInput",BaseInput_BaseInput.__docgenInfo={description:"",displayName:"BaseInput",props:{type:{defaultValue:null,description:"",name:"type",required:!0,type:{name:"string"}},placeholder:{defaultValue:null,description:"",name:"placeholder",required:!0,type:{name:"string"}},label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},required:{defaultValue:null,description:"",name:"required",required:!1,type:{name:"boolean"}},readonly:{defaultValue:null,description:"",name:"readonly",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/BaseInput.tsx#BaseInput"]={docgenInfo:BaseInput_BaseInput.__docgenInfo,name:"BaseInput",path:"src/stories/BaseInput.tsx#BaseInput"})}catch(__react_docgen_typescript_loader_error){}__webpack_exports__.default={title:"Component/Form/BaseInput",component:BaseInput_BaseInput};var BaseInput_stories_Template=function Template(args){return Object(jsx_runtime.jsx)(BaseInput_BaseInput,Object.assign({},args))};BaseInput_stories_Template.displayName="Template";var Primary=BaseInput_stories_Template.bind({});Primary.args={type:"email",placeholder:"email",label:"Votre Email",required:!0},Primary.parameters=Object.assign({storySource:{source:"(args) => <BaseInput {...args} />"}},Primary.parameters)},"./src/stories/BoolInput.stories.tsx":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Primary",(function(){return Primary}));__webpack_require__("./node_modules/core-js/modules/es.object.assign.js"),__webpack_require__("./node_modules/core-js/modules/es.function.bind.js"),__webpack_require__("./node_modules/react/index.js");var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),BoolInput_BoolInput=function BoolInput(props){var label=props.label,type=props.type,required=props.required,readonly=props.readonly;return Object(jsx_runtime.jsxs)("div",{className:"boolInput",children:[label&&Object(jsx_runtime.jsx)("label",{className:"boolInput__label",children:label}),Object(jsx_runtime.jsx)("input",{type:type,required:required||!1,readOnly:readonly||!1})]})};BoolInput_BoolInput.displayName="BoolInput";try{BoolInput_BoolInput.displayName="BoolInput",BoolInput_BoolInput.__docgenInfo={description:"",displayName:"BoolInput",props:{label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},type:{defaultValue:null,description:"",name:"type",required:!0,type:{name:"enum",value:[{value:'"checkbox"'},{value:'"radio"'}]}},required:{defaultValue:null,description:"",name:"required",required:!1,type:{name:"boolean"}},readonly:{defaultValue:null,description:"",name:"readonly",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/BoolInput.tsx#BoolInput"]={docgenInfo:BoolInput_BoolInput.__docgenInfo,name:"BoolInput",path:"src/stories/BoolInput.tsx#BoolInput"})}catch(__react_docgen_typescript_loader_error){}__webpack_exports__.default={title:"Component/Form/BoolInput",component:BoolInput_BoolInput};var BoolInput_stories_Template=function Template(args){return Object(jsx_runtime.jsx)(BoolInput_BoolInput,Object.assign({},args))};BoolInput_stories_Template.displayName="Template";var Primary=BoolInput_stories_Template.bind({});Primary.args={type:"radio"},Primary.parameters=Object.assign({storySource:{source:"(args) => <BoolInput {...args} />"}},Primary.parameters)},"./src/stories/HeroBanner.stories.tsx":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Primary",(function(){return Primary}));__webpack_require__("./node_modules/core-js/modules/es.object.assign.js"),__webpack_require__("./node_modules/core-js/modules/es.function.bind.js"),__webpack_require__("./node_modules/react/index.js");var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),HeroBanner_HeroBanner=function HeroBanner(props){var cover=props.cover,content=props.content;return Object(jsx_runtime.jsxs)("div",{className:"hero-banner",children:[Object(jsx_runtime.jsx)("div",{className:"hero-banner__cover",children:Object(jsx_runtime.jsx)("p",{children:cover})}),Object(jsx_runtime.jsx)("div",{className:"hero-banner__content",children:Object(jsx_runtime.jsx)("div",{className:"hero-banner__content__text",children:content})})]})};HeroBanner_HeroBanner.displayName="HeroBanner";try{HeroBanner_HeroBanner.displayName="HeroBanner",HeroBanner_HeroBanner.__docgenInfo={description:"",displayName:"HeroBanner",props:{cover:{defaultValue:null,description:"",name:"cover",required:!0,type:{name:"string"}},content:{defaultValue:null,description:"",name:"content",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/HeroBanner.tsx#HeroBanner"]={docgenInfo:HeroBanner_HeroBanner.__docgenInfo,name:"HeroBanner",path:"src/stories/HeroBanner.tsx#HeroBanner"})}catch(__react_docgen_typescript_loader_error){}__webpack_exports__.default={title:"Component/HeroBanner",component:HeroBanner_HeroBanner};var HeroBanner_stories_Template=function Template(args){return Object(jsx_runtime.jsx)(HeroBanner_HeroBanner,Object.assign({},args))};HeroBanner_stories_Template.displayName="Template";var Primary=HeroBanner_stories_Template.bind({});Primary.args={cover:"cover",content:"content"},Primary.parameters=Object.assign({storySource:{source:"(args) => <HeroBanner {...args} />"}},Primary.parameters)},"./src/stories/Introduction.stories.mdx":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"__page",(function(){return __page}));__webpack_require__("./node_modules/core-js/modules/es.object.keys.js"),__webpack_require__("./node_modules/core-js/modules/es.array.index-of.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.function.bind.js"),__webpack_require__("./node_modules/core-js/modules/es.object.assign.js"),__webpack_require__("./node_modules/react/index.js");var _mdx_js_react__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@mdx-js/react/dist/esm.js"),_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/@storybook/addon-docs/dist/esm/index.js"),_assets_code_brackets_svg__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./src/stories/assets/code-brackets.svg"),_assets_code_brackets_svg__WEBPACK_IMPORTED_MODULE_8___default=__webpack_require__.n(_assets_code_brackets_svg__WEBPACK_IMPORTED_MODULE_8__),_assets_colors_svg__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./src/stories/assets/colors.svg"),_assets_colors_svg__WEBPACK_IMPORTED_MODULE_9___default=__webpack_require__.n(_assets_colors_svg__WEBPACK_IMPORTED_MODULE_9__),_assets_comments_svg__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("./src/stories/assets/comments.svg"),_assets_comments_svg__WEBPACK_IMPORTED_MODULE_10___default=__webpack_require__.n(_assets_comments_svg__WEBPACK_IMPORTED_MODULE_10__),_assets_direction_svg__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__("./src/stories/assets/direction.svg"),_assets_direction_svg__WEBPACK_IMPORTED_MODULE_11___default=__webpack_require__.n(_assets_direction_svg__WEBPACK_IMPORTED_MODULE_11__),_assets_flow_svg__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__("./src/stories/assets/flow.svg"),_assets_flow_svg__WEBPACK_IMPORTED_MODULE_12___default=__webpack_require__.n(_assets_flow_svg__WEBPACK_IMPORTED_MODULE_12__),_assets_plugin_svg__WEBPACK_IMPORTED_MODULE_13__=__webpack_require__("./src/stories/assets/plugin.svg"),_assets_plugin_svg__WEBPACK_IMPORTED_MODULE_13___default=__webpack_require__.n(_assets_plugin_svg__WEBPACK_IMPORTED_MODULE_13__),_assets_repo_svg__WEBPACK_IMPORTED_MODULE_14__=__webpack_require__("./src/stories/assets/repo.svg"),_assets_repo_svg__WEBPACK_IMPORTED_MODULE_14___default=__webpack_require__.n(_assets_repo_svg__WEBPACK_IMPORTED_MODULE_14__),_assets_stackalt_svg__WEBPACK_IMPORTED_MODULE_15__=__webpack_require__("./src/stories/assets/stackalt.svg"),_assets_stackalt_svg__WEBPACK_IMPORTED_MODULE_15___default=__webpack_require__.n(_assets_stackalt_svg__WEBPACK_IMPORTED_MODULE_15__),_excluded=["components"];function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var layoutProps={};function MDXContent(_ref){var components=_ref.components,props=_objectWithoutProperties(_ref,_excluded);return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)("wrapper",_extends({},layoutProps,props,{components:components,mdxType:"MDXLayout"}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_7__.b,{title:"Introduction",mdxType:"Meta"}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)("style",null,"\n    .subheading {\n      --mediumdark: '#999999';\n      font-weight: 900;\n      font-size: 13px;\n      color: #999;\n      letter-spacing: 6px;\n      line-height: 24px;\n      text-transform: uppercase;\n      margin-bottom: 12px;\n      margin-top: 40px;\n    }\n\n    .link-list {\n      display: grid;\n      grid-template-columns: 1fr;\n      grid-template-rows: 1fr 1fr;\n      row-gap: 10px;\n    }\n\n    @media (min-width: 620px) {\n      .link-list {\n        row-gap: 20px;\n        column-gap: 20px;\n        grid-template-columns: 1fr 1fr;\n      }\n    }\n\n    @media all and (-ms-high-contrast:none) {\n    .link-list {\n        display: -ms-grid;\n        -ms-grid-columns: 1fr 1fr;\n        -ms-grid-rows: 1fr 1fr;\n      }\n    }\n\n    .link-item {\n      display: block;\n      padding: 20px 30px 20px 15px;\n      border: 1px solid #00000010;\n      border-radius: 5px;\n      transition: background 150ms ease-out, border 150ms ease-out, transform 150ms ease-out;\n      color: #333333;\n      display: flex;\n      align-items: flex-start;\n    }\n\n    .link-item:hover {\n      border-color: #1EA7FD50;\n      transform: translate3d(0, -3px, 0);\n      box-shadow: rgba(0, 0, 0, 0.08) 0 3px 10px 0;\n    }\n\n    .link-item:active {\n      border-color: #1EA7FD;\n      transform: translate3d(0, 0, 0);\n    }\n\n    .link-item strong {\n      font-weight: 700;\n      display: block;\n      margin-bottom: 2px;\n    }\n\n    .link-item img {\n      height: 40px;\n      width: 40px;\n      margin-right: 15px;\n      flex: none;\n    }\n\n    .link-item span {\n      font-size: 14px;\n      line-height: 20px;\n    }\n\n    .tip {\n      display: inline-block;\n      border-radius: 1em;\n      font-size: 11px;\n      line-height: 12px;\n      font-weight: 700;\n      background: #E7FDD8;\n      color: #66BF3C;\n      padding: 4px 12px;\n      margin-right: 10px;\n      vertical-align: top;\n    }\n\n    .tip-wrapper {\n      font-size: 13px;\n      line-height: 20px;\n      margin-top: 40px;\n      margin-bottom: 40px;\n    }\n\n    .tip-wrapper code {\n      font-size: 12px;\n      display: inline-block;\n    }\n  "),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)("h1",{id:"welcome-to-storybook"},"Welcome to Storybook"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)("p",null,"Storybook helps you build UI components in isolation from your app's business logic, data, and context.\nThat makes it easy to develop hard-to-reach states. Save these UI states as ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)("strong",{parentName:"p"},"stories")," to revisit during development, testing, or QA."),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)("p",null,"Browse example stories now by navigating to them in the sidebar.\nView their code in the ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)("inlineCode",{parentName:"p"},"stories")," directory to learn how they work.\nWe recommend building UIs with a ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)("a",{parentName:"p",href:"https://componentdriven.org",target:"_blank",rel:"nofollow noopener noreferrer"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)("strong",{parentName:"a"},"component-driven"))," process starting with atomic components and ending with pages."),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)("div",{className:"subheading"},"Configure"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)("div",{className:"link-list"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)("a",{className:"link-item",href:"https://storybook.js.org/docs/react/addons/addon-types",target:"_blank"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)("img",{src:_assets_plugin_svg__WEBPACK_IMPORTED_MODULE_13___default.a,alt:"plugin"}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)("span",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)("strong",null,"Presets for popular tools"),"Easy setup for TypeScript, SCSS and more.")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)("a",{className:"link-item",href:"https://storybook.js.org/docs/react/configure/webpack",target:"_blank"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)("img",{src:_assets_stackalt_svg__WEBPACK_IMPORTED_MODULE_15___default.a,alt:"Build"}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)("span",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)("strong",null,"Build configuration"),"How to customize webpack and Babel")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)("a",{className:"link-item",href:"https://storybook.js.org/docs/react/configure/styling-and-css",target:"_blank"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)("img",{src:_assets_colors_svg__WEBPACK_IMPORTED_MODULE_9___default.a,alt:"colors"}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)("span",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)("strong",null,"Styling"),"How to load and configure CSS libraries")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)("a",{className:"link-item",href:"https://storybook.js.org/docs/react/get-started/setup#configure-storybook-for-your-stack",target:"_blank"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)("img",{src:_assets_flow_svg__WEBPACK_IMPORTED_MODULE_12___default.a,alt:"flow"}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)("span",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)("strong",null,"Data"),"Providers and mocking for data libraries"))),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)("div",{className:"subheading"},"Learn"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)("div",{className:"link-list"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)("a",{className:"link-item",href:"https://storybook.js.org/docs",target:"_blank"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)("img",{src:_assets_repo_svg__WEBPACK_IMPORTED_MODULE_14___default.a,alt:"repo"}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)("span",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)("strong",null,"Storybook documentation"),"Configure, customize, and extend")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)("a",{className:"link-item",href:"https://storybook.js.org/tutorials/",target:"_blank"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)("img",{src:_assets_direction_svg__WEBPACK_IMPORTED_MODULE_11___default.a,alt:"direction"}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)("span",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)("strong",null,"In-depth guides"),"Best practices from leading teams")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)("a",{className:"link-item",href:"https://github.com/storybookjs/storybook",target:"_blank"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)("img",{src:_assets_code_brackets_svg__WEBPACK_IMPORTED_MODULE_8___default.a,alt:"code"}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)("span",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)("strong",null,"GitHub project"),"View the source and add issues")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)("a",{className:"link-item",href:"https://discord.gg/storybook",target:"_blank"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)("img",{src:_assets_comments_svg__WEBPACK_IMPORTED_MODULE_10___default.a,alt:"comments"}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)("span",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)("strong",null,"Discord chat"),"Chat with maintainers and the community"))),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)("div",{className:"tip-wrapper"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)("span",{className:"tip"},"Tip"),"Edit the Markdown in"," ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)("code",null,"stories/Introduction.stories.mdx")))}MDXContent.displayName="MDXContent",MDXContent.isMDXComponent=!0;var __page=function __page(){throw new Error("Docs-only story")};__page.parameters={docsOnly:!0};var componentMeta={title:"Introduction",includeStories:["__page"]},mdxStoryNameToKey={};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs=Object.assign({},componentMeta.parameters.docs||{},{page:function page(){return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_7__.a,{mdxStoryNameToKey:mdxStoryNameToKey,mdxComponentAnnotations:componentMeta},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)(MDXContent,null))}}),__webpack_exports__.default=componentMeta},"./src/stories/StyleGuide.stories.tsx":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Color",(function(){return Color})),__webpack_require__.d(__webpack_exports__,"Font",(function(){return Font}));__webpack_require__("./node_modules/core-js/modules/es.object.assign.js"),__webpack_require__("./node_modules/core-js/modules/es.function.bind.js"),__webpack_require__("./node_modules/react/index.js");var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),StyleGuide_StyleGuide=function StyleGuide(props){var category=props.category;return Object(jsx_runtime.jsxs)("div",{className:"styleGuide",children:["color"===category&&Object(jsx_runtime.jsx)("div",{className:"styleGuide__color",children:Object(jsx_runtime.jsx)("p",{children:"Color"})}),"font"===category&&Object(jsx_runtime.jsx)("div",{className:"styleGuide__font",children:Object(jsx_runtime.jsx)("p",{children:"Font"})})]})};StyleGuide_StyleGuide.displayName="StyleGuide";try{StyleGuide_StyleGuide.displayName="StyleGuide",StyleGuide_StyleGuide.__docgenInfo={description:"",displayName:"StyleGuide",props:{category:{defaultValue:null,description:"",name:"category",required:!0,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/StyleGuide.tsx#StyleGuide"]={docgenInfo:StyleGuide_StyleGuide.__docgenInfo,name:"StyleGuide",path:"src/stories/StyleGuide.tsx#StyleGuide"})}catch(__react_docgen_typescript_loader_error){}__webpack_exports__.default={title:"StyleGuide",component:StyleGuide_StyleGuide};var StyleGuide_stories_Template=function Template(args){return Object(jsx_runtime.jsx)(StyleGuide_StyleGuide,Object.assign({},args))};StyleGuide_stories_Template.displayName="Template";var Color=StyleGuide_stories_Template.bind({});Color.args={category:"color"};var Font=StyleGuide_stories_Template.bind({});Font.args={category:"font"},Color.parameters=Object.assign({storySource:{source:"(args) => <StyleGuide {...args} />"}},Color.parameters),Font.parameters=Object.assign({storySource:{source:"(args) => <StyleGuide {...args} />"}},Font.parameters)},"./src/stories/assets/code-brackets.svg":function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"static/media/code-brackets.2e1112d7.svg"},"./src/stories/assets/colors.svg":function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"static/media/colors.a4bd0486.svg"},"./src/stories/assets/comments.svg":function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"static/media/comments.a3859089.svg"},"./src/stories/assets/direction.svg":function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"static/media/direction.b770f9af.svg"},"./src/stories/assets/flow.svg":function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"static/media/flow.edad2ac1.svg"},"./src/stories/assets/plugin.svg":function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"static/media/plugin.d494b228.svg"},"./src/stories/assets/repo.svg":function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"static/media/repo.6d496322.svg"},"./src/stories/assets/stackalt.svg":function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"static/media/stackalt.dba9fbb3.svg"},"./storybook-init-framework-entry.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__("./node_modules/@storybook/react/dist/esm/client/index.js")},0:function(module,exports,__webpack_require__){__webpack_require__("./node_modules/@storybook/core-client/dist/esm/globals/polyfills.js"),__webpack_require__("./node_modules/@storybook/core-client/dist/esm/globals/globals.js"),__webpack_require__("./storybook-init-framework-entry.js"),__webpack_require__("./node_modules/@storybook/react/dist/esm/client/docs/config-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/react/dist/esm/client/preview/config-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-links/preview.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-docs/preview.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-actions/preview.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-backgrounds/preview.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-measure/preview.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-outline/preview.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-interactions/preview.js-generated-config-entry.js"),__webpack_require__("./.storybook/preview.js-generated-config-entry.js"),module.exports=__webpack_require__("./generated-stories-entry.js")},1:function(module,exports){}},[[0,4,5]]]);