import{_ as r,o as i,a as c,m as e,H as d}from"./index-93a53149.js";const l={data(){return{video:null,videoStream:null,canvas:null,context:null,imageData:null}},mounted(){this.video=this.$refs.video,this.canvas=this.$refs.canvas,this.context=this.canvas.getContext("2d"),navigator.mediaDevices.getUserMedia({video:!0}).then(t=>{this.videoStream=t,this.video.srcObject=t}).catch(t=>{console.log(t)})},methods:{captureImage(){this.canvas.height=this.video.videoHeight,this.canvas.width=this.video.videoWidth,this.context.drawImage(this.video,0,0),this.imageData=this.canvas.toDataURL()}}},h={class:"container"},v=e("div",{class:"title-photos"},[e("p",null,"Tire suas Fotografias")],-1),m=["srcObject"],u={class:"preview-img"},g=["href"],_={ref:"canvas",class:"pre-img"};function p(t,a,f,x,s,o){return i(),c("section",h,[v,e("video",{ref:"video",srcObject:s.videoStream,autoplay:"",class:"display-video"},null,8,m),e("button",{onClick:a[0]||(a[0]=(...n)=>o.captureImage&&o.captureImage(...n)),class:"capture-img"},"Tirar Foto"),e("div",u,[s.imageData?(i(),c("a",{key:0,href:s.imageData,download:"foto.png",class:"link-img"}," Fazer download ",8,g)):d("",!0),e("canvas",_,null,512)])])}const k=r(l,[["render",p]]);export{k as default};
