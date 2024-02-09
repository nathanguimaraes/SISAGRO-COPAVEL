import{_ as d,o as c,a as n,m as o,s as u,I as m,H as p,z as f,A as b,J as r}from"./index-93a53149.js";const g={data(){return{showDownloadButton:!1,deferredPrompt:null,checkboxValue:!1}},methods:{requestLocationPermission(){navigator.geolocation?navigator.geolocation.getCurrentPosition(e=>{console.log("Latitude:",e.coords.latitude),console.log("Longitude:",e.coords.longitude)},e=>{console.error("Erro de localização:",e)}):console.error("Geolocalização não suportada no navegador.")},requestCameraPermission(){const e={video:!0};navigator.mediaDevices.getUserMedia(e).then(a=>{console.log("Câmera iniciada")}).catch(a=>{console.error("Erro de câmera:",a)})},requestPWAInstall(){this.deferredPrompt&&(this.deferredPrompt.prompt(),this.deferredPrompt.userChoice.then(e=>{console.log(e.outcome),this.deferredPrompt=null}))}},mounted(){window.addEventListener("beforeinstallprompt",e=>{e.preventDefault(),this.deferredPrompt=e,this.showDownloadButton=!0})}},l=e=>(f("data-v-a9a5fe1f"),e=e(),b(),e),h={class:"conf-page"},v=l(()=>o("div",{class:"container"},[o("h1",null,"Configurações"),o("p",{class:"text-notificacao"},[r("Olá! "),o("br"),r(" Para garantir o melhor funcionamento da nossa aplicação, precisamos solicitar o acesso à sua localização e câmera. Permitir o acesso a esses recursos nos ajudará a oferecer uma experiência personalizada e recursos avançados. "),o("br"),r(" Ao acessar sua localização, podemos fornecer informações relevantes com base na sua posição geográfica, como recomendações personalizadas, resultados próximos e serviços específicos da sua região. "),o("br"),r(" Já o acesso à câmera nos permitirá oferecer recursos visuais por meio da captura de imagens para uma melhor analise do seu relatório. "),o("br"),r(" Reforçamos que a sua privacidade é de extrema importância para nós. Todos os dados coletados serão tratados com cuidado e de acordo com as políticas de privacidade estabelecidas. Você terá controle total sobre o compartilhamento dessas informações. "),o("br"),r(" Agradecemos antecipadamente por permitir o acesso à sua localização e câmera, pois isso nos ajudará a criar uma experiência mais personalizada e rica em recursos para você. Equipe de Desenvolvimento do Sistema. "),o("br"),o("br"),r(' -Para validar a configuração em todo aplicativo é importarte marcar a opção "Memorizar esta decisão" ')])],-1)),_=l(()=>o("label",{for:"toggleBtn",class:"checkbox-label"}," Concordo com os termos de uso. ",-1)),P=["disabled"],x=["disabled"],C=["disabled"];function k(e,a,q,w,t,i){return c(),n("main",h,[v,o("div",null,[u(o("input",{type:"checkbox",id:"toggleBtn","onUpdate:modelValue":a[0]||(a[0]=s=>t.checkboxValue=s)},null,512),[[m,t.checkboxValue]]),_,o("button",{class:"location-button button-permission",disabled:!t.checkboxValue,onClick:a[1]||(a[1]=(...s)=>i.requestLocationPermission&&i.requestLocationPermission(...s))},"Permitir Localização",8,P),o("button",{class:"camera-button button-permission",disabled:!t.checkboxValue,onClick:a[2]||(a[2]=(...s)=>i.requestCameraPermission&&i.requestCameraPermission(...s))},"Permitir Câmera",8,x),t.showDownloadButton?(c(),n("button",{key:0,class:"download-button button-permission",disabled:!t.checkboxValue,onClick:a[3]||(a[3]=(...s)=>i.requestPWAInstall&&i.requestPWAInstall(...s))},"Instalar PWA",8,C)):p("",!0)])])}const V=d(g,[["render",k],["__scopeId","data-v-a9a5fe1f"]]);export{V as default};
