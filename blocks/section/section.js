import{j as e,c as r}from"../__chunks__/client.Dzuxdzeo.js";import{I as d}from"../__chunks__/image.BgjPKaC2.js";const l=n=>{var i;let t;if(n.iconPicture){const c={pictureEl:n.iconPicture,lazy:!0};t=e.jsx(d,{...c})}return e.jsxs("div",{className:"container__item container__main__element none badge",children:[t&&e.jsx("p",{className:" padding-top--0px ",children:t}),n.content&&e.jsx("div",{dangerouslySetInnerHTML:{__html:(i=n.content)==null?void 0:i.outerHTML}})]})},o=n=>{var i;const t=(i=n.button)==null?void 0:i.querySelector("a");return e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"container__item container__main__element     none",children:e.jsxs("div",{className:"text parbase",children:[n.heading&&e.jsx("div",{dangerouslySetInnerHTML:{__html:n.heading.outerHTML}}),t&&n.button&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:" padding-top--50px "}),e.jsx("a",{href:t.getAttribute("href")||"#",className:"btn btn--blue btn--transparent","aria-label":"Learn more about Cyber Security Awareness Month","data-clicktrack":"btn-hp-cyber-ser",children:n.button.textContent})]}),e.jsx("br",{}),e.jsx("br",{})]})}),n.image&&e.jsx("div",{className:"container__item container__main__element     none",children:e.jsx("div",{className:"textimage parbase",children:e.jsxs("div",{className:"image-text image-text--medium image-text--left   ",children:[e.jsx("div",{className:"clearfix"}),e.jsx("div",{className:"clearfix",children:e.jsx("div",{className:"image bg-transparent image--noborder",children:e.jsx("div",{dangerouslySetInnerHTML:{__html:n.image.outerHTML}})})})]})})})]})},m=n=>{const t=n==null?void 0:n.innerSections,i={iconPicture:t&&t[0].children[0].querySelector("picture"),content:t&&t[0].children[2]},a={heading:t&&t[1].children[0],button:t&&t[1].children[2],image:t&&t[1].children[4]};return e.jsx("div",{className:"invisibleMbox",id:"content-anzcomau-en-personal-anz_default_par-start",children:e.jsx("div",{className:"columns",children:e.jsx("div",{className:"container   container--four box--white padding-top--40px padding-bottom--0px container--three-columns",children:e.jsx("div",{className:"grid ",children:e.jsx("div",{className:"    clearfix",children:e.jsx("div",{className:"container__items container__main",children:e.jsxs("div",{className:"aem__component clearfix",children:[e.jsx(l,{...i}),e.jsx(o,{...a})]})})})})})})})},x=n=>n.content?e.jsx("div",{dangerouslySetInnerHTML:{__html:n.content.outerHTML}}):null;function _(n){var a,c;if(n.classList.contains("badge-with-card")){const s={innerSections:(a=n.firstElementChild)==null?void 0:a.querySelectorAll("div")};r(n).render(e.jsx(m,{...s}));return}const i={content:(c=n.firstElementChild)==null?void 0:c.querySelector("div")};r(n).render(e.jsx(x,{...i}))}export{_ as default};
//# sourceMappingURL=section.js.map
