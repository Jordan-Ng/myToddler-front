(this.webpackJsonpmytoddler=this.webpackJsonpmytoddler||[]).push([[0],{109:function(e,t,n){},182:function(e,t,n){"use strict";n.r(t);var c=n(3),a=n(1),i=n(17),r=n.n(i),s=(n(109),n(10)),d=n(52),o=n(53),l=n(54),j=n(55),h=n(11),u=function(){var e=Object(h.b)(),t=e.logout,n=e.user,i=Object(a.useState)(!1),r=Object(s.a)(i,2);r[0],r[1];return Object(c.jsx)("div",{children:Object(c.jsxs)(d.a,{color:"primary",light:!0,expand:"md",children:[Object(c.jsx)(o.a,{className:"text-white",href:"/",children:"myToddler"}),Object(c.jsx)(l.a,{className:"mr-auto",navbar:!0}),Object(c.jsx)(j.a,{className:"text-white",style:{marginRight:"1vw"},children:n.nickname}),Object(c.jsx)(j.a,{className:"text-white",onClick:function(){return t({returnTo:window.location.origin})},style:{borderLeft:"1px solid white",paddingTop:"0px",paddingBottom:"0px",paddingLeft:"1vw"},children:"logout"})]})})},b=n(15),O=n(57),x=n(58),p=n(59),v=n(60),m=n(30),f=function(){var e=Object(h.b)(),t=e.loginWithRedirect,n=e.isLoading,i=e.isAuthenticated,r=e.user,s=Object(b.e)();return Object(a.useEffect)((function(){i&&"Parent"==r["https://example.com/roles"][0].name?s.push("/user/dashboard"):i&&"Teacher"==r["https://example.com/roles"][0].name&&s.push("teacher/dashboard")}),[i]),Object(c.jsx)(c.Fragment,{children:n?Object(c.jsx)("div",{style:{width:"100vw",height:"100vh",paddingLeft:"50vw",paddingTop:"50vh"},children:Object(c.jsx)(O.a,{color:"light"})}):Object(c.jsx)("div",{style:{paddingLeft:"10vw",paddingRight:"10vw",paddingTop:"25vh",paddingBottom:"25vh"},children:Object(c.jsxs)(x.a,{style:{width:"80vw"},children:[Object(c.jsx)(p.a,{tag:"p",style:{textAlign:"center"},children:"MyToddler"}),Object(c.jsx)(v.a,{children:Object(c.jsx)(m.a,{color:"primary",style:{width:"100%"},onClick:function(){t()},children:"Login"})})]})})})},g=n(16),T=n.n(g),y=n(24),_=n(26),S=n(103),A=n(79),w=n(96),C=n(75),E=n(76),P=n(78),R=n(80),I=n(82),k=n(81),N=n(77),D=n(28),F=n(25),H=n.n(F),L=function(e){var t=e.institutions,n=(e.setInstitutions,Object(a.useState)(!1)),i=Object(s.a)(n,2),r=i[0],d=i[1],o=Object(a.useState)(""),l=Object(s.a)(o,2),j=l[0],u=l[1],b=Object(a.useState)(""),O=Object(s.a)(b,2),x=O[0],p=O[1],v=Object(a.useState)(""),f=Object(s.a)(v,2),g=f[0],F=f[1],L=Object(a.useState)(""),B=Object(s.a)(L,2),U=B[0],K=B[1],W=Object(a.useState)(""),Y=Object(s.a)(W,2),q=Y[0],M=Y[1],z=Object(a.useState)(""),V=Object(s.a)(z,2),G=V[0],J=V[1],Q=Object(a.useState)(""),X=Object(s.a)(Q,2),Z=X[0],$=X[1],ee=Object(h.b)(),te=ee.user,ne=ee.isAuthenticated,ce=ee.getAccessTokenSilently,ae=[u,p,F,$,K,M,J],ie=(Object(S.a)(t),function(e){e.preventDefault(),console.log(t);for(var n=0;n<ae.length;n++)ae[n]("");d(!r)}),re=function(){for(var e=0;e<ae.length;e++)ae[e]("");d(!r)},se=function(e,t){t(e.target.value)},de=function(){var e=Object(y.a)(T.a.mark((function e(t){var n,c,a,i,r;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),n=[j,x,g,Z,U],!(j&&x&&g&&Z&&U)){e.next=12;break}for(c=[],a=0;a<n.length;a++)""!==n[a]&&null!==n[a]?c.push(!0):c.push(!1);if(c.includes(!1)){e.next=10;break}return e.next=8,ce();case 8:i=e.sent,H()({method:"post",url:"".concat(Object({NODE_ENV:"production",PUBLIC_URL:"/myToddler-front",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_AUTH0_DOMAIN:"dev-vryuom7u.us.auth0.com",REACT_APP_AUTH0_CLIENT_ID:"Bj3RO9KIwqrhATYIS9mYSHBlOqP0E2Nl",REACT_APP_API_URL:"http://13.212.76.67:5000/api"}).REACT_APP_TEST_API,"/child/new"),headers:{Authorization:"Bearer ".concat(i),Roles:te["https://example.com/roles"][0].name},data:{fname:j,lname:x,dob:g,gender:U,institution:Z,diet_restrictions:q,remark:G}}).then((function(e){Object(D.a)(e.data.message),re(),setTimeout((function(){window.location.reload()}),1e3)})).catch((function(e){return console.log(e)}));case 10:e.next=14;break;case 12:for(r=0;r<n.length;r++)""==n[r]&&ae[r](null);console.log("fields missing");case 14:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),oe=function(e){return""==e?Object(c.jsx)(A.a,{}):null===e?Object(c.jsx)(A.a,{invalid:!0,children:"Field cannot be empty"}):""!==e&&null!==e?Object(c.jsx)(A.a,{valid:!0}):void 0},le=function(e){return""==e?{valid:!1}:null===e?{invalid:!0}:""!==e&&null!==e?{valid:!0}:void 0};return Object(c.jsx)(c.Fragment,{children:ne?Object(c.jsxs)("div",{children:[Object(c.jsx)(m.a,{style:{width:"100%"},outline:!0,color:"secondary",onClick:ie,children:" + Add myToddler"}),Object(c.jsxs)(w.a,{isOpen:r,toggle:ie,style:{paddingTop:"20vw"},children:[Object(c.jsx)(C.a,{toggle:ie,children:"myToddler's info"}),Object(c.jsx)(E.a,{children:Object(c.jsxs)(P.a,{children:[Object(c.jsxs)("div",{style:{display:"flex"},children:[Object(c.jsxs)(R.a,{style:{paddingRight:"1vw"},onChange:function(e){return se(e,u)},children:[Object(c.jsx)(I.a,{children:"First Name"}),Object(c.jsx)(k.a,Object(_.a)({className:"formInput"},le(j))),oe(j)]}),Object(c.jsxs)(R.a,{onChange:function(e){return se(e,p)},children:[Object(c.jsx)(I.a,{children:"Last Name"}),Object(c.jsx)(k.a,Object(_.a)({className:"formInput"},le(x))),oe(x)]})]}),Object(c.jsxs)("div",{style:{display:"flex"},children:[Object(c.jsxs)(R.a,{style:{width:"30%",paddingRight:"1vw"},children:[Object(c.jsx)(I.a,{for:"exampleSelect",children:"Gender"}),Object(c.jsxs)(k.a,Object(_.a)(Object(_.a)({type:"select",name:"select",id:"exampleSelect",onChange:function(e){return se(e,K)}},le(U)),{},{children:[Object(c.jsx)("option",{value:"",children:"-Pick-"}),Object(c.jsx)("option",{value:"M",children:"M"}),Object(c.jsx)("option",{value:"F",children:"F"})]}))]}),Object(c.jsxs)(R.a,{children:[Object(c.jsx)(I.a,{for:"exampleDate",children:"Date of Birth"}),Object(c.jsx)(k.a,Object(_.a)({type:"date",name:"date",id:"exampleDate",placeholder:"date placeholder",onChange:function(e){return se(e,F)}},le(g)))]})]}),Object(c.jsxs)(R.a,{style:{width:"100%"},children:[Object(c.jsx)(I.a,{children:"Childcare Institution"}),Object(c.jsxs)(k.a,Object(_.a)(Object(_.a)({type:"select",name:"select",id:"exampleSelectInst",onChange:function(e){return se(e,$)}},le(Z)),{},{children:[Object(c.jsx)("option",{value:"",children:"-- None Selected --"}),t.map((function(e){return Object(c.jsx)("option",{value:e,children:e},e)}))]}))]}),Object(c.jsxs)(R.a,{onChange:function(e){return se(e,M)},children:[Object(c.jsx)(I.a,{children:"Dietary Restrictions"}),Object(c.jsx)(k.a,{className:"formInput"})]}),Object(c.jsxs)(R.a,{onChange:function(e){return se(e,J)},children:[Object(c.jsx)(I.a,{children:"Remarks"}),Object(c.jsx)(k.a,{type:"textarea",className:"formInput"})]})]})}),Object(c.jsxs)(N.a,{children:[Object(c.jsx)(m.a,{style:{width:"100%"},color:"primary",onClick:de,children:"Submit"})," "]})]})]}):""})},B=n(100),U=n.n(B),K=n(31),W=n(73),Y=n(72),q=n(38),M=n(39),z=n(36),V=function(e){var t=e.childrenInfo,n=Object(a.useState)(0),i=Object(s.a)(n,2),r=i[0],d=i[1],o=Object(a.useState)(!1),l=Object(s.a)(o,2),j=l[0],h=l[1],u=t,b=function(){if(!j){var e=r===u.length-1?0:r+1;d(e)}},O=function(){if(!j){var e=0===r?u.length-1:r-1;d(e)}},p=function(e){j||d(e)},v=u.map((function(e){return Object(c.jsx)(K.a,{className:"custom-tag",onExiting:function(){return h(!0)},onExited:function(){return h(!1)},tag:"div",children:Object(c.jsx)("div",{style:{display:"flex",justifyContent:"center",height:"50vh",paddingTop:"2vh"},children:Object(c.jsx)(U.a,{value:e.uuid4,size:150})})},e.fname)})),m=u.map((function(e){return Object(c.jsx)(K.a,{className:"custom-card",onExiting:function(){return h(!0)},onExited:function(){return h(!1)},tag:"div",children:Object(c.jsxs)(x.a,{body:!0,outline:!0,color:"primary",children:[Object(c.jsxs)(W.a,{children:[e.fname,", ",e.lname," (",e.dob,") - ",e.institution]}),Object(c.jsx)(Y.a,{children:e.gender}),Object(c.jsx)(Y.a,{children:e.diet_restrictions}),Object(c.jsx)(Y.a,{children:e.remarks})]})},e.fname)}));return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsxs)("div",{style:{borderRadius:"10px",marginTop:"1vh",marginLeft:"2.5vw",marginRight:"2.5vw"},children:[Object(c.jsx)("style",{children:".custom-tag {\n              max-width: 100%;\n              height: 30vh;\n              background: lightBlue;\n            }\n            .custom-card {\n                height: 100%\n            }\n            "}),Object(c.jsxs)(q.a,{activeIndex:r,next:b,previous:O,interval:!1,children:[Object(c.jsx)(M.a,{items:u,activeIndex:r,onClickHandler:p}),v,Object(c.jsx)(z.a,{direction:"prev",directionText:"Previous",onClickHandler:O,cssModule:{color:"primary"}}),Object(c.jsx)(z.a,{direction:"next",directionText:"Next",onClickHandler:b})]})]}),Object(c.jsx)("div",{style:{marginLeft:"2.5vw",marginRight:"2.5vw"},children:Object(c.jsxs)(q.a,{activeIndex:r,next:b,previous:O,interval:!1,children:[Object(c.jsx)(M.a,{items:u,activeIndex:r,onClickHandler:p}),m,Object(c.jsx)(z.a,{direction:"prev",directionText:"Previous",onClickHandler:O,cssModule:{color:"primary"}}),Object(c.jsx)(z.a,{direction:"next",directionText:"Next",onClickHandler:b})]})})]})},G=function(){return Object(c.jsx)("div",{style:{paddingLeft:"2.5vw",paddingRight:"2.5vw",marginTop:"1vh"},children:Object(c.jsx)(x.a,{body:!0,inverse:!0,color:"info",children:Object(c.jsx)(Y.a,{children:"You have not registered any myToddler yet. Please add myToddler"})})})},J=function(){var e=Object(h.b)(),t=e.user,n=e.isAuthenticated,i=e.getAccessTokenSilently,r=Object(a.useState)([]),d=Object(s.a)(r,2),o=d[0],l=d[1],j=Object(a.useState)(!1),x=Object(s.a)(j,2),p=x[0],v=x[1],m=Object(a.useState)([]),f=Object(s.a)(m,2),g=f[0],_=f[1],S=Object(b.e)();return Object(a.useEffect)(Object(y.a)(T.a.mark((function e(){var c;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(console.log(t),!n){e.next=6;break}return e.next=4,i();case 4:c=e.sent,H()({method:"get",url:"".concat(Object({NODE_ENV:"production",PUBLIC_URL:"/myToddler-front",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_AUTH0_DOMAIN:"dev-vryuom7u.us.auth0.com",REACT_APP_AUTH0_CLIENT_ID:"Bj3RO9KIwqrhATYIS9mYSHBlOqP0E2Nl",REACT_APP_API_URL:"http://13.212.76.67:5000/api"}).REACT_APP_TEST_API,"/info"),headers:{Authorization:"Bearer ".concat(c),Roles:t["https://example.com/roles"][0].name}}).then((function(e){l(e.data.child_info),_(e.data.institutions),v(!0)})).catch((function(e){return console.log(e)}));case 6:case"end":return e.stop()}}),e)}))),[n]),Object(c.jsx)(c.Fragment,{children:n?Object(c.jsxs)("div",{style:{height:"100vh",width:"100vw"},children:[Object(c.jsx)(u,{user:t}),Object(c.jsx)("div",{style:{width:"100vw",paddingLeft:"2.5vw",paddingRight:"2.5vw",marginTop:"1vh"},children:p?Object(c.jsx)(L,{institutions:g,setInstitutions:_}):""}),p?o.length>0?Object(c.jsx)(V,{childrenInfo:o}):Object(c.jsx)(G,{}):Object(c.jsx)("div",{style:{marginTop:"2vh",width:"100vw",display:"flex",justifyContent:"center"},children:Object(c.jsx)(O.a,{color:"primary"})})]}):S.push("/")})},Q=n(101),X=n.n(Q),Z=function(){var e=Object(a.useState)(10),t=Object(s.a)(e,2),n=(t[0],t[1],Object(a.useState)("No result")),i=Object(s.a)(n,2),r=(i[0],i[1]),d=Object(b.e)();return Object(c.jsx)(c.Fragment,{children:Object(c.jsx)("div",{style:{display:"flex",justifyContent:"center",border:"2px solid red",marginTop:"10vh"},children:Object(c.jsx)(X.a,{delay:300,onError:function(e){console.error(e)},onScan:function(e){"No result"!==e&&null!==e&&(r(e),d.push("/teacher/dash/".concat(e)))},style:{width:"100%"}})})})},$=function(){var e=Object(h.b)(),t=e.user,n=e.isAuthenticated,i=e.getAccessTokenSilently,r=Object(b.e)();return Object(a.useEffect)(Object(y.a)(T.a.mark((function e(){var c;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!n){e.next=5;break}return e.next=3,i();case 3:c=e.sent,H()({method:"GET",url:"".concat(Object({NODE_ENV:"production",PUBLIC_URL:"/myToddler-front",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_AUTH0_DOMAIN:"dev-vryuom7u.us.auth0.com",REACT_APP_AUTH0_CLIENT_ID:"Bj3RO9KIwqrhATYIS9mYSHBlOqP0E2Nl",REACT_APP_API_URL:"http://13.212.76.67:5000/api"}).REACT_APP_TEST_API,"/private"),headers:{Authorization:"Bearer ".concat(c),Roles:t["https://example.com/roles"][0].name}}).then((function(e){return console.log(e)})).catch((function(e){return console.log(e)}));case 5:case"end":return e.stop()}}),e)}))),[]),Object(c.jsx)(c.Fragment,{children:n?Object(c.jsxs)("div",{children:[Object(c.jsx)(u,{user:t}),Object(c.jsx)(Z,{})]}):r.push("/")})},ee=n(9),te=function(e){var t=e.temp,n=e.remark,i=e.fname,r=e.lname,d=e.guardian,o=e.switchLabel,l=e.guardianId,j=(e.checkIn,e.checkOut,e.inst),u=Object(a.useState)(!1),O=Object(s.a)(u,2),x=O[0],p=O[1],v=Object(h.b)(),f=v.user,g=v.getAccessTokenSilently,_=Object(b.e)(),S=function(){p(!x)},A=function(){var e=Object(y.a)(T.a.mark((function e(c){var a;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c.preventDefault(),e.next=3,g();case 3:a=e.sent,H()({method:"post",url:"".concat(Object({NODE_ENV:"production",PUBLIC_URL:"/myToddler-front",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_AUTH0_DOMAIN:"dev-vryuom7u.us.auth0.com",REACT_APP_AUTH0_CLIENT_ID:"Bj3RO9KIwqrhATYIS9mYSHBlOqP0E2Nl",REACT_APP_API_URL:"http://13.212.76.67:5000/api"}).REACT_APP_TEST_API,"/child/attendance"),headers:{Authorization:"Bearer ".concat(a),Roles:f["https://example.com/roles"][0].name},data:{fname:i,lname:r,guardian:d,guardianId:l,label:o,temperature:t,remark:n,employee:f.sub,institution:j}}).then((function(e){Object(D.a)(e.data.message),e.data.success&&_.push("/teacher/dashboard")})).catch((function(e){return console.log(e)}));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(m.a,{color:"primary",style:{width:"100%"},onClick:function(){for(var e=[t,i,r],n=[],c=0;c<e.length;c++)""!==e[c]&&null!==e[c]?0==c&&"check-in"===o&&(parseFloat(e[c])<35||parseFloat(e[c])>=37.6)?n.push(!1):n.push(!0):n.push(!1);n.includes(!1)?(console.log(n),Object(D.a)("incomplete/invalid information. Please check again")):p(!x)},children:"Confirm & Review"}),Object(c.jsxs)(w.a,{isOpen:x,toggle:S,style:{marginTop:"20vh"},children:[Object(c.jsx)(C.a,{toggle:S,children:"Confirm Details"}),Object(c.jsxs)(E.a,{children:[Object(c.jsx)("div",{children:"Please Review and Submit:"}),Object(c.jsxs)("div",{children:["Child Name: ",r,",",i]}),Object(c.jsxs)("div",{children:["Temperature: ",t]}),"check-in"===o?Object(c.jsxs)("div",{children:["Checked in with: ",d]}):Object(c.jsx)("div",{children:Object(c.jsxs)("div",{children:["Checking out with: ",d]})}),Object(c.jsxs)("div",{children:["institution: ",j]}),Object(c.jsxs)("div",{children:["employee: ",f.nickname]}),Object(c.jsxs)("div",{children:["remarks: ",n]})]}),Object(c.jsx)(N.a,{children:Object(c.jsx)(m.a,{color:"primary",onClick:A,style:{width:"100%"},children:"Submit"})})]})]})},ne=n(74),ce=n(71),ae=function(){var e,t=Object(h.b)(),n=t.user,i=t.isAuthenticated,r=Object(b.f)(),d=(Object(b.e)(),Object(a.useState)("check-in")),o=Object(s.a)(d,2),l=o[0],j=o[1],O=Object(a.useState)(""),p=Object(s.a)(O,2),m=p[0],f=p[1],g=Object(a.useState)(""),T=Object(s.a)(g,2),y=T[0],S=T[1],w=Object(a.useState)(""),C=Object(s.a)(w,2),E=C[0],N=C[1],D=Object(a.useState)(""),F=Object(s.a)(D,2),H=F[0],L=F[1],B=Object(a.useState)(""),U=Object(s.a)(B,2),K=U[0],Y=U[1],q=Object(a.useState)(""),M=Object(s.a)(q,2),z=M[0],V=M[1],G=Object(a.useState)(""),J=Object(s.a)(G,2),Q=J[0],X=J[1],Z=Object(a.useState)(!1),$=Object(s.a)(Z,2),ae=$[0],ie=$[1];Object(a.useEffect)((function(){try{var e=r.name.split("-");3===e.length&&(f(e[1]),S(e[0]),N(e[2]),Y(r.guardian_id),L(r.inst),ie(!0))}catch(t){ie(!1)}}),[]);var re=function(e,t){t(e.target.value)};return Object(c.jsx)(c.Fragment,{children:i?ae?Object(c.jsxs)("div",{children:[Object(c.jsx)(u,{}),Object(c.jsx)("div",{style:{marginTop:"1vh",paddingLeft:"2.5vw",paddingRight:"2.5vw",height:"auto"},children:Object(c.jsxs)(x.a,{style:{height:"100%"},children:[Object(c.jsxs)(v.a,{children:[Object(c.jsx)(W.a,{tag:"h5",children:"Drop-off/Pickup Form"}),Object(c.jsxs)(P.a,{children:[Object(c.jsx)(R.a,{children:Object(c.jsx)("div",{children:Object(c.jsx)(ne.a,{type:"switch",id:"CustomSwitch",name:"customSwitch",defaultChecked:!0,label:l,onChange:function(e){!0===e.target.checked?j("check-in"):j("check-out")}})})}),Object(c.jsxs)("div",{style:{display:"flex"},children:[Object(c.jsxs)(R.a,{style:{paddingRight:"1vw"},children:[Object(c.jsx)(I.a,{children:"First Name"}),Object(c.jsx)(k.a,{placeholder:m,disabled:!0})]}),Object(c.jsxs)(R.a,{children:[Object(c.jsx)(I.a,{children:"Last Name"}),Object(c.jsx)(k.a,{placeholder:y,disabled:!0})]})]}),Object(c.jsxs)(R.a,{children:[Object(c.jsxs)(I.a,{children:[l," with"]}),Object(c.jsx)(k.a,{value:E,placeholder:E,disabled:!0})]}),Object(c.jsxs)(R.a,{children:[Object(c.jsx)(I.a,{children:"Child Care Institution"}),Object(c.jsx)(k.a,{value:H,placeholder:H,disabled:!0})]}),Object(c.jsxs)("div",{style:{display:"flex"},children:[Object(c.jsxs)(R.a,{style:{paddingRight:"1vw"},children:[Object(c.jsx)(I.a,{children:"Temperature"}),Object(c.jsx)(k.a,Object(_.a)({type:"number",onChange:function(e){return re(e,V)}},""==z?{valid:!1}:null===z||parseFloat(z)>=37.6||parseFloat(z)<35?{invalid:!0}:""!==z&&null!=z&&parseFloat(z)<37.6&&parseFloat(z)>35?{valid:!0}:void 0)),""==z?Object(c.jsx)(A.a,{}):null===z?Object(c.jsx)(A.a,{invalid:!0,children:"Field cannot be empty"}):"check-in"===l&&(parseFloat(z)<=35.5||parseFloat(z)>=37.6)?Object(c.jsx)(A.a,{invalid:!0,children:"Temp too high/low"}):""!==z&&null!==z?Object(c.jsx)(A.a,{valid:!0}):void 0]}),Object(c.jsxs)(R.a,{children:[Object(c.jsx)(I.a,{children:"Childcare Employee"}),Object(c.jsx)(k.a,{placeholder:n.nickname,disabled:!0})]})]}),Object(c.jsxs)(R.a,{children:[Object(c.jsx)(I.a,{children:"Remarks from Observation"}),Object(c.jsx)(k.a,{type:"textarea",onChange:function(e){return re(e,X)}})]})]})]}),Object(c.jsx)(ce.a,{children:Object(c.jsx)(te,(e={guardianId:K,remark:Q,temp:z,guardian:E,fname:m,lname:y,switchLabel:l},Object(ee.a)(e,"guardian",E),Object(ee.a)(e,"guardianId",K),Object(ee.a)(e,"user",n),Object(ee.a)(e,"inst",H),e))})]})})]}):"not a valid QR code":"not authorized"})},ie=function(){var e=Object(h.b)(),t=(e.user,e.isAuthenticated);return Object(c.jsx)(c.Fragment,{children:t?Object(c.jsx)("div",{children:Object(c.jsx)(ae,{})}):""})},re=function(){var e=Object(h.b)(),t=e.isAuthenticated,n=e.getAccessTokenSilently,i=(e.user,Object(b.f)()),r=Object(b.e)();return Object(a.useEffect)(Object(y.a)(T.a.mark((function e(){var c;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t){e.next=5;break}return e.next=3,n();case 3:c=e.sent,H()({method:"GET",headers:{Authorization:"Bearer ".concat(c)},url:"".concat(Object({NODE_ENV:"production",PUBLIC_URL:"/myToddler-front",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_AUTH0_DOMAIN:"dev-vryuom7u.us.auth0.com",REACT_APP_AUTH0_CLIENT_ID:"Bj3RO9KIwqrhATYIS9mYSHBlOqP0E2Nl",REACT_APP_API_URL:"http://13.212.76.67:5000/api"}).REACT_APP_TEST_API,"/child/verify/").concat(i.uuid4)}).then((function(e){e.data.valid?r.push("/teacher/attendance/".concat(i.uuid4,"/").concat(e.data.institution,"/").concat(e.data.params,"/").concat(e.data.guardian_id)):r.push("/teacher/dashboard")})).catch((function(e){return console.log(e)}));case 5:case"end":return e.stop()}}),e)}))),[t]),Object(c.jsx)(c.Fragment,{children:t?Object(c.jsxs)("div",{style:{height:"100vh",width:"100vw",background:"lightBlue",paddingTop:"20vh"},children:[Object(c.jsx)("div",{style:{display:"flex",justifyContent:"center",width:"100vw"},children:Object(c.jsx)(O.a,{color:"light",type:"grow"})}),Object(c.jsx)("div",{style:{display:"flex",width:"100vw",justifyContent:"center"},children:Object(c.jsx)("p",{style:{color:"dimGray"},children:"Hang tight, verifying QR code ..."})})]}):r.push("/")})},se=function(){var e=Object(h.b)().logout;return Object(c.jsx)("div",{style:{width:"100vw",height:"100vh",display:"flex",justifyContent:"center"},children:Object(c.jsx)(m.a,{onClick:function(){return e({returnTo:window.location.origin})},children:"Logout"})})};D.a.configure();var de=function(){var e=Object(a.useState)(!1),t=Object(s.a)(e,2),n=(t[0],t[1],Object(h.b)());return n.user,n.isAuthenticated,Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(b.a,{exact:!0,path:"/",children:Object(c.jsx)("div",{style:{height:"100vh",width:"100vw",background:"lightBlue"},children:Object(c.jsx)(f,{})})}),Object(c.jsx)(b.a,{exact:!0,path:"/user/dashboard",children:Object(c.jsx)(J,{})}),Object(c.jsx)(b.a,{exact:!0,path:"/teacher/dashboard",children:Object(c.jsx)($,{})}),Object(c.jsx)(b.a,{path:"/teacher/attendance/:uuid4/:inst/:name/:guardian_id",children:Object(c.jsx)(ie,{})}),Object(c.jsx)(b.a,{path:"/teacher/dash/:uuid4",children:Object(c.jsx)(re,{})}),Object(c.jsx)(b.a,{exact:!0,path:"/logout",children:Object(c.jsx)(se,{})})]})},oe=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,186)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,i=t.getLCP,r=t.getTTFB;n(e),c(e),a(e),i(e),r(e)}))},le=(n(180),n(181),n(23));r.a.render(Object(c.jsx)(h.a,{domain:"dev-vryuom7u.us.auth0.com",clientId:"Bj3RO9KIwqrhATYIS9mYSHBlOqP0E2Nl",audience:"http://13.212.76.67:5000/api",redirectUri:window.location.origin,children:Object(c.jsx)(le.a,{children:Object(c.jsx)(de,{})})}),document.getElementById("root")),oe()}},[[182,1,2]]]);
//# sourceMappingURL=main.c18a76b2.chunk.js.map