!function(t){var e={};function n(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(o,r,function(e){return t[e]}.bind(null,r));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){"use strict";function o(){}function r(t,e){for(var n in e)t[n]=e[n];return t}function i(t,e){e.appendChild(t)}function c(t,e,n){e.insertBefore(t,n)}function a(t){t.parentNode.removeChild(t)}function s(t,e){for(var n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function l(t){return document.createElement(t)}function f(t){return document.createTextNode(t)}function u(t,e,n){t.addEventListener(e,n,!1)}function d(t,e,n){t.removeEventListener(e,n,!1)}function g(t,e,n){t.style.setProperty(e,n)}n.r(e);function m(t){this.destroy=o,this.fire("destroy"),this.set=o,this._fragment.d(!1!==t),this._fragment=null,this._state={}}function h(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function p(t,e){var n=t in this._handlers&&this._handlers[t].slice();if(n)for(var o=0;o<n.length;o+=1){var r=n[o];r.__calling||(r.__calling=!0,r.call(this,e),r.__calling=!1)}}function b(){return this._state}function v(t,e){t._handlers=Object.create(null),t._bind=e._bind,t.options=e,t.root=e.root||t,t.store=e.store||t.root.store}function _(t,e){var n=this._handlers[t]||(this._handlers[t]=[]);return n.push(e),{cancel:function(){var t=n.indexOf(e);~t&&n.splice(t,1)}}}function x(t){this._set(r({},t)),this.root._lock||(this.root._lock=!0,k(this.root._beforecreate),k(this.root._oncreate),k(this.root._aftercreate),this.root._lock=!1)}function y(t){var e=this._state,n={},o=!1;for(var i in t)this._differs(t[i],e[i])&&(n[i]=o=!0);o&&(this._state=r(r({},e),t),this._recompute(n,this._state),this._bind&&this._bind(n,this._state),this._fragment&&(this.fire("state",{changed:n,current:this._state,previous:e}),this._fragment.p(n,this._state),this.fire("update",{changed:n,current:this._state,previous:e})))}function k(t){for(;t&&t.length;)t.shift()()}function N(t,e){this._fragment[this._fragment.i?"i":"m"](t,e||null)}var j={destroy:m,get:b,fire:p,on:_,set:x,_recompute:o,_set:y,_mount:N,_differs:h};var S={fetchState(){const{config:t}=this.get();return fetch("instance/"+encodeURIComponent(t.Name),{method:"get"}).then(function(t){if(200!==t.status)console.warn(t.status,t.statusText);else{const e=JSON.parse(t.body);this.set({running:e.running})}}).catch(function(e){console.error(t.Name,e)})},start(){const{running:t,config:e}=this.get();if(!t)return this.set({running:null}),fetch("supervisor/"+encodeURIComponent(e.Name),{method:"post"}).then(function(t){if(200===t.status)return this.fetchState();console.warn(t.status,t.statusText)}).catch(function(t){console.error(e.Name,t)})},stop(){const{running:t,config:e}=this.get();if(t)return this.set({running:null}),fetch("instance/"+encodeURIComponent(e.Name),{method:"post"}).then(function(t){if(204===t.status)return this.fetchState();console.warn(t.status,t.statusText)}).catch(function(t){console.error(e.Name,t)})}};function O(){clearInterval(this.interval)}function R(t,e){var n;return{c(){(n=l("div")).className="circle bg-grey blinking svelte-4bmco2"},m(t,e){c(n,t,e)},d(t){t&&a(n)}}}function C(t,e){var n;return{c(){(n=l("div")).className="circle bg-green svelte-4bmco2"},m(t,e){c(n,t,e)},d(t){t&&a(n)}}}function T(t,e){var n;return{c(){(n=l("div")).className="circle bg-red svelte-4bmco2"},m(t,e){c(n,t,e)},d(t){t&&a(n)}}}function w(t,e){var n;return{c(){(n=l("button")).textContent="checking...",n.className="nicebtn svelte-4bmco2",n.disabled=!0},m(t,e){c(n,t,e)},d(t){t&&a(n)}}}function F(t,e){var n;function o(e){t.stop()}return{c(){(n=l("button")).textContent="stop",u(n,"click",o),n.className="nicebtn svelte-4bmco2"},m(t,e){c(n,t,e)},d(t){t&&a(n),d(n,"click",o)}}}function E(t,e){var n;function o(e){t.start()}return{c(){(n=l("button")).textContent="start",u(n,"click",o),n.className="nicebtn svelte-4bmco2"},m(t,e){c(n,t,e)},d(t){t&&a(n),d(n,"click",o)}}}function D(t,e){var n,o,r,s=e.config.WorkDir;return{c(){n=l("div"),o=f(" at: "),r=f(s),g(n,"font-style","italic"),g(n,"font-family","monospace"),g(n,"color","gray"),g(n,"border-top","lightgray dotted 1px"),g(n,"padding-top","0.5em"),g(n,"padding-left","8px"),g(n,"padding-right","8px"),g(n,"margin-top","0.5em"),g(n,"margin-left","-8px"),g(n,"margin-right","-8px")},m(t,e){c(n,t,e),i(o,n),i(r,n)},p(t,e){t.config&&s!==(s=e.config.WorkDir)&&(r.data=s)},d(t){t&&a(n)}}}function L(t,e){var n,o,r,s,u,d=e.config.LogFile;return{c(){n=l("div"),o=f("log: "),r=l("a"),s=f(d),r.href=u="supervisor/"+e.config.Name+"/log",g(n,"font-style","italic"),g(n,"font-family","monospace"),g(n,"color","gray"),g(n,"border-top","lightgray dotted 1px"),g(n,"padding-top","0.5em"),g(n,"padding-left","8px"),g(n,"padding-right","8px"),g(n,"margin-top","0.5em"),g(n,"margin-left","-8px"),g(n,"margin-right","-8px")},m(t,e){c(n,t,e),i(o,n),i(r,n),i(s,r)},p(t,e){t.config&&d!==(d=e.config.LogFile)&&(s.data=d),t.config&&u!==(u="supervisor/"+e.config.Name+"/log")&&(r.href=u)},d(t){t&&a(n)}}}function A(t,e){var n,o,r,s,u,d,m=e.name,h=e.value;return{c(){n=l("tr"),o=l("th"),r=f(m),s=f("\n            "),u=l("td"),d=f(h),g(u,"word-break","break-all")},m(t,e){c(n,t,e),i(o,n),i(r,o),i(s,n),i(u,n),i(d,u)},p(t,e){(t.Object||t.config)&&m!==(m=e.name)&&(r.data=m),(t.Object||t.config)&&h!==(h=e.value)&&(d.data=h)},d(t){t&&a(n)}}}function I(t,e){for(var n,o=e.Object.entries(e.config.Environment),r=[],i=0;i<o.length;i+=1)r[i]=A(0,P(e,o,i));return{c(){n=l("table");for(var t=0;t<r.length;t+=1)r[t].c();n.className="env svelte-4bmco2"},m(t,e){c(n,t,e);for(var o=0;o<r.length;o+=1)r[o].m(n,null)},p(t,e){if(t.Object||t.config){o=e.Object.entries(e.config.Environment);for(var i=0;i<o.length;i+=1){const c=P(e,o,i);r[i]?r[i].p(t,c):(r[i]=A(0,c),r[i].c(),r[i].m(n,null))}for(;i<r.length;i+=1)r[i].d(1);r.length=o.length}},d(t){t&&a(n),s(r,t)}}}function P(t,e,n){const o=Object.create(t);return o.name=e[n][0],o.value=e[n][1],o.each_value=e,o.each_index=n,o}function W(t){v(this,t),this._state=r(r({Object:Object},{running:null}),t.data),this._intro=!0,this._handlers.destroy=[O],document.getElementById("svelte-4bmco2-style")||function(){var t=l("style");t.id="svelte-4bmco2-style",t.textContent=".green.svelte-4bmco2{color:green}.orange.svelte-4bmco2{color:red}.blue.svelte-4bmco2{color:blue}.bg-green.svelte-4bmco2{background-color:limegreen}.bg-red.svelte-4bmco2{background-color:red}.bg-grey.svelte-4bmco2{background-color:lightgray}.circle.svelte-4bmco2{display:inline-block;width:2em;height:2em;border-radius:1em;margin:0.2em}.run.svelte-4bmco2{width:100%;padding:8px;border-radius:5px}.nicebtn.svelte-4bmco2{background:none;border-radius:3px;border:gray dashed 1px;margin:5px;font-size:18px}.nicebtn.svelte-4bmco2:hover{background:grey;color:white;border-color:white;font-size:18px}.mainblock.svelte-4bmco2{display:flex;flex-direction:row}.rborder.svelte-4bmco2{border-right:darkgray dashed 1px;padding-right:1em}.env.svelte-4bmco2{width:100%;text-align:left;font-family:monospace}.content.svelte-4bmco2{display:flex;flex-direction:column;box-shadow:darkgrey 0 0 3px;border-radius:5px;padding:8px;font-family:Roboto serif;border:lightgray 1px solid;margin:10px}.bottom-panel.svelte-4bmco2{background-color:lightgray;margin-left:-8px;margin-right:-8px;margin-bottom:-8px;padding:5px;font-family:monospace;border-bottom-left-radius:5px;border-bottom-right-radius:5px}.blinking.svelte-4bmco2{animation:svelte-4bmco2-blinking 2s linear infinite}@keyframes svelte-4bmco2-blinking{50%{opacity:0}}",i(t,document.head)}(),t.root||(this._oncreate=[]),this._fragment=function(t,e){var n,o,r,s,u,d,m,h,p,b,v,_,x,y,k,N,j,S,O,A,P,W,U,M,B,z,J,q,G,H,K,Q,V,X,Y=e.config.Name,Z=e.config.Command,$=e.config.Args.join(" "),tt=-1===e.config.Restart?"∞":e.config.Restart,et=(e.config.RestartTimeout/1e9).toFixed(2),nt=(e.config.StopTimeout/1e9).toFixed(2);function ot(t){return null===t.running?R:t.running?C:T}var rt=ot(e),it=rt(t,e);function ct(t){return null===t.running?w:t.running?F:E}var at=ct(e),st=at(t,e),lt=e.config.WorkDir&&D(0,e),ft=e.config.LogFile&&L(0,e),ut=e.config.Environment&&I(0,e);return{c(){n=l("div"),o=l("div"),it.c(),r=f("\n        "),s=l("h1"),u=f(Y),d=f("\n    "),m=l("div"),st.c(),h=f("\n    "),p=l("div"),b=l("div"),v=l("pre"),(_=l("span")).textContent="cmd:",x=f(" "),y=f(Z),k=f(" "),N=f($),j=f("\n            "),lt&&lt.c(),S=f("\n            "),ft&&ft.c(),O=f("\n    "),ut&&ut.c(),A=f("\n\n    "),P=l("div"),W=l("span"),U=f("restart: "),M=f(tt),B=f("\n        "),z=l("span"),J=f("restart timeout: "),q=f(et),G=f("s"),H=f("\n        "),K=l("span"),Q=f("stop timeout: "),V=f(nt),X=f("s"),g(s,"margin","0"),g(o,"display","flex"),g(o,"flex-direction","row"),g(v,"margin","0"),b.className="run svelte-4bmco2",p.className="mainblock svelte-4bmco2",W.className="green rborder svelte-4bmco2",z.className="blue rborder svelte-4bmco2",K.className="orange svelte-4bmco2",P.className="bottom-panel svelte-4bmco2",n.className="content svelte-4bmco2"},m(t,e){c(n,t,e),i(o,n),it.m(o,null),i(r,o),i(s,o),i(u,s),i(d,n),i(m,n),st.m(m,null),i(h,n),i(p,n),i(b,p),i(v,b),i(_,v),i(x,v),i(y,v),i(k,v),i(N,v),i(j,b),lt&&lt.m(b,null),i(S,b),ft&&ft.m(b,null),i(O,n),ut&&ut.m(n,null),i(A,n),i(P,n),i(W,P),i(U,W),i(M,W),i(B,P),i(z,P),i(J,z),i(q,z),i(G,z),i(H,P),i(K,P),i(Q,K),i(V,K),i(X,K)},p(e,i){rt!==(rt=ot(i))&&(it.d(1),(it=rt(t,i)).c(),it.m(o,r)),e.config&&Y!==(Y=i.config.Name)&&(u.data=Y),at!==(at=ct(i))&&(st.d(1),(st=at(t,i)).c(),st.m(m,null)),e.config&&Z!==(Z=i.config.Command)&&(y.data=Z),e.config&&$!==($=i.config.Args.join(" "))&&(N.data=$),i.config.WorkDir?lt?lt.p(e,i):((lt=D(0,i)).c(),lt.m(b,S)):lt&&(lt.d(1),lt=null),i.config.LogFile?ft?ft.p(e,i):((ft=L(0,i)).c(),ft.m(b,null)):ft&&(ft.d(1),ft=null),i.config.Environment?ut?ut.p(e,i):((ut=I(0,i)).c(),ut.m(n,A)):ut&&(ut.d(1),ut=null),e.config&&tt!==(tt=-1===i.config.Restart?"∞":i.config.Restart)&&(M.data=tt),e.config&&et!==(et=(i.config.RestartTimeout/1e9).toFixed(2))&&(q.data=et),e.config&&nt!==(nt=(i.config.StopTimeout/1e9).toFixed(2))&&(V.data=nt)},d(t){t&&a(n),it.d(),st.d(),lt&&lt.d(),ft&&ft.d(),ut&&ut.d()}}}(this,this._state),this.root._oncreate.push(()=>{(function(t){this.interval=setInterval(()=>{this.set({running:!0})},2e3)}).call(this),this.fire("update",{changed:function(t,e){for(var n in e)t[n]=1;return t}({},this._state),current:this._state})}),t.target&&(this._fragment.c(),this._mount(t.target,t.anchor),k(this._oncreate))}r(W.prototype,j),r(W.prototype,S);var U=W;function M(t,e){for(var n,o=e.configs,r=[],i=0;i<o.length;i+=1)r[i]=B(t,z(e,o,i));return{c(){for(var t=0;t<r.length;t+=1)r[t].c();n=document.createComment("")},m(t,e){for(var o=0;o<r.length;o+=1)r[o].m(t,e);c(n,t,e)},p(e,i){if(e.configs){o=i.configs;for(var c=0;c<o.length;c+=1){const a=z(i,o,c);r[c]?r[c].p(e,a):(r[c]=B(t,a),r[c].c(),r[c].m(n.parentNode,n))}for(;c<r.length;c+=1)r[c].d(1);r.length=o.length}},d(t){s(r,t),t&&a(n)}}}function B(t,e){var n={config:e.config},o=new U({root:t.root,store:t.store,data:n});return{c(){o._fragment.c()},m(t,e){o._mount(t,e)},p(t,e){var n={};t.configs&&(n.config=e.config),o._set(n)},d(t){o.destroy(t)}}}function z(t,e,n){const o=Object.create(t);return o.config=e[n],o.each_value=e,o.config_index=n,o}function J(t){v(this,t),this._state=r({},t.data),this._intro=!0,t.root||(this._oncreate=[],this._beforecreate=[],this._aftercreate=[]),this._fragment=M(this,this._state),t.target&&(this._fragment.c(),this._mount(t.target,t.anchor),this._lock=!0,k(this._beforecreate),k(this._oncreate),k(this._aftercreate),this._lock=!1)}r(J.prototype,j);new J({target:document.getElementById("supervisors"),data:{configs:[{Name:"listener2",Command:"/bin/bash",Args:["-c","nc -l 9001"],Environment:{RUN:"xxxx",PUSSS_ASD_ASD_ASD:"x0asdlasdjalkjdlakjsdlakjdlaksjdlaksjdlaksjdlaksjd"},WorkDir:"/tmp/dev",StopTimeout:5e9,RestartTimeout:1e9,Restart:-1,LogFile:"sample.log"},{Name:"listener3",Command:"/bin/bash",Args:["-c","nc -l 9001"],WorkDir:"/tmp/dev",StopTimeout:5e9,RestartTimeout:1e9,Restart:-1,LogFile:"sample3.log"},{Name:"listener4",Command:"/bin/bash",Args:["-c","nc -l 9001"],StopTimeout:5e9,RestartTimeout:1e9,Restart:-1,LogFile:"sample.log"}]}})}]);