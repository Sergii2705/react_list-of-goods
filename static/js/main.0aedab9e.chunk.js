(this["webpackJsonpreact_list-of-goods"]=this["webpackJsonpreact_list-of-goods"]||[]).push([[0],{14:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var r,s=n(4),i=n.n(s),c=n(5),a=n(6),o=n(9),l=n(7),u=n(8),d=n(1),p=n.n(d),b=n(18),m=n(2),h=n.n(m),j=(n(14),n(0)),f=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],y=new Array(f.length).fill("").map((function(e){return e+Object(b.a)()})),N=new Array(f.length).fill("").map((function(e,t){return{id:e+Object(b.a)(),option:t+1}}));!function(e){e[e.NONE=0]="NONE",e[e.ALPABET=1]="ALPABET",e[e.LENGTH=2]="LENGTH"}(r||(r={}));var O=function(e){Object(o.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(c.a)(this,n);for(var s=arguments.length,i=new Array(s),a=0;a<s;a++)i[a]=arguments[a];return(e=t.call.apply(t,[this].concat(i))).state={isStarted:!1,selected:1,isReversed:!1,sortType:r.NONE},e}return Object(a.a)(n,[{key:"render",value:function(){var e=this,t=this.state,n=t.isStarted,s=t.selected,i=t.isReversed,c=t.sortType,a=function(e,t,n,s){var i=Object(u.a)(e).filter((function(e){return e.length>=t}));return n!==r.NONE&&i.sort((function(e,t){return n===r.ALPABET?e.localeCompare(t):e.length-t.length})),s&&i.reverse(),i}(f,s,c,i);return Object(j.jsx)("div",{className:"App box",children:n?Object(j.jsxs)("div",{className:"App__content",children:[Object(j.jsxs)("div",{className:"App__buttons",children:[Object(j.jsx)("button",{className:h()("button is-primary",{"is-light":c===r.ALPABET}),type:"button",onClick:function(){return e.setState((function(e){return{sortType:r.ALPABET,isReversed:e.sortType===r.ALPABET&&!i}}))},children:"Sort alphabetically"}),Object(j.jsx)("button",{className:h()("button is-primary",{"is-light":c===r.LENGTH}),type:"button",onClick:function(){return e.setState((function(e){return{sortType:r.LENGTH,isReversed:e.sortType===r.LENGTH&&!i}}))},children:"Sort by length"}),Object(j.jsx)("button",{className:h()("button is-primary",{"is-light":i}),type:"button",onClick:function(){return e.setState((function(e){return{isReversed:!e.isReversed}}))},children:"Reverse"}),Object(j.jsx)("button",{className:"button is-danger is-large is-reset",type:"button",onClick:function(){return e.setState({selected:1,isReversed:!1,sortType:r.NONE})},children:"Reset"}),Object(j.jsx)("select",{className:"select is-primary is-medium",name:"minLength",value:s,onChange:function(t){return e.setState({selected:+t.target.value})},children:N.map((function(e){var t=e.id,n=e.option;return Object(j.jsx)("option",{value:n,children:n},t)}))})]}),Object(j.jsx)("ul",{className:"Goods content is-medium",children:a.map((function(e,t){return Object(j.jsx)("li",{className:"Goods__item",children:e},y[t])}))})]}):Object(j.jsx)("button",{className:"button is-primary is-large",type:"button",onClick:function(){return e.setState({isStarted:!0})},children:"Start"})})}}]),n}(p.a.Component);i.a.render(Object(j.jsx)(O,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.0aedab9e.chunk.js.map