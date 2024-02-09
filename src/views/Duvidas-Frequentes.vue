<template>
    <div class="container">
      <details v-for="question in questions" :key="question.number" @click="toggleDetail(question.number)">
        <summary>{{ question.title }}</summary>
        <p v-show="showDetail[question.number]">{{ question.answer }}</p>
      </details>
      <br>
      <br>
      <h3>Guia de Acesso aos Programas de Subvenção: Paraná e Governo Federal</h3>
    <p>Para informações mais detalhadas, clique abaixo e acesse os sites específicos dos programas:</p>
    <ul>
        <li><a href="https://www.legisweb.com.br/legislacao/?id=257074">Governo Estadual do Paraná</a></li>
        <li><a href="https://www.gov.br/agricultura/pt-br/assuntos/riscos-seguro/seguro-rural/limites-percentuais-de-subvencao">Governo Federal</a></li>
        <li><a href="http://www.susep.gov.br/download/menubiblioteca/SegAgricCondGerais.pdf">SUSEP - Superintendência de Seguros Privados</a></li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        showDetail: {
          1: false,
          2: false,
          3: false,
          4: false,
          5: false,
          6: false,
          7: false,
        },
        questions: [
          {
            number: 1,
            title: 'O que é Seguro Agrícola?',
            answer: 'Seguro é um contrato pelo qual uma das partes (seguradora) se obriga a indenizar a outra (segurado) em caso de ocorrência de determinado evento nele previsto. O custo do seguro: O contrato se efetiva mediante o pagamento do custo do seguro, que chamamos de “prêmio de seguro”. O evento climático adverso: Em havendo evento climático previsto no contrato de seguro, chamamos de “sinistro”.  Este sinistro deverá ser regulado na presença do segurado e/ou representante nomeado. A indenização: Uma vez avaliado no campo as consequências do evento sobre a plantação e a perda for confirmada pelos peritos e o segurado e/ou seu representante, será calculada e paga a indenização. O Seguro Agrícola, além de ser um importante instrumento de política agrícola, que permite ao produtor rural proteger-se contra perdas decorrentes de fenômenos climáticos adversos, é também uma garantia que seu investimento estará protegido.',
          },
          {
            number: 2,
            title: 'Como contratar o seguro agrícola?',
            answer: 'A contratação acontece por meio de corretoras de seguros parceiras e especializadas.',
          },
          {
            number: 3,
            title: 'É possível fazer seguro agrícola em áreas arrendadas?',
            answer: 'Sim, sem restrição quanto a isso.',
          },
          {
            number: 4,
            title: 'Em caso de sinistro, quais os procedimentos?',
            answer: 'Nesse caso, o segurado deverá imediatamente comunicar o sinistro ocorrido ao seu corretor, informando a data do sinistro e o(s) evento(s) climático(s), desde que coberto(s) pelo seguro. O corretor, por sua vez, dará prosseguimento aos trâmites necessários do contrato de seguro.',
          },
          {
            number: 5,
            title: 'Em havendo indenização, em quanto tempo a seguradora deverá efetuar o pagamento?',
            answer: 'A seguradora terá um prazo máximo de 30 dias para pagamento da indenização, contados a partir da entrega dos documentos básicos descritos nas condições gerais do seguro.',
          },
          {
            number: 6,
            title: 'Existe algum tipo de subvenção para o pagamento do prêmio do seguro agrícola?',
            answer: 'Sim, existe subvenção federal, bem como alguns estados e municípios oferecem este benefício. – Através do Programa de Subvenção do Prêmio do Seguro Rural (PSR), o produtor rural poderá receber ajuda do Governo Federal para pagar o prêmio da apólice do seguro agrícola. O governo federal subsidia parte do valor do prêmio pago pelo segurado, a qual pode variar entre 35% e 45% do prêmio, conforme a modalidade do seguro e a cultura. – Existem alguns estados e municípios que ajudam o produtor rural com parte do valor pago pelo segurado.',
          },
          
        ],
      };
    },
    methods: {
      toggleDetail(questionNumber) {
        this.showDetail[questionNumber] = !this.showDetail[questionNumber];
      },
    },
  };
  </script>
  
  <style>
  .faq-container {
    max-width: 600px;
    margin: 0 auto;
  }
  
  details {
    margin-bottom: 20px;
  }
  
  summary {
    font-weight: bold;
    cursor: pointer;
  }
  
  p {
    margin-top: 10px;
  }
  </style>
  