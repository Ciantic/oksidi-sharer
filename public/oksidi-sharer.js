!function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function r(t){t.forEach(e)}function s(t){return"function"==typeof t}function i(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function o(t,e){t.appendChild(e)}function l(t,e,n){t.insertBefore(e,n||null)}function c(t){t.parentNode.removeChild(t)}function a(t){return document.createElement(t)}function h(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function u(t){return document.createTextNode(t)}function d(){return u(" ")}function p(t,e,n,r){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n,r)}function m(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function f(t,e){e=""+e,t.data!==e&&(t.data=e)}class g{constructor(t=null){this.a=t,this.e=this.n=null}m(t,e,n=null){this.e||(this.e=a(e.nodeName),this.t=e,this.h(t)),this.i(n)}h(t){this.e.innerHTML=t,this.n=Array.from(this.e.childNodes)}i(t){for(let e=0;e<this.n.length;e+=1)l(this.t,this.n[e],t)}p(t){this.d(),this.h(t),this.i(this.a)}d(){this.n.forEach(c)}}let v;function $(t){v=t}const w=[],x=[],y=[],b=[],k=Promise.resolve();let z=!1;function _(t){y.push(t)}let C=!1;const E=new Set;function M(){if(!C){C=!0;do{for(let t=0;t<w.length;t+=1){const e=w[t];$(e),X(e.$$)}for(w.length=0;x.length;)x.pop()();for(let t=0;t<y.length;t+=1){const e=y[t];E.has(e)||(E.add(e),e())}y.length=0}while(w.length);for(;b.length;)b.pop()();z=!1,C=!1,E.clear()}}function X(t){if(null!==t.fragment){t.update(),r(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(_)}}const B=new Set;function S(t,e){-1===t.$$.dirty[0]&&(w.push(t),z||(z=!0,k.then(M)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function T(i,o,l,a,h,u,d=[-1]){const p=v;$(i);const m=o.props||{},f=i.$$={fragment:null,ctx:null,props:u,update:t,not_equal:h,bound:n(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(p?p.$$.context:[]),callbacks:n(),dirty:d};let g=!1;if(f.ctx=l?l(i,m,(t,e,...n)=>{const r=n.length?n[0]:e;return f.ctx&&h(f.ctx[t],f.ctx[t]=r)&&(f.bound[t]&&f.bound[t](r),g&&S(i,t)),e}):[],f.update(),g=!0,r(f.before_update),f.fragment=!!a&&a(f.ctx),o.target){if(o.hydrate){const t=function(t){return Array.from(t.childNodes)}(o.target);f.fragment&&f.fragment.l(t),t.forEach(c)}else f.fragment&&f.fragment.c();o.intro&&((w=i.$$.fragment)&&w.i&&(B.delete(w),w.i(x))),function(t,n,i){const{fragment:o,on_mount:l,on_destroy:c,after_update:a}=t.$$;o&&o.m(n,i),_(()=>{const n=l.map(e).filter(s);c?c.push(...n):r(n),t.$$.on_mount=[]}),a.forEach(_)}(i,o.target,o.anchor),M()}var w,x;$(p)}let L;function A(t){let e,n,r;return{c(){e=h("svg"),n=h("path"),m(n,"d",r="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 16.538l-4.592-4.548 4.546-4.587-1.416-1.403-4.545 4.589-4.588-4.543-1.405 1.405 4.593 4.552-4.547 4.592 1.405 1.405 4.555-4.596 4.591 4.55 1.403-1.416z"),m(e,"class","share-close-icon"),m(e,"xmlns","http://www.w3.org/2000/svg"),m(e,"viewBox","0 0 25 25")},m(t,r){l(t,e,r),o(e,n)},d(t){t&&c(e)}}}function I(t){let e,n,r;return{c(){e=h("svg"),n=h("path"),m(n,"d",r="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-6 17c1.513-6.587 7-7.778 7-7.78v-2.222l5 4.425-5 4.464v-2.223c0 .001-3.78-.114-7 3.334z"),m(e,"class","share-icon"),m(e,"xmlns","http://www.w3.org/2000/svg"),m(e,"viewBox","0 0 25 25")},m(t,r){l(t,e,r),o(e,n)},d(t){t&&c(e)}}}function N(t){let e,n,r,s,i,h,u,p=t[1]&&H(t),f=t[2]&&R(t),g=t[6]&&j(t),v=t[3]&&D(t),$=t[4]&&O(t),w=t[5]&&q(t);return{c(){e=a("ul"),p&&p.c(),n=d(),f&&f.c(),r=d(),g&&g.c(),s=d(),v&&v.c(),i=d(),$&&$.c(),h=d(),w&&w.c(),m(e,"class",u="choices "+(t[16]?"shown":"hidden"))},m(t,c){l(t,e,c),p&&p.m(e,null),o(e,n),f&&f.m(e,null),o(e,r),g&&g.m(e,null),o(e,s),v&&v.m(e,null),o(e,i),$&&$.m(e,null),o(e,h),w&&w.m(e,null)},p(t,o){t[1]?p?p.p(t,o):(p=H(t),p.c(),p.m(e,n)):p&&(p.d(1),p=null),t[2]?f?f.p(t,o):(f=R(t),f.c(),f.m(e,r)):f&&(f.d(1),f=null),t[6]?g?g.p(t,o):(g=j(t),g.c(),g.m(e,s)):g&&(g.d(1),g=null),t[3]?v?v.p(t,o):(v=D(t),v.c(),v.m(e,i)):v&&(v.d(1),v=null),t[4]?$?$.p(t,o):($=O(t),$.c(),$.m(e,h)):$&&($.d(1),$=null),t[5]?w?w.p(t,o):(w=q(t),w.c(),w.m(e,null)):w&&(w.d(1),w=null),65536&o&&u!==(u="choices "+(t[16]?"shown":"hidden"))&&m(e,"class",u)},d(t){t&&c(e),p&&p.d(),f&&f.d(),g&&g.d(),v&&v.d(),$&&$.d(),w&&w.d()}}}function H(t){let e,n,r,s,i;return{c(){e=a("li"),n=a("a"),r=h("svg"),s=h("path"),m(s,"d",i="M34.1,17.1C34.1,7.6,26.5,0,17.1,0S0,7.6,0,17.1c0,8.5,6.2,15.6,14.4,16.9V22h-4.3v-4.9h4.3v-3.8c0-4.3,2.5-6.6,6.4-6.6 c1.9,0,3.8,0.3,3.8,0.3v4.2h-2.2c-2.1,0-2.8,1.3-2.8,2.7v3.2h4.7L23.7,22h-4v11.9C27.9,32.6,34.1,25.6,34.1,17.1z"),m(r,"version","1.1"),m(r,"xmlns","http://www.w3.org/2000/svg"),m(r,"viewBox","0 0 35 35"),m(n,"href",t[9]),m(n,"target","_blank")},m(t,i){l(t,e,i),o(e,n),o(n,r),o(r,s)},p(t,e){512&e&&m(n,"href",t[9])},d(t){t&&c(e)}}}function R(t){let e,n,r,s,i;return{c(){e=a("li"),n=a("a"),r=h("svg"),s=h("path"),m(s,"d",i="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"),m(r,"xmlns","http://www.w3.org/2000/svg"),m(r,"viewBox","0 0 24 24"),m(n,"href",t[10]),m(n,"target","_blank")},m(t,i){l(t,e,i),o(e,n),o(n,r),o(r,s)},p(t,e){1024&e&&m(n,"href",t[10])},d(t){t&&c(e)}}}function j(t){let e,n,r,s,i;return{c(){e=a("li"),n=a("a"),r=h("svg"),s=h("path"),m(s,"d",i="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"),m(r,"xmlns","http://www.w3.org/2000/svg"),m(r,"viewBox","0 0 24 24"),m(n,"href",t[11]),m(n,"target","_blank")},m(t,i){l(t,e,i),o(e,n),o(n,r),o(r,s)},p(t,e){2048&e&&m(n,"href",t[11])},d(t){t&&c(e)}}}function D(t){let e,n,r,s,i;return{c(){e=a("li"),n=a("a"),r=h("svg"),s=h("path"),m(s,"d",i="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"),m(r,"xmlns","http://www.w3.org/2000/svg"),m(r,"viewBox","0 0 24 24"),m(n,"href",t[12]),m(n,"target","_blank")},m(t,i){l(t,e,i),o(e,n),o(n,r),o(r,s)},p(t,e){4096&e&&m(n,"href",t[12])},d(t){t&&c(e)}}}function O(t){let e,n,r,s,i,u,f,g,v=t[17]&&U(t);return{c(){e=a("li"),n=a("a"),v&&v.c(),r=d(),s=h("svg"),i=h("path"),m(i,"d",u="M6.188 8.719c.439-.439.926-.801 1.444-1.087 2.887-1.591 6.589-.745 8.445 2.069l-2.246 2.245c-.644-1.469-2.243-2.305-3.834-1.949-.599.134-1.168.433-1.633.898l-4.304 4.306c-1.307 1.307-1.307 3.433 0 4.74 1.307 1.307 3.433 1.307 4.74 0l1.327-1.327c1.207.479 2.501.67 3.779.575l-2.929 2.929c-2.511 2.511-6.582 2.511-9.093 0s-2.511-6.582 0-9.093l4.304-4.306zm6.836-6.836l-2.929 2.929c1.277-.096 2.572.096 3.779.574l1.326-1.326c1.307-1.307 3.433-1.307 4.74 0 1.307 1.307 1.307 3.433 0 4.74l-4.305 4.305c-1.311 1.311-3.44 1.3-4.74 0-.303-.303-.564-.68-.727-1.051l-2.246 2.245c.236.358.481.667.796.982.812.812 1.846 1.417 3.036 1.704 1.542.371 3.194.166 4.613-.617.518-.286 1.005-.648 1.444-1.087l4.304-4.305c2.512-2.511 2.512-6.582.001-9.093-2.511-2.51-6.581-2.51-9.092 0z"),m(s,"xmlns","http://www.w3.org/2000/svg"),m(s,"viewBox","0 0 24 24"),m(n,"href","#copy-link-to-clipboard"),m(n,"target","_blank")},m(c,a){l(c,e,a),o(e,n),v&&v.m(n,null),o(n,r),o(n,s),o(s,i),f||(g=p(n,"click",t[20]),f=!0)},p(t,e){t[17]?v?v.p(t,e):(v=U(t),v.c(),v.m(n,r)):v&&(v.d(1),v=null)},d(t){t&&c(e),v&&v.d(),f=!1,g()}}}function U(t){let e,n,r=t[18].textCopyI18n(t[0],t[8])+"";return{c(){e=a("div"),n=u(r),m(e,"class","copy-tip")},m(t,r){l(t,e,r),o(e,n)},p(t,e){257&e&&r!==(r=t[18].textCopyI18n(t[0],t[8])+"")&&f(n,r)},d(t){t&&c(e)}}}function q(t){let e,n,r,s,i;return{c(){e=a("li"),n=a("a"),r=h("svg"),s=h("path"),m(s,"d",i="M19 9.062s-5.188-.333-7 1.938c2-4.896 7-5.938 7-5.938v-2l5 4-5 4.019v-2.019zm-18.974 14.938h23.947l-11.973-11.607-11.974 11.607zm1.673-14l10.291-7.488 3.053 2.218c.712-.459 1.391-.805 1.953-1.054l-5.006-3.637-11.99 8.725v12.476l7.352-7.127-5.653-4.113zm15.753 4.892l6.548 6.348v-11.612l-6.548 5.264z"),m(r,"xmlns","http://www.w3.org/2000/svg"),m(r,"viewBox","0 0 24 24"),m(n,"href",t[13]),m(n,"target","_blank")},m(t,i){l(t,e,i),o(e,n),o(n,r),o(r,s)},p(t,e){8192&e&&m(n,"href",t[13])},d(t){t&&c(e)}}}function J(e){let n,r,s,i,h,v,$,w,x,y,b=e[18].textShare(e[0],e[7])+"";function k(t,e){return t[15]&&t[16]?A:I}let z=k(e),_=z(e),C=e[15]&&N(e);return{c(){n=a("div"),s=d(),i=a("a"),_.c(),h=d(),v=a("span"),$=u(b),w=d(),C&&C.c(),this.c=t,r=new g(s),m(v,"class","title"),m(i,"href","#share"),m(i,"class","opener"),m(n,"class","sharer")},m(t,c){l(t,n,c),r.m(e[14],n),o(n,s),o(n,i),_.m(i,null),o(i,h),o(i,v),o(v,$),o(n,w),C&&C.m(n,null),x||(y=p(i,"click",e[19]),x=!0)},p(t,[e]){16384&e&&r.p(t[14]),z!==(z=k(t))&&(_.d(1),_=z(t),_&&(_.c(),_.m(i,h))),129&e&&b!==(b=t[18].textShare(t[0],t[7])+"")&&f($,b),t[15]?C?C.p(t,e):(C=N(t),C.c(),C.m(n,null)):C&&(C.d(1),C=null)},i:t,o:t,d(t){t&&c(n),_.d(),C&&C.d(),x=!1,y()}}}function K(t,e,n){var r,s;const i=t=>(e,n=null)=>null!==n?n:e in t?t[e]:t.en,o={textShare:i({fi:"Jaa",en:"Share"}),textCopyI18n:i({fi:"Kopiotu leikepöydälle",en:"Copied to clipboard"})};let l,c,a,h,u,d,p,m,{lang:f=(null!==(s=null===(r=null===document||void 0===document?void 0:document.documentElement)||void 0===r?void 0:r.lang)&&void 0!==s?s:"en")}=e,{shareurl:g=window.location.href}=e,{sharetitle:v=document.title}=e,{usefacebook:$=!0}=e,{usetwitter:w=!0}=e,{usewhatsapp:x=!0}=e,{uselink:y=!0}=e,{useemail:b=!0}=e,{uselinkedin:k=!1}=e,{textshare:z=null}=e,{textcopy:_=null}=e,{css:C=null}=e,E=!1,M=!1,X=!1;return t.$set=t=>{"lang"in t&&n(0,f=t.lang),"shareurl"in t&&n(21,g=t.shareurl),"sharetitle"in t&&n(22,v=t.sharetitle),"usefacebook"in t&&n(1,$=t.usefacebook),"usetwitter"in t&&n(2,w=t.usetwitter),"usewhatsapp"in t&&n(3,x=t.usewhatsapp),"uselink"in t&&n(4,y=t.uselink),"useemail"in t&&n(5,b=t.useemail),"uselinkedin"in t&&n(6,k=t.uselinkedin),"textshare"in t&&n(7,z=t.textshare),"textcopy"in t&&n(8,_=t.textcopy),"css"in t&&n(23,C=t.css)},t.$$.update=()=>{2097152&t.$$.dirty&&n(26,l=encodeURIComponent(g)),4194304&t.$$.dirty&&n(27,c=encodeURIComponent(v)),67108864&t.$$.dirty&&n(9,a="https://www.facebook.com/sharer.php?u="+l),201326592&t.$$.dirty&&n(10,h=`https://twitter.com/intent/tweet?text=${c}&url=${l}`),201326592&t.$$.dirty&&n(11,u=`https://www.linkedin.com/shareArticle?mini=true&url=${l}&title=${c}&summary=&source=LinkedIn`),67108864&t.$$.dirty&&n(12,d="whatsapp://send?text="+l),201326592&t.$$.dirty&&n(13,p=`mailto:?subject=${c}&body=${l}`),8388608&t.$$.dirty&&n(14,m=C?"<style>"+C+"</style>":"")},[f,$,w,x,y,b,k,z,_,a,h,u,d,p,m,E,M,X,o,function(t){if(t.preventDefault(),E)return n(16,M=!1),void setTimeout(()=>{n(15,E=!1)},250);n(15,E=!E),setTimeout(()=>{n(16,M=E)},0)},function(t){t.preventDefault(),function(t,e){var n=document.createElement("textarea");n.value=t,e.appendChild(n),n.select(),document.execCommand("copy"),e.removeChild(n)}(g,t.currentTarget),n(17,X=!0),setTimeout(()=>{n(17,X=!1)},1500)},g,v,C]}"function"==typeof HTMLElement&&(L=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){for(const t in this.$$.slotted)this.appendChild(this.$$.slotted[t])}attributeChangedCallback(t,e,n){this[t]=n}$destroy(){!function(t,e){const n=t.$$;null!==n.fragment&&(r(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(){}});customElements.define("oksidi-sharer",class extends L{constructor(t){super(),this.shadowRoot.innerHTML='<style>.sharer{color:var(--color, #000000);line-height:var(--opener-icon-size, 1.5em);position:relative}.opener{display:inline-block;text-decoration:none;color:var(--color, #000000);transition:color 0.25s}.opener>svg{transition:fill 0.25s;width:var(--opener-icon-size, 1.5em);height:var(--opener-icon-size, 1.5em);fill:var(--color, #000000);display:inline-block;vertical-align:middle;position:relative;top:-0.08em}@media(hover: hover){.opener:hover{color:var(--hover-color, gray)}.opener:hover svg{fill:var(--hover-color, gray)}}.choices{list-style:none;padding:0 0 0 0.4em;margin:0;display:inline-block;position:relative;top:-0.1em}.choices>li{display:inline-block;transition:transform 0.2s, opacity 0.2s;opacity:0}.choices>li:nth-child(1){transform:translateX(-1em)}.choices>li:nth-child(2){transform:translateX(-2em)}.choices>li:nth-child(3){transform:translateX(-3em)}.choices>li:nth-child(4){transform:translateX(-4em)}.choices>li:nth-child(5){transform:translateX(-5em)}.choices>li:nth-child(6){transform:translateX(-6em)}.choices>li:nth-child(7){transform:translateX(-7em)}.choices>li:nth-child(8){transform:translateX(-8em)}.choices>li:nth-child(9){transform:translateX(-9em)}.choices>li:nth-child(10){transform:translateX(-10em)}.choices>li:nth-child(11){transform:translateX(-11em)}.choices a{display:block;padding:0 0.25em}@media(hover: hover){.choices a:hover svg{fill:var(--hover-color, gray)}}.choices svg{width:var(--icon-size, 1.2em);height:var(--icon-size, 1.2em);display:inline-block;vertical-align:middle;transition:fill 0.25s;fill:var(--color, #000000)}.choices.shown>li{transform:translateX(0);opacity:1}.copy-tip{line-height:1.2;padding:0.4em;position:absolute;font:var(--tooltip-font, 80% sans-serif);text-transform:var(--tooltip-text-transform, uppercase);background:var(--tooltip-background-color, var(--color, #000000));color:var(--tooltip-color, #ffffff);text-align:center;left:-3.5em;right:-3.5em;bottom:100%;display:block}.copy-tip:before{content:"";position:absolute;display:block;left:50%;width:0;height:0;top:100%;transform:translateX(-50%);border-width:0.5em;border-style:solid;border-color:var(--tooltip-background-color, var(--color, #000000)) transparent transparent transparent}</style>',T(this,{target:this.shadowRoot},K,J,i,{lang:0,shareurl:21,sharetitle:22,usefacebook:1,usetwitter:2,usewhatsapp:3,uselink:4,useemail:5,uselinkedin:6,textshare:7,textcopy:8,css:23}),t&&(t.target&&l(t.target,this,t.anchor),t.props&&(this.$set(t.props),M()))}static get observedAttributes(){return["lang","shareurl","sharetitle","usefacebook","usetwitter","usewhatsapp","uselink","useemail","uselinkedin","textshare","textcopy","css"]}get lang(){return this.$$.ctx[0]}set lang(t){this.$set({lang:t}),M()}get shareurl(){return this.$$.ctx[21]}set shareurl(t){this.$set({shareurl:t}),M()}get sharetitle(){return this.$$.ctx[22]}set sharetitle(t){this.$set({sharetitle:t}),M()}get usefacebook(){return this.$$.ctx[1]}set usefacebook(t){this.$set({usefacebook:t}),M()}get usetwitter(){return this.$$.ctx[2]}set usetwitter(t){this.$set({usetwitter:t}),M()}get usewhatsapp(){return this.$$.ctx[3]}set usewhatsapp(t){this.$set({usewhatsapp:t}),M()}get uselink(){return this.$$.ctx[4]}set uselink(t){this.$set({uselink:t}),M()}get useemail(){return this.$$.ctx[5]}set useemail(t){this.$set({useemail:t}),M()}get uselinkedin(){return this.$$.ctx[6]}set uselinkedin(t){this.$set({uselinkedin:t}),M()}get textshare(){return this.$$.ctx[7]}set textshare(t){this.$set({textshare:t}),M()}get textcopy(){return this.$$.ctx[8]}set textcopy(t){this.$set({textcopy:t}),M()}get css(){return this.$$.ctx[23]}set css(t){this.$set({css:t}),M()}})}();
