<template>
    <div class="container">
        <h1>Documentações de Seguradoras Unificadas</h1>
      <select class="selecao" v-model="selectedBank" @change="openDocumentation">
        <option value="" disabled selected>Escolha a instituição seguradora</option>
        <option value="banco-do-brasil">Banco do Brasil</option>
        <option value="seguro-agricola-flex-banco-do-brasil">Seguro Agrícola Flex - Banco do Brasil</option>
        <option value="allianz">Allianz Corretora</option>
        <option value="itau">Itaú</option>
        <option value="bradesco">Bradesco</option>
        <option value="mapfre">MAPFRE</option>
        <option value="sompo-seguros">Sompo Seguros</option>
        <option value="porto-seguro">Porto Seguro</option>
        <option value="aig">AIG Ambiental</option>
        <option value="credicoamo">Credicoamo</option>
        <option value="seguragro">Seguragro</option>
        <option value="tokio-marine-seguradora">Tokio Marine Seguradora</option>
        <option value="swiss-re"> Swiss Re  Corporate Solutions</option>

        

        <!-- Adicione outras opções conforme necessário -->
      </select>
      <br>
      <a v-if="selectedBank" :href="getDocumentationLink(selectedBank)" target="_blank">Documentação {{ selectedBank }}</a>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        selectedBank: ''
      };
    },
    methods: {
      openDocumentation() {
        // Implemente aqui a lógica caso queira executar alguma ação ao selecionar uma instituição
      },
      getDocumentationLink(bank) {
        // Aqui você pode definir os links para a documentação de cada instituição financeira
        const documentationLinks = {
          'allianz': 'https://www.allianz.com.br/seguros/veja-outros-seguros/agronegocio/agricola.html#',
          'banco-do-brasil': 'https://www.bbseguros.com.br/seguros/ajuda/documentos/condicoes-gerais-rural',
          'seguro-agricola-flex-banco-do-brasil': 'https://rural.aliancadobrasil.com.br/index.html', 
          'itau': 'https://www.itau.com.br/',
          'bradesco': 'https://www.bradesco.com.br/',
          'mapfre': 'https://www.mapfre.com.br/para-seus-negocios/agronegocios/',
          'sompo-seguros': 'https://sompo.com.br/produto/sompo-agro/',
          'porto-seguro': 'https://www.portoseguro.com.br/seguro-para-agronegocios',
          'aig': 'https://www.aig.com.br/home/seguros/ambiental',
          'credicoamo': 'https://www.credicoamo.com.br/seguro_agricola',
          'seguragro': 'https://www.seguragro.com.br/servicos',
          'tokio-marine-seguradora': 'https://www.tokiomarine.com.br/seguros/seguro-agro-safras/',
          'swiss-re': 'https://corporatesolutions.swissre.com/brasil-seguros/nossas-solucoes/agro/seguros-agricolas.html',
          // Adicione outros links conforme necessário
        };
        return documentationLinks[bank] || '#'; // Retorna '#' se o banco não tiver link definido
      }
    }
  };
  </script>
  
  <style scoped>
  /* Estilos específicos para este componente */


  
.selecao {
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border-radius: 5px;
  border: 1px solid #ccc;
}

.documentation-link {
  display: block;
  margin-top: 10px;
  font-size: 16px;
  text-decoration: none;
  color: #007bff; /* Cor azul para o link */
}

@media (max-width: 768px) {
  .container {
    padding: 10px;
  }

  .select-bank {
    font-size: 14px;
  }

  .documentation-link {
    font-size: 14px;
  }
}
  </style>
  