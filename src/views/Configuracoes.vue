<template>
  <main class="conf-page">

    <div class="container">
      <h1>Configurações</h1>
      <p class="text-notificacao">Olá! 
        <br>
        Para garantir o melhor funcionamento da nossa aplicação, precisamos solicitar o acesso à sua localização e câmera. Permitir o acesso a esses recursos nos ajudará a oferecer uma experiência personalizada e recursos avançados.

        <br>
Ao acessar sua localização, podemos fornecer informações relevantes com base na sua posição geográfica, como recomendações personalizadas, resultados próximos e serviços específicos da sua região.
        <br>
Já o acesso à câmera nos permitirá oferecer recursos visuais por meio da captura de imagens para uma melhor analise do seu relatório.

        <br>
Reforçamos que a sua privacidade é de extrema importância para nós. Todos os dados coletados serão tratados com cuidado e de acordo com as políticas de privacidade estabelecidas. Você terá controle total sobre o compartilhamento dessas informações.
        <br>
Agradecemos antecipadamente por permitir o acesso à sua localização e câmera, pois isso nos ajudará a criar uma experiência mais personalizada e rica em recursos para você.
Equipe de Desenvolvimento do Sistema.
        <br>
        <br>
-Para validar a configuração em todo aplicativo é importarte marcar a opção "Memorizar esta decisão" 
</p>
</div>
       <div>
        <input type="checkbox" id="toggleBtn" v-model="checkboxValue" />
  <label for="toggleBtn" class="checkbox-label"> Concordo com os termos de uso. </label>
  
        <button class="location-button button-permission" :disabled="!checkboxValue" @click="requestLocationPermission" >Permitir Localização</button>
        <button class="camera-button button-permission" :disabled="!checkboxValue" @click="requestCameraPermission">Permitir Câmera</button>
        <button class="download-button button-permission" :disabled="!checkboxValue" v-if="showDownloadButton" @click="requestPWAInstall" >Instalar PWA</button>
      
      </div>




    </main>
</template>
<script>
export default {
data() {
  return {
    showDownloadButton: false,
    deferredPrompt: null,
    checkboxValue: false
  };
},
methods: {
  requestLocationPermission() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          // Faça algo com a posição obtida
          console.log('Latitude:', position.coords.latitude);
          console.log('Longitude:', position.coords.longitude);
        },
        (error) => {
          // Lida com erros de permissão ou falhas na obtenção da localização
          console.error('Erro de localização:', error);
        }
      );
    } else {
      console.error('Geolocalização não suportada no navegador.');
    }
  },
  requestCameraPermission() {
    const constraints = { video: true };

    navigator.mediaDevices
      .getUserMedia(constraints)
      .then((stream) => {
        // A câmera foi iniciada com sucesso
        console.log('Câmera iniciada');

        // Use o objeto stream para exibir o vídeo em uma tag <video> ou fazer qualquer outra manipulação necessária
      })
      .catch((error) => {
        // Lida com erros de permissão ou falhas na inicialização da câmera
        console.error('Erro de câmera:', error);
      });
  },
  requestPWAInstall() {
    if (this.deferredPrompt) {
      this.deferredPrompt.prompt();
      this.deferredPrompt.userChoice.then((choiceResult) => {
        // Registra a escolha do usuário
        console.log(choiceResult.outcome);

        // Limpa a referência ao prompt de instalação
        this.deferredPrompt = null;
      });
    }
  }
},
mounted() {
  window.addEventListener('beforeinstallprompt', (event) => {
    // Previne o comportamento padrão do evento
    event.preventDefault();

    // Armazena o evento para uso posterior
    this.deferredPrompt = event;

    // Exibe o botão de download
    this.showDownloadButton = true;
  });
},
};
</script>

<style scoped>
*{
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: 'Poppins', sans-serif;
      text-align: center;
      color: var(--font-color);
      
      
      }

.button-permission:disabled {
background-color: #ccc;
cursor: not-allowed;
}    


.location-button {
background-color: #4CAF50;
border-radius: 5px;
border: none;
color: white;
padding: 10px 20px;
text-align: center;
text-decoration: none;
display: inline-block;
font-size: 16px;
margin: 10px;
cursor: pointer;
}

.camera-button {
background-color: #ffbb00;
border-radius: 4px;
border: none;
color: white;
padding: 10px 20px;
text-align: center;
text-decoration: none;
display: inline-block;
font-size: 16px;
margin: 10px;
cursor: pointer;
}
.download-button {
background-color: #ecd712;
border: none;
color: white;
padding: 10px 20px;
text-align: center;
text-decoration: none;
display: inline-block;
font-size: 16px;
margin: 10px;
cursor: pointer;
}

  .container {
    position: relative;
    max-width: 700px;
    width: 100%;
    background:var(--box-color);
    padding: 40px;
    border-radius: 8px;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
    margin: 2% auto auto auto;
  }
  .container header {
    font-size: 1.5rem;
    color: #333;
    font-weight: 500;
    text-align: center;
  }
  .text-notificacao{
      text-align: left;
  }
  .checkbox-label{
    color: #cc0909;
  }

  </style>