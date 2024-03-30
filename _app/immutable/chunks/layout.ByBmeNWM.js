import{s as We,P as De,e as ae,a as Ue,c as le,b as ce,f as te,g as Be,u as H,i as Ke,h as de,Q as He,R as qe,S as Je,D as Xe,T as we}from"./scheduler.CdObCiHk.js";import{S as Ze,i as Qe,a as Ye,t as et}from"./index.DHQhg2K_.js";import{d as tt,r as X,w as ze}from"./paths.iBD0Lfj9.js";function Qt(e){return(e==null?void 0:e.length)!==void 0?e:Array.from(e)}function Yt(e,r){const t={},o={},a={$$scope:1};let n=e.length;for(;n--;){const s=e[n],i=r[n];if(i){for(const l in s)l in i||(o[l]=1);for(const l in i)a[l]||(t[l]=i[l],a[l]=1);e[n]=i}else for(const l in s)a[l]=1}for(const s in o)s in t||(t[s]=void 0);return t}function er(e){return typeof e=="object"&&e!==null?e:{}}var xe=e=>typeof e=="boolean"?`${e}`:e===0?"0":e,z=e=>!e||typeof e!="object"||Object.keys(e).length===0,rt=(e,r)=>JSON.stringify(e)===JSON.stringify(r);function Pe(e,r){e.forEach(function(t){Array.isArray(t)?Pe(t,r):r.push(t)})}function Ve(e){let r=[];return Pe(e,r),r}var je=(...e)=>Ve(e).filter(Boolean),me=(e,r)=>{let t={},o=Object.keys(e),a=Object.keys(r);for(let n of o)if(a.includes(n)){let s=e[n],i=r[n];typeof s=="object"&&typeof i=="object"?t[n]=me(s,i):Array.isArray(s)||Array.isArray(i)?t[n]=je(i,s):t[n]=i+" "+s}else t[n]=e[n];for(let n of a)o.includes(n)||(t[n]=r[n]);return t},ke=e=>!e||typeof e!="string"?e:e.replace(/\s+/g," ").trim();const he="-";function ot(e){const r=st(e),{conflictingClassGroups:t,conflictingClassGroupModifiers:o}=e;function a(s){const i=s.split(he);return i[0]===""&&i.length!==1&&i.shift(),Te(i,r)||nt(s)}function n(s,i){const l=t[s]||[];return i&&o[s]?[...l,...o[s]]:l}return{getClassGroupId:a,getConflictingClassGroupIds:n}}function Te(e,r){var s;if(e.length===0)return r.classGroupId;const t=e[0],o=r.nextPart.get(t),a=o?Te(e.slice(1),o):void 0;if(a)return a;if(r.validators.length===0)return;const n=e.join(he);return(s=r.validators.find(({validator:i})=>i(n)))==null?void 0:s.classGroupId}const Ae=/^\[(.+)\]$/;function nt(e){if(Ae.test(e)){const r=Ae.exec(e)[1],t=r==null?void 0:r.substring(0,r.indexOf(":"));if(t)return"arbitrary.."+t}}function st(e){const{theme:r,prefix:t}=e,o={nextPart:new Map,validators:[]};return at(Object.entries(e.classGroups),t).forEach(([n,s])=>{fe(s,o,n,r)}),o}function fe(e,r,t,o){e.forEach(a=>{if(typeof a=="string"){const n=a===""?r:Ce(r,a);n.classGroupId=t;return}if(typeof a=="function"){if(it(a)){fe(a(o),r,t,o);return}r.validators.push({validator:a,classGroupId:t});return}Object.entries(a).forEach(([n,s])=>{fe(s,Ce(r,n),t,o)})})}function Ce(e,r){let t=e;return r.split(he).forEach(o=>{t.nextPart.has(o)||t.nextPart.set(o,{nextPart:new Map,validators:[]}),t=t.nextPart.get(o)}),t}function it(e){return e.isThemeGetter}function at(e,r){return r?e.map(([t,o])=>{const a=o.map(n=>typeof n=="string"?r+n:typeof n=="object"?Object.fromEntries(Object.entries(n).map(([s,i])=>[r+s,i])):n);return[t,a]}):e}function lt(e){if(e<1)return{get:()=>{},set:()=>{}};let r=0,t=new Map,o=new Map;function a(n,s){t.set(n,s),r++,r>e&&(r=0,o=t,t=new Map)}return{get(n){let s=t.get(n);if(s!==void 0)return s;if((s=o.get(n))!==void 0)return a(n,s),s},set(n,s){t.has(n)?t.set(n,s):a(n,s)}}}const Fe="!";function ct(e){const r=e.separator,t=r.length===1,o=r[0],a=r.length;return function(s){const i=[];let l=0,u=0,c;for(let y=0;y<s.length;y++){let w=s[y];if(l===0){if(w===o&&(t||s.slice(y,y+a)===r)){i.push(s.slice(u,y)),u=y+a;continue}if(w==="/"){c=y;continue}}w==="["?l++:w==="]"&&l--}const b=i.length===0?s:s.substring(u),S=b.startsWith(Fe),E=S?b.substring(1):b,R=c&&c>u?c-u:void 0;return{modifiers:i,hasImportantModifier:S,baseClassName:E,maybePostfixModifierPosition:R}}}function dt(e){if(e.length<=1)return e;const r=[];let t=[];return e.forEach(o=>{o[0]==="["?(r.push(...t.sort(),o),t=[]):t.push(o)}),r.push(...t.sort()),r}function ut(e){return{cache:lt(e.cacheSize),splitModifiers:ct(e),...ot(e)}}const ft=/\s+/;function pt(e,r){const{splitModifiers:t,getClassGroupId:o,getConflictingClassGroupIds:a}=r,n=new Set;return e.trim().split(ft).map(s=>{const{modifiers:i,hasImportantModifier:l,baseClassName:u,maybePostfixModifierPosition:c}=t(s);let b=o(c?u.substring(0,c):u),S=!!c;if(!b){if(!c)return{isTailwindClass:!1,originalClassName:s};if(b=o(u),!b)return{isTailwindClass:!1,originalClassName:s};S=!1}const E=dt(i).join(":");return{isTailwindClass:!0,modifierId:l?E+Fe:E,classGroupId:b,originalClassName:s,hasPostfixModifier:S}}).reverse().filter(s=>{if(!s.isTailwindClass)return!0;const{modifierId:i,classGroupId:l,hasPostfixModifier:u}=s,c=i+l;return n.has(c)?!1:(n.add(c),a(l,u).forEach(b=>n.add(i+b)),!0)}).reverse().map(s=>s.originalClassName).join(" ")}function bt(){let e=0,r,t,o="";for(;e<arguments.length;)(r=arguments[e++])&&(t=Oe(r))&&(o&&(o+=" "),o+=t);return o}function Oe(e){if(typeof e=="string")return e;let r,t="";for(let o=0;o<e.length;o++)e[o]&&(r=Oe(e[o]))&&(t&&(t+=" "),t+=r);return t}function pe(e,...r){let t,o,a,n=s;function s(l){const u=r.reduce((c,b)=>b(c),e());return t=ut(u),o=t.cache.get,a=t.cache.set,n=i,i(l)}function i(l){const u=o(l);if(u)return u;const c=pt(l,t);return a(l,c),c}return function(){return n(bt.apply(null,arguments))}}function C(e){const r=t=>t[e]||[];return r.isThemeGetter=!0,r}const Ie=/^\[(?:([a-z-]+):)?(.+)\]$/i,gt=/^\d+\/\d+$/,mt=new Set(["px","full","screen"]),ht=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,yt=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,vt=/^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,wt=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,xt=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/;function T(e){return _(e)||mt.has(e)||gt.test(e)}function O(e){return W(e,"length",zt)}function _(e){return!!e&&!Number.isNaN(Number(e))}function re(e){return W(e,"number",_)}function q(e){return!!e&&Number.isInteger(Number(e))}function kt(e){return e.endsWith("%")&&_(e.slice(0,-1))}function f(e){return Ie.test(e)}function I(e){return ht.test(e)}const At=new Set(["length","size","percentage"]);function Ct(e){return W(e,At,_e)}function St(e){return W(e,"position",_e)}const Mt=new Set(["image","url"]);function Et(e){return W(e,Mt,Vt)}function Rt(e){return W(e,"",Pt)}function J(){return!0}function W(e,r,t){const o=Ie.exec(e);return o?o[1]?typeof r=="string"?o[1]===r:r.has(o[1]):t(o[2]):!1}function zt(e){return yt.test(e)&&!vt.test(e)}function _e(){return!1}function Pt(e){return wt.test(e)}function Vt(e){return xt.test(e)}function be(){const e=C("colors"),r=C("spacing"),t=C("blur"),o=C("brightness"),a=C("borderColor"),n=C("borderRadius"),s=C("borderSpacing"),i=C("borderWidth"),l=C("contrast"),u=C("grayscale"),c=C("hueRotate"),b=C("invert"),S=C("gap"),E=C("gradientColorStops"),R=C("gradientColorStopPositions"),y=C("inset"),w=C("margin"),j=C("opacity"),x=C("padding"),Q=C("saturate"),G=C("scale"),Y=C("sepia"),ee=C("skew"),D=C("space"),U=C("translate"),$=()=>["auto","contain","none"],B=()=>["auto","hidden","clip","visible","scroll"],K=()=>["auto",f,r],d=()=>[f,r],g=()=>["",T,O],p=()=>["auto",_,f],h=()=>["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"],m=()=>["solid","dashed","dotted","double","none"],v=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity","plus-lighter"],k=()=>["start","end","center","between","around","evenly","stretch"],A=()=>["","0",f],M=()=>["auto","avoid","all","avoid-page","page","left","right","column"],V=()=>[_,re],P=()=>[_,f];return{cacheSize:500,separator:":",theme:{colors:[J],spacing:[T,O],blur:["none","",I,f],brightness:V(),borderColor:[e],borderRadius:["none","","full",I,f],borderSpacing:d(),borderWidth:g(),contrast:V(),grayscale:A(),hueRotate:P(),invert:A(),gap:d(),gradientColorStops:[e],gradientColorStopPositions:[kt,O],inset:K(),margin:K(),opacity:V(),padding:d(),saturate:V(),scale:V(),sepia:A(),skew:P(),space:d(),translate:d()},classGroups:{aspect:[{aspect:["auto","square","video",f]}],container:["container"],columns:[{columns:[I]}],"break-after":[{"break-after":M()}],"break-before":[{"break-before":M()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:[...h(),f]}],overflow:[{overflow:B()}],"overflow-x":[{"overflow-x":B()}],"overflow-y":[{"overflow-y":B()}],overscroll:[{overscroll:$()}],"overscroll-x":[{"overscroll-x":$()}],"overscroll-y":[{"overscroll-y":$()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:[y]}],"inset-x":[{"inset-x":[y]}],"inset-y":[{"inset-y":[y]}],start:[{start:[y]}],end:[{end:[y]}],top:[{top:[y]}],right:[{right:[y]}],bottom:[{bottom:[y]}],left:[{left:[y]}],visibility:["visible","invisible","collapse"],z:[{z:["auto",q,f]}],basis:[{basis:K()}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["wrap","wrap-reverse","nowrap"]}],flex:[{flex:["1","auto","initial","none",f]}],grow:[{grow:A()}],shrink:[{shrink:A()}],order:[{order:["first","last","none",q,f]}],"grid-cols":[{"grid-cols":[J]}],"col-start-end":[{col:["auto",{span:["full",q,f]},f]}],"col-start":[{"col-start":p()}],"col-end":[{"col-end":p()}],"grid-rows":[{"grid-rows":[J]}],"row-start-end":[{row:["auto",{span:[q,f]},f]}],"row-start":[{"row-start":p()}],"row-end":[{"row-end":p()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":["auto","min","max","fr",f]}],"auto-rows":[{"auto-rows":["auto","min","max","fr",f]}],gap:[{gap:[S]}],"gap-x":[{"gap-x":[S]}],"gap-y":[{"gap-y":[S]}],"justify-content":[{justify:["normal",...k()]}],"justify-items":[{"justify-items":["start","end","center","stretch"]}],"justify-self":[{"justify-self":["auto","start","end","center","stretch"]}],"align-content":[{content:["normal",...k(),"baseline"]}],"align-items":[{items:["start","end","center","baseline","stretch"]}],"align-self":[{self:["auto","start","end","center","stretch","baseline"]}],"place-content":[{"place-content":[...k(),"baseline"]}],"place-items":[{"place-items":["start","end","center","baseline","stretch"]}],"place-self":[{"place-self":["auto","start","end","center","stretch"]}],p:[{p:[x]}],px:[{px:[x]}],py:[{py:[x]}],ps:[{ps:[x]}],pe:[{pe:[x]}],pt:[{pt:[x]}],pr:[{pr:[x]}],pb:[{pb:[x]}],pl:[{pl:[x]}],m:[{m:[w]}],mx:[{mx:[w]}],my:[{my:[w]}],ms:[{ms:[w]}],me:[{me:[w]}],mt:[{mt:[w]}],mr:[{mr:[w]}],mb:[{mb:[w]}],ml:[{ml:[w]}],"space-x":[{"space-x":[D]}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":[D]}],"space-y-reverse":["space-y-reverse"],w:[{w:["auto","min","max","fit","svw","lvw","dvw",f,r]}],"min-w":[{"min-w":[f,r,"min","max","fit"]}],"max-w":[{"max-w":[f,r,"none","full","min","max","fit","prose",{screen:[I]},I]}],h:[{h:[f,r,"auto","min","max","fit","svh","lvh","dvh"]}],"min-h":[{"min-h":[f,r,"min","max","fit","svh","lvh","dvh"]}],"max-h":[{"max-h":[f,r,"min","max","fit","svh","lvh","dvh"]}],size:[{size:[f,r,"auto","min","max","fit"]}],"font-size":[{text:["base",I,O]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:["thin","extralight","light","normal","medium","semibold","bold","extrabold","black",re]}],"font-family":[{font:[J]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractons"],tracking:[{tracking:["tighter","tight","normal","wide","wider","widest",f]}],"line-clamp":[{"line-clamp":["none",_,re]}],leading:[{leading:["none","tight","snug","normal","relaxed","loose",T,f]}],"list-image":[{"list-image":["none",f]}],"list-style-type":[{list:["none","disc","decimal",f]}],"list-style-position":[{list:["inside","outside"]}],"placeholder-color":[{placeholder:[e]}],"placeholder-opacity":[{"placeholder-opacity":[j]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"text-color":[{text:[e]}],"text-opacity":[{"text-opacity":[j]}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...m(),"wavy"]}],"text-decoration-thickness":[{decoration:["auto","from-font",T,O]}],"underline-offset":[{"underline-offset":["auto",T,f]}],"text-decoration-color":[{decoration:[e]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:d()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",f]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",f]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-opacity":[{"bg-opacity":[j]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:[...h(),St]}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","round","space"]}]}],"bg-size":[{bg:["auto","cover","contain",Ct]}],"bg-image":[{bg:["none",{"gradient-to":["t","tr","r","br","b","bl","l","tl"]},Et]}],"bg-color":[{bg:[e]}],"gradient-from-pos":[{from:[R]}],"gradient-via-pos":[{via:[R]}],"gradient-to-pos":[{to:[R]}],"gradient-from":[{from:[E]}],"gradient-via":[{via:[E]}],"gradient-to":[{to:[E]}],rounded:[{rounded:[n]}],"rounded-s":[{"rounded-s":[n]}],"rounded-e":[{"rounded-e":[n]}],"rounded-t":[{"rounded-t":[n]}],"rounded-r":[{"rounded-r":[n]}],"rounded-b":[{"rounded-b":[n]}],"rounded-l":[{"rounded-l":[n]}],"rounded-ss":[{"rounded-ss":[n]}],"rounded-se":[{"rounded-se":[n]}],"rounded-ee":[{"rounded-ee":[n]}],"rounded-es":[{"rounded-es":[n]}],"rounded-tl":[{"rounded-tl":[n]}],"rounded-tr":[{"rounded-tr":[n]}],"rounded-br":[{"rounded-br":[n]}],"rounded-bl":[{"rounded-bl":[n]}],"border-w":[{border:[i]}],"border-w-x":[{"border-x":[i]}],"border-w-y":[{"border-y":[i]}],"border-w-s":[{"border-s":[i]}],"border-w-e":[{"border-e":[i]}],"border-w-t":[{"border-t":[i]}],"border-w-r":[{"border-r":[i]}],"border-w-b":[{"border-b":[i]}],"border-w-l":[{"border-l":[i]}],"border-opacity":[{"border-opacity":[j]}],"border-style":[{border:[...m(),"hidden"]}],"divide-x":[{"divide-x":[i]}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":[i]}],"divide-y-reverse":["divide-y-reverse"],"divide-opacity":[{"divide-opacity":[j]}],"divide-style":[{divide:m()}],"border-color":[{border:[a]}],"border-color-x":[{"border-x":[a]}],"border-color-y":[{"border-y":[a]}],"border-color-t":[{"border-t":[a]}],"border-color-r":[{"border-r":[a]}],"border-color-b":[{"border-b":[a]}],"border-color-l":[{"border-l":[a]}],"divide-color":[{divide:[a]}],"outline-style":[{outline:["",...m()]}],"outline-offset":[{"outline-offset":[T,f]}],"outline-w":[{outline:[T,O]}],"outline-color":[{outline:[e]}],"ring-w":[{ring:g()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:[e]}],"ring-opacity":[{"ring-opacity":[j]}],"ring-offset-w":[{"ring-offset":[T,O]}],"ring-offset-color":[{"ring-offset":[e]}],shadow:[{shadow:["","inner","none",I,Rt]}],"shadow-color":[{shadow:[J]}],opacity:[{opacity:[j]}],"mix-blend":[{"mix-blend":v()}],"bg-blend":[{"bg-blend":v()}],filter:[{filter:["","none"]}],blur:[{blur:[t]}],brightness:[{brightness:[o]}],contrast:[{contrast:[l]}],"drop-shadow":[{"drop-shadow":["","none",I,f]}],grayscale:[{grayscale:[u]}],"hue-rotate":[{"hue-rotate":[c]}],invert:[{invert:[b]}],saturate:[{saturate:[Q]}],sepia:[{sepia:[Y]}],"backdrop-filter":[{"backdrop-filter":["","none"]}],"backdrop-blur":[{"backdrop-blur":[t]}],"backdrop-brightness":[{"backdrop-brightness":[o]}],"backdrop-contrast":[{"backdrop-contrast":[l]}],"backdrop-grayscale":[{"backdrop-grayscale":[u]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[c]}],"backdrop-invert":[{"backdrop-invert":[b]}],"backdrop-opacity":[{"backdrop-opacity":[j]}],"backdrop-saturate":[{"backdrop-saturate":[Q]}],"backdrop-sepia":[{"backdrop-sepia":[Y]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":[s]}],"border-spacing-x":[{"border-spacing-x":[s]}],"border-spacing-y":[{"border-spacing-y":[s]}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["none","all","","colors","opacity","shadow","transform",f]}],duration:[{duration:P()}],ease:[{ease:["linear","in","out","in-out",f]}],delay:[{delay:P()}],animate:[{animate:["none","spin","ping","pulse","bounce",f]}],transform:[{transform:["","gpu","none"]}],scale:[{scale:[G]}],"scale-x":[{"scale-x":[G]}],"scale-y":[{"scale-y":[G]}],rotate:[{rotate:[q,f]}],"translate-x":[{"translate-x":[U]}],"translate-y":[{"translate-y":[U]}],"skew-x":[{"skew-x":[ee]}],"skew-y":[{"skew-y":[ee]}],"transform-origin":[{origin:["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",f]}],accent:[{accent:["auto",e]}],appearance:[{appearance:["none","auto"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",f]}],"caret-color":[{caret:[e]}],"pointer-events":[{"pointer-events":["none","auto"]}],resize:[{resize:["none","y","x",""]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":d()}],"scroll-mx":[{"scroll-mx":d()}],"scroll-my":[{"scroll-my":d()}],"scroll-ms":[{"scroll-ms":d()}],"scroll-me":[{"scroll-me":d()}],"scroll-mt":[{"scroll-mt":d()}],"scroll-mr":[{"scroll-mr":d()}],"scroll-mb":[{"scroll-mb":d()}],"scroll-ml":[{"scroll-ml":d()}],"scroll-p":[{"scroll-p":d()}],"scroll-px":[{"scroll-px":d()}],"scroll-py":[{"scroll-py":d()}],"scroll-ps":[{"scroll-ps":d()}],"scroll-pe":[{"scroll-pe":d()}],"scroll-pt":[{"scroll-pt":d()}],"scroll-pr":[{"scroll-pr":d()}],"scroll-pb":[{"scroll-pb":d()}],"scroll-pl":[{"scroll-pl":d()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",f]}],fill:[{fill:[e,"none"]}],"stroke-w":[{stroke:[T,O,re]}],stroke:[{stroke:[e,"none"]}],sr:["sr-only","not-sr-only"],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]}}}function jt(e,{cacheSize:r,prefix:t,separator:o,extend:a={},override:n={}}){ne(e,"cacheSize",r),ne(e,"prefix",t),ne(e,"separator",o);for(const s in n)Tt(e[s],n[s]);for(const s in a)Ft(e[s],a[s]);return e}function ne(e,r,t){t!==void 0&&(e[r]=t)}function Tt(e,r){if(r)for(const t in r)ne(e,t,r[t])}function Ft(e,r){if(r)for(const t in r){const o=r[t];o!==void 0&&(e[t]=(e[t]||[]).concat(o))}}function Ot(e,...r){return typeof e=="function"?pe(be,e,...r):pe(()=>jt(be(),e),...r)}const It=pe(be);var _t={twMerge:!0,twMergeConfig:{},responsiveVariants:!1},Ge=e=>e||void 0,Z=(...e)=>Ge(Ve(e).filter(Boolean).join(" ")),ue=null,F={},ge=!1,N=(...e)=>r=>r.twMerge?((!ue||ge)&&(ge=!1,ue=z(F)?It:Ot({...F,extend:{theme:F.theme,classGroups:F.classGroups,conflictingClassGroupModifiers:F.conflictingClassGroupModifiers,conflictingClassGroups:F.conflictingClassGroups,...F.extend}})),Ge(ue(Z(e)))):Z(e),Se=(e,r)=>{for(let t in r)e.hasOwnProperty(t)?e[t]=Z(e[t],r[t]):e[t]=r[t];return e},Gt=(e,r)=>{let{extend:t=null,slots:o={},variants:a={},compoundVariants:n=[],compoundSlots:s=[],defaultVariants:i={}}=e,l={..._t,...r},u=t!=null&&t.base?Z(t.base,e==null?void 0:e.base):e==null?void 0:e.base,c=t!=null&&t.variants&&!z(t.variants)?me(a,t.variants):a,b=t!=null&&t.defaultVariants&&!z(t.defaultVariants)?{...t.defaultVariants,...i}:i;!z(l.twMergeConfig)&&!rt(l.twMergeConfig,F)&&(ge=!0,F=l.twMergeConfig);let S=z(t==null?void 0:t.slots),E=z(o)?{}:{base:Z(e==null?void 0:e.base,S&&(t==null?void 0:t.base)),...o},R=S?E:Se({...t==null?void 0:t.slots},z(E)?{base:e==null?void 0:e.base}:E),y=z(t==null?void 0:t.compoundVariants)?n:je(t==null?void 0:t.compoundVariants,n),w=x=>{if(z(c)&&z(o)&&S)return N(u,x==null?void 0:x.class,x==null?void 0:x.className)(l);if(y&&!Array.isArray(y))throw new TypeError(`The "compoundVariants" prop must be an array. Received: ${typeof y}`);if(s&&!Array.isArray(s))throw new TypeError(`The "compoundSlots" prop must be an array. Received: ${typeof s}`);let Q=(d,g,p=[],h)=>{let m=p;if(typeof g=="string")m=m.concat(ke(g).split(" ").map(v=>`${d}:${v}`));else if(Array.isArray(g))m=m.concat(g.reduce((v,k)=>v.concat(`${d}:${k}`),[]));else if(typeof g=="object"&&typeof h=="string"){for(let v in g)if(g.hasOwnProperty(v)&&v===h){let k=g[v];if(k&&typeof k=="string"){let A=ke(k);m[h]?m[h]=m[h].concat(A.split(" ").map(M=>`${d}:${M}`)):m[h]=A.split(" ").map(M=>`${d}:${M}`)}else Array.isArray(k)&&k.length>0&&(m[h]=k.reduce((A,M)=>A.concat(`${d}:${M}`),[]))}}return m},G=(d,g=c,p=null,h=null)=>{var m;let v=g[d];if(!v||z(v))return null;let k=(m=h==null?void 0:h[d])!=null?m:x==null?void 0:x[d];if(k===null)return null;let A=xe(k),M=Array.isArray(l.responsiveVariants)&&l.responsiveVariants.length>0||l.responsiveVariants===!0,V=b==null?void 0:b[d],P=[];if(typeof A=="object"&&M)for(let[ie,ve]of Object.entries(A)){let Ne=v[ve];if(ie==="initial"){V=ve;continue}Array.isArray(l.responsiveVariants)&&!l.responsiveVariants.includes(ie)||(P=Q(ie,Ne,P,p))}let Le=A!=null&&typeof A!="object"?A:xe(V),se=v[Le||"false"];return typeof P=="object"&&typeof p=="string"&&P[p]?Se(P,se):P.length>0?(P.push(se),P):se},Y=()=>c?Object.keys(c).map(d=>G(d,c)):null,ee=(d,g)=>{if(!c||typeof c!="object")return null;let p=new Array;for(let h in c){let m=G(h,c,d,g),v=d==="base"&&typeof m=="string"?m:m&&m[d];v&&(p[p.length]=v)}return p},D={};for(let d in x)x[d]!==void 0&&(D[d]=x[d]);let U=(d,g)=>{var p;let h=typeof(x==null?void 0:x[d])=="object"?{[d]:(p=x[d])==null?void 0:p.initial}:{};return{...b,...D,...h,...g}},$=(d=[],g)=>{let p=[];for(let{class:h,className:m,...v}of d){let k=!0;for(let[A,M]of Object.entries(v)){let V=U(A,g);if(Array.isArray(M)){if(!M.includes(V[A])){k=!1;break}}else if(V[A]!==M){k=!1;break}}k&&(h&&p.push(h),m&&p.push(m))}return p},B=d=>{let g=$(y,d);if(!Array.isArray(g))return g;let p={};for(let h of g)if(typeof h=="string"&&(p.base=N(p.base,h)(l)),typeof h=="object")for(let[m,v]of Object.entries(h))p[m]=N(p[m],v)(l);return p},K=d=>{if(s.length<1)return null;let g={};for(let{slots:p=[],class:h,className:m,...v}of s){if(!z(v)){let k=!0;for(let A of Object.keys(v)){let M=U(A,d)[A];if(M===void 0||(Array.isArray(v[A])?!v[A].includes(M):v[A]!==M)){k=!1;break}}if(!k)continue}for(let k of p)g[k]=g[k]||[],g[k].push([h,m])}return g};if(!z(o)||!S){let d={};if(typeof R=="object"&&!z(R))for(let g of Object.keys(R))d[g]=p=>{var h,m;return N(R[g],ee(g,p),((h=B(p))!=null?h:[])[g],((m=K(p))!=null?m:[])[g],p==null?void 0:p.class,p==null?void 0:p.className)(l)};return d}return N(u,Y(),$(y),x==null?void 0:x.class,x==null?void 0:x.className)(l)},j=()=>{if(!(!c||typeof c!="object"))return Object.keys(c)};return w.variantKeys=j(),w.extend=t,w.base=u,w.slots=R,w.variants=c,w.defaultVariants=b,w.compoundSlots=s,w.compoundVariants=y,w},$t=e=>(r,t)=>Gt(r,t?me(e,t):e);const ye=$t({responsiveVariants:!1});function Me(...e){return N(e)({})}const tr=ye({base:"transition-[opacity,outline,background-color] duration-trailing absolute-full contour-5 group-hover:duration-250 group-active:duration-0",variants:{variant:{default:"opacity-40 group-hover:opacity-75 group-active:opacity-100",ghost:"opacity-0 group-hover:opacity-60 group-active:opacity-100"},dark:{false:"",true:""}},compoundVariants:[{variant:"default",dark:!1,class:"bg-white/50"},{variant:"ghost",dark:!1,class:"bg-white/40"},{variant:"default",dark:!0,class:"bg-accent group-hover:opacity-80"},{variant:"ghost",dark:!0,class:"bg-accent group-hover:opacity-60"}],defaultVariants:{variant:"default",dark:!1}});function Lt(e){let r,t,o,a,n,s,i;const l=e[3].default,u=De(l,e,e[2],null);return{c(){r=ae("div"),t=ae("div"),u&&u.c(),o=Ue(),a=ae("div"),this.h()},l(c){r=le(c,"DIV",{class:!0});var b=ce(r);t=le(b,"DIV",{class:!0});var S=ce(t);u&&u.l(S),S.forEach(te),o=Be(b),a=le(b,"DIV",{class:!0}),ce(a).forEach(te),b.forEach(te),this.h()},h(){H(t,"class","contents"),H(a,"class",n=e[0]+" opacity-75"),H(r,"class",s=Me("flex items-center gap-x-3",e[1]?"flex-row":"flex-row-reverse"))},m(c,b){Ke(c,r,b),de(r,t),u&&u.m(t,null),de(r,o),de(r,a),i=!0},p(c,[b]){u&&u.p&&(!i||b&4)&&He(u,l,c,c[2],i?Je(l,c[2],b,null):qe(c[2]),null),(!i||b&1&&n!==(n=c[0]+" opacity-75"))&&H(a,"class",n),(!i||b&2&&s!==(s=Me("flex items-center gap-x-3",c[1]?"flex-row":"flex-row-reverse")))&&H(r,"class",s)},i(c){i||(Ye(u,c),i=!0)},o(c){et(u,c),i=!1},d(c){c&&te(r),u&&u.d(c)}}}function Nt(e,r,t){let{$$slots:o={},$$scope:a}=r,{iconClass:n="icon-[ion--chevron-forward-sharp]"}=r,{isRight:s=!0}=r;return e.$$set=i=>{"iconClass"in i&&t(0,n=i.iconClass),"isRight"in i&&t(1,s=i.isRight),"$$scope"in i&&t(2,a=i.$$scope)},[n,s,a,o]}class rr extends Ze{constructor(r){super(),Qe(this,r,Nt,Lt,We,{iconClass:0,isRight:1})}}function Wt(e){return Object.keys(e).reduce((r,t)=>e[t]===void 0?r:r+`${t}:${e[t]};`,"")}Wt({position:"absolute",opacity:0,"pointer-events":"none",margin:0,transform:"translateX(-100%)"});function Ee(e){function r(t){return t(e),()=>{}}return{subscribe:r}}const oe=e=>new Proxy(e,{get(r,t,o){return Reflect.get(r,t,o)},ownKeys(r){return Reflect.ownKeys(r).filter(t=>t!=="action")}}),Re=e=>typeof e=="function";Dt("empty");function Dt(e,r){const{stores:t,action:o,returned:a}=r??{},n=(()=>{if(t&&a)return tt(t,i=>{const l=a(i);if(Re(l)){const u=(...c)=>oe({...l(...c),[`data-melt-${e}`]:"",action:o??L});return u.action=o??L,u}return oe({...l,[`data-melt-${e}`]:"",action:o??L})});{const i=a,l=i==null?void 0:i();if(Re(l)){const u=(...c)=>oe({...l(...c),[`data-melt-${e}`]:"",action:o??L});return u.action=o??L,Ee(u)}return Ee(oe({...l,[`data-melt-${e}`]:"",action:o??L}))}})(),s=o??(()=>{});return s.subscribe=n.subscribe,s}function L(){}function $e(e,r,t,o){const a=Array.isArray(r)?r:[r];return a.forEach(n=>e.addEventListener(n,t,o)),()=>{a.forEach(n=>e.removeEventListener(n,t,o))}}function Ut(e,...r){const t={};for(const o of Object.keys(e))r.includes(o)||(t[o]=e[o]);return t}let Bt="useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict",or=(e=21)=>{let r="",t=e;for(;t--;)r+=Bt[Math.random()*64|0];return r};const Kt={ALT:"Alt",ARROW_DOWN:"ArrowDown",ARROW_LEFT:"ArrowLeft",ARROW_RIGHT:"ArrowRight",ARROW_UP:"ArrowUp",BACKSPACE:"Backspace",CAPS_LOCK:"CapsLock",CONTROL:"Control",DELETE:"Delete",END:"End",ENTER:"Enter",ESCAPE:"Escape",F1:"F1",F10:"F10",F11:"F11",F12:"F12",F2:"F2",F3:"F3",F4:"F4",F5:"F5",F6:"F6",F7:"F7",F8:"F8",F9:"F9",HOME:"Home",META:"Meta",PAGE_DOWN:"PageDown",PAGE_UP:"PageUp",SHIFT:"Shift",SPACE:" ",TAB:"Tab",CTRL:"Control",ASTERISK:"*",A:"a",P:"p"};X(void 0,e=>{function r(o){e(o),e(void 0)}return $e(document,"pointerup",r,{passive:!1,capture:!0})});X(void 0,e=>{function r(o){o&&o.key===Kt.ESCAPE&&e(o),e(void 0)}return $e(document,"keydown",r,{passive:!1})});X(!1),X(!1),X(void 0);const Ht={isDateDisabled:void 0,isDateUnavailable:void 0,value:void 0,preventDeselect:!1,numberOfMonths:1,pagedNavigation:!1,weekStartsOn:0,fixedWeeks:!1,calendarLabel:"Event Date",locale:"en",minValue:void 0,maxValue:void 0,disabled:!1,readonly:!1,weekdayFormat:"narrow"};({...Ut(Ht,"isDateDisabled","isDateUnavailable","value","locale","disabled","readonly","minValue","maxValue","weekdayFormat")});const nr=ye({slots:{root:"group/button flex items-center justify-center whitespace-nowrap rounded-full leading-none transition-[outline,background-color,color] active:duration-0 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-60"},variants:{variant:{default:{root:"bg-primary/95 text-primary-foreground hover:bg-primary hover:contour-5 active:bg-accent"},destructive:{root:"bg-destructive text-destructive-foreground hover:bg-destructive/90"},input:{root:"bg-background/5 text-background outline-input hover:bg-background/10 hover:outline-accent/50 active:bg-accent-lightest/10 active:outline-accent"},secondary:{root:"bg-secondary text-secondary-foreground hover:bg-secondary/60"},ghost:{root:"bg-body text-white duration-trailing hover:bg-black/75 hover:text-white hover:duration-200 active:bg-black/0 active:duration-0"},link:{root:"text-primary underline-offset-4 hover:underline"}},size:{default:{root:"min-w-40 px-8  py-6 font-bold shadow"},sm:{root:"px-8 py-4 text-sm font-medium shadow-sm"},lg:{root:"px-[2.8rem] py-[1.4rem] text-lg font-bold"},icon:{root:"p-3 text-3xl sm:p-4 sm:text-3xl"},responsive:{root:"min-w-32 justify-between px-[1.95rem] py-[1.2rem] font-normal sm:px-[2.5rem] sm:py-[1.25rem] sm:text-lg sm:font-medium lg:px-[3rem] lg:py-[1.5rem] lg:text-xl lg:font-bold"}}}}),sr=ye({base:"tracking-xs",variants:{heading:{h1:"text-[2rem]/[2.4rem] font-black sm:text-[2.5rem]/[2.75rem]",h2:"text-[2rem]/[2.4rem] font-extrabold",h3:"text-2xl font-bold"}}});function qt(e){const r=e-1;return r*r*r+1}function ir(e,{delay:r=0,duration:t=400,easing:o=Xe}={}){const a=+getComputedStyle(e).opacity;return{delay:r,duration:t,easing:o,css:n=>`opacity: ${n*a}`}}function ar(e,{delay:r=0,duration:t=400,easing:o=qt,x:a=0,y:n=0,opacity:s=0}={}){const i=getComputedStyle(e),l=+i.opacity,u=i.transform==="none"?"":i.transform,c=l*(1-s),[b,S]=we(a),[E,R]=we(n);return{delay:r,duration:t,easing:o,css:(y,w)=>`
			transform: ${u} translate(${(1-y)*b}${S}, ${(1-y)*E}${R});
			opacity: ${l-c*w}`}}const lr="ЖК «Фаворит PREMIUM»",cr=[["Розташований у центрі міста Ірпінь","Кінотеатри, парки, ТРЦ, навчальні заклади… - тут у пішій доступності найрозвиненіша інфраструктура міста."],["Високий рівень безпеки","ЖК «Фаворит PREMIUM» знаходиться під охороною та відеонаглядом 24/7."],["Ірпінь – місто парків","І жителі нашого комплексу матимуть змогу щодня насолоджуватися їх неймовірною красою. Мальовничі парки Ірпеня – за крок від ЖК."],["Панорамні вікна","У мешканців ЖК буде можливість пити ранішню каву й насолоджуватися мальовничим видом через панорамні вікна 100 власній квартирі."]],dr=[["Smart-квартири","22,73","25,35","smart"],["1-кімнатні квартири","39","47","1k-apartments"],["2-кімнатні квартири","58","68","2-kimnatni-kvartiri"]],ur=ze(null),fr=ze(!0);export{rr as I,ar as a,tr as b,Me as c,er as d,Qt as e,ir as f,Yt as g,nr as h,fr as i,sr as j,dr as k,cr as l,ur as m,or as n,lr as s,ye as t};
