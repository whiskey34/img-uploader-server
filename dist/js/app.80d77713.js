(function(){"use strict";var e={744:function(e,t,n){var o=n(963),i=n(252);function r(e,t){const n=(0,i.up)("router-view");return(0,i.wg)(),(0,i.j4)(n)}var l=n(789);const a={},s=(0,l.Z)(a,[["render",r]]);var u=s,c=n(201);function d(e,t,n,r,l,a){const s=(0,i.up)("DropzoneHome"),u=(0,i.up)("LoaDing"),c=(0,i.up)("PreView");return(0,i.wg)(),(0,i.iD)("div",{class:"home container",onDragover:t[0]||(t[0]=(0,o.iM)((()=>{}),["prevent"])),onDrop:t[1]||(t[1]=(0,o.iM)((()=>{}),["prevent"]))},["noimage"===l.statusUpload?((0,i.wg)(),(0,i.j4)(s,{key:0,onOnFileUpload:a.sendFile},null,8,["onOnFileUpload"])):(0,i.kq)("",!0),"uploading"===l.statusUpload?((0,i.wg)(),(0,i.j4)(u,{key:1})):(0,i.kq)("",!0),"success"===l.statusUpload?((0,i.wg)(),(0,i.j4)(c,{key:2,linkFile:l.linkFile},null,8,["linkFile"])):(0,i.kq)("",!0)],32)}var p=n(577),f=n.p+"img/image.3f007b47.svg";const g=e=>((0,i.dD)("data-v-f9586618"),e=e(),(0,i.Cn)(),e),v={key:0,class:"dropzone"},m=g((()=>(0,i._)("div",{class:"title"},[(0,i._)("h2",null,"Upload your image"),(0,i._)("p",{class:"text-muted"},"File should be Jpg, Png, & Jpeg...")],-1))),h=g((()=>(0,i._)("img",{src:f,alt:"",class:"d-block mx-auto rounded my-auto"},null,-1))),_={key:0,class:"text-muted text-center"},y={key:1,class:"text-muted text-center"},b=g((()=>(0,i._)("p",{class:"text-muted mb-3 text-center fw-normal fs-4"},"or",-1))),k={class:"buttonfile items-center"};function w(e,t,n,r,l,a){return l.uploading?(0,i.kq)("",!0):((0,i.wg)(),(0,i.iD)("div",v,[m,(0,i._)("div",{onDragenter:t[1]||(t[1]=(0,o.iM)(((...e)=>r.toggleActive&&r.toggleActive(...e)),["prevent"])),onDragleave:t[2]||(t[2]=(0,o.iM)(((...e)=>r.toggleActive&&r.toggleActive(...e)),["prevent"])),onDragover:t[3]||(t[3]=(0,o.iM)((()=>{}),["prevent"])),onDrop:t[4]||(t[4]=(0,o.iM)(((...e)=>a.dropFile&&a.dropFile(...e)),["prevent"])),class:(0,p.C_)([{"active-dropzone":r.active},"drag-drop"])},[h,r.active?((0,i.wg)(),(0,i.iD)("p",y,"Drop your image")):((0,i.wg)(),(0,i.iD)("p",_,"Drag your image here to upload")),(0,i._)("input",{type:"file",id:"uploadImg",name:"image",ref:"file",onChange:t[0]||(t[0]=(...t)=>e.sendfile&&e.sendfile(...t)),hidden:""},null,544)],34),b,(0,i._)("div",k,[(0,i._)("button",{class:"btn btn-primary",onClick:t[5]||(t[5]=t=>e.$refs.file.click())},"Choose a file"),(0,i._)("input",{type:"file",ref:"file",name:"open-file",onChange:t[6]||(t[6]=(...e)=>a.openFile&&a.openFile(...e)),hidden:""},null,544)])]))}var F=n(262),D={name:"DropzoneHome",data(){return{file:null,message:"",error:!1,uploading:!1,uploadedFiles:[],uploaded:!1}},methods:{chooseFiles(){this.file=this.$refs.file.click()},dropFile(e){let t=e.dataTransfer.files;t&&(this.file=t[0],this.uploadFile())},sendFile(){this.file=this.$refs.file.files[0],this.uploadFile()},openFile(){this.file=this.$refs.file.files[0],this.uploadFile()},uploadFile(){this.error=!1,this.$emit("onFileUpload",this.file)}},setup(){const e=(0,F.iH)(!1),t=()=>{e.value=!e.value};return{active:e,toggleActive:t}}};const x=(0,l.Z)(D,[["render",w],["__scopeId","data-v-f9586618"]]);var U=x;const O=e=>((0,i.dD)("data-v-7520c381"),e=e(),(0,i.Cn)(),e),j={class:"uploading"},C=O((()=>(0,i._)("h2",null,"Uploading ...",-1))),P=O((()=>(0,i._)("div",{class:"progress-bar mb-6"},null,-1))),S=[C,P];function T(e,t,n,o,r,l){return(0,i.wg)(),(0,i.iD)("div",j,S)}var M={name:"LoaDing"};const z=(0,l.Z)(M,[["render",T],["__scopeId","data-v-7520c381"]]);var A=z;const H=e=>((0,i.dD)("data-v-a1f9d9d4"),e=e(),(0,i.Cn)(),e),R={class:"preview-img"},$=H((()=>(0,i._)("div",{class:"header mb-3"},[(0,i._)("div",{class:"icon-success mb-2"},[(0,i._)("i",{class:"fa-solid fa-circle-check"})]),(0,i._)("h2",null,"Uploaded Successfully!")],-1))),I={class:"uploaded-img mb-3"},L=["src"],Z={class:"copy-url mb-3"},q={class:"input-group"},V=["href"],E=H((()=>(0,i._)("p",{class:"text-muted text-sm"},"*PS: Demo Purposes Only",-1)));function J(e,t,n,o,r,l){return(0,i.wg)(),(0,i.iD)(i.HY,null,[(0,i._)("div",R,[$,(0,i._)("div",I,[(0,i._)("img",{src:n.linkFile,alt:"",class:"rounded img-fluid"},null,8,L)]),(0,i._)("div",Z,[(0,i._)("div",q,[(0,i._)("a",{href:n.linkFile,class:"text-dark",target:"_blank",rel:"noopener noreferrer",ref:"mylink"},(0,p.zw)(n.linkFile),9,V),(0,i._)("button",{class:"btn btn-primary",onClick:t[0]||(t[0]=e=>l.copyURL())},"copy url")])])]),E],64)}var N={name:"PreView",props:["linkFile"],data(){return{uploadedFiles:[],url:""}},methods:{copyURL(){this.selectText(this.$refs.mylink),document.execCommand("copy")},selectText(e){var t;document.selection?(t=document.body.createTextRange(),t.moveToElementText(e),t.select()):window.getSelection&&(t=document.createRange(),t.selectNode(e),window.getSelection().removeAllRanges(),window.getSelection().addRange(t))}}};const Y=(0,l.Z)(N,[["render",J],["__scopeId","data-v-a1f9d9d4"]]);var B=Y,G=n(669),K=n.n(G),Q={name:"HomeView",data(){return{statusUpload:"noimage",linkFile:"",error:!1,url:""}},components:{DropzoneHome:U,LoaDing:A,PreView:B},methods:{sendFile(e){this.error=!1,this.statusUpload="uploading";let t=new FormData;t.append("file",e),K().post("https://uploader-devch-app.herokuapp.com/upload",t).then((({data:e})=>{this.linkFile=e.url,this.statusUpload="success"})).catch((()=>{this.error=!0,this.statusUpload="noimage"}))},openFile(e){this.error=!1,this.statusUpload="uploading";let t=new FormData;t.append("file",e),K().post("https://uploader-devch-app.herokuapp.com/upload",t).then((({data:e})=>{this.linkFile=e.url,this.statusUpload="success"})).catch((()=>{this.error=!0,this.statusUpload="noimage"}))}}};const W=(0,l.Z)(Q,[["render",d],["__scopeId","data-v-51ca3395"]]);var X=W;const ee=[{path:"/",name:"home",component:X}],te=(0,c.p7)({history:(0,c.PO)("/image_uploader_devchallenges/"),routes:ee});var ne=te;n(734);(0,o.ri)(u).use(ne).mount("#app")}},t={};function n(o){var i=t[o];if(void 0!==i)return i.exports;var r=t[o]={exports:{}};return e[o].call(r.exports,r,r.exports,n),r.exports}n.m=e,function(){var e=[];n.O=function(t,o,i,r){if(!o){var l=1/0;for(c=0;c<e.length;c++){o=e[c][0],i=e[c][1],r=e[c][2];for(var a=!0,s=0;s<o.length;s++)(!1&r||l>=r)&&Object.keys(n.O).every((function(e){return n.O[e](o[s])}))?o.splice(s--,1):(a=!1,r<l&&(l=r));if(a){e.splice(c--,1);var u=i();void 0!==u&&(t=u)}}return t}r=r||0;for(var c=e.length;c>0&&e[c-1][2]>r;c--)e[c]=e[c-1];e[c]=[o,i,r]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/image_uploader_devchallenges/"}(),function(){var e={143:0};n.O.j=function(t){return 0===e[t]};var t=function(t,o){var i,r,l=o[0],a=o[1],s=o[2],u=0;if(l.some((function(t){return 0!==e[t]}))){for(i in a)n.o(a,i)&&(n.m[i]=a[i]);if(s)var c=s(n)}for(t&&t(o);u<l.length;u++)r=l[u],n.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return n.O(c)},o=self["webpackChunkapp"]=self["webpackChunkapp"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=n.O(void 0,[998],(function(){return n(744)}));o=n.O(o)})();
//# sourceMappingURL=app.80d77713.js.map