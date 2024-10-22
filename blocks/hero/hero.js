import{r as h,j as e,c as w}from"../__chunks__/client.Dzuxdzeo.js";const N=({breakpoints:s=[],lazy:n=!1,preload:i=!1,pictureEl:c})=>{const[l,m]=h.useState([]);if(!c)return null;const a=c.querySelector("img"),d=a==null?void 0:a.getAttribute("src");if(!d)return null;const p=(a==null?void 0:a.getAttribute("alt"))||"",x=(a==null?void 0:a.getAttribute("width"))||0,u=(a==null?void 0:a.getAttribute("height"))||0,j=new URL(d,window.location.href),{pathname:o}=j,f=`${o}?width=2048&amp;format=jpeg&amp;optimize=medium`;return h.useEffect(()=>{if(i){const t=new Image;t.src=f}m(s.map(t=>{const r=`${o}?width=${t.width}&format=webply&optimize=medium`;if(i){const g=new Image;g.src=r}return{type:"image/webp",srcSet:r,media:t.media}}))},[]),e.jsx(e.Fragment,{children:e.jsx("picture",{children:l.map((t,r)=>e.jsxs(e.Fragment,{children:[e.jsx("source",{media:t.media,srcSet:t.srcSet},r),e.jsx("source",{media:t.media,type:t.type,srcSet:t.srcSet},r),r===l.length-1&&e.jsx("img",{loading:n?"lazy":"eager",alt:p,width:x,height:u,src:`${o}?width=2048&amp;format=jpeg&amp;optimize=medium`})]}))})})},_=s=>e.jsx("div",{className:"hero--container",children:e.jsx("div",{className:"hero--control",children:e.jsx("div",{className:"hero--control__main",children:e.jsx("div",{className:"invisibleMbox",id:"content-anzcomau-en-personal-navigation-anz_homepage_hero_par-start",children:e.jsx("div",{className:"herocontainer",children:e.jsx("div",{className:"hero--tabs-container","data-hero-banner":"false",children:e.jsx("div",{className:"hero--tabs-container__content","data-ratio":"25",children:e.jsx("div",{className:"hero textimage parbase",children:e.jsxs("div",{className:"hero hero--fivefourthree-logon hero--stack-columns hero--product padding-bottom--10px padding-top--10px",children:[e.jsxs("div",{className:"hero__default",children:[e.jsx("div",{className:"hero-frame",children:s.img&&e.jsx("div",{className:"focuspoint","data-focus-x":"0.241","data-focus-y":"0.048","data-image-w":"2560","data-image-h":"1000",children:e.jsx(N,{...s.img})})}),e.jsx("div",{className:"hero__breadcrumb grid",style:{width:"1164px"},children:e.jsxs("div",{className:"extra",children:[e.jsx("a",{href:"/locations/",className:"extra__link locator",style:{color:"#fff"},children:"Find ANZ"}),e.jsx("a",{href:"https://www.anz.com.au/support/",className:"extra__link contact-us",style:{color:"#fff"},children:"Support Centre"})]})})]}),e.jsx("div",{className:"hero__default hero__info",children:e.jsx("div",{className:"hero__main",children:e.jsx("div",{className:"hero__main__element ",children:e.jsxs("div",{className:"text parbase",children:[e.jsx("h1",{className:"alpha ",children:e.jsx("span",{className:"text--white",children:"Make life happen with an ANZ Personal Loan"})}),e.jsx("p",{style:{paddingTop:"10.0px"},children:"New car? Trip of a lifetime? Fairy-tale wedding? Whatever it is you’ve got your heart set on, an ANZ Personal Loan could help you get there."}),e.jsx("p",{style:{paddingTop:"10.0px"},children:e.jsx("a",{href:"/personal/personal-loans/?pid=pel-hb-td-hp-08-23-acq-pllifehappen",className:"btn btn--white",children:"Visit ANZ Personal Loans"})}),e.jsx("p",{className:"paragraph-text--small",children:e.jsx("span",{className:"text--white",children:"All credit applications are subject to ANZ’s credit assessment criteria. T&Cs, fees and charges apply."})}),e.jsx("p",{children:" "})]})})})})]})})})})})})})})});function b(s){const n=s.querySelector("picture");let i;n&&(i={pictureEl:n,preload:!0,breakpoints:[{media:"(max-width: 800px)",width:"350"},{media:"(max-width: 1140px)",width:"1150"},{media:"(max-width: 3000px)",width:"1593"},{width:"2048"}]});const c={img:i};w(s).render(e.jsx(_,{...c}))}export{b as default};
//# sourceMappingURL=hero.js.map
