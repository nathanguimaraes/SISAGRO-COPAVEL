<template>
  <head>
      
  </head>
      <main class="relatorio-page">
      
        <h1 class="tittle-siga">Sistema de Integrado de Seguradoras Agrícolas - SISAGRO</h1>
      <br>
      <section class="container">
        <header>Dados do Produtor</header>
        <form @submit.prevent="exportToPDF" action="#" class="form">
          <div class="input-box">
            <label>Nome Completo</label>
            <input 
            type="text"  
            id="Nome" 
            v-model="person.nome" 
            placeholder="Insira o Nome Completo" 
            :class="
              v$.person.nome.$error === true
                ? 'text-fields-error'
                : 'text-fields'
            "
          />
          <p
            class="text-red-500 text-xs font-thin"
            v-for="error of v$.person.nome.$errors"
            :key="error.$uid"
          >
            {{ error.$message }} 
          </p>
          </div>
  
          <div class="input-box">
            <label>CPF do Produtor</label>
            <input type="number" id="cpf"

             placeholder="Insira o CPF" 
             
            v-model="person.cpf"
            :class="
              v$.person.cpf.$error === true
                ? 'text-fields-error'
                : 'text-fields'
            "
          />
          <p
            class="text-red-500 text-xs font-thin"
            v-for="error of v$.person.cpf.$errors"
            :key="error.$uid"
          >
            {{ error.$message }}
          </p>
          </div>
  
          <div class="input-box">
            <label>Email</label>
            <input 
            type="text"
            placeholder="exemplo@email.com"
            v-model="person.email"
            :class="
              v$.person.email.$error === true
                ? 'text-fields-error'
                : 'text-fields'
            "/>
            <p
            class="text-red-500 text-xs font-thin"
            v-for="error of v$.person.email.$errors"
            :key="error.$uid"
          >
            {{ error.$message }}
          </p>
          </div>
  
          <div class="column">
            <div class="input-box">
              <label>Telefone Celular</label>
              <input type="tel" id="telefone" 
               placeholder="(XX) XXXX-XXXX" 
               name="celular" 
               v-model="person.telefone"
            :class="
              v$.person.telefone.$error === true
                ? 'text-fields-error'
                : 'text-fields'
            "
          />
          <p
            class="text-red-500 text-xs font-thin"
            v-for="error of v$.person.telefone.$errors"
            :key="error.$uid"
          >
            {{ error.$message }}
          </p>       
            </div>
            <div class="input-box">
              <label>Data de Nascimento</label>
              <input type="date" id="dtnascimento" v-model="dtnascimento" placeholder="Enter birth date" required />
            </div>
          </div>

          <div class="gender-box ">
            <h3 class="title-gender">Gênero</h3>
            <div class="gender-option">
              <div class="gender">
                <input type="radio" id="check-male"  name="gender" checked />
                <label for="check-male">Masculino</label>
              </div>
              <div class="gender">
                <input type="radio" id="check-female" name="gender" />
                <label for="check-female">Feminino</label>
              </div>
              <div class="gender">
                <input type="radio" id="check-other" name="gender" />
                <label for="check-other">Outro</label>
              </div>
              <div class="gender">
                <input type="radio" id="check-not" name="gender" />
                <label for="check-other">Prefiro não declarar</label>
              </div>
            </div>
          </div>    
        </form>
        <br>
        <header>Informações da Lavoura</header>
        <form @submit.prevent="exportToPDF" action="#" class="form">
          <div class="column">
            <div class="input-box">
                <label class="txt">Data da Vistoria</label>
                <input id="datavist" type="date" v-model="dtvistoria" placeholder="" required />
            </div>
  
            <div class="input-box">
                <label for="cultura" class="txt">Cultura:</label>
                                  <select name="Culturas" id="cultura" class="input-box cultura">
                                    <option value="soja">Soja</option>
                                      <option value="milho">Milho</option>
                                      <option value="algodao">Algodão</option>
                                      <option value="trigo">Trigo</option>
                                      <option value="arroz">Arroz</option>
                                      <option value="cafe">Café</option>
                                      <option value="cana-de-acucar">Cana-de-açúcar</option>
                                      <option value="frutas">Frutas</option>
                                      <option value="hortalicas">Hortaliças</option>
                                      <option value="legumes">Legumes</option>
                                      <option value="oleaginosas">Oleaginosas</option>
                                  </select>
            </div>
          </div>
            <div class="colunm">
            <div class="input-box">
                <label class="txt">Data Inicio do Plantio</label>
                <input id="datainiplant" v-model="dtiniplant" type="date" placeholder="" required />
            </div>

            <div class="input-box">
              <label class="txt">Data Final do Platio</label>
              <input id="datafimplant" v-model="dtfimplant" type="date" placeholder="" required />
            </div>
            
          </div>

          <div class="column">
                <div class="input-box">
                  <label for="nome" class="txt"><b>Nome da Variedade:</b></label>
                  <input id="nome" name="Nome" type="text" class="form-control" placeholder="Nome da Variedade" v-model="nomevariedade">
                </div>

                <div class="input-box">
                  <label for="estandepopulacao" class="txt"><b>Estande/População:</b></label>
                  <textarea id="estandepopulacao" name="estande_populacao" rows="4" cols="50" class="form-control" v-model="estanpopulacao"></textarea>
                </div>
          </div>

                <div class="input-box">
                  <label for="fasecultura" class="txt"><b>Fase da Cultura:</b></label>
                  <textarea id="faseCultura" name="fase_cultura" rows="4" cols="50" class="form-control" placeholder="Em qual fase a cultura se encontra" v-model="fasecultura"></textarea>
                </div>
                
                <div class="input-box">
                  <label for="tamanhoTalhao" class="txt"><b>Tamanho do talhao:</b></label>
                  <textarea id="tamanhoTalhao" name="tamanho_talhao" rows="4" cols="50" class="form-control" placeholder="Tamanho do talhao" v-model="tamanhotalhao"></textarea>
                </div>
          

          
                <div class="input-box">
                 <label for="pragas" class="txt"><b>Pragas:</b></label>
                  <textarea id="pragas" name="pragas" rows="4" cols="50" class="form-control" placeholder="Informações de pragas na lavoura" v-model="infopraga"></textarea>
                </div>
            
                <div class="input-box">
                  <label for="doencas" class="txt"><b>Doenças:</b></label>
                  <textarea id="doencas" name="doencas" rows="4" cols="50" class="form-control" placeholder="Informações de doenças na lavoura" v-model="doencas"></textarea>
            </div>
            
            <div class="input-box">
           <label for="PlantasDaninha" class="txt"><b>Plantas Daninhas:</b></label>
                          <textarea id="plantasdaninha" name="plantas_daninha" rows="4" cols="50" class="form-control" placeholder="Informações de plantas daninha na lavoura" v-model="plantdaninhas"></textarea>

                          
                       
                          <br>

                          <label for="outrasinformacoes" class="txt"><b>Outras Informações:</b></label>
                          <textarea id="outrasinformacoes" name="outras_informacoes" rows="4" cols="50" class="form-control" placeholder="Informações adicionais" v-model="outrasinfo"></textarea>

                          <br>
            </div>

             <div class="input-box address">
            <label>Endereço</label>
            <input type="text" placeholder="Insira o Endereço" required />
            <input type="text" placeholder="Complemento" required />
            <div class="column">
               <select class="select-estado">
                  <option hidden>Estado</option>
                  <option value="">Selecione um estado</option>
                  <option value="AC">Acre</option>
                  <option value="AL">Alagoas</option>
                  <option value="AP">Amapá</option>
                  <option value="AM">Amazonas</option>
                  <option value="BA">Bahia</option>
                  <option value="CE">Ceará</option>
                  <option value="DF">Distrito Federal</option>
                  <option value="ES">Espírito Santo</option>
                  <option value="GO">Goiás</option>
                  <option value="MA">Maranhão</option>
                  <option value="MT">Mato Grosso</option>
                  <option value="MS">Mato Grosso do Sul</option>
                  <option value="MG">Minas Gerais</option>
                  <option value="PA">Pará</option>
                  <option value="PB">Paraíba</option>
                  <option value="PR">Paraná</option>
                  <option value="PE">Pernambuco</option>
                  <option value="PI">Piauí</option>
                  <option value="RJ">Rio de Janeiro</option>
                  <option value="RN">Rio Grande do Norte</option>
                  <option value="RS">Rio Grande do Sul</option>
                  <option value="RO">Rondônia</option>
                  <option value="RR">Roraima</option>
                  <option value="SC">Santa Catarina</option>
                  <option value="SP">São Paulo</option>
                  <option value="SE">Sergipe</option>
                  <option value="TO">Tocantins</option>

                  
                </select>
             
              <input type="text" placeholder="Insira a Cidade" required />
            </div>
            <div class="column">
              <input type="text" placeholder="Distrito" />
              <input type="text" placeholder="CEP" required />
            </div>
          </div>
        
          
          
          <br>
          <div class="add-img-box">
            <label id="teste" for="camera" class="add-img">Adicionar Imagem</label>
          </div>

                        
         
          <div class="input-box button-down">
            
            
          <button class="clean">Limpar</button>
              
          <button class="gerarPDF" type="submit">Exportar PDF</button>
    
          <button @click="printPage()" type="button" class="save">Imprimir Tela</button>
        </div>
        
          <p class="title-map">LOCALIZAÇÃO NO MAPA</p>

          <div id="map"></div>


            
          <div id="preview" class="input-box">
              <form @submit.prevent="handleSubmit">
                  
                <div>
                    <input id="camera" capture="camera" type="file" accept="image/*"  multiple @change="handleFileUpload"  style="display: none;">
                  </div>
                  
                  <div v-for="(image, index) in images" :key="index" class="images-min">
                  
                    <div class="relatorio-fotografico">
                      <p>RELATÓRIO FOTOGRÁFICO</p>
                    </div>
                    <img :src="image.url" >
                    <p>{{ image.description }}</p>
                    <p>Data e hora atuais: {{ currentDateTime }}</p>
                    <textarea id="obs" class="form-control" style="width:100% ;" rows="4">{{image.description}}</textarea>
                  </div>
               </form>


          </div>
        </form>
      </section>

      </main>
  </template>
