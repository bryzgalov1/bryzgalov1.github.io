"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[85],{"./diagramElements/Arrow.jsx":(e,n,o)=>{o.d(n,{Z:()=>r});var s=o("../node_modules/merge-class-names/dist/esm/index.js"),t=o("../node_modules/react/jsx-runtime.js");function r({col:e,colspan:n=1,from:o,solid:a,to:d,withAlt:c}){return(0,t.jsx)("div",{className:(0,s.Z)("Arrow",a&&"Arrow--solid",c&&"Arrow--withAlt"),style:{gridColumn:`${e+1} / span ${n}`,gridRow:`${3*o+2} / ${3*d}`},children:c&&(0,t.jsx)(r,{col:e,from:o,to:d})})}},"./diagramElements/DocLink.jsx":(e,n,o)=>{o.d(n,{Z:()=>r});var s=o("../node_modules/@wojtekmaj/react-t/dist/esm/index.js"),t=o("../node_modules/react/jsx-runtime.js");function r({docname:e,name:n}){const o=(0,s.$G)(n),r=(0,s.$G)("Read docs for {name} (opens in a new tab)",{name:n}),a=(0,s.$G)("//reactjs.org/docs/react-component.html#{docname}",{docname:e}),d=(c=o)?c.split("").reduce(((e,n)=>e+(function(e){return/[A-Z]/.test(e)}(n)?`­${n}`:n)),""):c;var c;const m=n===o;return e?(0,t.jsx)("a",{href:a,target:"_blank",rel:"noopener noreferrer",title:r,dir:m?"ltr":void 0,children:d}):(0,t.jsx)("span",{dir:m?"ltr":void 0,children:d})}},"./diagramElements/Initiator.jsx":(e,n,o)=>{o.d(n,{Z:()=>a});var s=o("../node_modules/merge-class-names/dist/esm/index.js"),t=o("./diagramElements/DocLink.jsx"),r=o("../node_modules/react/jsx-runtime.js");function a({col:e,doc:n=!0,name:o,row:a,secondary:d}){const c=n?o.toLowerCase().replace(/[()]/g,""):void 0;return(0,r.jsx)("div",{className:(0,s.Z)("Initiator",n&&"Initiator--hasLink",d&&"Initiator--secondary"),"data-column":e+1,style:{gridColumn:e+1,gridRow:3*a+" / span 2"},children:(0,r.jsx)("h4",{children:(0,r.jsx)(t.Z,{docname:c,name:o})})})}},"./diagramElements/Method.jsx":(e,n,o)=>{o.d(n,{Z:()=>a});var s=o("../node_modules/merge-class-names/dist/esm/index.js"),t=o("./diagramElements/DocLink.jsx"),r=o("../node_modules/react/jsx-runtime.js");function a({col:e,colspan:n=1,doc:o=!0,endsInMiddle:a,main:d,name:c,row:m,secondary:i,type:l}){const p=o?`${c.toLowerCase().replace(/\s+/g,"-").replace(/[()]/g,"")}`:void 0;return(0,r.jsx)("li",{className:(0,s.Z)("Method",o&&"Method--hasLink",a&&"Method--endsInMiddle",d&&"Method--main",i&&"Method--secondary",l),style:{gridColumn:`${e+1} / span ${n}`,gridRow:3*m+" / span 2"},children:(0,r.jsx)(t.Z,{docname:p,name:c})})}},"./diagramElements/Section.jsx":(e,n,o)=>{o.d(n,{Z:()=>m});var s=o("../node_modules/react/index.js"),t=o("../node_modules/merge-class-names/dist/esm/index.js"),r=o("../node_modules/@wojtekmaj/react-t/dist/esm/index.js"),a=o("./diagramElements/Subsection.jsx"),d=o("../node_modules/react/jsx-runtime.js");function c(){return c=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var o=arguments[n];for(var s in o)Object.prototype.hasOwnProperty.call(o,s)&&(e[s]=o[s])}return e},c.apply(this,arguments)}function m(e){const{advanced:n,children:o,col:m,colspan:i=1,name:l}=e,p=`${m+1} / span ${i}`,j=3*(n?7:4)+2,x=n?8:7;return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)("section",{className:(0,t.Z)("Section",n&&"Section--advanced"),style:{gridColumn:p,gridRow:`1 / span ${j}`}}),(0,d.jsx)("div",{className:(0,t.Z)("Section__highlight",n&&"Section__highlight--advanced"),style:{gridColumn:p,gridRow:`${j-x+1} / span ${x}`}}),(0,d.jsx)("h3",{className:"Section__title",style:{gridColumn:p,gridRow:1},children:(0,d.jsx)(r.ZP,{children:l})}),o.find((e=>e.type===a.Z))?s.Children.map(o,(n=>s.cloneElement(n,Object.assign({sectionCol:m},e,n.props)))):(0,d.jsx)(a.Z,c({},e))]})}},"./diagramElements/Subsection.jsx":(e,n,o)=>{o.d(n,{Z:()=>c});var s=o("../node_modules/react/index.js"),t=o("./diagramElements/Initiator.jsx"),r=o("./diagramElements/Method.jsx"),a=o("./diagramElements/Arrow.jsx"),d=o("../node_modules/react/jsx-runtime.js");function c({children:e,col:n,colspan:o,sectionCol:c}){const m=s.Children.map(e,(t=>s.cloneElement(t,Object.assign({col:n},function(e,n,o){if(!e)return null;const s={},t=n.indexOf(e);switch(e.type){case a.Z:if(void 0===e.props.from){const e=n[t-1];s.from=e?e.props.row:0}if(void 0===e.props.to){const e=n[t+1];s.to=e?e.props.row:1}break;case r.Z:(s.col||e.props.col||o.col)+(s.colspan||e.props.colspan)<o.sectionCol+o.colspan&&(s.endsInMiddle=!0)}return s}(t,e,{col:n,colspan:o,sectionCol:c}),t.props))));if("CSS"in window&&!CSS.supports("display: contents"))return m;const i=m.filter((e=>e.type===t.Z)),l=m.filter((e=>e.type===r.Z)),p=m.filter((e=>!l.includes(e)&&!i.includes(e)));return(0,d.jsxs)(d.Fragment,{children:[i,(0,d.jsx)("ul",{className:"Methods",children:l}),p]})}},"./versions/16.3/Unmounting.jsx":(e,n,o)=>{o.d(n,{Z:()=>d});var s=o("./diagramElements/Section.jsx"),t=o("./diagramElements/Method.jsx"),r=o("./diagramElements/Arrow.jsx"),a=o("../node_modules/react/jsx-runtime.js");function d({advanced:e}){return(0,a.jsxs)(s.Z,{advanced:e,name:"Unmounting",col:5,children:[(0,a.jsx)(r.Z,{}),(0,a.jsx)(t.Z,{main:!0,name:"componentWillUnmount",type:"commit",row:e?7:4},"componentwillunmount")]})}},"./versions/16.4/index.js":(e,n,o)=>{o.r(n),o.d(n,{Mounting:()=>d,Unmounting:()=>l,Updating:()=>i});var s=o("./diagramElements/Section.jsx"),t=o("./diagramElements/Method.jsx"),r=o("./diagramElements/Arrow.jsx"),a=o("../node_modules/react/jsx-runtime.js");function d({advanced:e}){return e?(0,a.jsxs)(s.Z,{advanced:!0,name:"Mounting",col:1,children:[(0,a.jsx)(r.Z,{}),(0,a.jsx)(t.Z,{main:!0,name:"constructor",type:"render",row:1},"constructor"),(0,a.jsx)(r.Z,{}),(0,a.jsx)(t.Z,{name:"static getDerivedStateFromProps",type:"render",row:2,colspan:4},"getderivedstatefromprops"),(0,a.jsx)(r.Z,{}),(0,a.jsx)(t.Z,{main:!0,name:"render",type:"render",row:4,colspan:4},"render"),(0,a.jsx)(r.Z,{}),(0,a.jsx)(t.Z,{secondary:!0,name:"React updates DOM and refs",doc:!1,type:"pre-commit",row:6,colspan:4},"react-updates-dom-and-refs"),(0,a.jsx)(r.Z,{solid:!0}),(0,a.jsx)(t.Z,{main:!0,name:"componentDidMount",type:"commit",row:7},"componentdidmount")]}):(0,a.jsxs)(s.Z,{name:"Mounting",col:1,children:[(0,a.jsx)(r.Z,{}),(0,a.jsx)(t.Z,{main:!0,name:"constructor",type:"render",row:1},"constructor"),(0,a.jsx)(r.Z,{}),(0,a.jsx)(t.Z,{main:!0,name:"render",type:"render",row:2,colspan:4},"render"),(0,a.jsx)(r.Z,{}),(0,a.jsx)(t.Z,{secondary:!0,name:"React updates DOM and refs",doc:!1,type:"pre-commit",row:3,colspan:4},"react-updates-dom-and-refs"),(0,a.jsx)(r.Z,{solid:!0}),(0,a.jsx)(t.Z,{main:!0,name:"componentDidMount",type:"commit",row:4},"componentdidmount")]})}var c=o("./diagramElements/Subsection.jsx"),m=o("./diagramElements/Initiator.jsx");function i({advanced:e}){return e?(0,a.jsxs)(s.Z,{advanced:!0,name:"Updating",col:2,colspan:3,children:[(0,a.jsxs)(c.Z,{col:2,children:[(0,a.jsx)(m.Z,{secondary:!0,doc:!1,name:"New props",row:1}),(0,a.jsx)(r.Z,{}),(0,a.jsx)(t.Z,{name:"static getDerivedStateFromProps",type:"render",col:1,row:2,colspan:4},"getderivedstatefromprops"),(0,a.jsx)(r.Z,{}),(0,a.jsx)(t.Z,{name:"shouldComponentUpdate",type:"render",row:3,colspan:2},"shouldcomponentupdate"),(0,a.jsx)(r.Z,{withAlt:!0,colspan:2}),(0,a.jsx)(t.Z,{main:!0,name:"render",type:"render",col:1,row:4,colspan:4},"render"),(0,a.jsx)(t.Z,{name:"getSnapshotBeforeUpdate",type:"pre-commit",row:5,colspan:3},"getsnapshotbeforeupdate"),(0,a.jsx)(r.Z,{solid:!0,col:3}),(0,a.jsx)(t.Z,{secondary:!0,name:"React updates DOM and refs",doc:!1,type:"pre-commit",col:1,row:6,colspan:4},"react-updates-dom-and-refs"),(0,a.jsx)(r.Z,{solid:!0,col:3}),(0,a.jsx)(t.Z,{main:!0,name:"componentDidUpdate",type:"commit",colspan:3,row:7},"componentdidupdate")]}),(0,a.jsxs)(c.Z,{col:3,children:[(0,a.jsx)(m.Z,{name:"setState()",row:1},"setstate"),(0,a.jsx)(r.Z,{}),(0,a.jsx)(t.Z,{name:"static getDerivedStateFromProps",type:"render",col:1,row:2,colspan:4},"getderivedstatefromprops"),(0,a.jsx)(r.Z,{}),(0,a.jsx)(t.Z,{name:"shouldComponentUpdate",type:"render",col:2,row:3,colspan:2},"shouldcomponentupdate"),(0,a.jsx)(t.Z,{main:!0,name:"render",type:"render",col:1,row:4,colspan:4},"render"),(0,a.jsx)(r.Z,{}),(0,a.jsx)(t.Z,{name:"getSnapshotBeforeUpdate",type:"pre-commit",col:2,row:5,colspan:3},"getsnapshotbeforeupdate"),(0,a.jsx)(t.Z,{secondary:!0,name:"React updates DOM and refs",doc:!1,type:"pre-commit",col:1,row:6,colspan:4},"react-updates-dom-and-refs"),(0,a.jsx)(t.Z,{main:!0,name:"componentDidUpdate",type:"commit",col:2,colspan:3,row:7},"componentdidupdate")]}),(0,a.jsxs)(c.Z,{col:4,children:[(0,a.jsx)(m.Z,{name:"forceUpdate()",row:1},"forceupdate"),(0,a.jsx)(r.Z,{}),(0,a.jsx)(t.Z,{name:"static getDerivedStateFromProps",type:"render",col:1,row:2,colspan:4},"getderivedstatefromprops"),(0,a.jsx)(r.Z,{}),(0,a.jsx)(t.Z,{main:!0,name:"render",type:"render",col:1,row:4,colspan:4},"render"),(0,a.jsx)(t.Z,{name:"getSnapshotBeforeUpdate",type:"pre-commit",col:2,row:5,colspan:3},"getsnapshotbeforeupdate"),(0,a.jsx)(t.Z,{secondary:!0,name:"React updates DOM and refs",doc:!1,type:"pre-commit",col:1,row:6,colspan:4},"react-updates-dom-and-refs"),(0,a.jsx)(t.Z,{main:!0,name:"componentDidUpdate",type:"commit",col:2,colspan:3,row:7},"componentdidupdate")]})]}):(0,a.jsxs)(s.Z,{name:"Updating",col:2,colspan:3,children:[(0,a.jsxs)(c.Z,{col:2,children:[(0,a.jsx)(m.Z,{secondary:!0,doc:!1,name:"New props",row:1}),(0,a.jsx)(r.Z,{}),(0,a.jsx)(t.Z,{main:!0,name:"render",type:"render",col:1,row:2,colspan:4},"render"),(0,a.jsx)(t.Z,{secondary:!0,name:"React updates DOM and refs",doc:!1,type:"pre-commit",col:1,row:3,colspan:4},"react-updates-dom-and-refs"),(0,a.jsx)(r.Z,{solid:!0,col:3}),(0,a.jsx)(t.Z,{main:!0,name:"componentDidUpdate",type:"commit",colspan:3,row:4},"componentdidupdate")]}),(0,a.jsxs)(c.Z,{col:3,children:[(0,a.jsx)(m.Z,{name:"setState()",row:1},"setstate"),(0,a.jsx)(r.Z,{}),(0,a.jsx)(t.Z,{main:!0,name:"render",type:"render",col:1,row:2,colspan:4},"render"),(0,a.jsx)(r.Z,{}),(0,a.jsx)(t.Z,{secondary:!0,name:"React updates DOM and refs",doc:!1,type:"pre-commit",col:1,row:3,colspan:4},"react-updates-dom-and-refs"),(0,a.jsx)(t.Z,{main:!0,name:"componentDidUpdate",type:"commit",col:2,colspan:3,row:4},"componentdidupdate")]}),(0,a.jsxs)(c.Z,{col:4,children:[(0,a.jsx)(m.Z,{name:"forceUpdate()",row:1},"forceupdate"),(0,a.jsx)(r.Z,{}),(0,a.jsx)(t.Z,{main:!0,name:"render",type:"render",col:1,row:2,colspan:4},"render"),(0,a.jsx)(t.Z,{secondary:!0,name:"React updates DOM and refs",doc:!1,type:"pre-commit",col:1,row:3,colspan:4},"react-updates-dom-and-refs"),(0,a.jsx)(t.Z,{main:!0,name:"componentDidUpdate",type:"commit",col:2,colspan:3,row:4},"componentdidupdate")]})]})}const l=o("./versions/16.3/Unmounting.jsx").Z},"../node_modules/merge-class-names/dist/esm/index.js":(e,n,o)=>{function s(){return Array.prototype.slice.call(arguments).reduce((function(e,n){return e.concat(n)}),[]).filter((function(e){return"string"==typeof e})).join(" ")}o.d(n,{Z:()=>s})}}]);