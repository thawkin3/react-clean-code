(this["webpackJsonpreact-clean-code"]=this["webpackJsonpreact-clean-code"]||[]).push([[0],{11:function(e,t,n){},12:function(e,t,n){"use strict";n.r(t);var c=n(1),j=n.n(c),s=n(4),r=n.n(s),i=(n(9),n(2)),b=n(0),o=function(){var e=Object(c.useState)(!1),t=Object(i.a)(e,2),n=t[0],j=t[1];return Object(b.jsxs)("div",{children:[Object(b.jsx)("button",{onClick:function(){return j((function(e){return!e}))},children:"Toggle the text"}),n?Object(b.jsx)("p",{children:"The condition must be true!"}):null]})},l=function(){var e=Object(c.useState)(!1),t=Object(i.a)(e,2),n=t[0],j=t[1];return Object(b.jsxs)("div",{children:[Object(b.jsx)("button",{onClick:function(){return j((function(e){return!e}))},children:"Toggle the text"}),n&&Object(b.jsx)("p",{children:"The condition must be true!"})]})},d=function(){var e=Object(c.useState)(!1),t=Object(i.a)(e,2),n=t[0],j=t[1];return Object(b.jsxs)("div",{children:[Object(b.jsx)("button",{onClick:function(){return j((function(e){return!e}))},children:"Toggle the text"}),n&&Object(b.jsx)("p",{children:"The condition must be true!"}),!n&&Object(b.jsx)("p",{children:"The condition must be false!"})]})},a=function(){var e=Object(c.useState)(!1),t=Object(i.a)(e,2),n=t[0],j=t[1];return Object(b.jsxs)("div",{children:[Object(b.jsx)("button",{onClick:function(){return j((function(e){return!e}))},children:"Toggle the text"}),n?Object(b.jsx)("p",{children:"The condition must be true!"}):Object(b.jsx)("p",{children:"The condition must be false!"})]})},h=function(e){var t=e.isHungry;return Object(b.jsx)("span",{children:t?"I am hungry":"I am full"})},O=function(){return Object(b.jsxs)("div",{children:[Object(b.jsx)("span",{children:Object(b.jsx)("b",{children:"This person is hungry: "})}),Object(b.jsx)(h,{isHungry:!0}),Object(b.jsx)("br",{}),Object(b.jsx)("span",{children:Object(b.jsx)("b",{children:"This person is full: "})}),Object(b.jsx)(h,{isHungry:!1})]})},u=function(e){var t=e.isHungry;return Object(b.jsx)("span",{children:t?"I am hungry":"I am full"})},x=function(){return Object(b.jsxs)("div",{children:[Object(b.jsx)("span",{children:Object(b.jsx)("b",{children:"This person is hungry: "})}),Object(b.jsx)(u,{isHungry:!0}),Object(b.jsx)("br",{}),Object(b.jsx)("span",{children:Object(b.jsx)("b",{children:"This person is full: "})}),Object(b.jsx)(u,{isHungry:!1})]})},m=function(e){var t=e.personName;return Object(b.jsxs)("p",{children:["Hi, ",t,"!"]})},f=function(){return Object(b.jsxs)("div",{children:[Object(b.jsx)(m,{personName:"John"}),Object(b.jsx)(m,{personName:"Matt"}),Object(b.jsx)(m,{personName:"Paul"})]})},g=function(e){var t=e.personName;return Object(b.jsxs)("p",{children:["Hi, ",t,"!"]})},p=function(){return Object(b.jsxs)("div",{children:[Object(b.jsx)(g,{personName:"John"}),Object(b.jsx)(g,{personName:"Matt"}),Object(b.jsx)(g,{personName:"Paul"})]})},v=function(){var e=Object(c.useState)(""),t=Object(i.a)(e,2),n=t[0],j=t[1];return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("label",{htmlFor:"name",children:"Name: "}),Object(b.jsx)("input",{id:"name",value:n,onChange:function(e){return function(e){j(e.target.value)}(e)}})]})},C=function(){var e=Object(c.useState)(""),t=Object(i.a)(e,2),n=t[0],j=t[1];return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("label",{htmlFor:"name",children:"Name: "}),Object(b.jsx)("input",{id:"name",value:n,onChange:function(e){j(e.target.value)}})]})},k=function(){return Object(b.jsx)("svg",{height:"100",width:"100",children:Object(b.jsx)("circle",{cx:"50",cy:"50",r:"40",stroke:"black","stroke-width":"3",fill:"red"})})},N=function(e){var t=e.IconComponent;return Object(b.jsxs)("div",{children:[Object(b.jsx)("p",{children:"Below is the icon component prop I was given:"}),Object(b.jsx)(t,{})]})},T=function(){return Object(b.jsx)(N,{IconComponent:function(){return Object(b.jsx)(k,{})}})},y=function(){return Object(b.jsx)("svg",{height:"100",width:"100",children:Object(b.jsx)("circle",{cx:"50",cy:"50",r:"40",stroke:"black","stroke-width":"3",fill:"red"})})},I=function(e){var t=e.IconComponent;return Object(b.jsxs)("div",{children:[Object(b.jsx)("p",{children:"Below is the icon component prop I was given:"}),Object(b.jsx)(t,{})]})},S=function(){return Object(b.jsx)(I,{IconComponent:y})},B=function(e){var t=e.handleClick;return Object(b.jsx)("button",{onClick:t||void 0,children:"Click me"})},w=function(e){var t=e.handleClick;return Object(b.jsx)("button",{onClick:t||function(){},children:"Click me"})},F=function(){return Object(b.jsxs)("div",{children:[Object(b.jsx)(B,{}),Object(b.jsx)(B,{handleClick:function(){return alert("Clicked!")}}),Object(b.jsx)(w,{}),Object(b.jsx)(w,{handleClick:function(){return alert("Clicked!")}})]})},G=function(e){var t=e.handleClick;return Object(b.jsx)("button",{onClick:t,children:"Click me"})},H=function(){return Object(b.jsxs)("div",{children:[Object(b.jsx)(G,{}),Object(b.jsx)(G,{handleClick:function(){return alert("Clicked!")}})]})},P=function(){var e=Object(c.useState)(!1),t=Object(i.a)(e,2),n=t[0],j=t[1],s=function(){return j(!n)};return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)("button",{disabled:n,children:["I'm ",n?"disabled":"enabled"]}),Object(b.jsx)("button",{onClick:s,children:"Toggle button state"}),Object(b.jsx)("button",{onClick:function(){for(var e=0;e<2;e++)s()},children:"Toggle button state 2 times"})]})},J=function(){var e=Object(c.useState)(!1),t=Object(i.a)(e,2),n=t[0],j=t[1],s=function(){return j((function(e){return!e}))};return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)("button",{disabled:n,children:["I'm ",n?"disabled":"enabled"]}),Object(b.jsx)("button",{onClick:s,children:"Toggle button state"}),Object(b.jsx)("button",{onClick:function(){for(var e=0;e<2;e++)s()},children:"Toggle button state 2 times"})]})},R=(n(11),function(){return Object(b.jsxs)("main",{children:[Object(b.jsx)("header",{children:Object(b.jsx)("h1",{children:"React Clean Code"})}),Object(b.jsxs)("section",{children:[Object(b.jsx)("h2",{children:"01. Conditional Rendering Only for One Condition"}),Object(b.jsx)("h3",{className:"bad",children:"Bad"}),Object(b.jsx)(o,{}),Object(b.jsx)("br",{}),Object(b.jsx)("h3",{className:"good",children:"Good"}),Object(b.jsx)(l,{})]}),Object(b.jsx)("hr",{}),Object(b.jsxs)("section",{children:[Object(b.jsx)("h2",{children:"02. Conditional Rendering on Either Condition"}),Object(b.jsx)("h3",{className:"bad",children:"Bad"}),Object(b.jsx)(d,{}),Object(b.jsx)("br",{}),Object(b.jsx)("h3",{className:"good",children:"Good"}),Object(b.jsx)(a,{})]}),Object(b.jsx)("hr",{}),Object(b.jsxs)("section",{children:[Object(b.jsx)("h2",{children:"03. Boolean Props"}),Object(b.jsx)("h3",{className:"bad",children:"Bad"}),Object(b.jsx)(O,{}),Object(b.jsx)("br",{}),Object(b.jsx)("h3",{className:"good",children:"Good"}),Object(b.jsx)(x,{})]}),Object(b.jsx)("hr",{}),Object(b.jsxs)("section",{children:[Object(b.jsx)("h2",{children:"04. String Prop Values"}),Object(b.jsx)("h3",{className:"bad",children:"Bad"}),Object(b.jsx)(f,{}),Object(b.jsx)("br",{}),Object(b.jsx)("h3",{className:"good",children:"Good"}),Object(b.jsx)(p,{})]}),Object(b.jsx)("hr",{}),Object(b.jsxs)("section",{children:[Object(b.jsx)("h2",{children:"05. Unnecessary Anonymous Functions"}),Object(b.jsx)("h3",{className:"bad",children:"Bad"}),Object(b.jsx)(v,{}),Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),Object(b.jsx)("h3",{className:"good",children:"Good"}),Object(b.jsx)(C,{})]}),Object(b.jsx)("hr",{}),Object(b.jsxs)("section",{children:[Object(b.jsx)("h2",{children:"06. Unnecessary Anonymous Function Components"}),Object(b.jsx)("h3",{className:"bad",children:"Bad"}),Object(b.jsx)(T,{}),Object(b.jsx)("br",{}),Object(b.jsx)("h3",{className:"good",children:"Good"}),Object(b.jsx)(S,{})]}),Object(b.jsx)("hr",{}),Object(b.jsxs)("section",{children:[Object(b.jsx)("h2",{children:"07. Undefined Props"}),Object(b.jsx)("h3",{className:"bad",children:"Bad"}),Object(b.jsx)(F,{}),Object(b.jsx)("br",{}),Object(b.jsx)("h3",{className:"good",children:"Good"}),Object(b.jsx)(H,{})]}),Object(b.jsx)("hr",{}),Object(b.jsxs)("section",{children:[Object(b.jsx)("h2",{children:"08. Setting State That Relies on the Previous State"}),Object(b.jsx)("h3",{className:"bad",children:"Bad"}),Object(b.jsx)(P,{}),Object(b.jsx)("br",{}),Object(b.jsx)("h3",{className:"good",children:"Good"}),Object(b.jsx)(J,{})]}),Object(b.jsx)("hr",{})]})});r.a.render(Object(b.jsx)(j.a.StrictMode,{children:Object(b.jsx)(R,{})}),document.getElementById("root"))},9:function(e,t,n){}},[[12,1,2]]]);
//# sourceMappingURL=main.d3c53463.chunk.js.map