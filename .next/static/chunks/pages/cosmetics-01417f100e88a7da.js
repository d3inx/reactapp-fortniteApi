(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[27],{8688:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/cosmetics",function(){return n(5913)}])},939:function(e,t,n){"use strict";n.d(t,{Z:function(){return l}});var r=n(5893),s=n(1664),i=n.n(s),a=n(1163),o=n(7294);function l(){var e=(0,a.useRouter)(),t=(0,o.useState)([{name:"NEW COSMETICS",link:"cosmetics/new"},{name:"ALL COSMETICS",link:"cosmetics"}])[0],n=(0,o.useState)(t[0]);n[0],n[1];return(0,r.jsx)("div",{className:"w-full max-w-md px-8 pb-20 sm:px-0",children:(0,r.jsx)("ul",{className:"flex justify-center space-x-4 p-1",children:t.map((function(t){return(0,r.jsx)("li",{className:"w-1/3 py-2.5 active:text-slate-700 leading-5 text-lg text-center cursor-pointer text-white ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none ".concat(e.pathname=="/".concat(t.link)?"bg-white shadow text-slate-700":"text-white hover:bg-white/[0.12] hover:text-white"),children:(0,r.jsx)(i(),{href:"/".concat(t.link),children:(0,r.jsx)("a",{className:"py-3",children:t.name})})},t.name)}))})})}},3660:function(e,t,n){"use strict";var r=n(5893);t.Z=function(e){var t=e.errText;return(0,r.jsx)("div",{className:"my-40 text-7xl text-slate-800 text-center",children:t})}},5913:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return $}});var r=n(5893),s=n(939),i=n(4051),a=n.n(i),o=n(9669),l=n.n(o),u=n(7294),c=n(5675),p=n.n(c),d=n(1664),f=n.n(d),h=n(246),m=n.n(h),y=n(2351),v=n(4203),b=n(1363),x=n(4103),g=n(6723),w=n(3784);let j=(0,u.createContext)(null);function k(){let e=(0,u.useContext)(j);if(null===e){let e=new Error("You used a <Label /> component, but it is not inside a relevant parent.");throw Error.captureStackTrace&&Error.captureStackTrace(e,k),e}return e}let S=(0,y.yV)((function(e,t){let{passive:n=!1,...r}=e,s=k(),i=`headlessui-label-${(0,v.M)()}`,a=(0,w.T)(t);(0,g.e)((()=>s.register(i)),[i,s.register]);let o={ref:a,...s.props,id:i};return n&&("onClick"in o&&delete o.onClick,"onClick"in r&&delete r.onClick),(0,y.sY)({ourProps:o,theirProps:r,slot:s.slot||{},defaultTag:"label",name:s.name||"Label"})})),C=(0,u.createContext)(null);function L(){let e=(0,u.useContext)(C);if(null===e){let e=new Error("You used a <Description /> component, but it is not inside a relevant parent.");throw Error.captureStackTrace&&Error.captureStackTrace(e,L),e}return e}function T(){let[e,t]=(0,u.useState)([]);return[e.length>0?e.join(" "):void 0,(0,u.useMemo)((()=>function(e){let n=(0,u.useCallback)((e=>(t((t=>[...t,e])),()=>t((t=>{let n=t.slice(),r=n.indexOf(e);return-1!==r&&n.splice(r,1),n})))),[]),r=(0,u.useMemo)((()=>({register:n,slot:e.slot,name:e.name,props:e.props})),[n,e.slot,e.name,e.props]);return u.createElement(C.Provider,{value:r},e.children)}),[t])]}let P=(0,y.yV)((function(e,t){let n=L(),r=`headlessui-description-${(0,v.M)()}`,s=(0,w.T)(t);(0,g.e)((()=>n.register(r)),[r,n.register]);let i=e,a={ref:s,...n.props,id:r};return(0,y.sY)({ourProps:a,theirProps:i,slot:n.slot||{},defaultTag:"p",name:n.name||"Description"})}));var E=n(4157),O=n(8958),N=n(8689);let M=(0,u.createContext)(null);M.displayName="GroupContext";let _=u.Fragment;let I=(0,y.yV)((function(e,t){let{checked:n,onChange:r,name:s,value:i,...a}=e,o=`headlessui-switch-${(0,v.M)()}`,l=(0,u.useContext)(M),c=(0,u.useRef)(null),p=(0,w.T)(c,t,null===l?null:l.setSwitch),d=(0,u.useCallback)((()=>r(!n)),[r,n]),f=(0,u.useCallback)((e=>{if((0,x.P)(e.currentTarget))return e.preventDefault();e.preventDefault(),d()}),[d]),h=(0,u.useCallback)((e=>{e.key===b.R.Space?(e.preventDefault(),d()):e.key===b.R.Enter&&(0,N.g)(e.currentTarget)}),[d]),m=(0,u.useCallback)((e=>e.preventDefault()),[]),g=(0,u.useMemo)((()=>({checked:n})),[n]),j={id:o,ref:p,role:"switch",type:(0,E.f)(e,c),tabIndex:0,"aria-checked":n,"aria-labelledby":null==l?void 0:l.labelledby,"aria-describedby":null==l?void 0:l.describedby,onClick:f,onKeyUp:h,onKeyPress:m};return u.createElement(u.Fragment,null,null!=s&&n&&u.createElement(O.T,{...(0,y.oA)({as:"input",type:"checkbox",hidden:!0,readOnly:!0,checked:n,name:s,value:i})}),(0,y.sY)({ourProps:j,theirProps:a,slot:g,defaultTag:"button",name:"Switch"}))})),V=Object.assign(I,{Group:function(e){let[t,n]=(0,u.useState)(null),[r,s]=function(){let[e,t]=(0,u.useState)([]);return[e.length>0?e.join(" "):void 0,(0,u.useMemo)((()=>function(e){let n=(0,u.useCallback)((e=>(t((t=>[...t,e])),()=>t((t=>{let n=t.slice(),r=n.indexOf(e);return-1!==r&&n.splice(r,1),n})))),[]),r=(0,u.useMemo)((()=>({register:n,slot:e.slot,name:e.name,props:e.props})),[n,e.slot,e.name,e.props]);return u.createElement(j.Provider,{value:r},e.children)}),[t])]}(),[i,a]=T(),o=(0,u.useMemo)((()=>({switch:t,setSwitch:n,labelledby:r,describedby:i})),[t,n,r,i]),l=e;return u.createElement(a,{name:"Switch.Description"},u.createElement(s,{name:"Switch.Label",props:{onClick(){!t||(t.click(),t.focus({preventScroll:!0}))}}},u.createElement(M.Provider,{value:o},(0,y.sY)({ourProps:{},theirProps:l,defaultTag:_,name:"Switch.Group"}))))},Label:S,Description:P});function A(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function R(e){return function(e){if(Array.isArray(e))return A(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"===typeof e)return A(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return A(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function D(e){var t=e.setItems,n=e.enabled,s=e.setEnabled;return(0,r.jsx)("div",{className:"flex items-center px-2",children:(0,r.jsxs)(V,{checked:n,onChange:function(e){return function(e){t((function(e){var t=e;return t.sort((function(e,t){return e.type.value>t.type.value?1:-1})),R(t)})),s(e)}(e)},className:"".concat(n?"bg-gray-900":"bg-zinc-700/60","\n          relative inline-flex h-[38px] w-[74px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75"),children:[(0,r.jsx)("span",{className:"sr-only",children:"Use setting"}),(0,r.jsx)("span",{"aria-hidden":"true",className:"".concat(n?"translate-x-9":"translate-x-0","\n            pointer-events-none inline-block h-[34px] w-[34px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out")})]})})}var B=n(929);function W(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Y(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){W(e,t,n[t])}))}return e}function H(e){var t=e.listItem,n=e.selectedType,s=e.selectedRarity,i=e.selectedSort,a=e.setSelected;return(0,r.jsx)("div",{className:"w-full my-2 md:my-0 md:w-1/6 z-50",children:(0,r.jsx)(B.R,{value:void 0!==n?n:void 0===s?i:s,onChange:function(e){return function(e){a(void 0!==n?function(t){return Y({},t,{type:e})}:void 0!==s?function(t){return Y({},t,{rarity:e})}:function(t){return Y({},t,{sort:e})})}(e)},children:(0,r.jsxs)("div",{className:"relative",children:[(0,r.jsxs)(B.R.Button,{className:"relative w-full cursor-default bg-white py-2 pl-3 pr-10 text-left focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 text-sm md:text-xl",children:[(0,r.jsx)("span",{className:"block truncate",children:void 0!==n?n:void 0===s?i:s}),(0,r.jsx)("span",{className:"pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2",children:(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:2,children:(0,r.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M8 9l4-4 4 4m0 6l-4 4-4-4"})})})]}),(0,r.jsx)(B.R.Options,{className:"absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm",children:t.map((function(e,t){return(0,r.jsx)(B.R.Option,{className:function(e){var t=e.active;return"relative cursor-default select-none py-2 pl-10 pr-4 ".concat(t?"bg-amber-100 text-amber-900":"text-gray-900")},value:e,children:function(t){var n=t.selected;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("span",{className:"block truncate ".concat(n?"font-medium":"font-normal"),children:e}),n?(0,r.jsx)("span",{className:"absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600",children:(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:2,children:(0,r.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M5 13l4 4L19 7"})})}):null]})}},t)}))})]})})})}function U(e,t,n,r,s,i,a){try{var o=e[i](a),l=o.value}catch(u){return void n(u)}o.done?t(l):Promise.resolve(l).then(r,s)}var z=function(e){var t=e.setItems,n=e.setItemStat,s=e.listItem,i=e.setListItem,o=(0,u.useState)(""),c=o[0],p=o[1],d=(0,u.useState)(!1),f=d[0],h=d[1],m=(0,u.useState)({type:"All",rarity:"All"}),y=m[0],v=m[1],b=function(){var e,r=(e=a().mark((function e(){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""!==c||"All"!==y.type||"All"!==y.rarity){e.next=5;break}return e.next=3,l().get("https://fortnite-api.com/v2/cosmetics/br",{headers:{Authorization:"f4574d7f-6b90-419c-83bb-1acb4924eac0"}}).then((function(e){n(!0);var r=["All"],s=["All"];e.data.data.filter((function(e){return"Banner"!==e.type.displayValue&&"null"!==e.type.displayValue&&null!==e.name&&"TBD"!==e.name})).map((function(e){r.includes(e.type.displayValue)?s.includes(e.rarity.displayValue)||s.push(e.rarity.displayValue):r.push(e.type.displayValue)})),i({type:r,rarity:s}),t(f?e.data.data.filter((function(e){return"Banner"!==e.type.displayValue&&"null"!==e.type.displayValue&&null!==e.name&&"TBD"!==e.name})).sort((function(e,t){return e.type.value>t.type.value?1:-1})):e.data.data.filter((function(e){return"Banner"!==e.type.displayValue&&"null"!==e.type.displayValue&&null!==e.name&&"TBD"!==e.name})))}));case 3:e.next=7;break;case 5:return e.next=7,l().get("https://fortnite-api.com/v2/cosmetics/br/search/all?name=".concat(c,"&displayType=").concat("All"===y.type?"":y.type,"&displayRarity=").concat("All"===y.rarity?"":y.rarity),{headers:{Authorization:"f4574d7f-6b90-419c-83bb-1acb4924eac0"}}).then((function(e){n(!0),t(f?e.data.data.filter((function(e){return"Banner"!==e.type.displayValue&&"null"!==e.type.displayValue&&null!==e.name&&"TBD"!==e.name})).sort((function(e,t){return e.type.value>t.type.value?1:-1})):e.data.data.filter((function(e){return"Banner"!==e.type.displayValue&&"null"!==e.type.displayValue&&null!==e.name&&"TBD"!==e.name})))})).catch((function(e){return n(!1)}));case 7:case"end":return e.stop()}}),e)})),function(){var t=this,n=arguments;return new Promise((function(r,s){var i=e.apply(t,n);function a(e){U(i,r,s,a,o,"next",e)}function o(e){U(i,r,s,a,o,"throw",e)}a(void 0)}))});return function(){return r.apply(this,arguments)}}();return(0,r.jsx)(r.Fragment,{children:void 0!==s?(0,r.jsxs)("div",{className:"flex flex-wrap px-4 md:px-0 w-full justify-evenly mt-20",children:[(0,r.jsx)("input",{type:"text",className:"outline-none w-full md:w-1/4 px-2",placeholder:"ITEM NAME",value:c,onChange:function(e){return p(e.target.value)}}),(0,r.jsx)(H,{listItem:s.type,selectedType:y.type,setSelected:v}),(0,r.jsx)(H,{listItem:s.rarity,selectedRarity:y.rarity,setSelected:v}),(0,r.jsx)("button",{type:"submit",className:"px-4 bg-amber-300",onClick:b,children:"SUBMIT"}),(0,r.jsxs)("div",{className:"flex",children:[(0,r.jsx)("span",{className:"flex items-center text-white ",children:"ASC"}),(0,r.jsx)(D,{setItems:t,enabled:f,setEnabled:h}),(0,r.jsx)("span",{className:"flex items-center text-white ",children:"DESC"})]})]}):""})},F=n(3660);function G(e,t,n,r,s,i,a){try{var o=e[i](a),l=o.value}catch(u){return void n(u)}o.done?t(l):Promise.resolve(l).then(r,s)}var Z=function(){var e=(0,u.useState)([]),t=e[0],n=e[1],s=(0,u.useState)(),i=s[0],o=s[1],c=(0,u.useState)(50),d=c[0],h=c[1],y=(0,u.useState)(!0),v=y[0],b=y[1],x=(0,u.useState)(!0),g=x[0],w=x[1],j=function(){var e,r=(e=a().mark((function e(){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(t.length>0)){e.next=4;break}d>=t.length?b(!1):h(d+50),e.next=10;break;case 4:if(!(t.length>0)){e.next=7;break}return b(!1),e.abrupt("return");case 7:if(!v){e.next=10;break}return e.next=10,l().get("https://fortnite-api.com/v2/cosmetics/br",{headers:{Authorization:"f4574d7f-6b90-419c-83bb-1acb4924eac0"}}).then((function(e){var t=["All"],r=["All"];e.data.data.filter((function(e){return"Banner"!==e.type.displayValue&&"null"!==e.type.displayValue&&null!==e.name&&"TBD"!==e.name})).map((function(e){t.includes(e.type.displayValue)?r.includes(e.rarity.displayValue)||r.push(e.rarity.displayValue):t.push(e.type.displayValue)})),n(e.data.data.filter((function(e){return"Banner"!==e.type.displayValue&&"null"!==e.type.displayValue&&null!==e.name&&"TBD"!==e.name}))),o({type:t,rarity:r})}));case 10:case"end":return e.stop()}}),e)})),function(){var t=this,n=arguments;return new Promise((function(r,s){var i=e.apply(t,n);function a(e){G(i,r,s,a,o,"next",e)}function o(e){G(i,r,s,a,o,"throw",e)}a(void 0)}))});return function(){return r.apply(this,arguments)}}(),k=[];return t.filter((function(e,t){return t<d})).map((function(e){k.push((0,r.jsx)(f(),{href:"/".concat(e.type.value.replace(" ","-"),"/").concat(e.name.replace(" ","-").toLowerCase()),children:(0,r.jsx)("a",{className:"w-1/2 md:w-1/4 lg:w-1/6 cursor-pointer",children:(0,r.jsxs)("div",{className:"m-4 ring-2 ring-gray-900",children:[(0,r.jsx)(p(),{src:null!==e.images.icon?e.images.icon:e.images.smallIcon,width:512,height:512,layout:"responsive"}),(0,r.jsxs)("div",{className:"bg-zinc-700/60 p-2 text-white flex flex-col text-center",children:[(0,r.jsx)("div",{children:e.name}),(0,r.jsx)("span",{className:"mt-2 p-2 bg-gray-900",children:e.type.displayValue})]})]})},e.id)}))})),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(z,{items:t,setItemStat:w,setItems:n,listItem:i,setListItem:o}),!0===g?(0,r.jsx)(m(),{pageStart:0,hasMore:v,loadMore:j,style:{width:"100%"},loader:(0,r.jsx)("div",{className:"loader w-full flex justify-center mt-12 text-6xl text-white",children:"LOADING ..."},0),children:(0,r.jsx)("div",{className:"w-full flex flex-row flex-wrap justify-center",children:k})}):(0,r.jsx)(F.Z,{errText:"COSMETIC NOT FOUND"})]})},$=function(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.Z,{}),(0,r.jsx)(Z,{})]})}},2703:function(e,t,n){"use strict";var r=n(414);function s(){}function i(){}i.resetWarningCache=s,e.exports=function(){function e(e,t,n,s,i,a){if(a!==r){var o=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw o.name="Invariant Violation",o}}function t(){return e}e.isRequired=e;var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:i,resetWarningCache:s};return n.PropTypes=n,n}},5697:function(e,t,n){e.exports=n(2703)()},414:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},7761:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=n(7294),i=o(s),a=o(n(5697));function o(e){return e&&e.__esModule?e:{default:e}}var l=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.scrollListener=n.scrollListener.bind(n),n.eventListenerOptions=n.eventListenerOptions.bind(n),n.mousewheelListener=n.mousewheelListener.bind(n),n}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),r(t,[{key:"componentDidMount",value:function(){this.pageLoaded=this.props.pageStart,this.options=this.eventListenerOptions(),this.attachScrollListener()}},{key:"componentDidUpdate",value:function(){if(this.props.isReverse&&this.loadMore){var e=this.getParentElement(this.scrollComponent);e.scrollTop=e.scrollHeight-this.beforeScrollHeight+this.beforeScrollTop,this.loadMore=!1}this.attachScrollListener()}},{key:"componentWillUnmount",value:function(){this.detachScrollListener(),this.detachMousewheelListener()}},{key:"isPassiveSupported",value:function(){var e=!1,t={get passive(){e=!0}};try{document.addEventListener("test",null,t),document.removeEventListener("test",null,t)}catch(n){}return e}},{key:"eventListenerOptions",value:function(){this.props.useCapture;return this.isPassiveSupported()?{useCapture:this.props.useCapture,passive:!0}:{passive:!1}}},{key:"setDefaultLoader",value:function(e){this.defaultLoader=e}},{key:"detachMousewheelListener",value:function(){var e=window;!1===this.props.useWindow&&(e=this.scrollComponent.parentNode),e.removeEventListener("mousewheel",this.mousewheelListener,this.options?this.options:this.props.useCapture)}},{key:"detachScrollListener",value:function(){var e=window;!1===this.props.useWindow&&(e=this.getParentElement(this.scrollComponent)),e.removeEventListener("scroll",this.scrollListener,this.options?this.options:this.props.useCapture),e.removeEventListener("resize",this.scrollListener,this.options?this.options:this.props.useCapture)}},{key:"getParentElement",value:function(e){var t=this.props.getScrollParent&&this.props.getScrollParent();return null!=t?t:e&&e.parentNode}},{key:"filterProps",value:function(e){return e}},{key:"attachScrollListener",value:function(){var e=this.getParentElement(this.scrollComponent);if(this.props.hasMore&&e){var t=window;!1===this.props.useWindow&&(t=e),t.addEventListener("mousewheel",this.mousewheelListener,this.options?this.options:this.props.useCapture),t.addEventListener("scroll",this.scrollListener,this.options?this.options:this.props.useCapture),t.addEventListener("resize",this.scrollListener,this.options?this.options:this.props.useCapture),this.props.initialLoad&&this.scrollListener()}}},{key:"mousewheelListener",value:function(e){1!==e.deltaY||this.isPassiveSupported()||e.preventDefault()}},{key:"scrollListener",value:function(){var e=this.scrollComponent,t=window,n=this.getParentElement(e),r=void 0;if(this.props.useWindow){var s=document.documentElement||document.body.parentNode||document.body,i=void 0!==t.pageYOffset?t.pageYOffset:s.scrollTop;r=this.props.isReverse?i:this.calculateOffset(e,i)}else r=this.props.isReverse?n.scrollTop:e.scrollHeight-n.scrollTop-n.clientHeight;r<Number(this.props.threshold)&&e&&null!==e.offsetParent&&(this.detachScrollListener(),this.beforeScrollHeight=n.scrollHeight,this.beforeScrollTop=n.scrollTop,"function"===typeof this.props.loadMore&&(this.props.loadMore(this.pageLoaded+=1),this.loadMore=!0))}},{key:"calculateOffset",value:function(e,t){return e?this.calculateTopPosition(e)+(e.offsetHeight-t-window.innerHeight):0}},{key:"calculateTopPosition",value:function(e){return e?e.offsetTop+this.calculateTopPosition(e.offsetParent):0}},{key:"render",value:function(){var e=this,t=this.filterProps(this.props),n=t.children,r=t.element,s=t.hasMore,a=(t.initialLoad,t.isReverse),o=t.loader,l=(t.loadMore,t.pageStart,t.ref),u=(t.threshold,t.useCapture,t.useWindow,t.getScrollParent,function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}(t,["children","element","hasMore","initialLoad","isReverse","loader","loadMore","pageStart","ref","threshold","useCapture","useWindow","getScrollParent"]));u.ref=function(t){e.scrollComponent=t,l&&l(t)};var c=[n];return s&&(o?a?c.unshift(o):c.push(o):this.defaultLoader&&(a?c.unshift(this.defaultLoader):c.push(this.defaultLoader))),i.default.createElement(r,u,c)}}]),t}(s.Component);l.propTypes={children:a.default.node.isRequired,element:a.default.node,hasMore:a.default.bool,initialLoad:a.default.bool,isReverse:a.default.bool,loader:a.default.node,loadMore:a.default.func.isRequired,pageStart:a.default.number,ref:a.default.func,getScrollParent:a.default.func,threshold:a.default.number,useCapture:a.default.bool,useWindow:a.default.bool},l.defaultProps={element:"div",hasMore:!1,initialLoad:!0,pageStart:0,ref:null,threshold:250,useWindow:!0,isReverse:!1,useCapture:!1,loader:null,getScrollParent:null},t.default=l,e.exports=t.default},246:function(e,t,n){e.exports=n(7761)}},function(e){e.O(0,[669,675,929,774,888,179],(function(){return t=8688,e(e.s=t);var t}));var t=e.O();_N_E=t}]);