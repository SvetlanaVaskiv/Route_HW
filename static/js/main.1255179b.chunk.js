(this.webpackJsonproute_hw=this.webpackJsonproute_hw||[]).push([[0],{106:function(t,e,n){},107:function(t,e,n){},138:function(t,e,n){"use strict";n.r(e),n.d(e,"Context",(function(){return oe}));var r=n(0),i=n.n(r),o=n(38),c=n.n(o),a=(n(105),n(106),n(11)),s=(n(107),n(17)),l=n(32),d=n(1),u=function(t){var e=Object(r.useRef)(null);return Object(r.useEffect)((function(){var t=e.current,n=t.getContext("2d");n.fillRect(0,0,n.canvas.width,n.canvas.height);var r,i=1,o=t.height=window.innerHeight,c=t.width=window.innerWidth,a=c/10,s="010110",l=[];s=s.split("");for(var d=0;d<a;d++)l[d]=1;function u(){n.fillStyle="rgba(107, 36, 179, 0.1)",n.fillRect(0,0,c,o)}u();return function t(){1===i?(u(),function(){n.fillStyle="#fff",n.font="10px Gotham";for(var t=0;t<l.length;t++){var e=s[Math.floor(Math.random()*s.length)],r=10*l[t];n.fillText(e,10*t,r),r>o&&Math.random()>.956&&(l[t]=0),l[t]++}}()):2===i&&(i=0),i++,r=window.requestAnimationFrame(t)}(),function(){window.cancelAnimationFrame(r)}}),[]),Object(d.jsx)("canvas",Object(l.a)({ref:e},t))},h=n(186),p=n(190),b=n(188),j=n(183),f=n(189);function x(){var t=Object(s.f)();return Object(d.jsxs)(h.a,{children:[Object(d.jsx)(u,{}),Object(d.jsxs)(b.a,{children:[Object(d.jsx)(f.a,{gutterBottom:!0,variant:"h5",component:"div",children:"Hold  on a moment, please"}),Object(d.jsx)(f.a,{variant:"body2",color:"text.secondary",children:"Probably something went wrong. If the page didn't load, go back or wait, please."})]}),Object(d.jsx)(p.a,{children:Object(d.jsx)(j.a,{onClick:function(){return t.push({pathname:"/movies"})},size:"small",children:"RETURN"})})]})}var m,g,O,v,w,k,y,_,S,T,L,A,C,F,I,E,H=function(){return Object(d.jsx)(x,{})},M=n(28),R=n.n(M),z=n(44),B="1793f1d1bd070eb7923f4cdaee264029",P=function(){var t=Object(z.a)(R.a.mark((function t(){return R.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://api.themoviedb.org/3/trending/movie/week?api_key=".concat(B)).then((function(t){if(t.ok)return t.json();throw new Error("not found")})).then((function(t){return t.results})).catch((function(t){throw t}));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),D=function(){var t=Object(z.a)(R.a.mark((function t(){return R.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://api.themoviedb.org/3/trending/movie/day?api_key=".concat(B)).then((function(t){if(t.ok)return t.json();throw new Error("not found")})).then((function(t){return t.results})).catch((function(t){throw t}));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),V=function(){var t=Object(z.a)(R.a.mark((function t(e){return R.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if("streaming"!==e){t.next=6;break}return t.next=3,fetch("https://api.themoviedb.org/3/movie/now_playing?api_key=".concat(B)).then((function(t){return t.json()})).then((function(t){return t})).catch((function(t){throw t}));case 3:case 9:case 15:case 21:return t.abrupt("return",t.sent);case 6:if("in theatres"!==e){t.next=12;break}return t.next=9,fetch("https://api.themoviedb.org/3/movie/upcoming?api_key=".concat(B)).then((function(t){return t.json()})).then((function(t){return t})).catch((function(t){throw t}));case 12:if("on TV"!==e){t.next=18;break}return t.next=15,fetch("https://api.themoviedb.org/3/tv/on_the_air?api_key=".concat(B)).then((function(t){return t.json()})).then((function(t){return t})).catch((function(t){throw t}));case 18:if("for rent"!==e){t.next=22;break}return t.next=21,fetch("https://api.themoviedb.org/3/discover/movie?api_key=".concat(B,"&watch_region=US&with_watch_monetization_types=rent")).then((function(t){return t.json()})).then((function(t){return t})).catch((function(t){throw t}));case 22:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),U=function(){var t=Object(z.a)(R.a.mark((function t(e){return R.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://api.themoviedb.org/3/movie/".concat(e,"?api_key=").concat(B)).then((function(t){if(t.ok)return t.json();throw new Error("not found")})).then((function(t){return t})).catch((function(t){throw t}));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),W=function(){var t=Object(z.a)(R.a.mark((function t(e){return R.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://api.themoviedb.org/3/movie/".concat(e,"/videos?api_key=").concat(B)).then((function(t){if(t.ok)return t.json();throw new Error("Requested resource not found")})).then((function(t){return t})).catch((function(t){throw t}));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),Y=function(){var t=Object(z.a)(R.a.mark((function t(e){return R.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://api.themoviedb.org/3/movie/".concat(e,"/images?api_key=").concat(B)).then((function(t){if(t.ok)return t.json();throw new Error("not found")})).then((function(t){return t})).catch((function(t){throw new Error("I can't download a picture: "+t.message)}));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),K=n(3),q=Object(K.a)(j.a)({textTransform:"uppercase",fontSize:20,padding:"6px 20px",border:"2px solid #25ad45 ",lineHeight:1.5,backgroundColor:"black",borderRadius:"25px",color:"red"}),G=n(19),J=n(182),X=n(177),N=n(14),Z=n(15),Q=Z.a.div(m||(m=Object(N.a)(["\n display: flex;\n background: #697e95db;\n color: rgb(248 245 245 / 87%);\n border-radius: 10px;\n border: solid 4px rgb(63 22 82 / 87%);\n overflow: auto;\n padding: 10px;\n margin: 2px auto;\n min-height: 100px;\n flex-direction: column;\n\n "]))),$=function(t){var e=t.name,n=t.date,r=t.id;return Object(d.jsxs)(Q,{children:[Object(d.jsx)("p",{children:e}),Object(d.jsxs)("p",{children:["Date ",n]})]},r)},tt=n(89),et=function(){var t=Object(r.useState)([]),e=Object(a.a)(t,2),n=e[0],i=e[1],o=Object(r.useState)(""),c=Object(a.a)(o,2),s=c[0],l=c[1];return console.log(n),Object(d.jsxs)("div",{style:{width:800,margin:"0 auto",backgroundColor:"#dcdae2",borderRadius:"12px"},children:[Object(d.jsxs)(X.a,{component:"from",children:[Object(d.jsx)(J.a,{fullWidth:!0,label:"Send your comment",variant:"outlined",value:s,onChange:function(t){return l(t.target.value)},color:"secondary"}),Object(d.jsx)(q,{disabled:s.length<1,fullWidth:!0,variant:"contained",onClick:function(){var t={name:s,date:(new Date).toLocaleString(),id:Object(tt.uuid)()};i((function(e){return[].concat(Object(G.a)(e),[t])})),l("")},children:"SEND"})]}),Object(d.jsx)("div",{}),n&&n.map((function(t){return Object(d.jsx)($,{name:t.name,date:t.date,id:t.id},t.id)}))]})},nt=Z.a.div(g||(g=Object(N.a)(["\n\n    display: flex;\n    background: #697e95db;\n    color: rgb(248 245 245 / 87%);\n    border-radius: 10px;\n    border: solid 4px rgb(63 22 82 / 87%);\n    overflow: auto;\n\t\tpadding:10px;\n    margin: 50px auto;\n    min-height: 350px;\n    flex-direction: column;\n    flex-wrap: nowrap;\n    align-items: center;\n    justify-content: space-around;\n"]))),rt=Z.a.div(O||(O=Object(N.a)(["\ndisplay: flex;\njustify-content: space-between;\n"]))),it=Z.a.li(v||(v=Object(N.a)(["\n\n  list-style: none;\n  display: flex;\n  width: 140px;\n  flex-direction: column;\n  font-family: serif;\n  font-size: 18px;\n  color: #38396a;\n  margin: 0 0.5rem;\n  border-radius: 12px;\n  background-color: #fff;\n  @media (min-width: 375px) and (max-width:506px){\n    width: 120px;\n  }\n  @media (min-width: 768px) {\n    width: 200px;\n  }\n  \n"]))),ot=Z.a.img(w||(w=Object(N.a)(["\n  object-fit: cover;\n  height: 50%;\n  border-radius: 12px;\n  z-index:100;\n"]))),ct=Z.a.div(k||(k=Object(N.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  position: relative;\n  bottom: 4.3em;\n  z-index:100;\n  \n"]))),at=n(53),st=n.n(at),lt=(n(80),n(81),n(191)),dt=function(){var t=Object(r.useState)(null),e=Object(a.a)(t,2),n=e[0],i=e[1],o=Object(s.f)(),c=Object(s.g)().params.id,u=Object(r.useState)(null),h=Object(a.a)(u,2),p=h[0],b=h[1],j=Object(r.useState)(!0),f=Object(a.a)(j,2),x=f[0],m=f[1];Object(r.useEffect)((function(){c&&(U(c).then((function(t){return i(t)})),W(c).then((function(t){return b(t)})),m(!1))}),[c]);var g=n&&(n.backdrop_path||n.poster_path||""),O=function(){return o.push({pathname:"/movies"})},v=n&&n.genres&&n.genres.map((function(t){var e=t.name,n=t.id;return Object(d.jsxs)(it,{children:[" ",e]},n)})),w=p&&p.original_title,k=n&&n.title&&Object(d.jsx)("h1",{children:n.title}),y=n&&Object(d.jsxs)(nt,{children:[n.overview,Object(d.jsxs)("h5",{children:["Release's date: ",n.release_date]})]}),_=p&&p.results.find((function(t){return"Official Trailer"===t.name}));n&&console.log(n);return Object(d.jsxs)(d.Fragment,{children:[x?Object(d.jsx)(lt.a,{}):Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)("div",{style:{width:"200px"},children:[Object(d.jsx)("h2",{children:" Single Item"}),Object(d.jsxs)(st.a,Object(l.a)(Object(l.a)({},{dots:!0,infinite:!0,speed:500,slidesToShow:1,slidesToScroll:1}),{},{children:[Object(d.jsx)("div",{children:Object(d.jsx)("img",{src:"https://image.tmdb.org/t/p/w300/".concat(g),width:"200",alt:"Here should be the poster"})}),Object(d.jsx)("div",{children:Object(d.jsx)("img",{src:"https://image.tmdb.org/t/p/w300/".concat(g),width:"200",alt:"Here should be the poster"})}),Object(d.jsx)("div",{children:Object(d.jsx)("img",{src:"https://image.tmdb.org/t/p/w300/".concat(g),width:"200",alt:"Here should be the poster"})}),Object(d.jsx)("div",{children:Object(d.jsx)("img",{src:"https://image.tmdb.org/t/p/w300/".concat(g),width:"200",alt:"Here should be the poster"})}),Object(d.jsx)("div",{children:Object(d.jsx)("img",{src:"https://image.tmdb.org/t/p/w300/".concat(g),width:"200",alt:"Here should be the poster"})}),Object(d.jsx)("div",{children:Object(d.jsx)("img",{src:"https://image.tmdb.org/t/p/w300/".concat(g),width:"200",alt:"Here should be the poster"})})]}))]}),k,Object(d.jsxs)(rt,{children:[Object(d.jsx)("img",{src:"https://image.tmdb.org/t/p/w300/".concat(g),width:"700",alt:"Here should be the poster"}),Object(d.jsx)("div",{children:v})]}),y,Object(d.jsx)("iframe",{width:"420",height:"345",allow:"fullscreen",src:_&&"https://www.youtube.com/embed/".concat(_.key),title:w}),Object(d.jsxs)(q,{variant:"contained",onClick:O,children:[" ","Go Back"]})]}),Object(d.jsx)(et,{}),Object(d.jsxs)(q,{variant:"contained",onClick:O,children:[" ","Go Back"]})]})},ut=function(t){var e=t.match,n=t.history;return Object(d.jsx)(dt,{history:n,match:e})},ht="2.5rem",pt="4rem",bt={mobileRight:"30px",laptopRight:"50px"},jt={mobile:"0.8em",laptop:"1.2em"},ft="black",xt="white",mt={laptop:"2em",mobile:"0.5em"},gt={laptop:"500px"},Ot=n(192),vt=n(181),wt=Object(Z.a)(Ot.a,{name:"StyledCircularProgress"})((function(t){return{height:t.SIZES=pt,width:t.SIZES=pt,"@media(max-width:767px)":{height:t.SIZES=ht,width:t.SIZES=ht}}})),kt=Object(Z.a)("div",{name:"StyledRating"})((function(t){return{fontWeight:"700",lineHeight:"1.66",letterSpacing:"0.03333em",color:"#2e7d32",fontSize:t.fontsizes.laptop,"@media(max-width:767px)":{fontSize:t.fontsizes.mobile}}})),yt=Object(Z.a)(vt.a,{name:"BoxLayout"})((function(t){return{position:"relative",display:"inline-flex",backgroundColor:"black",borderRadius:"50%",fontWeight:"700",top:"56px",right:t.right.laptopRight,zIndex:"500","@media(max-width:700px)":{right:t.right.mobileRight}}})),_t=function(t){var e=t.vote_average,n=Math.round(10*e);return Object(d.jsxs)(yt,{right:bt,children:[Object(d.jsx)(wt,{variant:"determinate",value:n,size:"",color:"warning"}),Object(d.jsx)(X.a,{sx:{left:0,bottom:0,position:"absolute",display:"flex",alignItems:"center",justifyContent:"center",right:0,top:0},children:Object(d.jsxs)(kt,{color:"success.main",fontsizes:jt,children:["".concat(n),Object(d.jsx)("sup",{children:"%"})]})})]})},St=function(t){var e=t.title,n=t.id,r=t.vote_average,i=t.poster_path,o=t.release_date,c=new Date(o);var a,l=(a=c.getMonth(),c.setMonth(a-1),c.toLocaleString("en-US",{month:"long"})),u=c.getDate()+" "+l+" "+c.getFullYear(),h=Object(s.f)();return Object(d.jsxs)(it,{onClick:function(){h.push({pathname:"/movie/".concat(n)})},children:[Object(d.jsx)(ot,{src:"https://image.tmdb.org/t/p/w300".concat(i)}),Object(d.jsx)("div",{}),Object(d.jsx)(ct,{children:Object(d.jsx)(_t,{vote_average:r})}),Object(d.jsx)("h1",{children:e}),Object(d.jsx)("p",{children:u})]})},Tt=Z.a.div(y||(y=Object(N.a)(["\n  background-color: rgba(26, 131, 120, 0.53);\n  height: 100%;\n  border-radius: 10px;\n"]))),Lt=Object(Z.a)("div",{name:"Post"})((function(t){return{backgroundImage:" \n   url(https://image.tmdb.org/t/p/w300".concat(t.path||t.secpath,")"),minHeight:"180px",height:"calc(100vh / 5)",maxHeight:"500px",backgroundPosition:"top center",backgroundSize:"cover",width:"90%",marginLeft:"5vw",marginTop:"4vh","@media(min-width:532px)":{minHeight:"250px"},"@media(min-width:768px)":{minHeight:"300px"},"@media(min-width:1200px)":{minHeight:"350px"},"@media(min-width:1800px)":{minHeight:"500px"}}})),At=Object(Z.a)(Lt,{name:"SecondPost"})((function(t){return{backgroundImage:" \n   url(https://image.tmdb.org/t/p/w300".concat(t.secpath,")"),minHeight:"230px",borderRadius:"10px",width:"96%",marginLeft:"2vw",margin:"2em 0.5em","@media(min-width:438px)":{minHeight:"250px",margin:"2em 0.8em"},"@media(min-width:767px)":{minHeight:"450px",margin:"2em 1.2em"},"@media(min-width:1000px)":{minHeight:"400px",margin:"2em 1.2em"},"@media(min-width:1200px)":{minHeight:t.height.laptop,margin:"2em 1.5em"},"@media(min-width:1800px)":{minHeight:"500px"}}})),Ct=(Z.a.div(_||(_=Object(N.a)([""]))),Z.a.ul(S||(S=Object(N.a)(["\n  flex-direction: row;\n  flex-wrap: nowrap;\n  justify-content: space-around;\n  margin: 0 1em;\n"]))),Object(Z.a)("div",{name:"SearchLayout"})((function(t){return{display:"flex",flexDirection:"row",justifyContent:"space-around",color:t.color||"white",alignItems:"center",padding:"1em 0"}}))),Ft=Z.a.div(T||(T=Object(N.a)(["\n  display: flex;\n  flex-direction: raw;\n  justify-content: space-around;\n  border: black 2px solid;\n  border-radius: 35px;\n"]))),It=Object(Z.a)("div",{name:"TextsSearchLayout"})((function(t){return{borderRadius:"28px",backgroundColor:t.active?"rgb(3,37,65)":null}})),Et=Object(Z.a)("h1",{name:"Tab"})((function(t){return{background:t.active&&"-webkit-linear-gradient(349deg, #53d9b3 60.92%, #07209a)","-webkit-text-fill-color":t.active&&"transparent","-webkit-background-clip":t.active&&"text",padding:"0 2vw"}})),Ht=n(24),Mt=Z.a.div(L||(L=Object(N.a)(["\n  height: 12vh;\n  background-color: #042537;\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n"]))),Rt=Object(Z.a)(Ht.b)(A||(A=Object(N.a)(["\n  font-size: 3em;\n  background: -webkit-linear-gradient(349deg, #53d9b3 60.92%, #07209a);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n"]))),zt=function(){return Object(d.jsxs)(Mt,{children:[Object(d.jsx)(Rt,{children:"My Site"}),Object(d.jsx)(Ht.b,{children:"Movies"}),Object(d.jsx)(Ht.b,{children:"TV Showes"}),Object(d.jsx)(Ht.b,{children:"People"}),Object(d.jsx)(Ht.b,{children:"More"})]})},Bt={dots:!0,infinite:!0,speed:1e3,slidesToShow:7,slidesToScroll:7,draggable:!0,arrows:!1,lazyLoad:!0,appendDots:function(t){return Object(d.jsx)("div",{style:{display:"flex",flexDirection:"raw",justifyContent:"space-around",flexWrap:"wrap"},children:Object(d.jsxs)("ul",{style:{margin:"0px",flexDirection:"row"},children:[" ",t," "]})})},customPaging:function(t){return Object(d.jsx)("div",{style:{width:"20px",color:"blue",border:"1px blue solid",borderRadius:"50%",margin:"0 2px",backgroundColor:"#FFFFFF"},children:t+1})},responsive:[{breakpoint:320,settings:{slidesToShow:2,slidesToScroll:2}},{breakpoint:438,settings:{slidesToShow:3,slidesToScroll:3}},{breakpoint:507,settings:{slidesToShow:3,slidesToScroll:3}},{breakpoint:694,settings:{slidesToShow:4,slidesToScroll:4}},{breakpoint:768,settings:{slidesToShow:3,slidesToScroll:3}},{breakpoint:800,settings:{slidesToShow:3,slidesToScroll:3}},{breakpoint:992,settings:{slidesToShow:4,slidesToScroll:4}},{breakpoint:1200,settings:{slidesToShow:5,slidesToScroll:5}},{breakpoint:1400,settings:{slidesToShow:6,slidesToScroll:6}}]},Pt=Object(Z.a)(it)(C||(C=Object(N.a)(["\nwidth: 100px;\n  background-color: #fff;\n  position:relative;\n  margin-top:0.5em;\n  @media (min-width: 768px) {\n    width: 200px;\n    margin-top:3em;\n\n  };\n   @media (min-width: 1000px) {\n    width: 165px;\n    margin-top:3em;\n\n  };\n  @media (min-width: 1500px) {\n    width: 230px;\n    margin-top:3em;\n\n  }\n"]))),Dt=Z.a.div(F||(F=Object(N.a)(["\nbackground-color:#55e6e3;\nposition: absolute;\ntop:75px;\nborder-radius: 5px;\nleft:40px;\n@media (min-width: 767px) {\n    top:90px;\n    left:70px;\n};\n@media (min-width: 1500px) {\n    top:140px;\n    left:80px;\n\n  }\n"]))),Vt=Object(Z.a)("h1",{name:"Names"})((function(t){return{fontSize:t.fonts.mobile,"@media (min-width: 768px)":{fontSize:t.fonts.laptop}}})),Ut=Z.a.img(I||(I=Object(N.a)(["\nborder-radius: 12px 12px 0 0;\n\n"]))),Wt=n(184),Yt=function(t){var e,n=t.moveId,i=Object(r.useState)(null),o=Object(a.a)(i,2),c=o[0],s=o[1],l=Object(r.useState)(null),u=Object(a.a)(l,2),h=(u[0],u[1]);Object(r.useEffect)((function(){W(n).then((function(t){return s(t)})).catch((function(t){return h(t)}))}),[n]);var p=(null===c||void 0===c||null===(e=c.results)||void 0===e?void 0:e.length)>0&&c.results.find((function(t){return"Official Trailer"===t.name})),b=c&&c.original_title;return Object(d.jsxs)(d.Fragment,{children:[" ",p?Object(d.jsx)("div",{children:Object(d.jsx)("iframe",{width:"420",height:"345",src:"https://www.youtube.com/embed/".concat(p.key),allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",frameBorder:"0",webkitallowfullscreen:"true",mozallowfullscreen:"true",allowFullScreen:!0,title:b})}):Object(d.jsx)("h1",{children:"Requested resource not found"})]})},Kt={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:400,bgcolor:"background.paper",border:"2px solid #000",boxShadow:24,p:4},qt=function(t){var e=t.title,n=t.id,i=t.poster_path,o=n,c=Object(r.useState)(!1),s=Object(a.a)(c,2),l=s[0],u=s[1];return Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)(Pt,{children:[Object(d.jsx)(Ut,{src:"https://image.tmdb.org/t/p/w300".concat(i)}),Object(d.jsx)(Dt,{children:Object(d.jsx)("img",{onClick:function(){return u(!0)},src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAABxklEQVRoge2YPUvDQBjHg2ISU8FJdLc6CNZcoxRUdHHVrX4EV7+ASCd3N2e/gi8ILt0FVyfBl8FF1MU3xP59Lnq0vZ72PdfD+8FxIW3T3z/P5XKJ41gsFovFYjGJKbjBDELe61ZpCT+LU2rwGS5dhlXdPk1D8qU4gGgMR26ICd1eDVMp75W33zyGHSeDlG6/ulSdfalRiBvq13U7/skv0pAqUxyIMK3bVYkiQGEwQr6mIgwf1HadCMO6natQBRD7abtI/bv0+b2bxabjoE+z+jd1AhTcDCbpzJ8ohtUZVSqnWb9+APE9fo8g6Svp+5+0b38oxIgu/4YDxEQI+D6qyKtUjYd4WOXR39sBfvAijFOIA8Vvz/0IC0n6txRA4IVYoSAX0jFKfFgFcxhLwr+tADHL8CnEFrVnadp9omosdlm/AwHEcRiW5CmX2l63vMt/3IkKZLFNAV6kC/sxkeuhnQB8auXLcNU1kMphtOvyQrTpWYghTeKHylkoxHwi4oJ/cx8w9k5s+lpItRq9I/mNnl6Nmv48cK0YLmY8kXm14re+Sc/Epr6VKElD5ti090KVb+bWdPs0TxpeMAvGe90qFovFYrEYzxe9TJi3YuuwtwAAAABJRU5ErkJggg==",alt:"Click to watch a trailer"})}),Object(d.jsx)(Wt.a,{open:l,onClose:function(){return u(!1)},children:Object(d.jsx)(vt.a,{sx:Kt,children:Object(d.jsx)(Yt,{moveId:o})})}),Object(d.jsx)(Vt,{fonts:{mobile:"8px",laptop:"12px"},children:e})]})})},Gt=function(t){var e=t.tabs,n=t.onTabClick,i=Object(r.useState)(0),o=Object(a.a)(i,2),c=o[0],s=o[1];return e.map((function(t,e){return Object(d.jsx)(It,{active:c===e,onClick:function(){s(e),n(t)},children:Object(d.jsx)(Et,{active:c===e,children:t})},t)}))},Jt=function(){var t=Object(r.useState)(null),e=Object(a.a)(t,2),n=e[0],i=e[1],o=["Streaming","On TV","For Rent","In Theatres"],c=Object(r.useState)(""),s=Object(a.a)(c,2),u=s[0],h=s[1],p=Object(r.useState)(null),b=Object(a.a)(p,2),j=b[0],f=b[1],x=Object(r.useContext)(oe).movies,m=Object(r.useContext)(oe).details,g=Object(r.useContext)(oe).trailers;console.log(g);var O="https://image.tmdb.org/t/p/w300".concat(m._backdrop_post);return Object(r.useEffect)((function(){Y(m._idForPost).then((function(t){t&&i(t.backdrops.map((function(t){return t.file_path}))[Math.floor(Math.random()*t.backdrops.length)])})).catch((function(t){throw new Error("I can't download a picture: "+t.message)}))}),[m._idForPost]),Object(r.useEffect)((function(){if("Streaming"===u&&1===j){V("streaming").then((function(t){return x.setMovieList(t.results)}))}else if("In Theatres"===u&&1===j){V("in theatres").then((function(t){return x.setMovieList(t.results)}))}else if("On TV"===u&&1===j){V("on TV").then((function(t){return x.setMovieList(t.results)}))}else if("For Rent"===u&&1===j){V("for rent").then((function(t){return x.setMovieList(t.results)}))}else if("Streaming"===u&&2===j){V("streaming").then((function(t){return g.setTrailersList(t.results)}))}else if("In Theatres"===u&&2===j){V("in theatres").then((function(t){console.log(t.results),g.setTrailersList(t.results)}))}else if("On TV"===u&&2===j){V("on TV").then((function(t){return g.setTrailersList(t.results)}))}else if("For Rent"===u&&2===j){V("for rent").then((function(t){return g.setTrailersList(t.results)}))}}),[u,j,x,g]),Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(zt,{}),n&&Object(d.jsx)(Lt,{path:n,height:gt,children:Object(d.jsx)(Tt,{})}),Object(d.jsxs)(Ct,{color:ft,children:[Object(d.jsx)("h1",{children:"What's popular"}),Object(d.jsx)(Ft,{children:Object(d.jsx)(Gt,{selectedBlock:j,tabs:o,onTabClick:function(t){h(t),f(1)}})})]}),Object(d.jsx)(st.a,Object(l.a)(Object(l.a)({},Bt),{},{children:x&&x._movieList.map((function(t){var e=t.title,n=t.id,r=t.vote_average,i=t.poster_path,o=t.release_date;return Object(d.jsx)(St,{id:n,release_date:o,title:e,poster_path:i,vote_average:r},n)}))})),n&&Object(d.jsx)(At,{secpath:O,padding:mt,height:gt,overflow:"scroll",children:Object(d.jsxs)(Tt,{children:[Object(d.jsxs)(Ct,{color:xt,children:[Object(d.jsx)("h1",{children:"Latest Trailers"}),Object(d.jsx)(Ft,{children:Object(d.jsx)(Gt,{tabs:o,onTabClick:function(t){h(t),f(2)}})})]}),Object(d.jsx)(st.a,Object(l.a)(Object(l.a)({},Bt),{},{children:g._trailersList.map((function(t){var e=t.title,n=t.id,r=t.poster_path,i=t.release_date;return Object(d.jsx)(qt,{id:n,release_date:i,title:e,poster_path:r},n)}))}))]})}),Object(d.jsx)("h1",{children:"Hellllll"})]})},Xt=function(t){var e=t.history;return Object(d.jsx)(Jt,{history:e})},Nt=Z.a.div(E||(E=Object(N.a)(["\ndisplay: flex;\nbackground: #021327db;\ncolor: #22d54c;\nborder-radius: 17px;\nborder: solid 4px rgb(63 22 82 / 87%);\nbox-shadow: 0px 10px 1px -1px rgb(0 0 0 / 20%), 0px 5px 1px 0px rgb(0 0 0 / 14%), 8px 12px 9px 8px rgb(0 0 0 / 12%);\noverflow: auto;\nmax-width: 800px;\nmargin: 50px auto;\nmin-height: 600px;\nflex-direction: column;\nflex-wrap: nowrap;\nalign-items: center;\njustify-content: space-around;\nfont-size: 25px;\n    font-style: italic;\n    font-family: serif;\n "]))),Zt=function(){var t=Object(s.f)();return Object(d.jsxs)(Nt,{children:[Object(d.jsx)("img",{src:"https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.svg",width:"620",alt:"Here should be the poster"}),Object(d.jsx)(q,{variant:"contained",onClick:function(){return t.push({pathname:"/movies"})},children:"Watch Movie"})]})},Qt=function(t){var e=t.match,n=t.history;return Object(d.jsx)(Zt,{history:n,match:e})};var $t=function(){var t=Object(r.useState)(!0),e=Object(a.a)(t,2),n=e[0],i=e[1],o=Object(r.useContext)(oe).movies,c=Object(r.useContext)(oe).details,l=Object(r.useContext)(oe).trailers;return Object(r.useEffect)((function(){P().then((function(t){o.setMovieList(t);for(var e=[],n=[],r=0;r<t.length;r++)e.push(t[r].id),n.push(t[r].backdrop_path);c.setIdList(e),c.setBackdrop_post_list(n);var i=c._backdrop_post_list.map((function(t){return t}))[Math.floor(Math.random()*c._backdrop_post_list.length)];c.setBackdrop_post(i);var a=c._idList.map((function(t){return t}))[Math.floor(Math.random()*c._idList.length)];c.setIdForPost(a)})).catch((function(t){console.log("Error general message "+t.message)})).finally((function(){return i(!1)})),D().then((function(t){return l.setTrailersList(t)})).catch((function(t){console.log("Error general trailers' message "+t.message)}))}),[o,c,l]),n?Object(d.jsx)(lt.a,{color:"success"}):Object(d.jsxs)(s.c,{children:[Object(d.jsx)(s.a,{exact:!0,path:"/",component:Qt}),Object(d.jsx)(s.a,{exact:!0,path:"/movies",component:Xt}),Object(d.jsx)(s.a,{exact:!0,path:"/movie/:id",component:ut}),Object(d.jsx)(s.a,{component:H})]})},te=n(36),ee=n(37),ne=function(){function t(){Object(te.a)(this,t),this._movieList=[]}return Object(ee.a)(t,[{key:"setMovieList",value:function(t){this._movieList=t}},{key:"getMovieList",value:function(){return this._movieList}}]),t}(),re=function(){function t(){Object(te.a)(this,t),this._idList=[],this._idForPost=null,this._backdrop_post="",this._backdrop_post_list=[]}return Object(ee.a)(t,[{key:"setIdList",value:function(t){this._idList=t}},{key:"getIdList",value:function(){return this._idList}},{key:"setIdForPost",value:function(t){this._idForPost=t}},{key:"getIdForPost",value:function(){return this._idForPost}},{key:"setBackdrop_post",value:function(t){this._backdrop_post=t}},{key:"getBackdrop_post",value:function(){return this._backdrop_post}},{key:"setBackdrop_post_list",value:function(t){this._backdrop_post_list=t}},{key:"getBackdrop_post_list",value:function(){return this._backdrop_post_list}}]),t}(),ie=function(){function t(){Object(te.a)(this,t),this._trailersList=[]}return Object(ee.a)(t,[{key:"setTrailersList",value:function(t){this._trailersList=t}},{key:"getTrailersList",value:function(){return this._trailersList}}]),t}(),oe=Object(r.createContext)(null);c.a.render(Object(d.jsx)(i.a.StrictMode,{children:Object(d.jsx)(oe.Provider,{value:{movies:new ne,trailers:new ie,details:new re},children:Object(d.jsx)(Ht.a,{children:Object(d.jsx)($t,{})})})}),document.getElementById("root"))}},[[138,1,2]]]);
//# sourceMappingURL=main.1255179b.chunk.js.map