<script>
import jsPDF from "jspdf";
import useVuelidate from "@vuelidate/core";
import { required, numeric, email, url, helpers, maxLength, minLength} from "@vuelidate/validators";

import 'ol/ol.css';
import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import { OSM, Vector as VectorSource } from 'ol/source';
import { Vector as VectorLayer } from 'ol/layer';
import Feature from 'ol/Feature';
import Point from 'ol/geom/Point';
import { fromLonLat } from 'ol/proj';

export default {
  name: "VuelidateDemo",
  data() {
    return {
      images: [],
        description: '',
        data: '',
        latitude: '',
        longitude: '',
        dtvistoria: '',
        dtiniplant:'',
        dtfimplant:'',
        estanpopulacao:'',
        nomevariedade:'',
        fasecultura: '',
        infopraga: '',
        doencas:'',
        plantdaninhas: '',
        outrasinfo: '', 
      v$: useVuelidate(),
      person: {
        nome: null,
        last_name: null,
        other_names: null,
        age: 0,
        email: null,
        website: null,
        telefone: null,
        cpf: null,
        dtnascimento: null
      },
    };
  },
  validations() {
    return {
      person: {
        nome: {
          required: helpers.withMessage("Campo nome é obrigatorio!", required),
          $autoDirty: true,
          maxLength: maxLength(50), 
          regex: /^[a-zA-Z]+$/ 
        },
        age: { required, numeric, $autoDirty: true },
        cpf: { required: helpers.withMessage("Campo CPF é obrigatorio!", required),
              numeric: helpers.withMessage("Insira apenas numeros", required),
             $autoDirty: true },
        email: { required: helpers.withMessage("Campo email é obrigatorio!", required),
         email: helpers.withMessage("Insira um email valido!", email), $autoDirty: true },
        website: { required, url, $autoDirty: true },
        telefone: { required: helpers.withMessage("Campo telefone é obrigatorio!", required),
        numeric: helpers.withMessage("Insira apenas numeros", required),
        minLength: minLength(10),
         $autoDirty: true}
      },
    };
  },
  mounted() {
  this.getCurrentDateTime();
 
  this.initializeMap();


   },
  methods: {
    clearFields() {
      this.person = {
        nome: null,
        last_name: null,
        other_names: null,
        age: 0,
        email: null,
        website: null,
      };
    },

    exportToPDF() {

      if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;



  // Criando um novo documento PDF
  const doc = new jsPDF();

  const image2= new Image();
 

  image2.src = "src/assets/teste.png";



    // Adicione a imagem ao PDF
    
    doc.addImage(image2, 'PNG', 90, 5, 30, 30);
    
    

  // Adicionando o título da declaração
  doc.setFontSize(15);
  doc.text('RELATÓRIO DE VISTORIA E INSPEÇÃO GEOGRÁFICA AGRÍCOLA', 20, 45);
  doc.setFontSize(12);

  doc.text("- Detalhes do Relatorio:", 10, 60);
  
  // Adicionando informações do relatório agrícola ao PDF
  doc.setFontSize(12);
  doc.text(`Nome Produtor: ${this.person.nome}`, 15, 70); // Nome da pessoa responsável pelo relatório
  doc.text(`Email: ${this.person.email}`, 15, 75); // Email da pessoa responsável pelo relatório
  doc.text(`Descrição: Plantação de Milho`, 15, 80); // Descrição do relatório agrícola
  

  doc.text("- Detalhe da Inspenção:", 10, 105);

  doc.text(`Latitude: ${latitude}`, 15, 115); // Latitude da localização agrícola
  doc.text(`Longitude: ${longitude}`, 15, 120); // Longitude da localização agrícola
  doc.text(`Data da Visita: ${this.dtvistoria}`, 15, 125); // Data da visita ao local
  doc.text(`Estanpopulação: ${this.estanpopulacao}`, 15, 130); // Dados sobre a densidade populacional de plantas
  doc.text(`Nome Variedade: ${this.nomevariedade}`, 15, 135); // Nome da variedade de plantas cultivadas
  doc.text(`Fase da Cultura: ${this.fasecultura}`, 15, 140); // Fase de crescimento das plantas
  doc.text(`Informação sobre Praga: ${this.infopraga}`, 15, 145); // Informações sobre pragas
  doc.text(`Doenças: ${this.doencas}`, 15, 150); // Informações sobre doenças das plantas
  doc.text(`Plantas Daninhas: ${this.plantdaninhas}`, 15, 155); // Informações sobre plantas daninhas
  doc.text(`Outras Informações: ${this.outrasinfo}`, 15, 160); // Outras informações relevantes

  doc.text("- Periodo de Plantio:", 10, 170);

  doc.text(`Data Início Plantio: ${this.dtiniplant}`, 15, 175); // Data de início do plantio
  doc.text(`Data Fim Plantio: ${this.dtfimplant}`, 16, 180); // Data de término do plantio

  
  // Assinatura e data da declaração
  
  doc.text('_________________________________', 70, 200);

// Adicionando uma linha de assinatura abaixo das informações
doc.text('Assinatura do Produtor', 85, 205);
doc.text(`Email: ${this.person.email}`, 85, 210);

  doc.addPage();

  doc.setFontSize(15);
  doc.text('RELATÓRIO FOTOGRÁFICO', 65, 20);

  // Adicionando a imagem ao PDF, se estiver disponível
  if (this.selectedImage) {
    const imgHeight = 100;
    const imgWidth = 100;
    doc.addImage(this.selectedImage, "JPEG", 50, 30, imgWidth, imgHeight);
  }

  doc.text(`Latitude: ${latitude}`, 50, 135); // Latitude da localização agrícola
  doc.text(`Longitude: ${longitude}`, 50, 140); // Longitude da localização agrícola
  doc.text(`Descrição: `, 50, 145); // Descrição do relatório agrícola


  // Salvando o PDF com o nome "Declaração_Vistoria_Inspecao_Agricola.pdf"
  doc.save("Declaração_Vistoria_Inspecao_Agricola.pdf");
});
  } else {
    // Caso o navegador não suporte geolocalização, trate esse cenário aqui
    console.error('Geolocalização não é suportada pelo seu navegador.');
    // Aqui você pode decidir como lidar com essa situação, por exemplo, mostrando uma mensagem de erro ao usuário.
  }
},


    printPage() {
     
      window.print();
    },

    submit() {
      this.v$.$touch();
    },

    getCurrentDateTime() {
    const today = new Date();
    const date = today.getDate()+'-'+(today.getMonth()+1)+'-'+today.getFullYear();
    const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    this.currentDateTime = date+' '+time;
    
    },
    initializeMap() {
      if ('geolocation' in navigator) {
        navigator.geolocation.getCurrentPosition((position) => {
          const { latitude, longitude } = position.coords;
          const userLocation = fromLonLat([longitude, latitude]);

          // Criar um marcador para a localização do usuário
          const userMarker = new Feature({
            geometry: new Point(userLocation),
          });

          // Criar uma camada de vetor para o marcador do usuário
          const vectorSource = new VectorSource({
            features: [userMarker],
          });

          const vectorLayer = new VectorLayer({
            source: vectorSource,
          });

          // Inicializar o mapa com camada de mapa base e camada de vetor para o marcador
          const map = new Map({
            target: 'map',
            layers: [
              new TileLayer({
                source: new OSM(),
              }),
              vectorLayer,
            ],
            view: new View({
              center: userLocation,
              zoom: 10,
            }),
          });
        }, (error) => {
          console.error('Error getting geolocation:', error);
        });
       } else {
        console.error('Geolocation is not supported by your browser');
      }
    },

    handleFileUpload(event) {
    const file = event.target.files[0];
      const reader = new FileReader();

      reader.onloadend = () => {
        this.selectedImage = reader.result;
      };

      if (file) {
        reader.readAsDataURL(file);
      }

        const files = event.target.files;
        for (let i = 0; i < files.length; i++) {
          const file = files[i]; // vetor de imagens dentro do laço de repeticao
          const reader = new FileReader();  //lendo novo arquivo
          reader.onload = () => {   
            this.images.push({              //imprimindo na tela imagem
              url: reader.result,
              description: this.description,
              location: {
                latitude: this.latitude,
                longitude: this.longitude,
                currentDateTime: this.currentDateTime    
              },
            });
          };
          reader.readAsDataURL(file);
        }
      },
      handleSubmit() {
        
        // como limpar o formulário
        this.description = '';
        this.latitude = '';
        this.longitude = '';
      },

  },
};
</script>

