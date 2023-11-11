"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[596],{3596:function(e,t,n){n.r(t),n.d(t,{default:function(){return z}});var r=n(5867),o=(0,r.zo)("div")((function(){return{marginTop:90,marginBottom:40,"& h1":{textAlign:"center"},"& h2":{textAlign:"center"}}})),a=n(2791),i=(0,r.zo)("div")((function(){return{marginTop:20,marginBottom:20,display:"flex",flexDirection:"column","& label":{marginBottom:5,marginLeft:"auto",marginRight:"auto"},"& input":{width:300,marginLeft:"auto",marginRight:"auto"},"& input::placeholder":{opacity:.5}}})),u=n(9434),c=n(1273),l="NOT_FOUND";var s=function(e,t){return e===t};function f(e,t){var n="object"===typeof t?t:{equalityCheck:t},r=n.equalityCheck,o=void 0===r?s:r,a=n.maxSize,i=void 0===a?1:a,u=n.resultEqualityCheck,c=function(e){return function(t,n){if(null===t||null===n||t.length!==n.length)return!1;for(var r=t.length,o=0;o<r;o++)if(!e(t[o],n[o]))return!1;return!0}}(o),f=1===i?function(e){var t;return{get:function(n){return t&&e(t.key,n)?t.value:l},put:function(e,n){t={key:e,value:n}},getEntries:function(){return t?[t]:[]},clear:function(){t=void 0}}}(c):function(e,t){var n=[];function r(e){var r=n.findIndex((function(n){return t(e,n.key)}));if(r>-1){var o=n[r];return r>0&&(n.splice(r,1),n.unshift(o)),o.value}return l}return{get:r,put:function(t,o){r(t)===l&&(n.unshift({key:t,value:o}),n.length>e&&n.pop())},getEntries:function(){return n},clear:function(){n=[]}}}(i,c);function p(){var t=f.get(arguments);if(t===l){if(t=e.apply(null,arguments),u){var n=f.getEntries(),r=n.find((function(e){return u(e.value,t)}));r&&(t=r.value)}f.put(arguments,t)}return t}return p.clearCache=function(){return f.clear()},p}function p(e){var t=Array.isArray(e[0])?e[0]:e;if(!t.every((function(e){return"function"===typeof e}))){var n=t.map((function(e){return"function"===typeof e?"function "+(e.name||"unnamed")+"()":typeof e})).join(", ");throw new Error("createSelector expects all input-selectors to be functions, but received the following types: ["+n+"]")}return t}function d(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var o=function(){for(var t=arguments.length,r=new Array(t),o=0;o<t;o++)r[o]=arguments[o];var a,i=0,u={memoizeOptions:void 0},c=r.pop();if("object"===typeof c&&(u=c,c=r.pop()),"function"!==typeof c)throw new Error("createSelector expects an output function after the inputs, but received: ["+typeof c+"]");var l=u,s=l.memoizeOptions,f=void 0===s?n:s,d=Array.isArray(f)?f:[f],m=p(r),h=e.apply(void 0,[function(){return i++,c.apply(null,arguments)}].concat(d)),b=e((function(){for(var e=[],t=m.length,n=0;n<t;n++)e.push(m[n].apply(null,arguments));return a=h.apply(null,e)}));return Object.assign(b,{resultFunc:c,memoizedResultFunc:h,dependencies:m,lastResult:function(){return a},recomputations:function(){return i},resetRecomputations:function(){return i=0}}),b};return o}var m=d(f),h=function(e){return e.contacts},b=function(e){return e.filter},g=m(h,b,(function(e,t){return e?e.items.filter((function(e){return e.name.toLowerCase().includes(t.filter.toLowerCase())})):e.items})),x=n(184),v=function(){var e=(0,u.v9)(b).filter,t=(0,u.I0)();return(0,x.jsxs)(i,{children:[(0,x.jsx)("label",{children:"Find contacts by name"}),(0,x.jsx)("input",{className:"form-control border-success-subtle border-2",type:"text",name:"filter",pattern:"^[^\\d]+$",placeholder:"Albert Einstein",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,value:e,onChange:function(e){var n=e.target.value;t((0,c.Tv)(n))}})]})},y=(0,r.zo)("ul")((function(){return{marginLeft:"auto",marginRight:"auto",display:"flex",flexDirection:"column",width:450,"& li":{display:"flex",justifyContent:"space-between",marginTop:5,marginBottom:5,"& button":{fontWeight:500,fontSize:14,lineHeight:1.5,letterSpacing:"0.02em",color:"#2E2F42",border:"1px solid #ff2f00",backgroundColor:"#ff9e88",borderRadius:"5px",boxShadow:"rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px","&:hover":{color:"#FFFFFF",backgroundColor:"#FF5733",transition:"color 250ms cubic-bezier(0.4, 0, 0.2, 1)"}}}}})),C=n(92),j=function(){var e=(0,u.v9)(g),t=(0,u.I0)();return(0,x.jsx)(y,{children:e.map((function(e){return(0,x.jsxs)("li",{children:[e.name,": ",e.number,(0,x.jsx)("button",{type:"button",onClick:function(){return n=e.id,void t((0,C.zY)(n)).then((function(){t((0,C.mk)())}));var n},children:"Delete"})]},e.id)}))})},w=n(9439),k=(0,r.zo)("form")((function(){return{marginTop:20,marginBottom:20,marginLeft:"auto",marginRight:"auto",display:"flex",flexDirection:"column",alignItems:"center",width:400,gap:20,"& div":{display:"flex",flexDirection:"column","& label":{marginBottom:5,marginLeft:"auto",marginRight:"auto"},"& input":{width:300},"& input::placeholder":{opacity:.5}},"& button":{fontWeight:700,fontSize:20,lineHeight:1.5,letterSpacing:"0.02em",color:"#2E2F42",border:"1px solid #4d6dfa",backgroundColor:"#99acff",borderRadius:"5px",padding:"5px 15px",boxShadow:"rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px","&:hover":{color:"#FFFFFF",backgroundColor:"#2f28ff",transition:"color 250ms cubic-bezier(0.4, 0, 0.2, 1)"}}}})),F=function(){var e=(0,a.useState)(""),t=(0,w.Z)(e,2),n=t[0],r=t[1],o=(0,a.useState)(""),i=(0,w.Z)(o,2),c=i[0],l=i[1],s=(0,u.v9)(h).items,f=(0,u.I0)(),p=function(e){var t=e.target,n=t.value,o=t.name;switch(o){case"name":r(n);break;case"number":l(n);break;default:console.warn("Name '".concat(o,"' does not exist"))}};return(0,x.jsxs)(k,{onSubmit:function(e){e.preventDefault(),s.find((function(e){return e.name.toLowerCase()===n.toLowerCase()}))?alert("".concat(n," is already in contacts")):f((0,C.ky)({name:n,number:c})),r(""),l("")},className:"border border-primary-subtle border-3 rounded rounded-4 bg-primary-subtle",children:[(0,x.jsxs)("div",{children:[(0,x.jsx)("label",{className:"fs-4 mt-2",children:"Name"}),(0,x.jsx)("input",{className:"form-control border-success-subtle border-2",autoComplete:"off",type:"text",name:"name",pattern:"^[^\\d]+$",placeholder:"Albert Einstein",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,onChange:p,value:n})]}),(0,x.jsxs)("div",{children:[(0,x.jsx)("label",{className:"fs-4",children:"Numder"}),(0,x.jsx)("input",{className:"form-control border-success-subtle border-2",autoComplete:"off",type:"tel",name:"number",pattern:"^(\\+?[0-9 \\(\\)\\-\\.\u0445]+)$",placeholder:"+38(097)862-31-45",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,onChange:p,value:c})]}),(0,x.jsx)("button",{type:"submit",className:"mb-3",children:"Add contact"})]})},z=function(){var e=(0,u.I0)();return(0,a.useEffect)((function(){e((0,C.mk)())}),[e]),(0,x.jsxs)(o,{children:[(0,x.jsx)("h1",{children:"Phonebook"}),(0,x.jsx)(F,{}),(0,x.jsx)("h2",{children:"Contacts"}),(0,x.jsx)(v,{}),(0,x.jsx)(j,{})]})}}}]);
//# sourceMappingURL=596.a4354663.chunk.js.map