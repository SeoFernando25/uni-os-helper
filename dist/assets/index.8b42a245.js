import{S as ll,i as sl,s as nl,e as i,a as g,t as P,k as X,b as h,m as rl,c as J,d as s,o as yt,p as pe,q as K,r as Ie,v as lt,w as R,x as te,y as le,j as $,z as Mt,A as E,f as Q,h as zt,B as W,C as al,n as se,D as il,E as Ue,F as At,G as ol,H as Lt}from"./index.02c4197d.js";import{F as Y,f as ul,a as nt,b as rt,c as Yt}from"./index.es.a5a06884.js";class Zt{constructor(e,t,l){this.oldPage=e,this.newPage=t,this.frameI=l,this.oldFrameI=e.frameI,this.newPageI=t.frameI}execute(){this.oldPage.frameI=this.newPageI,this.newPage.frameI=this.frameI}undo(){this.oldPage.frameI=this.oldFrameI,this.newPage.frameI=this.newPageI}}class xt{constructor(e,t){this.newPage=e,this.frameI=t}execute(){this.newPage.frameI=this.frameI}undo(){this.newPage.frameI=this.oldFrameI}}class el{constructor(e,t){this.nFrames=e,this.history=[],this.faultHistory=[],this.pages=[],t.forEach((l,o)=>{this.pages.push({id:o,value:l,frameI:-1,extra:void 0})}),this.init()}init(){}}class st{constructor(){this.commands=[]}execute(){this.commands.forEach(e=>e.execute())}undo(){this.commands.slice().reverse().forEach(t=>t.undo())}}class tt{constructor(e,t=null){this.pageRef=e,this.extra=t,this.previousExtra=this.pageRef.extra}execute(){this.pageRef.extra=this.extra}undo(){this.pageRef.extra=this.previousExtra}}class fl extends el{init(){this.pages.forEach((e,t)=>{e.extra=0})}getSteps(){const e=[];this.faultHistory=[];let t=0;return this.pages.forEach((l,o)=>{t++;var c;const u=new Map;if(this.pages.filter(b=>b.frameI>-1).forEach(b=>{u.set(b.value,b)}),u.has(l.value)){c=new tt(u.get(l.value),t),c.execute(),e.push(c),this.faultHistory.push(!1);return}var p=new st;if(u.size<this.nFrames){c=new xt(l,u.size),p.commands.push(c),c=new tt(l,t),p.commands.push(c),p.execute(),e.push(p),this.faultHistory.push(!0);return}let m=Array.from(u.values()).sort((b,H)=>b.extra-H.extra)[0];c=new Zt(m,l,m.frameI),p.commands.push(c),c=new tt(l,t),p.commands.push(c),p.execute(),e.push(p),this.faultHistory.push(!0)}),this.pages.filter(l=>l.frameI),e.reverse().forEach(l=>l.undo()),e.reverse()}}class cl extends el{getSteps(){let e=0,t=[];return this.faultHistory=[],this.pages.forEach((l,o)=>{var c;const u=new Map;if(this.pages.filter(m=>m.frameI>-1).forEach(m=>{u.set(m.value,m)}),u.has(l.value)){this.faultHistory.push(!1),t.push(new st);return}var p=new st;if(u.size<this.nFrames){c=new xt(l,e++),p.commands.push(c),p.execute(),t.push(p),this.faultHistory.push(!0);return}let _=this.pages.find(m=>m.frameI==e%this.nFrames);c=new Zt(_,l,_.frameI),p.commands.push(c),c.execute(),t.push(c),this.faultHistory.push(!0),e++}),this.pages.filter(l=>l.frameI),t.reverse().forEach(l=>l.undo()),t.reverse()}}function Bt(r,e,t){const l=r.slice();return l[24]=e[t],l[26]=t,l}function Gt(r,e,t){const l=r.slice();return l[24]=e[t],l[26]=t,l}function Ot(r,e,t){const l=r.slice();return l[28]=e[t],l}function Tt(r,e,t){const l=r.slice();return l[31]=e[t],l}function $t(r){let e,t=r[31][0]+"",l;return{c(){e=i("option"),l=P(t),e.__value=r[31][0],e.value=e.__value},m(o,c){J(o,e,c),s(e,l)},p:se,d(o){o&&Q(e)}}}function hl(r){let e,t;return e=new Y({props:{icon:nt,class:"text-success"}}),{c(){X(e.$$.fragment)},m(l,o){K(e,l,o),t=!0},p:se,i(l){t||(R(e.$$.fragment,l),t=!0)},o(l){E(e.$$.fragment,l),t=!1},d(l){W(e,l)}}}function pl(r){let e,t;return e=new Y({props:{icon:rt,class:"text-error"}}),{c(){X(e.$$.fragment)},m(l,o){K(e,l,o),t=!0},p:se,i(l){t||(R(e.$$.fragment,l),t=!0)},o(l){E(e.$$.fragment,l),t=!1},d(l){W(e,l)}}}function qt(r){let e,t,l,o;const c=[pl,hl],u=[];function p(_,m){return _[28]?0:1}return e=p(r),t=u[e]=c[e](r),{c(){t.c(),l=il()},m(_,m){u[e].m(_,m),J(_,l,m),o=!0},p(_,m){let b=e;e=p(_),e===b?u[e].p(_,m):(te(),E(u[b],1,1,()=>{u[b]=null}),le(),t=u[e],t?t.p(_,m):(t=u[e]=c[e](_),t.c()),R(t,1),t.m(l.parentNode,l))},i(_){o||(R(t),o=!0)},o(_){E(t),o=!1},d(_){u[e].d(_),_&&Q(l)}}}function jt(r){let e,t,l;return t=new Y({props:{icon:Yt}}),{c(){e=i("span"),X(t.$$.fragment)},m(o,c){J(o,e,c),K(t,e,null),r[18](e),l=!0},p:se,i(o){l||(R(t.$$.fragment,o),l=!0)},o(o){E(t.$$.fragment,o),l=!1},d(o){o&&Q(e),W(t),r[18](null)}}}function dl(r){let e,t;return e=new Y({props:{icon:nt,class:"text-success"}}),{c(){X(e.$$.fragment)},m(l,o){K(e,l,o),t=!0},p:se,i(l){t||(R(e.$$.fragment,l),t=!0)},o(l){E(e.$$.fragment,l),t=!1},d(l){W(e,l)}}}function ml(r){let e,t;return e=new Y({props:{icon:rt,class:"text-error"}}),{c(){X(e.$$.fragment)},m(l,o){K(e,l,o),t=!0},p:se,i(l){t||(R(e.$$.fragment,l),t=!0)},o(l){E(e.$$.fragment,l),t=!1},d(l){W(e,l)}}}function Ut(r,e){let t,l,o,c,u,p,_,m,b=e[26]+"",H,B,A,k=e[24].value+"",G,y,v,d=e[7]==e[26]&&jt(e);const I=[ml,dl],z=[];function M(F,w){return F[9][F[26]]?0:1}return u=M(e),p=z[u]=I[u](e),{key:r,first:null,c(){t=i("tr"),l=i("td"),d&&d.c(),o=g(),c=i("td"),p.c(),_=g(),m=i("td"),H=P(b),B=g(),A=i("td"),G=P(k),y=g(),Ue(t,"active",e[24].frameI>-1),this.first=t},m(F,w){J(F,t,w),s(t,l),d&&d.m(l,null),s(t,o),s(t,c),z[u].m(c,null),s(t,_),s(t,m),s(m,H),s(t,B),s(t,A),s(A,G),s(t,y),v=!0},p(F,w){e=F,e[7]==e[26]?d?(d.p(e,w),w[0]&136&&R(d,1)):(d=jt(e),d.c(),R(d,1),d.m(l,null)):d&&(te(),E(d,1,1,()=>{d=null}),le());let O=u;u=M(e),u===O?z[u].p(e,w):(te(),E(z[O],1,1,()=>{z[O]=null}),le(),p=z[u],p?p.p(e,w):(p=z[u]=I[u](e),p.c()),R(p,1),p.m(c,null)),(!v||w[0]&8)&&b!==(b=e[26]+"")&&$(H,b),(!v||w[0]&8)&&k!==(k=e[24].value+"")&&$(G,k),w[0]&8&&Ue(t,"active",e[24].frameI>-1)},i(F){v||(R(d),R(p),v=!0)},o(F){E(d),E(p),v=!1},d(F){F&&Q(t),d&&d.d(),z[u].d()}}}function Dt(r){let e,t,l;return t=new Y({props:{icon:Yt}}),{c(){e=i("span"),X(t.$$.fragment)},m(o,c){J(o,e,c),K(t,e,null),r[19](e),l=!0},p:se,i(o){l||(R(t.$$.fragment,o),l=!0)},o(o){E(t.$$.fragment,o),l=!1},d(o){o&&Q(e),W(t),r[19](null)}}}function Nt(r,e){var I,z;let t,l,o,c,u=e[24].frameI+"",p,_,m,b=((I=e[24].extra)!=null?I:"")+"",H,B,A,k=((z=e[24].value)!=null?z:"?")+"",G,y,v,d=e[24].id==e[7]&&Dt(e);return{key:r,first:null,c(){t=i("tr"),l=i("td"),d&&d.c(),o=g(),c=i("td"),p=P(u),_=g(),m=i("td"),H=P(b),B=g(),A=i("td"),G=P(k),y=g(),Ue(t,"active",e[24].id==e[7]),this.first=t},m(M,F){J(M,t,F),s(t,l),d&&d.m(l,null),s(t,o),s(t,c),s(c,p),s(t,_),s(t,m),s(m,H),s(t,B),s(t,A),s(A,G),s(t,y),v=!0},p(M,F){var w,O;e=M,e[24].id==e[7]?d?(d.p(e,F),F[0]&136&&R(d,1)):(d=Dt(e),d.c(),R(d,1),d.m(l,null)):d&&(te(),E(d,1,1,()=>{d=null}),le()),(!v||F[0]&8)&&u!==(u=e[24].frameI+"")&&$(p,u),(!v||F[0]&8)&&b!==(b=((w=e[24].extra)!=null?w:"")+"")&&$(H,b),(!v||F[0]&8)&&k!==(k=((O=e[24].value)!=null?O:"?")+"")&&$(G,k),F[0]&136&&Ue(t,"active",e[24].id==e[7])},i(M){v||(R(d),v=!0)},o(M){E(d),v=!1},d(M){M&&Q(t),d&&d.d()}}}function _l(r){let e,t,l,o,c,u,p,_,m,b,H,B,A,k,G,y,v,d,I,z,M,F,w,O,Fe,V,C,U,de,ne,Re,Z,Ce,at,me,De,it,ot,_e,ut,Se=r[5].length+"",Ne,ft,re,D,Pe,ae,ct,Ee,ht,ge,He=(r[9].filter(Vt).length/r[9].length*100).toFixed(2)+"",Ve,pt,dt,ie,ye=r[9].filter(Xt).length+"",Xe,mt,Me=r[9].length+"",Je,_t,ze,N,Ae,oe,gt,Le,vt,ve,Be=(r[9].filter(Jt).length/r[9].length*100).toFixed(2)+"",Ke,bt,wt,ue,Ge=r[9].filter(Kt).length+"",Qe,kt,Oe=r[9].length+"",We,Ye,x,Te,fe,Ze,It,$e,q=[],Ft=new Map,Rt,qe,ce,xe,Ct,je,j=[],St=new Map,T,et,Pt,he=r[11],L=[];for(let n=0;n<he.length;n+=1)L[n]=$t(Tt(r,he,n));C=new Y({props:{icon:ul,class:"ml-1"}});let ee=r[9],S=[];for(let n=0;n<ee.length;n+=1)S[n]=qt(Ot(r,ee,n));const tl=n=>E(S[n],1,1,()=>{S[n]=null});ae=new Y({props:{icon:nt,scale:"3"}}),oe=new Y({props:{icon:rt,scale:"3"}});let be=r[3];const Et=n=>n[24].id;for(let n=0;n<be.length;n+=1){let a=Gt(r,be,n),f=Et(a);Ft.set(f,q[n]=Ut(f,a))}let we=r[3].filter(Qt).sort(Wt);const Ht=n=>n[24].id;for(let n=0;n<we.length;n+=1){let a=Bt(r,we,n),f=Ht(a);St.set(f,j[n]=Nt(f,a))}return{c(){e=i("div"),t=i("div"),l=i("div"),l.innerHTML="<h1>Page Replacement Algorithms</h1>",o=g(),c=i("div"),u=i("label"),p=i("span"),p.textContent="Solver",_=g(),m=i("select");for(let n=0;n<L.length;n+=1)L[n].c();b=g(),H=i("label"),B=i("span"),B.textContent="Reference String",A=g(),k=i("input"),G=g(),y=i("label"),v=i("span"),v.textContent="Frame Size",d=g(),I=i("input"),z=g(),M=i("label"),F=P(`Steps:

        `),w=i("input"),Fe=g(),V=i("div"),X(C.$$.fragment),U=g();for(let n=0;n<S.length;n+=1)S[n].c();de=g(),ne=i("div"),Re=i("div"),Z=i("div"),Ce=i("div"),Ce.textContent="References",at=g(),me=i("div"),De=P(r[10]),it=P(" unique"),ot=g(),_e=i("div"),ut=P("out of "),Ne=P(Se),ft=g(),re=i("div"),D=i("div"),Pe=i("div"),X(ae.$$.fragment),ct=g(),Ee=i("div"),Ee.textContent="Hit Rate",ht=g(),ge=i("div"),Ve=P(He),pt=P("%"),dt=g(),ie=i("div"),Xe=P(ye),mt=P("/"),Je=P(Me),_t=g(),ze=i("div"),N=i("div"),Ae=i("div"),X(oe.$$.fragment),gt=g(),Le=i("div"),Le.textContent="Fault Rate",vt=g(),ve=i("div"),Ke=P(Be),bt=P("%"),wt=g(),ue=i("div"),Qe=P(Ge),kt=P("/"),We=P(Oe),Ye=g(),x=i("div"),Te=i("div"),fe=i("table"),Ze=i("thead"),Ze.innerHTML=`<tr><th>Current</th> 
          <th>Fault</th> 
          <th>Time</th> 
          <th>References</th></tr>`,It=g(),$e=i("tbody");for(let n=0;n<q.length;n+=1)q[n].c();Rt=g(),qe=i("div"),ce=i("table"),xe=i("thead"),xe.innerHTML=`<tr><th>Current</th> 
          <th>Frame</th> 
          <th>Extra</th> 
          <th>References</th></tr>`,Ct=g(),je=i("tbody");for(let n=0;n<j.length;n+=1)j[n].c();h(l,"class","prose"),h(m,"class","select select-bordered "),r[0]===void 0&&rl(()=>r[14].call(m)),h(u,"class","input-group input-group-vertical"),h(k,"class","input input-bordered"),h(k,"type","text"),h(k,"placeholder","1 2 3 4 2 1 5 6 2 1 2 3 7 6 3 2 1 2 3 6"),h(H,"class","input-group input-group-vertical"),h(I,"class","input input-bordered"),h(I,"type","number"),h(I,"placeholder","4"),h(y,"class","input-group input-group-vertical"),h(w,"id","stepsRange"),h(w,"type","range"),h(w,"min","-1"),h(w,"max",O=r[4].length-1),h(w,"class","range "),h(V,"class","flex justify-between "),h(M,"for","stepsRange"),h(c,"class","grid gap-y-8"),h(Ce,"class","stat-title"),h(me,"class","stat-value"),h(_e,"class","stat-desc "),h(Z,"class","stat "),h(Re,"class","stats shadow "),h(Pe,"class","stat-figure"),h(Ee,"class","stat-title "),h(ge,"class","stat-value"),h(ie,"class","stat-desc"),h(D,"class","stat shadow text-success"),h(Ae,"class","stat-figure "),h(Le,"class","stat-title"),h(ve,"class","stat-value "),h(ue,"class","stat-desc"),h(N,"class","stat text-error"),h(ze,"class","stat shadow "),h(re,"class","stats stats-vertical sm:stats-horizontal "),h(ne,"class","grid grid-cols-1 gap-y-8"),h(e,"class","grid grid-cols-1 lg:grid-cols-2 gap-x-4 gap-y-4"),h(fe,"class","table w-full"),h(Te,"class","flex-1 overflow-auto overflow-x-hidden"),h(ce,"class","table w-full "),h(qe,"class","flex-1 overflow-auto overflow-x-hidden"),h(x,"class","flex flex-col-reverse sm:flex-row overflow-hidden gap-4 mt-4")},m(n,a){J(n,e,a),s(e,t),s(t,l),s(t,o),s(t,c),s(c,u),s(u,p),s(u,_),s(u,m);for(let f=0;f<L.length;f+=1)L[f].m(m,null);yt(m,r[0]),s(c,b),s(c,H),s(H,B),s(H,A),s(H,k),pe(k,r[1]),s(c,G),s(c,y),s(y,v),s(y,d),s(y,I),pe(I,r[2]),s(c,z),s(c,M),s(M,F),s(M,w),pe(w,r[6]),s(M,Fe),s(M,V),K(C,V,null),s(V,U);for(let f=0;f<S.length;f+=1)S[f].m(V,null);s(e,de),s(e,ne),s(ne,Re),s(Re,Z),s(Z,Ce),s(Z,at),s(Z,me),s(me,De),s(me,it),s(Z,ot),s(Z,_e),s(_e,ut),s(_e,Ne),s(ne,ft),s(ne,re),s(re,D),s(D,Pe),K(ae,Pe,null),s(D,ct),s(D,Ee),s(D,ht),s(D,ge),s(ge,Ve),s(ge,pt),s(D,dt),s(D,ie),s(ie,Xe),s(ie,mt),s(ie,Je),s(re,_t),s(re,ze),s(ze,N),s(N,Ae),K(oe,Ae,null),s(N,gt),s(N,Le),s(N,vt),s(N,ve),s(ve,Ke),s(ve,bt),s(N,wt),s(N,ue),s(ue,Qe),s(ue,kt),s(ue,We),J(n,Ye,a),J(n,x,a),s(x,Te),s(Te,fe),s(fe,Ze),s(fe,It),s(fe,$e);for(let f=0;f<q.length;f+=1)q[f].m($e,null);s(x,Rt),s(x,qe),s(qe,ce),s(ce,xe),s(ce,Ct),s(ce,je);for(let f=0;f<j.length;f+=1)j[f].m(je,null);T=!0,et||(Pt=[Ie(m,"change",r[14]),Ie(k,"input",r[15]),Ie(I,"input",r[16]),Ie(w,"change",r[17]),Ie(w,"input",r[17])],et=!0)},p(n,a){if(a[0]&2048){he=n[11];let f;for(f=0;f<he.length;f+=1){const ke=Tt(n,he,f);L[f]?L[f].p(ke,a):(L[f]=$t(ke),L[f].c(),L[f].m(m,null))}for(;f<L.length;f+=1)L[f].d(1);L.length=he.length}if(a[0]&2049&&yt(m,n[0]),a[0]&2&&k.value!==n[1]&&pe(k,n[1]),a[0]&4&&lt(I.value)!==n[2]&&pe(I,n[2]),(!T||a[0]&16&&O!==(O=n[4].length-1))&&h(w,"max",O),a[0]&64&&pe(w,n[6]),a[0]&512){ee=n[9];let f;for(f=0;f<ee.length;f+=1){const ke=Ot(n,ee,f);S[f]?(S[f].p(ke,a),R(S[f],1)):(S[f]=qt(ke),S[f].c(),R(S[f],1),S[f].m(V,null))}for(te(),f=ee.length;f<S.length;f+=1)tl(f);le()}(!T||a[0]&1024)&&$(De,n[10]),(!T||a[0]&32)&&Se!==(Se=n[5].length+"")&&$(Ne,Se),(!T||a[0]&512)&&He!==(He=(n[9].filter(Vt).length/n[9].length*100).toFixed(2)+"")&&$(Ve,He),(!T||a[0]&512)&&ye!==(ye=n[9].filter(Xt).length+"")&&$(Xe,ye),(!T||a[0]&512)&&Me!==(Me=n[9].length+"")&&$(Je,Me),(!T||a[0]&512)&&Be!==(Be=(n[9].filter(Jt).length/n[9].length*100).toFixed(2)+"")&&$(Ke,Be),(!T||a[0]&512)&&Ge!==(Ge=n[9].filter(Kt).length+"")&&$(Qe,Ge),(!T||a[0]&512)&&Oe!==(Oe=n[9].length+"")&&$(We,Oe),a[0]&904&&(be=n[3],te(),q=Mt(q,a,Et,1,n,be,Ft,$e,At,Ut,null,Gt),le()),a[0]&392&&(we=n[3].filter(Qt).sort(Wt),te(),j=Mt(j,a,Ht,1,n,we,St,je,At,Nt,null,Bt),le())},i(n){if(!T){R(C.$$.fragment,n);for(let a=0;a<ee.length;a+=1)R(S[a]);R(ae.$$.fragment,n),R(oe.$$.fragment,n);for(let a=0;a<be.length;a+=1)R(q[a]);for(let a=0;a<we.length;a+=1)R(j[a]);T=!0}},o(n){E(C.$$.fragment,n),S=S.filter(Boolean);for(let a=0;a<S.length;a+=1)E(S[a]);E(ae.$$.fragment,n),E(oe.$$.fragment,n);for(let a=0;a<q.length;a+=1)E(q[a]);for(let a=0;a<j.length;a+=1)E(j[a]);T=!1},d(n){n&&Q(e),zt(L,n),W(C),zt(S,n),W(ae),W(oe),n&&Q(Ye),n&&Q(x);for(let a=0;a<q.length;a+=1)q[a].d();for(let a=0;a<j.length;a+=1)j[a].d();et=!1,al(Pt)}}}const Vt=r=>!r,Xt=r=>!r,Jt=r=>r,Kt=r=>!r,Qt=r=>r.frameI>-1,Wt=(r,e)=>r.frameI-e.frameI;function gl(r,e,t){var l,o;const c=/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);let u=[["LRU",(C,U)=>new fl(C,U)],["FIFO",(C,U)=>new cl(C,U)]],p=u[1][0],_="1 2 3 4 2 1 5 6 2 1 2 3 7 6 3 2 1 2 3 6",m=4,b,H,B,A,k=[],G=0,y=-1,v=-1,d=u.find(([C,U])=>C===p)[1];z(_,m,d);let I=null;function z(C,U,de){t(5,k=C.trim().replace(/[,;:.|]/g," ").split(/\s+/)),b=de(U,k),t(3,H=b.pages),t(4,A=b.getSteps()),t(9,B=b.faultHistory),t(7,v=-1),t(6,y=v)}function M(){p=ol(this),t(0,p),t(11,u)}function F(){_=this.value,t(1,_)}function w(){m=lt(this.value),t(2,m)}function O(){y=lt(this.value),t(6,y)}function Fe(C){Lt[C?"unshift":"push"](()=>{I=C,t(8,I)})}function V(C){Lt[C?"unshift":"push"](()=>{I=C,t(8,I)})}return r.$$.update=()=>{if(r.$$.dirty[0]&39){t(9,B=[]),console.log(p);let C=u.find(([U,de])=>U===p)[1];z(_,m,C),t(10,G=new Set(k).size)}if(r.$$.dirty[0]&12760){for(;v!=y;)y>v?(t(12,l=A[v+1])===null||l===void 0||l.execute(),t(7,v++,v)):(t(13,o=A[v])===null||o===void 0||o.undo(),t(7,v--,v)),I&&(c||I.scrollIntoView({behavior:"auto",block:"center"}));t(3,H),t(7,v),t(6,y),t(4,A),t(12,l),t(13,o),t(8,I)}},[p,_,m,H,A,k,y,v,I,B,G,u,l,o,M,F,w,O,Fe,V]}class wl extends ll{constructor(e){super(),sl(this,e,gl,_l,nl,{},null,[-1,-1])}}export{wl as default};
