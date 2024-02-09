<template>
    <main class="conf-page">
  
      <div class="container">
        <h1>Assinatura Eletrônica</h1>
        <p class="text-notificacao">- Recomendações 
          <br>
          A assinatura eletrônica permite que você assine um documento em meio digital a partir da sua conta gov.br. O documento com a assinatura digital tem a mesma validade de um documento com assinatura física e é regulamentado pelo Decreto nº 10.543, de 13/11/2020 (alterado pelo Decreto nº 10.900/2021).
  
          <br>
  
          Para utilizar este serviço, você precisa ter uma conta gov.br nível prata ou ouro.
  </p>
  </div>
         <div>
            <a href="https://www.gov.br/governodigital/pt-br/assinatura-eletronica" class="botao-amarelo">Acessar Gov</a>
        
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
        .botao-amarelo {
            display: inline-block;
            padding: 10px 20px;
            margin-top: 5%;
            background-color: #FB0;
            color: black;
            text-decoration: none;
            border: none;
            border-radius: 5px;
            font-size: 16px;
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

    </style>