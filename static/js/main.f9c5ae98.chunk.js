(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,a){e.exports=a(25)},19:function(e,t,a){},20:function(e,t,a){},25:function(e,t,a){"use strict";a.r(t);var n=a(2),c=a.n(n),l=a(9),s=a.n(l),r=(a(19),a(4)),i=(a(20),a(27));var m=function(){var e=Object(n.useState)(""),t=Object(r.a)(e,2),a=t[0],l=t[1],s=Object(n.useState)(!1),m=Object(r.a)(s,2),o=m[0],u=m[1],p=Object(n.useState)({name:"",species:"",img:"",hp:"",attack:"",defence:"",type:""}),E=Object(r.a)(p,2),d=E[0],h=E[1];return c.a.createElement("div",{className:"App"},c.a.createElement("div",{className:"title"},c.a.createElement("h1",null,"POKEMON "),c.a.createElement("input",{type:"text",onChange:function(e){l(e.target.value)}}),c.a.createElement("button",{onClick:function(){i.a.get("https://pokeapi.co/api/v2/pokemon/".concat(a)).then(function(e){h({name:a,species:e.data.species.name,img:e.data.sprites.front_default,hp:e.data.stats[0].base_stat,attack:e.data.stats[1].base_stat,defence:e.data.stats[2].base_stat,type:e.data.types[0].type.name})}),u(!0)}},"Search")),c.a.createElement("div",{className:"Display"},o?c.a.createElement(c.a.Fragment,null,c.a.createElement("h1",null,d.name),c.a.createElement("img",{src:d.img,alt:"no img"}),c.a.createElement("h4",null,"TYPE : ",d.type),c.a.createElement("h4",null,"HP : ",d.hp),c.a.createElement("h4",null,"ATTACK : ",d.attack),c.a.createElement("h4",null,"DEFENCE : ",d.defence)):c.a.createElement("h1",null,"ENTER THE NAME OF A POKEMON")))},o=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,28)).then(function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,l=t.getLCP,s=t.getTTFB;a(e),n(e),c(e),l(e),s(e)})};s.a.createRoot(document.getElementById("root")).render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(m,null))),o()}},[[10,1,2]]]);
//# sourceMappingURL=main.f9c5ae98.chunk.js.map