<style scoped>


@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');
  
  input::-webkit-outer-spin-button,         
  input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
  }

  .tittle-siga{
    color: var(--font-color);
    font-weight: 600;
  }
  
  input[type=number] {
  -moz-appearance: textfield;
  }
  
  
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Poppins', sans-serif;
        text-align: center;
        font-weight: normal;
      
     
        
        
        }
  
  
        /* Map */
        .title-map{
          margin-top: 20%;
          font-size: medium;
          color: var(--font-color);

        }
  
        #map { 
          margin-top: 5%;
                height: 400px; 
                width: 100%;
                z-index: 1;
        }
  
     /*Preview Image*/
     .relatorio-fotografico p{
      font-size: 30px;
     }
    .relatorio-fotografico{
      margin-top: 10%;
    }
    
     #preview img{
      width: 100%;
      height: 400px;
      z-index: 1;
      position: relative;
    }
    #description-img-text{
      width: 70%;
      height: 100px;
      resize: vertical;
    }
    .images-min{
      width: 100%;
      height: 200px;
      position: relative;
      display: inline-table;
      margin-top: 1%;
    }
    .container {
      position: relative;
      max-width: 95%;
      width: 75%;
      background:var(--box-color);
      padding: 40px;
      border-radius: 8px;
      box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
      margin: 2.5% auto auto auto;
    }
    .container header {
      font-size: 1.5rem;
      color: #333;
      font-weight: 500;
      text-align: center;
    }
    .container .form {
      margin-top: 30px;
    }
    .form .input-box {
      width: 100%;
      margin-top: 8px;
    }
    .input-box label {
      color: var(--font-color);
    }
  
    .form :where(.input-box input, .select-box, .select-estado, .cultura, .form-control) {
      position: relative;
      height: 50px;
      width: 100%;
      outline: none;
      font-size: 1rem;
      color: #000000;
      margin-top: 8px;
      border: 1px solid #040404;
      border-radius: 6px;
      padding: 0 15px;
      resize: vertical;
    }
