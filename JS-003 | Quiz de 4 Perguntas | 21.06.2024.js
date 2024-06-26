// 3) Desenvolver a lógica de perguntas / respostas / pontuação para um mini-quiz utilizando a estrutura condicional SWITCH / CASE. O quiz contém 4 perguntas com 4 respostas cada (conforme abaixo). Todas as respostas possuem uma pontuação específica. Realizar o cálculo da pontuação e mostrar ao final.

// 1) Quais séries a seguir englobam melhor a temática de vampiros e assombração?

// A) Van Helsing (2 pontos)
// B) Castlevania (3 pontos)
// C) The Vampire Diaries (2 pontos)
// D) Blade: The Series (1 ponto)

// 2) Dentre os livros abaixo, quais incluem melhor a temática de fantasia?

// A) Alice no País das Maravilhas (1 ponto)
// B) O Hobbit (1 ponto)
// C) A Fantástica Fábrica de Chocolates (1 ponto)
// D) Coraline (2 pontos)

// 3) Quais das franquias listadas, representam melhor a empresa de jogos Nintendo?

// A) The Legend of Zelda (3 pontos)
// B) Kirby (2 pontos)
// C) Metroid (3 pontos)
// D) Super Mario Bros (2 pontos)

// 4) Quais dos autores citados, representam melhor o gênero de livros de terror?

// A) Stephen King (2 pontos)
// B) Edgar Allan Poe (2 pontos)
// C) H.P. Lovecraft (2 pontos)
// D) Mary Shelley (1 ponto)

// Critérios de avaliação:

// (0,5) Criar uma tela (janela) inicial de boas vindas, explicando o quiz.
// (1,0) Validar para que respostas digitadas com letra minúscula (a, b, c, d) também somem os pontos.
// (1,0) Incluir uma validação para opções diferentes das alternativas, avisando a soma de 0 pontos.
// (0,5) Mostrar na tela ao final, quais foram as opções / respostas escolhidas em cada pergunta.
// (1,0) Mostrar os pontos ao final. Se conseguir pontuação máxima (10 pontos), incluir além da pontuação, uma mensagem "Parabéns!"

let resposta_da_pergunta_um;
let resposta_da_pergunta_dois;
let resposta_da_pergunta_tres;
let resposta_da_pergunta_quatro;
const alternativa_um = `A`;
const van_helsing_ponto = 2;
const castelvania_ponto = 3;
const the_vampire_diares_ponto = 2;
const blades_ponto = 1;
const alternativa_dois = `B`;
const alice_pais_das_maravilhas_ponto = 1;
const o_hobbit_ponto = 1;
const a_fantasia_da_fabrica_de_chocolate = 1;
const coraline_ponto = 2;
const alternativa_tres = `C`;
const the_legend_of_zelda_ponto = 3;
const kirby_ponto = 2;
const metroid_ponto = 3;
const super_mario_bros_ponto = 2;
const alternativa_quatro = `D`;
const stephan_king_ponto = 2;
const edgar_allan_poe = 2;
const h_p_lovecraft_ponto = 2;
const mary_shelley_ponto = 1;
let somatoria_de_pontos = 0;
const nota_maxima = 10;

alert(`Seja bem-vindo(a) ao quiz! O quiz consiste em 4 perguntas, contendo alternativas:\nA)\nB)\nC)\nD)\n Você deve assinalar uma das 4 alternativas, no final será mostrado a pontuação tirada!`);

resposta_da_pergunta_um = prompt(`
1) Quais séries a seguir englobam melhor a temática de vampiros e assombração?

\n A) Van Helsing (2 pontos)\n
 B) Castlevania (3 pontos)\n
 C) The Vampire Diaries (2 pontos)\n
 D) Blade: The Series (1 ponto)
`);
resposta_da_pergunta_dois = prompt(`
2) Dentre os livros abaixo, quais incluem melhor a temática de fantasia?

\n A) Alice no País das Maravilhas (1 ponto)\n
 B) O Hobbit (1 ponto)\n
 C) A Fantástica Fábrica de Chocolates (1 ponto)\n
 D) Coraline (2 pontos)\n
`);

resposta_da_pergunta_tres = prompt(`
 3) Quais das franquias listadas, representam melhor a empresa de jogos Nintendo?

\n A) The Legend of Zelda (3 pontos)\n
 B) Kirby (2 pontos)\n
 C) Metroid (3 pontos)\n
 D) Super Mario Bros (2 pontos)\n
`);

resposta_da_pergunta_quatro = prompt(`
 4) Quais dos autores citados, representam melhor o gênero de livros de terror?

 \nA) Stephen King (2 pontos)\n
 B) Edgar Allan Poe (2 pontos)\n
 C) H.P. Lovecraft (2 pontos)\n
 D) Mary Shelley (1 ponto)\n
`);

