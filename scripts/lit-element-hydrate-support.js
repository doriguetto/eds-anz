import{render as t}from"lit-html";import{hydrate as i}from"./lib/hydrate-lit-html.js";globalThis.litElementHydrateSupport=({LitElement:s})=>{const h=Object.getOwnPropertyDescriptor(Object.getPrototypeOf(s),"observedAttributes").get;Object.defineProperty(s,"observedAttributes",{get(){return[...h.call(this),"defer-hydration"]}});const e=s.prototype.attributeChangedCallback;s.prototype.attributeChangedCallback=function(t,i,s){"defer-hydration"===t&&null===s&&n.call(this),e.call(this,t,i,s)};const n=s.prototype.connectedCallback;s.prototype.connectedCallback=function(){this.hasAttribute("defer-hydration")||n.call(this)};const o=s.prototype.createRenderRoot;s.prototype.createRenderRoot=function(){return this.shadowRoot?(this._$AG=!0,this.shadowRoot):o.call(this)};const r=Object.getPrototypeOf(s.prototype).update;s.prototype.update=function(s){const h=this.render();if(r.call(this,s),this._$AG){this._$AG=!1;for(let t=0;t<this.attributes.length;t++){const i=this.attributes[t];if(i.name.startsWith("hydrate-internals-")){const t=i.name.slice(18);this.removeAttribute(t),this.removeAttribute(i.name)}}i(h,this.renderRoot,this.renderOptions)}else t(h,this.renderRoot,this.renderOptions)}};
//# sourceMappingURL=lit-element-hydrate-support.js.map
