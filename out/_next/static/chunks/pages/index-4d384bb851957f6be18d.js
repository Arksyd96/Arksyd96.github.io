(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{60203:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return Dn}});var i,r,o,a,s,l=t(67294),c=t(52986),d=t(66311),p=t(52209),u=t(22636),m=t(85893),h=u.Z.a(i||(i=(0,p.Z)(["\n    width: 10vw;\n    min-width: 100px;\n    padding: 0.5em 1.2em;\n    border: 0.1em solid ",";\n    border-radius: 0.15em;\n    text-decoration: none;\n    font-weight: 300;\n    background: ",";\n    color: ",";\n    opacity: ",";\n    text-align: center;\n    box-sizing: border-box;\n    transition: all 0.2s;\n    cursor: pointer;\n    ","\n    :hover {\n        color: #000000;\n        background-color: orange;\n        border: 0.1em solid orange;\n        opacity: 1;\n    }\n    @media (max-width: 768px) {\n        width: 100%;\n        color: #000000;\n        background-color: orange;\n        border: 0.1em solid orange;\n        opacity: 1;\n    }\n"])),(function(n){return n.orange?"orange":"#FFFFFF"}),(function(n){return n.orange?"orange":"transparent"}),(function(n){return n.orange?"#000000":"#FFFFFF"}),(function(n){return n.orange?"0.5":"1"}),(function(n){return n.center&&"align-self: center;"})),g=function(n){return(0,m.jsx)(h,{orange:n.orange,center:n.center,href:n.link,target:n.newtab?"_blank":null,onClick:n.onClick,style:n.style,children:n.label})},f=t(42619),x=u.Z.h1(r||(r=(0,p.Z)(["\n    font-weight: 700;\n    font-size: 4em;\n    margin: 0.3em 0;\n    @media (max-width: 768px) {\n        font-size: 2.5em;\n    }\n"]))),b=u.Z.span(o||(o=(0,p.Z)(["\n    font-size: 1.5em;\n    @media (max-width: 768px) {\n        font-size: 1.2em;\n    }\n"]))),y=u.Z.p(a||(a=(0,p.Z)(["\n    opacity: 0.9;\n    width: 60%;\n    @media (max-width: 768px) {\n        width: 100%;\n    }\n"]))),v=u.Z.a(s||(s=(0,p.Z)(['\n    display: inline-block;\n    text-decoration: none;\n    cursor: pointer;\n    color: orange;\n    font-weight: bold;\n    :after {\n        content: "";\n        display: block;\n        position: relative;\n        opavity: 0.5;\n        height: 1px;\n        width: 0%;\n        background-color: orange;\n        transition: width 0.5s ease;\n    }\n    :hover:after {\n        width: 100%;\n    }\n']))),w=function(){return(0,m.jsxs)(f.Z,{id:"home",offset:0,minHeight:"100vh",invert:!0,apply:!0,children:[(0,m.jsx)(b,{children:"Hey, i'm"}),(0,m.jsx)(x,{children:"Kebaili Aghiles"}),(0,m.jsxs)(y,{children:["I'm a machine learning and artificial intelligence engineer specialized in deep learning and computer vision models (and occasionally working on web development and designing). I'm currently working on an implementation of a "," ",(0,m.jsx)(v,{href:"https://medium.com/wisio/a-gentle-introduction-to-doc2vec-db3e8c0cce5e",target:"_blank",children:"doc2vec word embedding model"}),"."]}),(0,m.jsx)("br",{}),(0,m.jsx)(g,{newtab:!0,label:"Resume"})]})},j=t(18611),k=t(87121),Z=t(9888);function A(n,e){var t="undefined"!==typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(!t){if(Array.isArray(n)||(t=function(n,e){if(!n)return;if("string"===typeof n)return F(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);"Object"===t&&n.constructor&&(t=n.constructor.name);if("Map"===t||"Set"===t)return Array.from(n);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return F(n,e)}(n))||e&&n&&"number"===typeof n.length){t&&(n=t);var i=0,r=function(){};return{s:r,n:function(){return i>=n.length?{done:!0}:{done:!1,value:n[i++]}},e:function(n){throw n},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,a=!0,s=!1;return{s:function(){t=t.call(n)},n:function(){var n=t.next();return a=n.done,n},e:function(n){s=!0,o=n},f:function(){try{a||null==t.return||t.return()}finally{if(s)throw o}}}}function F(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,i=new Array(e);t<e;t++)i[t]=n[t];return i}var N,S,C,z,M,_,I,P,R,E,T,O,K,L,H,X=t(12435),B=[1,3,5,7,5,3,1],D={tilt:Math.PI/9,initialVelocityX:.09,initialVelocityY:.09,initialRotationX:.14*Math.PI,initialRotationZ:0},G=function(){var n,e,t=(0,l.useState)(500),i=t[0],r=t[1],o=(0,l.useState)(500),a=o[0],s=o[1],c=(0,l.useRef)(null),p=null,u=null,h=Math.PI,g=D.radius,f=void 0===g?150:g,x=D.fontSize,b=void 0===x?19:x,y=D.tilt,v=void 0===y?0:y,w=D.initialVelocityX,j=D.initialVelocityY,k=D.initialRotationX,Z=D.initialRotationZ,F=void 0===w?0:w,N=void 0===j?0:j,S=void 0===k?0:k,C=void 0===Z?0:Z,z=!1,M=function(n,e,t){return[n*Math.cos(t)-e*Math.sin(t),n*Math.sin(t)+e*Math.cos(t)]},_=!1,I=function n(){_&&window.requestAnimationFrame(n),function(){u.clearRect(0,0,p.width,p.height);var n,e=0,t=0,r=A(X);try{for(r.s();!(n=r.n()).done;){var o=n.value,s=h/B.length*t,l=2*h/B[t]*e,c=f*Math.sin(s)*Math.cos(l),m=f*Math.sin(s)*Math.sin(l),g=f*Math.cos(s)+e%2*8,x=M(m,g,v),y=(0,d.Z)(x,2);m=y[0],g=y[1];var w=M(c,g,C),j=(0,d.Z)(w,2);c=j[0],g=j[1];var k=M(c,m,S),Z=(0,d.Z)(k,2);c=Z[0],m=Z[1];var F=.6+c/f*.4,N=b+2+c/f*5;u.fillStyle="rgba(189, 148, 100, ".concat(F,")"),u.font="".concat(N,'px "Roboto mono", monospace'),u.fillText(o,m+i/2-20,a/2-g),--e<0&&(t++,e=B[t]-1)}}catch(z){r.e(z)}finally{r.f()}}(),F>0&&(F-=.01),N>0&&(N-=.01),F<0&&(F+=.01),N>0&&(N+=.01),0===F&&0===N&&(_=!1),C+=.01*N,S+=.01*F};function P(){_=!0,window.requestAnimationFrame(I)}return(0,l.useEffect)((function(){void 0!==window&&window.innerWidth>768&&(r(window.innerWidth/100*40),s(window.innerWidth/100*40)),p=c.current,(u=p.getContext("2d")).textAlign="center",p.width=2*i,p.height=2*a,p.style.width="".concat(i,"px"),p.style.height="".concat(a,"px"),u.scale(2,2),P(),p.addEventListener("mousedown",(function(t){z=!0,n=t.screenX,e=t.screenY})),p.addEventListener("mousemove",(function(t){if(z){var i=t.screenX-n,r=t.screenY-e,o=[t.screenX,t.screenY];n=o[0],e=o[1],C+=.01*-r,S+=.01*i,F=.1*i,N=.1*r,_||P()}})),p.addEventListener("mouseup",(function(n){return z=!1})),p.addEventListener("mouseleave",(function(n){return z=!1}))}),[]),(0,m.jsx)("canvas",{ref:c})},V=function(n){var e=u.Z.h1(N||(N=(0,p.Z)(["\n        color: ",";\n        font-weight: 500;\n        font-size: 2.5em;\n        margin-bottom: 50px;\n        align-self: center;\n        :before, :after {\n            content: '';\n            display: inline-block;\n            position: relative;\n            background: orange;\n            opacity: 0.6;\n            height: 1px;\n            width: 20vw;\n            margin: 0px 20px;\n            top: -10px;\n        }\n        @media (max-width: 768px) {\n            font-size: 1.5em;\n            :before, :after {\n                width: 10vw;\n                margin: 0px 10px;\n            }\n        }\n"])),n.color);return(0,m.jsx)(e,{number:n.number,children:n.children})},W=t(17963),Y=u.Z.div(S||(S=(0,p.Z)(["\n    display: flex;\n    flexDirection: row;\n    background-color: transparent;\n    box-shadow: 0px 0px 4px 4px rgba(150, 150, 150, 0.35);\n    backdrop-filter: blur(6px);\n    width: 100%;\n    border-radius: 2px;\n    padding: 1vw 2vw;\n    box-sizing: border-box;\n    @media (max-width: 1024px) {\n        flex-direction: column;\n        align-items: center;\n    }\n"]))),J=u.Z.li(C||(C=(0,p.Z)(['\n    margin-bottom: 1em;\n    color: white;\n    :before {\n        content: "\u25b9";\n        color: orange;\n        position: absolute;\n        left: 0px;\n        font-size: 2em;\n    }\n    @media (max-width: 768px) {\n        margin: 0.6em 0;\n        :before {\n            font-size: 1.5em;\n            left: 2vw;\n        }\n    }\n']))),q=u.Z.ul({display:"flex",justifyContent:"space-between",flexDirection:"column",listStyle:"none",position:"relative"}),U=u.Z.ul(z||(z=(0,p.Z)(["\n    display: flex;\n    flex-direction: row;\n    padding: 0;\n    opacity: 0.8;\n    @media (max-width: 768px) {\n        font-size: 0.8em;\n    }\n"]))),Q=u.Z.li(M||(M=(0,p.Z)(["\n    display: flex;\n    alignItems: center;\n    list-style: none;\n    margin: 10px 5vw 10px 0px;\n    :before {\n        content: '';\n        display: inline-block;\n        position: relative;\n        width: 20px;\n        height: 20px;\n        margin-right: 5px;\n        background-size: contain;\n        background-repeat: no-repeat;\n        background-position: center;\n    }\n"]))),$=u.Z.h1(_||(_=(0,p.Z)(["\n    margin: 0; \n    font-size: 1.8em;\n    @media (max-width: 768px) {\n        font-size: 1.2em;\n        margin-bottom: 0.4em;\n    }\n"]))),nn=u.Z.div(I||(I=(0,p.Z)(["\n    width: 100%; \n    height: 0.5px;\n    background-color: orange; \n    margin-bottom: 5px;\n    @media (max-width: 768px) {\n        width: 95%;\n    }\n"]))),en=function(){return(0,m.jsxs)(f.Z,{id:"curriculum",offset:140,minHeight:"110vh",apply:!0,children:[(0,m.jsx)(V,{number:"1",color:"#FFFFFF",children:"Curriculum"}),(0,m.jsxs)(Y,{children:[(0,m.jsx)(q,{children:W.map((function(n,e){return(0,m.jsxs)(l.Fragment,{children:[0!==e?(0,m.jsx)(nn,{}):null,(0,m.jsxs)(J,{children:[(0,m.jsx)($,{children:n.title}),(0,m.jsx)("span",{style:{color:"orange",marginBottom:0},children:n.university}),(0,m.jsxs)(U,{children:[(0,m.jsx)(Q,{className:"address-container",children:n.location}),(0,m.jsx)(Q,{className:"calendar-container",children:n.date})]})]},e)]},e)}))}),(0,m.jsx)(G,{})]})]})},tn=u.Z.div(P||(P=(0,p.Z)(["\n    width: 1.5em;\n    height: 1.5em;\n    display: flex;\n    background-size: contain;\n    background-repeat: no-repeat;\n    background-position: center;\n    opacity: ",";\n    transition: opacity 0.2s ease-in-out;\n"])),(function(n){return n.hovered?"1":"0.6"})),rn=function(n){return(0,m.jsx)(tn,{hovered:n.hovered,className:"redirect-container",children:(0,m.jsx)("a",{href:n.link})})},on=u.Z.div(R||(R=(0,p.Z)(["\n    display: flex;\n    flex-direction: column;\n    background-color: transparent;\n    box-shadow: 0px 0px 4px 4px rgba(150, 150, 150, 0.35);\n    backdrop-filter: blur(8px);\n    min-height: 50vh;\n    border-radius: 2px;\n    box-sizing: border-box;\n    overflow: hidden;\n    margin: 10px;\n    transition: transform 0.2s ease-in-out;\n    cursor: pointer;\n    :hover {\n        transform: translateY(-10px);\n    }\n"]))),an=u.Z.p({color:"orange",opacity:"0.8",padding:"5px 15px",position:"relative",margin:"0px 0px 10px 0px",":before":{content:"'\u25b9'",position:"absolute",left:"-2px",color:"orange"}}),sn=u.Z.h1(E||(E=(0,p.Z)(["\n    display: flex;\n    align-items: center;\n    font-size: 1.2em;\n    margin: 0;\n    min-height: 2.5em;\n"]))),ln=u.Z.div(T||(T=(0,p.Z)(["\n    display: flex;\n    flex-direction: row;\n    align-items: flex-end;\n"]))),cn=u.Z.span(O||(O=(0,p.Z)(["\n    color: #ffffff;\n    opacity: 0.6;\n    font-size: 0.7em;\n    margin-right: 5px;\n"]))),dn=u.Z.div(K||(K=(0,p.Z)(["\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n"]))),pn=function(n){var e=n.project,t=e.title,i=e.description,r=e.tags,o=e.thumbnail,a=e.link,s=(0,l.useState)(!1),c=s[0],d=s[1];return(0,m.jsxs)(on,{onMouseEnter:function(){return d(!0)},onMouseLeave:function(){return d(!1)},onClick:n.post?null:function(){window.open(a,"_blank").focus()},children:[(0,m.jsx)("img",{src:o,alt:"thumbnail",style:{objectFit:"cover",borderRadius:"5px",maxHeight:"28vh",WebkitMaskImage:"linear-gradient(to bottom, white 65%, transparent)"}}),(0,m.jsxs)("div",{style:{padding:"15px",display:"flex",flexDirection:"column",justifyContent:"space-between",minHeight:"22vh"},children:[(0,m.jsx)(sn,{children:t}),(0,m.jsx)(an,{children:i}),(0,m.jsxs)(dn,{children:[(0,m.jsx)(ln,{children:r.map((function(n,e){return(0,m.jsx)(cn,{children:n},e)}))}),(0,m.jsx)(rn,{link:a,hovered:c})]})]})]})},un=t(81379),mn=u.Z.ul(L||(L=(0,p.Z)(["\n    list-style: none;\n    display: grid;\n    gap: 15px;\n    grid-template-columns: repeat(auto-fill, 25vw);\n    transition: all 0.3s ease-in-out;\n    margin: 0;\n    padding: 0;\n    @media (max-width: 768px) {\n        grid-template-columns: repeat(auto-fill, 100%);\n    }\n"]))),hn=u.Z.li(H||(H=(0,p.Z)(["\n    display: ",";\n    transition: all 0.3s ease-in-out;\n"])),(function(n){return n.display?"list-item":"none"})),gn=function(){var n=6,e=(0,l.useState)([]),t=e[0],i=e[1],r=(0,l.useState)(n),o=r[0],a=r[1];(0,l.useEffect)((function(){i(un),void 0!==window&&window.innerWidth<768&&a(n=3)}),[]);return(0,m.jsxs)(f.Z,{id:"projects",offset:1100,minHeight:"200vh",apply:!0,children:[(0,m.jsx)(V,{number:"2",color:"#FFFFFF",children:"Projects"}),(0,m.jsx)(mn,{children:t.map((function(n,e){return(0,m.jsx)(hn,{display:e+1<=o,children:(0,m.jsx)(pn,{project:n})},e)}))}),(0,m.jsx)(g,{label:o===t.length?"View less":"View more",onClick:function(){o===t.length?a(n):o+3>t.length?a(t.length):a(o+3)},style:{marginTop:"20px",alignSelf:"center",minWidth:"200px"}})]})},fn=t(66396),xn=t(94199),bn=t(70444);function yn(n,e){if(void 0===n.inserted[e.name])return n.insert("",e,n.sheet,!0)}function vn(n,e,t){var i=[],r=(0,bn.f)(n,i,t);return i.length<2?t:r+e(i)}var wn,jn,kn,Zn,An,Fn,Nn,Sn,Cn=function n(e){for(var t="",i=0;i<e.length;i++){var r=e[i];if(null!=r){var o=void 0;switch(typeof r){case"boolean":break;case"object":if(Array.isArray(r))o=n(r);else for(var a in o="",r)r[a]&&a&&(o&&(o+=" "),o+=a);break;default:o=r}o&&(t&&(t+=" "),t+=o)}}return t},zn=function(n){var e=(0,fn.Z)(n);e.sheet.speedy=function(n){this.isSpeedy=n},e.compat=!0;var t=function(){for(var n=arguments.length,t=new Array(n),i=0;i<n;i++)t[i]=arguments[i];var r=(0,xn.O)(t,e.registered,void 0);return(0,bn.M)(e,r,!1),e.key+"-"+r.name};return{css:t,cx:function(){for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return vn(e.registered,t,Cn(i))},injectGlobal:function(){for(var n=arguments.length,t=new Array(n),i=0;i<n;i++)t[i]=arguments[i];var r=(0,xn.O)(t,e.registered);yn(e,r)},keyframes:function(){for(var n=arguments.length,t=new Array(n),i=0;i<n;i++)t[i]=arguments[i];var r=(0,xn.O)(t,e.registered),o="animation-"+r.name;return yn(e,{name:r.name,styles:"@keyframes "+o+"{"+r.styles+"}"}),o},hydrate:function(n){n.forEach((function(n){e.inserted[n]=!0}))},flush:function(){e.registered={},e.inserted={},e.sheet.flush()},sheet:e.sheet,cache:e,getRegisteredStyles:bn.f.bind(null,e.registered),merge:vn.bind(null,e.registered,t)}}({key:"css"}),Mn=(zn.flush,zn.hydrate,zn.cx,zn.merge,zn.getRegisteredStyles,zn.injectGlobal,zn.keyframes,zn.css),_n=(zn.sheet,zn.cache,Mn(wn||(wn=(0,p.Z)(["\n    align-self: center;\n    display: block;\n    width: 40vw;\n    font-family: inherit;\n    border: none;\n    border-radius: 2px;\n    padding: 0.6em 0.3em;\n    background: transparent;\n    backdrop-filter: blur(6px);\n    color: #ffffff;\n    font-size: 1.2em;\n    box-shadow: 0px 0px 4px 4px rgba(150, 150, 150, 0.35);\n    margin: 0.6em;\n    transition: box-shadow 0.2s ease-in-out;\n    ::placeholder {\n        color: rgba(200, 200, 200, 0.5);\n    }\n    :focus {\n        outline: none;\n        box-shadow: 0px 0px 4px 4px rgba(150, 150, 150, 0.8);\n    }\n    @media (max-width: 600px) {\n        width: 100%;\n        margin: 0.5em 0;\n        box-sizing: border-box;\n    }\n"])))),In=u.Z.div(jn||(jn=(0,p.Z)(["\n    display: flex;\n    flex-direction: row;\n    justify-content: space-around;\n    @media (max-width: 768px) {\n        flex-direction: column-reverse;\n    }\n"]))),Pn=u.Z.div(kn||(kn=(0,p.Z)(["\n    display: flex;\n    flex-direction: column;\n"]))),Rn=u.Z.li(Zn||(Zn=(0,p.Z)(["\n    display: flex;\n    alignItems: center;\n    list-style: none;\n    margin: 10px 5vw 10px 0px;\n    :before {\n        content: '';\n        display: inline-block;\n        position: relative;\n        width: 20px;\n        height: 20px;\n        margin-right: 5px;\n        background-size: contain;\n        background-repeat: no-repeat;\n        background-position: center;\n    }\n"]))),En=u.Z.h2(An||(An=(0,p.Z)(["\n    font-size: 1.8em;\n    font-weight: 600;\n    margin-bottom: 1em;\n    color: orange;\n    @media (max-width: 768px) {\n        margin-bottom: 0.5em;\n        text-align: center;\n    }\n"]))),Tn=u.Z.p(Fn||(Fn=(0,p.Z)(["\n    font-size: 1.2em;\n    margin-top: 1em;\n    margin-bottom: 1em;\n    text-align: justify;\n    color: #ffffff;\n    width: 90%;\n    @media (max-width: 768px) {\n        width: 100%;\n    }\n"]))),On=u.Z.div(Nn||(Nn=(0,p.Z)(["\n    list-style: none; \n    margin: 0; \n    padding: 0;\n    @media (max-width: 768px) {\n        width: 100%;\n        align-items: center;\n        text-align: center;\n    }\n"]))),Kn=u.Z.a(Sn||(Sn=(0,p.Z)(['\n    display: inline-block;\n    text-decoration: none;\n    cursor: pointer;\n    color: orange;\n    font-weight: bold;\n    :after {\n        content: "";\n        display: block;\n        position: relative;\n        opavity: 0.5;\n        height: 1px;\n        width: 0%;\n        background-color: orange;\n        transition: width 0.5s ease;\n    }\n    :hover:after {\n        width: 100%;\n    }\n']))),Ln=function(){var n={to:"aghiles.kebaili@etu.u-paris.fr",from:"",subject:"",body:""};return(0,m.jsxs)(f.Z,{id:"contact",offset:2500,minHeight:"100vh",apply:!0,children:[(0,m.jsx)(V,{number:"3",children:"Contact"}),(0,m.jsxs)(In,{children:[(0,m.jsxs)("div",{children:[(0,m.jsxs)("div",{children:[(0,m.jsx)(En,{children:"Get in touch"}),(0,m.jsxs)(Tn,{children:["I'm currently in work-study at "," ",(0,m.jsx)(Kn,{href:"https://www.stellantis.com/fr",target:"_blank",children:"Stellantis"})," but i'll be open to new proposals. Feel free to send me a message, my inbox is always open whether for a question or just to say hi!"]})]}),(0,m.jsxs)(On,{children:[(0,m.jsx)(Rn,{className:"based-in-container",children:"Pontoise, \xcele-de-France, France"}),(0,m.jsx)(Rn,{className:"phone-container",children:"+33 605 58 15 71"}),(0,m.jsx)(Rn,{className:"email-container",children:"aghiles.kebaili@etu.u-paris.fr"})]})]}),(0,m.jsxs)(Pn,{children:[(0,m.jsx)("input",{className:_n,type:"text",id:"name",placeholder:"Name",onChange:function(e){n.subject=e.target.value}}),(0,m.jsx)("input",{className:_n,type:"text",id:"email",placeholder:"E-mail",onChange:function(e){n.from=e.target.value}}),(0,m.jsx)("textarea",{className:_n,style:{height:"20vh",marginBottom:"1em",resize:"vertical"},type:"text",placeholder:"Message",onChange:function(e){n.body=e.target.value}}),(0,m.jsx)(g,{center:!0,orange:!0,label:"Send message",onClick:function(e){e.preventDefault(),n.from=e.target.email.value,n.subject=e.target.subject.value,n.body=e.target.body.value,window.open("mailto:".concat(n.to,"?subject=").concat(n.subject,"&body=").concat(n.body))}})]})]})]})},Hn=t(71472),Xn=function(){var n=l.useState(!0),e=(0,d.Z)(n,2),t=e[0],i=e[1];return(0,l.useEffect)((function(){return console.log("loaded")}),[]),(0,m.jsxs)(j.Z,{children:[(0,m.jsx)(k.Z,{}),(0,m.jsx)(Z.Z,{enableParticles:t}),(0,m.jsx)(Hn.Z,{checked:t,onClick:function(){return i(!t)}}),(0,m.jsx)(w,{}),(0,m.jsx)(en,{}),(0,m.jsx)(gn,{}),(0,m.jsx)(Ln,{})]})},Bn=t(94022),Dn=function(){return(0,m.jsxs)("div",{className:"App",children:[(0,m.jsx)(c.Z,{}),(0,m.jsx)(Xn,{}),(0,m.jsx)(Bn.Z,{})]})}},78581:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(60203)}])},17963:function(n){"use strict";n.exports=JSON.parse('[{"university":"University of Paris-Descartes","location":"Paris, France","date":"2021 - current","title":"Vision and intelligent machines"},{"university":"University of Western Brittany","location":"Brest, France","date":"2020 - 2021","title":"Intelligent, interactive and autonomous systems"},{"university":"University of science and technology Houari Boumediene","location":"Algiers, Algeria","date":"2017 - 2019","title":"Information systems and software engineering bachelor"}]')},81379:function(n){"use strict";n.exports=JSON.parse('[{"title":"CRNN for licence plates OCR","description":"Characters recognition from license plates using convolutional recurrent neural networks.","tags":["Python","Keras","Numpy","CRNN"],"thumbnail":"https://cdn.discordapp.com/attachments/874390691931902022/878748098879434782/ocr.png","link":"https://github.com/Arksyd96/ocr-license-plates-crnn/blob/master/text-from-image-ocr.ipynb"},{"title":"Aerial-to-topographic image translation (CGAN)","description":"Implementation of a pix2pix model that translates aerial images to topographic maps.","tags":["Tensorflow","Numpy","GAN","Image translation"],"thumbnail":"https://cdn.discordapp.com/attachments/874390691931902022/876508094723657748/pix2pix.png","link":"https://github.com/Arksyd96/aerial-to-topographic-pix2pix"},{"title":"Neural network from scratch","description":"Implementation of two hidden layers neural network from scratch using Numpy only.","tags":["Python","Numpy"],"thumbnail":"https://cdn.discordapp.com/attachments/874390691931902022/878762305389756466/nn.jpg","link":"https://github.com/Arksyd96/anomaly-detection-autoencoder/blob/master/Anomaly-detection.ipynb"},{"title":"Selective search algorithme","description":"Region proposal algorithm used for object detection, based on computing groupings color, texture, size, and shape similarities.","tags":["Object detection","Numpy"],"thumbnail":"https://cdn.discordapp.com/attachments/874390691931902022/878937561098240070/ssa.jpg","link":"https://colab.research.google.com/drive/1TXAlsIeNYknt2GZ99i6KcV0PH9r-nvBw?usp=sharing"},{"title":"English to French text translator using LSTMs","description":"Implementation of a sequence-to-sequence LSTM model for text translation using Keras (Word-based model).","tags":["Python","Keras","LSTM"],"thumbnail":"https://cdn.discordapp.com/attachments/874390691931902022/879670793569722438/text_translator.jpg","link":"https://github.com/Arksyd96/text-translation-with-lstm"},{"title":"MNIST Anomaly detection using Tensorflow and Keras","description":"Implementation of an Autoencoder for the detection of anomalies and outliers in a dataset.","tags":["Computer vision","Keras","Autoencoders"],"thumbnail":"https://cdn.discordapp.com/attachments/874390691931902022/880370589913718784/ANOMALY.jpg","link":"#"},{"title":"Content based image retrieval with Keras","description":"Autoencoder implementation of content-based image retrieval. They are used by search engines to retrieve similar images.","tags":["Python","Keras","Autoencoders"],"thumbnail":"https://cdn.discordapp.com/attachments/874390691931902022/879675303956475904/image-retrieval.png","link":"https://github.com/Arksyd96/content-based-image-retrieval-keras/blob/master/content-based-image-retrieval-autoencoders.ipynb"},{"title":"Denoising autoencoder with Keras","description":"Implementation of a DAE. Removes noise from an image by shrinking it into latent space and reconstructing it.","tags":["Python","Keras","Autoencoders"],"thumbnail":"https://cdn.discordapp.com/attachments/874390691931902022/883275309917556756/dae.png","link":"https://github.com/Arksyd96/denoising-autoencoder-keras/blob/master/Denoising-autoencoder-keras.ipynb"},{"title":"Implementation of a perceptron for logistic regression","description":"Binary image classification using a single neuron model (Perceptron).","tags":["Python","Numpy"],"thumbnail":"https://cdn.discordapp.com/attachments/874390691931902022/889117242674008084/Perceptron.jpg","link":"https://nbviewer.jupyter.org/github/Arksyd96/perceptron_implementation_for_logistic_regression/blob/master/perceptron_implementation_for_logistic_regression.ipynb"}]')},12435:function(n){"use strict";n.exports=JSON.parse('["HTML5/CSS","Javascript","TypeScript","Golang","Ada","Python","Java","C/C++","ReactJS","Java RMI","CORBA","TensorFlow","Keras","Sklearn","NLTK","Matplotlib","MongoDB","SQL","GraphQL","Arduino","FPGA","Raspberry Pi"]')}},function(n){n.O(0,[774,523,112,594,953,888,179],(function(){return e=78581,n(n.s=e);var e}));var e=n.O();_N_E=e}]);