switch(true){

  case resposta_da_pergunta_um.toUpperCase() == alternativa_um: 
    somatoria_de_pontos = somatoria_de_pontos + van_helsing_ponto;
    break;
  case resposta_da_pergunta_um.toUpperCase() == alternativa_dois:
    somatoria_de_pontos = somatoria_de_pontos + castelvania_ponto;
    break;
  case resposta_da_pergunta_um.toUpperCase() == alternativa_tres:
    somatoria_de_pontos = somatoria_de_pontos + the_vampire_diares_ponto;
    break;
  case resposta_da_pergunta_um.toUpperCase() == alternativa_quatro:
    somatoria_de_pontos = somatoria_de_pontos + blades_ponto;
    break;
};

switch(true){
    case resposta_da_pergunta_dois.toUpperCase() == alternativa_um:
        somatoria_de_pontos = somatoria_de_pontos + alice_pais_das_maravilhas_ponto;
        break;
    case resposta_da_pergunta_dois.toUpperCase() == alternativa_dois:
        somatoria_de_pontos = somatoria_de_pontos + o_hobbit_ponto;
        break;
    case resposta_da_pergunta_dois.toUpperCase() == alternativa_tres:
        somatoria_de_pontos = somatoria_de_pontos + a_fantasia_da_fabrica_de_chocolate;
        break;
    case resposta_da_pergunta_dois.toUpperCase() == alternativa_quatro:
        somatoria_de_pontos = somatoria_de_pontos + coraline_ponto;
        break;
};

switch(true){
    case resposta_da_pergunta_tres.toUpperCase() == alternativa_um:
        somatoria_de_pontos = somatoria_de_pontos + the_legend_of_zelda_ponto;
        break;
    case resposta_da_pergunta_tres.toUpperCase() == alternativa_dois:
        somatoria_de_pontos = somatoria_de_pontos + kirby_ponto;
        break;
    case resposta_da_pergunta_tres.toUpperCase() == alternativa_tres:
        somatoria_de_pontos = somatoria_de_pontos + metroid_ponto;
        break;
    case resposta_da_pergunta_tres.toUpperCase() == alternativa_quatro:
        somatoria_de_pontos = somatoria_de_pontos + super_mario_bros_ponto;
        break;
};

switch(true){
    case resposta_da_pergunta_quatro.toUpperCase() == alternativa_um:
        somatoria_de_pontos = somatoria_de_pontos + stephan_king_ponto;
        break;
    case resposta_da_pergunta_quatro.toUpperCase() == alternativa_dois:
        somatoria_de_pontos = somatoria_de_pontos + edgar_allan_poe;
        break;
    case resposta_da_pergunta_quatro.toUpperCase() == alternativa_tres:
        somatoria_de_pontos = somatoria_de_pontos + h_p_lovecraft_ponto;
        break;
    case resposta_da_pergunta_quatro.toUpperCase() == alternativa_quatro:
        somatoria_de_pontos = somatoria_de_pontos + mary_shelley_ponto;
        break;
};


switch(true){

    case resposta_da_pergunta_um.toUpperCase() != alternativa_um && resposta_da_pergunta_um.toUpperCase() != alternativa_dois && resposta_da_pergunta_um.toUpperCase() != alternativa_tres && resposta_da_pergunta_um.toUpperCase() != alternativa_quatro:
    alert(`Na primeria questão a letra não é uma das 4 opções listadas, portanto a questão valerá 0.`);
    break;

    case resposta_da_pergunta_dois.toUpperCase() != alternativa_um && resposta_da_pergunta_dois.toUpperCase() != alternativa_dois && resposta_da_pergunta_dois.toUpperCase() != alternativa_tres && resposta_da_pergunta_dois.toUpperCase() != alternativa_quatro:
    alert(`Na segunda questão a letra não é uma das 4 opções listadas, portanto a questão valerá 0.`);
    break;

    case resposta_da_pergunta_tres.toUpperCase() != alternativa_um && resposta_da_pergunta_tres.toUpperCase() != alternativa_dois && resposta_da_pergunta_tres.toUpperCase() != alternativa_tres && resposta_da_pergunta_tres.toUpperCase() != alternativa_quatro:
    alert(`Na terceira questão a letra não é uma das 4 opções listadas, portanto a questão valerá 0.`);
    break;

    case resposta_da_pergunta_quatro.toUpperCase() != alternativa_um && resposta_da_pergunta_quatro.toUpperCase() != alternativa_dois && resposta_da_pergunta_quatro.toUpperCase() != alternativa_tres && resposta_da_pergunta_quatro.toUpperCase() != alternativa_quatro:
    alert(`Na quarta questão a letra não é uma das 4 opções listadas, portanto a questão valerá 0.`);
    break;

};


switch(true){

  case somatoria_de_pontos < nota_maxima:
    alert(`Alternativas escolhidas nas questões:
    \n
1)\n${resposta_da_pergunta_um})\n2)\n${resposta_da_pergunta_dois})\n3)\n${resposta_da_pergunta_tres})\n4)\n${resposta_da_pergunta_quatro})\nSomatória das questões: ${somatoria_de_pontos}.
    `);
    break;

   default:
    alert(`Alternativas escolhidas nas questões:\n1)\n${resposta_da_pergunta_um})2)\n${resposta_da_pergunta_dois})3)\n${resposta_da_pergunta_tres})4)\n${resposta_da_pergunta_quatro})
\nSomatória das questões: ${somatoria_de_pontos}.\nParabéns!
    `);

};
