(this.webpackJsonp1_material_note=this.webpackJsonp1_material_note||[]).push([[0],{14:function(t,e,o){},15:function(t,e,o){"use strict";o.r(e);var n=o(7),c=o.n(n),r=o(1),i=o(8),a=o(3),d=o(0);function s(){var t=Object(r.useContext)(a.a).setTodos;return Object(d.jsxs)("form",{id:"todo_inputs",children:[Object(d.jsx)("input",{type:"text",id:"todo",title:"type a new todo","area-label":"type todo",placeholder:"create new todo"}),Object(d.jsx)("button",{id:"todo_gen_btn",onClick:function(e){if(e.preventDefault(),window.todo.value){var o=JSON.parse(localStorage.getItem("todos"))||[];o=[{title:window.todo.value,id:Date.now(),checked:!1}].concat(Object(i.a)(o)),localStorage.setItem("todos",JSON.stringify(o)),t(o),window.todo.value=""}},children:"+"})]})}function l(){return Object(d.jsxs)("header",{children:[Object(d.jsx)("h3",{children:"Todo App (Vanilla JS)"}),Object(d.jsx)("button",{id:"theme_toggler",onClick:function(){document.body.classList.toggle("light_theme")},children:"\ud83c\udf1e"})]})}o(14);var u=Object(r.lazy)((function(){return o.e(4).then(o.bind(null,17))}));function j(){return Object(d.jsxs)(a.b,{children:[Object(d.jsx)(l,{}),Object(d.jsx)(s,{}),Object(d.jsx)(r.Suspense,{fallback:Object(d.jsx)("h1",{children:"loading...."}),children:Object(d.jsx)(u,{})})]})}c.a.render(Object(d.jsx)(j,{}),document.getElementById("root"))},3:function(t,e,o){"use strict";o.d(e,"a",(function(){return i})),o.d(e,"b",(function(){return a}));var n=o(6),c=o(1),r=o(0),i=Object(c.createContext)();function a(t){var e=Object(c.useState)(JSON.parse(localStorage.getItem("todos"))||[]),o=Object(n.a)(e,2),a=o[0],d=o[1];return Object(r.jsx)(i.Provider,{value:{todos:a,setTodos:d},children:t.children})}}},[[15,1,2]]]);
//# sourceMappingURL=main.534d64fc.chunk.js.map