import{_ as d,c,j as r,ai as s,aj as l,o as g,p as u,l as f}from"./framework.BfpcyO4v.js";var _={BASE_URL:"/cropperjs/v2/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{BASE_URL:v}=_,F={name:"CropperImageExample",data(){return{src:`${v}picture.jpg`,imageFit:"contain"}},methods:{onCropperImageTransform(a){const o=this.$refs.cropperCanvas;if(!o||this.imageFit==="none")return;const m=this.$refs.cropperImage,i=o.getBoundingClientRect(),t=m.cloneNode();t.style.transform=`matrix(${a.detail.matrix.join(", ")})`,t.style.opacity="0",o.appendChild(t);const e=t.getBoundingClientRect();o.removeChild(t),(this.imageFit==="contain"&&(e.top>i.top&&e.right<i.right||e.right<i.right&&e.bottom<i.bottom||e.bottom<i.bottom&&e.left>i.left||e.left>i.left&&e.top>i.top)||this.imageFit==="cover"&&(e.top>i.top||e.right<i.right||e.bottom<i.bottom||e.left>i.left))&&a.preventDefault()}}},p=a=>(u("data-v-0031ea6c"),a=a(),f(),a),I={class:"cropper-container"},h=p(()=>r("legend",null,"Image Fit:",-1)),C=p(()=>r("label",{for:"inputImageFitContain"},"contain",-1)),b=p(()=>r("label",{for:"inputImageFitCover"},"cover",-1)),R=p(()=>r("label",{for:"inputImageFitNone"},"none",-1)),x=["src"],y=p(()=>r("cropper-handle",{action:"move",plain:""},null,-1));function B(a,o,m,i,t,e){return g(),c("div",I,[r("form",null,[r("fieldset",null,[h,s(r("input",{id:"inputImageFitContain","onUpdate:modelValue":o[0]||(o[0]=n=>t.imageFit=n),type:"radio",name:"imageFit",value:"contain"},null,512),[[l,t.imageFit]]),C,s(r("input",{id:"inputImageFitCover","onUpdate:modelValue":o[1]||(o[1]=n=>t.imageFit=n),type:"radio",name:"imageFit",value:"cover"},null,512),[[l,t.imageFit]]),b,s(r("input",{id:"inputImageFitNone","onUpdate:modelValue":o[2]||(o[2]=n=>t.imageFit=n),type:"radio",name:"imageFit",value:"none"},null,512),[[l,t.imageFit]]),R])]),(g(),c("cropper-canvas",{ref:"cropperCanvas",key:t.imageFit,background:""},[r("cropper-image",{ref:"cropperImage",src:t.src,alt:"Picture",rotatable:"",scalable:"",skewable:"",translatable:"",onTransform:o[3]||(o[3]=(...n)=>e.onCropperImageTransform&&e.onCropperImageTransform(...n))},null,40,x),y]))])}const S=d(F,[["render",B],["__scopeId","data-v-0031ea6c"]]);export{S as default};