.text-fields {
    color: #424242;
}

.text-fields-error {
border-color: brown;
color: brown;
}



    .error-color{
      color: red;
    }
    .error{
      border-color: 1px solid red;
    }
    .input-box input:focus {
      box-shadow: 0 1px 0 rgba(0, 0, 0, 0.1);
    }
    .button-down{
      position: relative;
    }
    
    .form .column {
      display: flex;
      column-gap: 30px;
    }
    .title-gender{
      color: var(--font-color);
    }
    .form .gender-box {
      margin-top: 20px;
    }
  
    .form :where(.gender-option, .gender) {
      display: flex;
      align-items: center;
      column-gap: 16%;
      flex-wrap: wrap;
      color: var(--font-color);
    }
    .form .gender {
      column-gap: 5px;
    }
  
    .form :where(.gender input, .gender label) {
      cursor: pointer;
    }
  
  
  
    .form button {
      height: 55px;
      width: 35%;
      
      font-size: 1rem;
      font-weight: 600;
      margin-top: 30px;
      border: none;
      cursor: pointer;
      transition: all 0.2s ease;
      border-radius: 10px;

    }
  
    .add-img-box{
      height: 35px;
      width: 50%;
      
      font-size: 20px;
  
      margin-left: 26%;
      border: none;
      cursor: pointer;
      transition: all 0.2s ease;
      border-radius: 10px;
     
  
    }
    #teste{
      margin-left: 0%;
      font-weight: 500;
  
    }
  
  
    .form button.clean {
      color: #000000;
      background: #D3D3D3;
      width: 30%;
      
    }
    .form button.gerarPDF {
      color: #000000;
      background: #98FB98;
      width: 60%;
      margin-left: 5%;

    }
  
    .add-img-box{
      background: #ADD8E6;
      color: #000000;
      font-weight: 600;
    }
    .add-img-box:hover {
      background: #d6c100;
    
      color: #000000;
    }
  
    .form button.save {
      margin-left: 5%;
      background: #ecdc5c;
      
    }
    .form button.clean:hover {
      background: #d60700;

    }
    /*Responsive*/
    @media screen and (max-width: 900px) {
      .form .column {
        flex-wrap: wrap;
      }
      .form :where(.gender-option, .gender) {
        row-gap: 15px;
      }
    }
  
    @media screen and (max-width: 604px) {
      .add-img-box{
        height: 30px;
        font-size: 15px;
  
      }
     
      @media screen and (max-width: 479px) {
      .add-img-box{
        height: 60px;
        font-size: 15px;
  
      } 
    }
  
  
    }
    
    
    
    
    </style>