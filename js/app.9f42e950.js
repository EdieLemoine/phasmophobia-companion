(function(e){function t(t){for(var a,i,r=t[0],l=t[1],c=t[2],u=0,h=[];u<r.length;u++)i=r[u],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&h.push(o[i][0]),o[i]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a]);d&&d(t);while(h.length)h.shift()();return s.push.apply(s,c||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],a=!0,i=1;i<n.length;i++){var r=n[i];0!==o[r]&&(a=!1)}a&&(s.splice(t--,1),e=l(l.s=n[0]))}return e}var a={},i={app:0},o={app:0},s=[];function r(e){return l.p+"js/"+({}[e]||e)+"."+{"chunk-1a06ad9e":"0c6c5f7c","chunk-1d4a68f5":"d1489aaa","chunk-2d22253b":"c6adfb7f","chunk-43d71026":"0ccb9f09","chunk-8b60d1a8":"d530e578","chunk-cc90d35a":"35cb44ce"}[e]+".js"}function l(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.e=function(e){var t=[],n={"chunk-43d71026":1};i[e]?t.push(i[e]):0!==i[e]&&n[e]&&t.push(i[e]=new Promise((function(t,n){for(var a="css/"+({}[e]||e)+"."+{"chunk-1a06ad9e":"31d6cfe0","chunk-1d4a68f5":"31d6cfe0","chunk-2d22253b":"31d6cfe0","chunk-43d71026":"11919d79","chunk-8b60d1a8":"31d6cfe0","chunk-cc90d35a":"31d6cfe0"}[e]+".css",o=l.p+a,s=document.getElementsByTagName("link"),r=0;r<s.length;r++){var c=s[r],u=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(u===a||u===o))return t()}var h=document.getElementsByTagName("style");for(r=0;r<h.length;r++){c=h[r],u=c.getAttribute("data-href");if(u===a||u===o)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var a=t&&t.target&&t.target.src||o,s=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=a,delete i[e],d.parentNode.removeChild(d),n(s)},d.href=o;var f=document.getElementsByTagName("head")[0];f.appendChild(d)})).then((function(){i[e]=0})));var a=o[e];if(0!==a)if(a)t.push(a[2]);else{var s=new Promise((function(t,n){a=o[e]=[t,n]}));t.push(a[2]=s);var c,u=document.createElement("script");u.charset="utf-8",u.timeout=120,l.nc&&u.setAttribute("nonce",l.nc),u.src=r(e);var h=new Error;c=function(t){u.onerror=u.onload=null,clearTimeout(d);var n=o[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),i=t&&t.target&&t.target.src;h.message="Loading chunk "+e+" failed.\n("+a+": "+i+")",h.name="ChunkLoadError",h.type=a,h.request=i,n[1](h)}o[e]=void 0}};var d=setTimeout((function(){c({type:"timeout",target:u})}),12e4);u.onerror=u.onload=c,document.head.appendChild(u)}return Promise.all(t)},l.m=e,l.c=a,l.d=function(e,t,n){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)l.d(n,a,function(t){return e[t]}.bind(null,a));return n},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/phasmophobia/",l.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=t,c=c.slice();for(var h=0;h<c.length;h++)t(c[h]);var d=u;s.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"2c6f":function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"f",(function(){return i})),n.d(t,"e",(function(){return o})),n.d(t,"g",(function(){return s})),n.d(t,"c",(function(){return r})),n.d(t,"d",(function(){return l})),n.d(t,"a",(function(){return c})),n.d(t,"h",(function(){return u}));var a="emf5",i="writing",o="orbs",s="spiritBox",r="fingerprints",l="freezingTemps",c="dotsProjector",u=[{name:"EMF Level 5",key:a},{name:"Ghost Writing",key:i},{name:"Ghost Orbs",key:o},{name:"Spirit Box",key:s},{name:"Fingerprints",key:r},{name:"Freezing Temperatures",key:l},{name:"D.O.T.S. Projector",key:c}]},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("7d05");var a=n("2b0e"),i=n("aff1"),o=n.n(i),s={TSelect:{wrapped:!0,fixedClasses:{wrapper:"relative",input:"bg-transparent appearance-none focus:outline-none focus:shadow-outline py-2 pr-6 px-3 block w-full",arrowWrapper:"pointer-events-none absolute inset-y-0 right-0 flex items-center px-2",arrow:"fill-current h-4 w-4"},variants:{confirmed:{input:"bg-green-800 text-green-300",arrowWrapper:"text-green-300"},not_likely:{input:"bg-yellow-800 text-yellow-300",arrowWrapper:"text-yellow-300"}}},TTag:{variants:{title:"text-2xl leading-8 font-extrabold mb-2 mt-3",p:"mb-2"}},TTextarea:{fixedClasses:"bg-gray-900 appearance-none focus:outline-none focus:shadow-outline py-2 pr-6 px-3 block w-full mb-2",variants:{danger:"border-red-300 bg-red-50 placeholder-red-200 text-red-900",success:"border-green-300 bg-green-50 placeholder-gray-400 text-green-900"}},TButton:{fixedClasses:"whitespace-nowrap flex-1 px-2 py-1 focus:outline-none focus:shadow-outline transition-colors duration-100 hover:bg-gray-900 transition-colors duration-200"},TInput:{classes:"bg-gray-900 focus:outline-none focus:shadow-outline py-2 px-4"}};a["default"].use(o.a,s);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"flex p-2"},[n("div",{staticClass:"max-w-screen-xl mx-auto w-full"},[n("ShotmophobiaBanner"),n("div",{staticClass:"flex"},[n("EntityData"),n("div",{staticClass:"ml-auto my-auto"},[n("TButton",{ref:"reset",staticClass:"active:bg-gray-700 h-100 hover:bg-gray-900",on:{click:function(t){return e.$eventBus.triggerKey("r")}}},[n("span",{staticClass:"underline"},[e._v("R")]),e._v("eset ")])],1)],1),n("EvidenceTable"),n("div",{staticClass:"mt-2"},[n("TButton",{staticClass:"opacity-50",attrs:{"tag-name":"a",target:"_blank",href:"https://github.com/EdieLemoine/phasmophobia"}},[e._v(" Open on GitHub ")])],1)],1)])},l=[],c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"flex flex-col"},[n("TextElement",{attrs:{title:"Entity name..."},model:{value:e.entityName,callback:function(t){e.entityName=t},expression:"entityName"}}),n("ToggleableText",{staticClass:"pl-2",scopedSlots:e._u([{key:"one",fn:function(){return[e._v(" Responds to everyone ")]},proxy:!0},{key:"two",fn:function(){return[e._v(" Only responds to people who are alone ")]},proxy:!0}]),model:{value:e.alone,callback:function(t){e.alone=t},expression:"alone"}})],1)},u=[],h=(n("d3b7"),n("3ca3"),n("ddb0"),{name:"EntityData",components:{TextElement:function(){return n.e("chunk-1a06ad9e").then(n.bind(null,"9245"))},ToggleableText:function(){return n.e("chunk-8b60d1a8").then(n.bind(null,"bc99"))}},data:function(){return{entityName:null,alone:null}},watch:{entityName:function(){this.$eventBus.save("entity-name",this.entityName)},alone:function(){this.$eventBus.save("alone",this.alone)}},created:function(){this.alone=this.$eventBus.load("alone"),this.entityName=this.$eventBus.load("entity-name"),this.$eventBus.$on("key:r",this.reset)},beforeDestroy:function(){this.$eventBus.$off("key:r",this.reset)},methods:{reset:function(){this.alone=!1,this.entityName=null}}}),d=h,f=n("2877"),y=Object(f["a"])(d,c,u,!1,null,null,null),m=y.exports,g=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("Grid",{attrs:{cols:"8"}},[n("div",{staticClass:"border-b"}),e._l(e.evidence,(function(t){return n("div",{key:"evidence__"+t.key,staticClass:"border-b flex py-2 text-center"},[n("span",{staticClass:"m-auto",domProps:{textContent:e._s(t.name)}})])})),n("div"),e._l(e.evidence,(function(t){return n("EvidenceSelect",{key:t.key,staticClass:"w-full",attrs:{"select-class":"focus:z-10"},model:{value:e.evidenceModel[t.key],callback:function(n){e.$set(e.evidenceModel,t.key,n)},expression:"evidenceModel[evidenceItem.key]"}})})),n("div",{staticClass:"col-span-8 entity__row"},[n("TransitionGroup",{staticClass:"relative",attrs:{tag:"div",name:"list",mode:"out-in"}},e._l(e.possibleEntities,(function(t,a){return n("div",{key:"entity--"+t.key,staticClass:"duration-100 entity__details focus:outline-none focus:shadow-outline focus:z-10 group hover:bg-gray-900 relative transition-colors",attrs:{tabindex:"0","data-index":a},on:{keyup:[function(n){return!n.type.indexOf("key")&&e._k(n.keyCode,"up",38,n.key,["Up","ArrowUp"])?null:(n.preventDefault(),function(n){return e.selectNextElement(n,t,a)}.apply(null,arguments))},function(n){return!n.type.indexOf("key")&&e._k(n.keyCode,"down",40,n.key,["Down","ArrowDown"])?null:(n.preventDefault(),function(n){return e.selectNextElement(n,t,a)}.apply(null,arguments))},function(n){return!n.type.indexOf("key")&&e._k(n.keyCode,"enter",13,n.key,"Enter")?null:(n.preventDefault(),function(){return e.toggleDetails(t)}.apply(null,arguments))},function(n){return!n.type.indexOf("key")&&e._k(n.keyCode,"space",32,n.key,[" ","Spacebar"])?null:(n.preventDefault(),function(){return e.toggleDetails(t)}.apply(null,arguments))}],click:function(){return e.toggleDetails(t)}}},[n("div",{key:t.key+"__data",staticClass:"col-span-8 cursor-pointer duration-150 entity__row grid grid-cols-8 relative transition-colors"},[n("div",{staticClass:"flex px-3",class:{"bg-gray-900":e.shownDetails===t.key,"opacity-75":-1===e.getLikelihood(t),"opacity-50":-2===e.getLikelihood(t),"opacity-25":e.getLikelihood(t)<-2}},[n("h4",{staticClass:"ml-auto my-auto",domProps:{textContent:e._s(t.name)}})]),e._l(e.evidence,(function(a){return n("div",{directives:[{name:"show",rawName:"v-show",value:e.isPossible(t),expression:"isPossible(entity)"}],key:"entity--"+t.key+"--"+a.key,staticClass:"duration-100 py-2 text-center transition-colors",class:{"bg-green-900 group-hover:bg-green-800 group-focus:bg-green-800":e.entityHasEvidence(t,a),"bg-yellow-900 group-hover:bg-yellow-800 group-focus:bg-yellow-800":e.entityHasInconclusiveEvidence(t,a),"bg-red-900 group-hover:bg-red-800 group-focus:bg-red-800":!e.entityHasEvidence(t,a),"opacity-75":-1===e.getLikelihood(t),"opacity-50":-2===e.getLikelihood(t),"opacity-25":e.getLikelihood(t)<-2}},[e.entityHasInconclusiveEvidence(t,a)?n("Icon",{staticClass:"text-yellow-300",attrs:{icon:"tilde"}}):e.entityHasEvidence(t,a)?n("Icon",{staticClass:"text-green-300",attrs:{icon:"check"}}):n("Icon",{staticClass:"text-red-300",attrs:{icon:"times"}})],1)})),n("TransitionExpand",{key:t.key+"__data",staticClass:"col-span-8"},[n("div",{directives:[{name:"show",rawName:"v-show",value:e.isPossible(t)&&e.shownDetails===t.key,expression:"isPossible(entity) && shownDetails === entity.key"}],staticClass:"bg-gray-900"},e._l(e.details,(function(a){return n("div",{key:t.key+"__"+a.key,staticClass:"p-4"},[n("h3",{staticClass:"text-gray-300",domProps:{textContent:e._s(a.name)}}),n("ul",e._l(t[a.key],(function(i,o){return n("li",{key:t.key+"__"+a+"--"+o,domProps:{textContent:e._s(i)}})})),0)])})),0)])],2)])})),0)],1)],2)},p=[],v=(n("4e82"),n("4de4"),n("159b"),n("b64b"),n("caad"),n("2532"),n("a9e3"),n("a78e")),b=n.n(v),k=n("8207"),w=[{name:"Details",key:"details"},{name:"Strengths",key:"strengths"},{name:"Weaknesses",key:"weaknesses"}],x=n("a79b"),T=n("2c6f"),_=1,E={methods:{generateTabIndex:function(){return _++,_}}},C=[{key:"not_likely",text:"Not likely",icon:"⁓",classes:"text-yellow-300",activeClasses:"bg-yellow-800"},{key:"maybe",text:"Maybe",icon:"?"},{key:"confirmed",text:"Confirmed",icon:"✓",classes:"text-green-300",activeClasses:"bg-green-800"}],O=n("bb45"),S=n.n(O),j=b.a.get("evidence"),D={name:"EvidenceTable",components:{Grid:k["a"],Icon:function(){return n.e("chunk-2d22253b").then(n.bind(null,"cdae"))},TransitionExpand:function(){return n.e("chunk-43d71026").then(n.bind(null,"f693"))},EvidenceSelect:function(){return n.e("chunk-cc90d35a").then(n.bind(null,"db51"))}},mixins:[E,S.a],data:function(){return{details:w,entities:x["a"],evidence:T["h"],options:C,evidenceModel:j||{},shownDetails:null}},computed:{possibleEntities:function(){var e=this;return this.entities.filter(this.isPossible).sort((function(t,n){return e.getLikelihood(n)-e.getLikelihood(t)}))}},watch:{possibleEntities:function(){1===this.possibleEntities.length?this.toggleDetails(this.possibleEntities[0]):this.shownDetails=null},evidenceModel:{handler:function(e){this.$eventBus.save("evidence",e)},deep:!0}},created:function(){this.$eventBus.$on("key:r",this.reset)},beforeUnmount:function(){this.$eventBus.$off("key:r",this.reset)},mounted:function(){var e;this.$smoothReflow({el:".entity__wrapper",transitionEvent:{selector:"div",propertyName:"opacity"}}),this.evidenceModel=null!==(e=this.$eventBus.load("evidence"))&&void 0!==e?e:{}},methods:{getLikelihood:function(e){var t=this,n=0;return Object.keys(this.evidenceModel).forEach((function(a){var i=t.entityHasEvidence(e,{key:a}),o=t.evidenceModel[a];i&&"not_likely"===o&&(n-=1)})),n},entityHasEvidence:function(e,t){return e.evidence.includes(t.key)},entityHasInconclusiveEvidence:function(e,t){var n;return Boolean(null===(n=e.inconclusiveEvidence)||void 0===n?void 0:n.includes(t.key))},isPossible:function(e){var t=this;return T["h"].every((function(n){return t.entityHasInconclusiveEvidence(e,n)||t.entityHasEvidence(e,n)||"confirmed"!==t.evidenceModel[n.key]}))},toggleDetails:function(e){this.shownDetails=this.shownDetails===e.key?null:e.key},selectNextElement:function(e,t,n){var a="ArrowDown"===e.key,i=document.querySelectorAll(".entity__details"),o=a?1:-1;i.forEach((function(e){var t=Number(e.getAttribute("data-index"));0===e.tabIndex&&n+o===t&&e.focus()}))},reset:function(){this.shownDetails=null,this.evidenceModel={}}}},A=D,B=Object(f["a"])(A,g,p,!1,null,null,null),M=B.exports,P=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.allowed?n("div",[n("div",{staticClass:"flex"},[n("TButton",{ref:"shotmophobia",staticClass:"active:bg-gray-700 flex-grow-0 h-100 hover:bg-gray-900 ml-auto",class:{"bg-green-900":e.shotmophobia},on:{click:function(t){e.shotmophobia=!e.shotmophobia}}},[e._v(" Shotmophobia mode ")])],1),n("KeepAlive",[e.shotmophobia?n("Shotmophobia"):e._e()],1)],1):e._e()},$=[],L={name:"ShotmophobiaBanner",components:{Shotmophobia:function(){return n.e("chunk-1d4a68f5").then(n.bind(null,"bb91"))}},data:function(){return{allowed:!1,shotmophobia:!1}},mounted:function(){var e=localStorage.getItem("ALLOW_SHOTS");this.allowed=!0===e}},N=L,H=Object(f["a"])(N,P,$,!1,null,null,null),W=H.exports,I={name:"App",components:{ShotmophobiaBanner:W,EntityData:m,EvidenceTable:M}},R=I,G=Object(f["a"])(R,r,l,!1,null,null,null),K=G.exports,Y=n("d3e3"),q=n("c28b"),J=n.n(q);a["default"].config.productionTip=!1,a["default"].use(J.a),a["default"].prototype.$eventBus=Y["a"],new a["default"]({render:function(e){return e(K)}}).$mount("#app")},"7d05":function(e,t,n){},8207:function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"bg-black border grid inline-block mb-5 mt-2 overflow-hidden p-2 relative rounded w-full",class:e.colsClass},[e._t("default")],2)},i=[],o=(n("a9e3"),n("d4ec")),s=n("bee2"),r=n("d5e4"),l=n("5364"),c=n("9bd1"),u=(n("caad"),n("2532"),n("b64b"),n("a15b"),n("99af"),n("d3b7"),n("3ca3"),n("10d1"),n("ddb0"),new WeakMap),h=function(){function e(t){Object(o["a"])(this,e),Object(r["a"])(this,u,{writable:!0,value:void 0}),Object(c["a"])(this,u,t)}return Object(s["a"])(e,[{key:"check",value:function(e){var t;return t=Array.isArray(Object(l["a"])(this,u))?Object(l["a"])(this,u).includes(e):Object(l["a"])(this,u).hasOwnProperty(e),t||this.logError(e),t}},{key:"get",value:function(e){return this.check(e),Object(l["a"])(this,u)[e]}},{key:"logError",value:function(e){var t=Array.isArray(Object(l["a"])(this,u))?Object(l["a"])(this,u):Object.keys(Object(l["a"])(this,u)),n=t.join(", ");console.error('Did not find "'.concat(e,'" in the class map. You have to manually add this class to the map or use an existing one instead: ').concat(n,"."))}}]),e}(),d=new h({5:"grid-cols-5",8:"grid-cols-8"}),f={name:"Grid",props:{cols:{type:[Number,String],default:1}},computed:{colsClass:function(){return d.get(this.cols)}}},y=f,m=n("2877"),g=Object(m["a"])(y,a,i,!1,null,null,null);t["a"]=g.exports},a79b:function(e,t,n){"use strict";n.d(t,"a",(function(){return E}));var a=n("2c6f"),i="spirit",o="wraith",s="phantom",r="poltergeist",l="banshee",c="jinn",u="mare",h="revenant",d="shade",f="demon",y="yurei",m="oni",g="hantu",p="yokai",v="goryo",b="myling",k="onyro",w="the_twins",x="raiju",T="obake",_="the_mimic",E=[{name:"Spirit",key:i,evidence:[a["b"],a["g"],a["f"]],details:["Spirits are very common ghosts. They are very powerful, but passive, only attacking when they need to. They defend their place of death to the utmost degree, killing anyone that is caught overstaying their welcome."],strengths:["None."],weaknesses:["A Spirit can be temporarily stopped by burning Smudge Sticks near them."]},{name:"Wraith",key:o,evidence:[a["b"],a["g"],a["a"]],details:["A Wraith is one of the most dangerous ghosts you will find. They are also the only known ghost that has the ability of flight and has sometimes been known to travel through walls."],strengths:["Wraiths almost never touch the ground, meaning they can't be tracked with footsteps."],weaknesses:["The Wraith reacts badly to Salt."]},{name:"Phantom",key:s,evidence:[a["g"],a["c"],a["a"]],details:["A Phantom is a ghost that can possess the living, inducing fear in those around them. They are most commonly summoned by Ouija Boards."],strengths:["Looking at a Phantom will drop your sanity considerably faster."],weaknesses:["Taking a photo of the Phantom will make them temporarily disappear."]},{name:"Poltergeist",key:r,evidence:[a["g"],a["c"],a["f"]],details:["One of the most famous ghosts, the Poltergeist. Known to manipulate objects around them to spread fear into their victims."],strengths:["Poltergeists can throw multiple objects at once."],weaknesses:["With nothing to throw, Poltergeists become powerless."]},{name:"Banshee",key:l,evidence:[a["c"],a["e"],a["a"]],details:["The singing siren, known for attracting their victims through song. They have been known to single out their prey before making a killing blow."],strengths:["Banshees will weaken their target before striking."],weaknesses:["Banshees can sometimes be heard screaming with a parabolic microphone."]},{name:"Jinn",key:c,evidence:[a["b"],a["c"],a["d"]],details:["A Jinn is a territorial ghost that will attack when threatened. They have also been known to be able to travel at significant speed."],strengths:["A Jinn will travel at a faster speed if their victim is far away."],weaknesses:["Turning off the location's power source will prevent the Jinn from using their ability."]},{name:"Mare",key:u,evidence:[a["g"],a["e"],a["f"]],details:["A Mare is the source of all nightmares, making them most powerful in the dark."],strengths:["A Mare will have an increased chance to attack in the dark."],weaknesses:["Turning the lights on around the Mare will lower their chance to attack."]},{name:"Revenant",key:h,evidence:[a["e"],a["f"],a["d"]],details:["A Revenant is a violent ghost that will attack indiscriminately. Their speed can be deceiving, as they are slow while dormant; however, as soon as they hunt they can move incredibly fast."],strengths:["A Revenant will travel at a significantly faster speed when hunting their prey."],weaknesses:["Hiding from the Revenant will cause it to move very slowly."]},{name:"Shade",key:d,evidence:[a["b"],a["f"],a["d"]],details:["A Shade is known to be very shy. There is evidence to suggest that a Shade will stop all paranormal activity if there are multiple people nearby."],strengths:["Shades are much harder to find."],weaknesses:["A Shade will not enter a hunt if there are multiple people nearby."]},{name:"Demon",key:f,evidence:[a["c"],a["f"],a["d"]],details:["Demons are the most aggressive ghosts we've ever encountered. Known to attack without reason, they seem to enjoy the thrill of the hunt."],strengths:["Demons will initiate hunts more often than other ghosts."],weaknesses:["Demons fear the Crucifix and will be less aggressive near one."]},{name:"Yurei",key:y,evidence:[a["e"],a["d"],a["a"]],details:["A Yurei is a ghost that has returned to the physical world, usually for the purpose of revenge or hatred."],strengths:["Yureis have been known to have a stronger effect on people's sanity."],weaknesses:["Smudging the Yurei's place of death will trap it temporarily, reducing how much it wanders."]},{name:"Oni",key:m,evidence:[a["b"],a["d"],a["a"]],details:["Onis love to scare their victims as much as possible before attacking. They are often seen in their physical form, guarding their place of death."],strengths:["Onis are more active when people are nearby, and have been seen moving objects at great speed."],weaknesses:["Onis are very active, making them easier to find."]},{name:"Yokai",key:p,evidence:[a["g"],a["e"],a["a"]],details:["Yokai are common ghosts that are attracted to human voices. They can usually be found haunting family homes."],strengths:["Talking near a Yokai will anger them, increasing the chance of an attack."],weaknesses:["When hunting, a Yokai can only hear voices close to them."]},{name:"Hantu",key:g,evidence:[a["c"],a["e"],a["d"]],details:["A Hantu is a rare ghost that thrives in the coldest climates. The cold seems to make them more aggressive and empowered."],strengths:["Lower temperatures allow the Hantu to move at faster speeds."],weaknesses:["Hantus move move slower in warmer areas."]},{name:"Goryo",key:v,evidence:[a["b"],a["c"],a["a"]],strengths:["A Goryo will usually only show themselves on camera if there are no people nearby."],weaknesses:["They are rarely seen far from their place of death."],details:["When a Goryo passes through a D.O.T.S. projector, using a video camera is the only way to them."]},{name:"Myling",key:b,evidence:[a["b"],a["c"],a["f"]],strengths:["A Myling is known to be quieter when hunting."],weaknesses:["Mylings more frequently make paranormal sounds."],details:["A Myling is a very vocal and active ghost. They are rumoured to be quiet when hunting their prey."]},{name:"Onyro",key:k,evidence:[a["g"],a["e"],a["d"]],details:['The Onyro is often referred to as "The Wrathful Spirit". It steals souls from dying victims\' bodies to seek revenge. This ghost has been known to fear any form of fire, and will do anything to be far from it.'],strengths:["Extinguishing a flame can cause an Onyro to attack."],weaknesses:["When threatened, this ghost will be less likely to hunt."]},{name:"The Twins",key:w,evidence:[a["b"],a["g"],a["d"]],details:["These ghosts have been reported to mimic each other's actions. They alternate their attacks to confuse their prey."],strengths:["Either Twin can be angered and initiate an attack on their prey."],weaknesses:["The Twins will often interact with the environment at the same time."]},{name:"Raiju",key:x,evidence:[a["b"],a["e"],a["a"]],details:["A Raiju is a demon that thrives on electrical current. While generally calm, they can become agitated when overwhelmed with power."],strengths:["A Raiju can siphon power from nearby electrical devices, making it move faster."],weaknesses:["Raiju are constantly disrupting electronic equipment when attacking, making it easier to track."]},{name:"Obake",key:T,evidence:[a["b"],a["c"],a["e"]],details:["Obake are terrifying shape-shifters, capable of taking of many forms. They have been seen taking on humanoid shapes to attract their prey."],strengths:["When interacting with the environment, an Obake will rarely leave a trace."],weaknesses:["Sometimes, this ghost will shape-shift, leaving behind unique evidence."]},{name:"The Mimic",key:_,evidence:[a["g"],a["c"],a["d"]],inconclusiveEvidence:[a["e"]],details:["The Mimic is an elusive, mysterious, copycat ghost that mirrors traits and behaviours from others, including other ghost types."],strengths:["We're unsure what this ghost is capable of. Be careful."],weaknesses:["Several reports have noted ghost orb sightings near mimics."]}]},d3e3:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));n("d3b7"),n("caad");var a=n("a78e"),i=n.n(a),o=n("2b0e"),s=["r"],r=["Tab","Shift","Meta","Alt","Control"],l=[HTMLInputElement,HTMLSelectElement],c=new o["default"]({name:"EventBus",data:function(){return{data:null}},created:function(){this.data=i.a.get("data"),window.addEventListener("keydown",this.globalKeyDown)},beforeDestroy:function(){window.removeEventListener("keydown",this.globalKeyDown)},methods:{triggerKey:function(e){this.globalKeyDown({key:e})},globalKeyDown:function(e){if(e instanceof Event){var t=l.some((function(t){return e.target instanceof t})),n=r.some((function(t){return e.getModifierState(t)}));if(t||n)return}s.includes(e.key)&&this.$emit("key:".concat(e.key))},save:function(e,t){i.a.set(e,t)},load:function(e){var t=i.a.get(e);if(t){try{t=JSON.parse(t)}catch(n){}return t}return null}}})}});