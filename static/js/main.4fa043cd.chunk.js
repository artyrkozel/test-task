(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{15:function(e,t,n){},16:function(e,t,n){},18:function(e,t,n){},21:function(e,t,n){"use strict";n.r(t);var a,c,i,r,s,o=n(9),u=n(0),l=n.n(u),b=n(7),m=n.n(b),j=(n(15),n(3)),d=n(4),O=(n(16),n(2)),p=function(e){var t=e.modalActive,n=e.onClickModalHandler,a=e.name,c=e.surname;return Object(O.jsx)("div",{className:t?"modal active":"modal",onClick:function(){return n()},children:Object(O.jsxs)("div",{className:"modal_content",children:[Object(O.jsx)("button",{onClick:function(e){e.stopPropagation(),n()},className:"button",children:"x"}),Object(O.jsx)("p",{className:"text",children:"\u0417\u0434\u0440\u0430\u0432\u0441\u0442\u0432\u0443\u0439\u0442\u0435, ".concat(a," ").concat(c)})]})})},h=(n(18),Object(d.b)("appStore")(Object(d.c)((function(e){var t=e.appStore,n=null===t||void 0===t?void 0:t.name,a=null===t||void 0===t?void 0:t.surName,c=Object(u.useState)(!1),i=Object(j.a)(c,2),r=i[0],s=i[1],o=Object(u.useState)(""),l=Object(j.a)(o,2),b=l[0],m=l[1],d=Object(u.useState)(""),h=Object(j.a)(d,2),f=h[0],v=h[1],x=Object(u.useState)(!1),N=Object(j.a)(x,2),g=N[0],S=N[1],C=Object(u.useState)(!1),y=Object(j.a)(C,2),k=y[0],w=y[1],F=Object(u.useState)("Name is required"),q=Object(j.a)(F,2),z=q[0],B=q[1],M=Object(u.useState)("Surname is required"),P=Object(j.a)(M,2),A=P[0],H=P[1],I=function(e){switch(e.target.name){case"name":S(!0);break;case"surname":w(!0)}};return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("div",{className:"app",children:Object(O.jsxs)("div",{className:"form",children:[Object(O.jsxs)("div",{className:"form-input",children:[Object(O.jsx)("input",{onBlur:I,type:"text",name:"name",value:b,onChange:function(e){B(""),m(e.target.value)},placeholder:"Name"}),g&&z&&Object(O.jsx)("div",{className:"error-message",children:z})]}),Object(O.jsxs)("div",{className:"form-input",children:[Object(O.jsx)("input",{onBlur:I,type:"text",name:"surname",value:f,onChange:function(e){H(""),v(e.target.value)},placeholder:"Surname"}),k&&A&&Object(O.jsx)("div",{className:"error-message",children:A})]}),Object(O.jsx)("button",{className:"form_btn",onClick:function(){""!==b.trim()&&""!==f.trim()?(null===t||void 0===t||t.setName(b),null===t||void 0===t||t.setSurname(f),m(""),v(""),s(!0),S(!1)):(S(!0),w(!0))},children:"\u0413\u043e\u0442\u043e\u0432\u043e"})]})}),Object(O.jsx)(p,{modalActive:r,onClickModalHandler:function(){s(!r),S(!0),w(!0),B("Name is required"),H("Surname is required")},name:n,surname:a})]})})))),f=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,22)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,i=t.getLCP,r=t.getTTFB;n(e),a(e),c(e),i(e),r(e)}))},v=n(5),x=n(10),N=n(6),g=(n(20),n(1)),S={appStore:new(a=function e(){Object(x.a)(this,e),Object(v.a)(this,"name",c,this),Object(v.a)(this,"surName",i,this),Object(v.a)(this,"setName",r,this),Object(v.a)(this,"setSurname",s,this)},c=Object(N.a)(a.prototype,"name",[g.n],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return""}}),i=Object(N.a)(a.prototype,"surName",[g.n],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return""}}),r=Object(N.a)(a.prototype,"setName",[g.f],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return function(t){e.name=t}}}),s=Object(N.a)(a.prototype,"setSurname",[g.f],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return function(t){e.surName=t}}}),a)};m.a.render(Object(O.jsx)(l.a.StrictMode,{children:Object(O.jsx)(d.a,Object(o.a)(Object(o.a)({},S),{},{children:Object(O.jsx)(h,{})}))}),document.getElementById("root")),f()}},[[21,1,2]]]);
//# sourceMappingURL=main.4fa043cd.chunk.js.map