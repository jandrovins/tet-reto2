(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{54:function(e,t,c){},55:function(e,t,c){},87:function(e,t,c){"use strict";c.r(t);var n=c(0),a=c(20),r=c.n(a),s=(c(54),c(55),c(89)),i=c(16),o=c(7),j=c(93),d=c(94),b=c(31),l=c(1),u=function(){return Object(l.jsx)("header",{children:Object(l.jsx)(j.a,{bg:"dark",variant:"dark",expand:"lg",collapseOnSelect:!0,children:Object(l.jsxs)(s.a,{children:[Object(l.jsx)(b.LinkContainer,{to:"/",children:Object(l.jsx)(j.a.Brand,{children:"Mi Tienda de Libros"})}),Object(l.jsx)(j.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(l.jsx)(j.a.Collapse,{id:"basic-navbar-nav",children:Object(l.jsxs)(d.a,{className:"ml-auto",children:[Object(l.jsx)(b.LinkContainer,{to:"/",children:Object(l.jsx)(d.a.Link,{children:"Inicio"})}),Object(l.jsx)(b.LinkContainer,{to:"/about",children:Object(l.jsx)(d.a.Link,{children:"Acerca de"})})]})})]})})})},h=c(90),x=c(91),O=function(){return Object(l.jsx)("footer",{children:Object(l.jsx)(s.a,{children:Object(l.jsx)(h.a,{children:Object(l.jsx)(x.a,{className:"text-center py-3",children:"Todos los derechos reservados \xa9 MyCompanyStore"})})})})},p=c(21),m=c.n(p),f=c(26),k=c(28),v=c(27),g=c.n(v),y=c(95),I=function(e){var t=e.book;return Object(l.jsxs)(y.a,{className:"my-3 p-3 rounded",children:[Object(l.jsx)(i.Link,{to:"/book/".concat(t._id),children:Object(l.jsx)(y.a.Img,{src:t.image,variant:"top"})}),Object(l.jsxs)(y.a.Body,{children:[Object(l.jsx)(i.Link,{to:"/book/".concat(t._id),children:Object(l.jsx)(y.a.Title,{as:"div",children:Object(l.jsx)("strong",{children:t.name})})}),Object(l.jsx)(y.a.Text,{as:"h3",children:t.price})]})]})},L=function(){var e=Object(n.useState)([]),t=Object(k.a)(e,2),c=t[0],a=t[1];return Object(n.useEffect)((function(){(function(){var e=Object(f.a)(m.a.mark((function e(){var t,c;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.a.get("/api/books");case 2:t=e.sent,c=t.data,a(c);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("h1",{children:" Catalogo de Libros "}),Object(l.jsx)(h.a,{children:c.map((function(e){return Object(l.jsx)(x.a,{sm:12,md:6,lg:4,xl:3,children:Object(l.jsx)(I,{book:e})})}))})]})},w=c(92),C=c(96),E=function(e){var t=e.match,c=Object(n.useState)({}),a=Object(k.a)(c,2),r=a[0],s=a[1];return Object(n.useEffect)((function(){(function(){var e=Object(f.a)(m.a.mark((function e(){var c,n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("request a book..."),e.next=3,g.a.get("/api/books/".concat(t.params.id));case 3:c=e.sent,n=c.data,s(n);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[t]),Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(i.Link,{className:"btn btn-light my-3",to:"/",children:"Regresar..."}),Object(l.jsxs)(h.a,{children:[Object(l.jsx)(x.a,{md:4,children:Object(l.jsx)(w.a,{src:r.image,alt:r.name,fluid:!0})}),Object(l.jsx)(x.a,{md:4,children:Object(l.jsxs)(C.a,{variant:"flush",children:[Object(l.jsx)(C.a.Item,{children:Object(l.jsx)("h3",{children:r.name})}),Object(l.jsxs)(C.a.Item,{children:["Autor: ",r.author]}),Object(l.jsxs)(C.a.Item,{variant:"flush",children:["Descripci\xf3n: ",r.description]})]})}),Object(l.jsx)(x.a,{md:3,children:Object(l.jsxs)(C.a,{variant:"flush",children:[Object(l.jsxs)(C.a.Item,{children:["Estado: ",r.countInStock>0?"Disponible":"No Disponible"," (",r.countInStock,") uds"]}),Object(l.jsxs)(C.a.Item,{children:[Object(l.jsx)("strong",{children:"Precio:"})," ",r.price]})]})})]})]})},N=function(){return Object(l.jsx)("div",{children:Object(l.jsx)("p",{children:"Este sitio web esta concebido como una tienda virtual de obras literarias, la cual permite obtener el listado de obras disponibles para reservar y/o comprar. El sitio fue desarrollado para que los usuarios pueda obtener informaci\xf3n \xfatil acerca de..."})})},S=function(){return Object(l.jsxs)(i.BrowserRouter,{children:[Object(l.jsx)(u,{}),Object(l.jsx)("main",{className:"py-3",children:Object(l.jsxs)(s.a,{children:[Object(l.jsx)(o.d,{path:"/",component:L,exact:!0}),Object(l.jsx)(o.d,{path:"/book/:id",component:E}),Object(l.jsx)(o.d,{path:"/about",component:N})]})}),Object(l.jsx)(O,{})]})};r.a.render(Object(l.jsx)(S,{}),document.getElementById("root"))}},[[87,1,2]]]);
//# sourceMappingURL=main.d4503647.chunk.js.map