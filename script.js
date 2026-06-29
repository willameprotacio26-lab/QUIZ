// ======================
// QUESTÕES
// ======================

const quiz = {

    Geografia: [
        {
        pergunta: "Qual é a capital da Argentina?",
        respostas: [
            "Buenos Aires",
            "Santiago",
            "Lima",
            "Montevidéu"
        ],
        correta: 0
    },

    {
        pergunta: "Qual é o maior oceano do mundo?",
        respostas: [
            "Atlântico",
            "Pacífico",
            "Índico",
            "Ártico"
        ],
        correta: 1
    },

    {
        pergunta: "O deserto do Saara fica em qual continente?",
        respostas: [
            "Ásia",
            "Europa",
            "África",
            "América"
        ],
        correta: 2
    },

    {
        pergunta: "Qual é o maior país do mundo?",
        respostas: [
            "China",
            "Canadá",
            "Estados Unidos",
            "Rússia"
        ],
        correta: 3
    },

    {
        pergunta: "Qual linha divide a Terra em hemisfério norte e sul?",
        respostas: [
            "Trópico de Capricórnio",
            "Meridiano de Greenwich",
            "Linha do Equador",
            "Trópico de Câncer"
        ],
        correta: 2
    },

    {
        pergunta: "Brasília fica em qual região do Brasil?",
        respostas: [
            "Sul",
            "Nordeste",
            "Centro-Oeste",
            "Sudeste"
        ],
        correta: 2
    },

    {
        pergunta: "Qual é o maior rio do mundo em volume de água?",
        respostas: [
            "Nilo",
            "Amazonas",
            "Yangtzé",
            "Mississipi"
        ],
        correta: 1
    },

    {
        pergunta: "Qual país possui formato semelhante a uma bota?",
        respostas: [
            "Portugal",
            "Itália",
            "Espanha",
            "Grécia"
        ],
        correta: 1
    },

    {
        pergunta: "Quantos estados possui o Brasil?",
        respostas: [
            "24",
            "25",
            "26",
            "27"
        ],
        correta: 2
    },

    {
        pergunta: "Qual é a capital do Japão?",
        respostas: [
            "Pequim",
            "Seul",
            "Tóquio",
            "Bangkok"
        ],
        correta: 2
    }

],
    

    Matemática: [
        
    {
        pergunta: "Quanto é 15 × 8?",
        respostas: [
            "120",
            "125",
            "130",
            "140"
        ],
        correta: 0
    },

    {
        pergunta: "Qual é a raiz quadrada de 144?",
        respostas: [
            "10",
            "11",
            "12",
            "13"
        ],
        correta: 2
    },

    {
        pergunta: "Quanto é 25% de 200?",
        respostas: [
            "25",
            "50",
            "75",
            "100"
        ],
        correta: 1
    },

    {
        pergunta: "Quanto é 9²?",
        respostas: [
            "72",
            "81",
            "90",
            "99"
        ],
        correta: 1
    },

    {
        pergunta: "Quanto é 7 × 9?",
        respostas: [
            "56",
            "63",
            "72",
            "81"
        ],
        correta: 1
    },

    {
        pergunta: "Qual é o valor de π aproximadamente?",
        respostas: [
            "2,14",
            "3,14",
            "4,14",
            "5,14"
        ],
        correta: 1
    },

    {
        pergunta: "Quanto é 144 ÷ 12?",
        respostas: [
            "10",
            "11",
            "12",
            "13"
        ],
        correta: 2
    },

    {
        pergunta: "Quanto é 18 + 27?",
        respostas: [
            "45",
            "46",
            "47",
            "48"
        ],
        correta: 0
    },

    {
        pergunta: "Qual é a metade de 250?",
        respostas: [
            "100",
            "115",
            "125",
            "150"
        ],
        correta: 2
    },

    {
        pergunta: "Quanto é 5³?",
        respostas: [
            "25",
            "75",
            "100",
            "125"
        ],
        correta: 3
    }

],
    

    Informática: [
       
    {
        pergunta: "O que significa CPU?",
        respostas: [
            "Central Process Unit",
            "Central Processing Unit",
            "Computer Processing Unit",
            "Control Processing Unit"
        ],
        correta: 1
    },

    {
        pergunta: "Qual linguagem é usada para estilizar páginas web?",
        respostas: [
            "HTML",
            "CSS",
            "Java",
            "Python"
        ],
        correta: 1
    },

    {
        pergunta: "Qual componente armazena os arquivos permanentemente?",
        respostas: [
            "Memória RAM",
            "Processador",
            "HD ou SSD",
            "Placa de vídeo"
        ],
        correta: 2
    },

    {
        pergunta: "Qual é o navegador da Google?",
        respostas: [
            "Firefox",
            "Edge",
            "Chrome",
            "Opera"
        ],
        correta: 2
    },

    {
        pergunta: "HTML significa:",
        respostas: [
            "HyperText Markup Language",
            "Home Tool Markup Language",
            "Hyper Transfer Machine Language",
            "High Text Markup Language"
        ],
        correta: 0
    },

    {
        pergunta: "Qual linguagem torna uma página web interativa?",
        respostas: [
            "CSS",
            "HTML",
            "JavaScript",
            "SQL"
        ],
        correta: 2
    },

    {
        pergunta: "Qual é a função da memória RAM?",
        respostas: [
            "Armazenar arquivos permanentemente",
            "Guardar dados temporariamente",
            "Conectar a internet",
            "Exibir imagens"
        ],
        correta: 1
    },

    {
        pergunta: "O Windows é um:",
        respostas: [
            "Antivírus",
            "Sistema Operacional",
            "Navegador",
            "Editor de texto"
        ],
        correta: 1
    },

    {
        pergunta: "Qual extensão identifica arquivos HTML?",
        respostas: [
            ".css",
            ".js",
            ".html",
            ".doc"
        ],
        correta: 2
    },

    {
        pergunta: "Qual empresa desenvolveu o Windows?",
        respostas: [
            "Google",
            "Apple",
            "Microsoft",
            "Intel"
        ],
        correta: 2
    }

],
    

    Redação: [


    {
        pergunta: "Qual é a principal finalidade de uma redação dissertativa?",
        respostas: [
            "Narrar uma história",
            "Defender uma ideia",
            "Descrever um lugar",
            "Criar um poema"
        ],
        correta: 1
    },

    {
        pergunta: "Uma redação do ENEM possui quantas competências avaliadas?",
        respostas: [
            "3",
            "4",
            "5",
            "6"
        ],
        correta: 2
    },

    {
        pergunta: "A introdução de uma redação serve para:",
        respostas: [
            "Concluir o texto",
            "Apresentar o tema",
            "Dar exemplos",
            "Citar referências"
        ],
        correta: 1
    },

    {
        pergunta: "A tese em uma redação é:",
        respostas: [
            "O título",
            "A conclusão",
            "A ideia principal defendida",
            "O exemplo utilizado"
        ],
        correta: 2
    },

    {
        pergunta: "Os argumentos aparecem geralmente em qual parte do texto?",
        respostas: [
            "Introdução",
            "Desenvolvimento",
            "Título",
            "Referência"
        ],
        correta: 1
    },

    {
        pergunta: "A conclusão deve:",
        respostas: [
            "Apresentar a solução ou fechamento",
            "Iniciar o tema",
            "Repetir o título",
            "Apagar os argumentos"
        ],
        correta: 0
    },

    {
        pergunta: "Qual elemento é obrigatório na redação do ENEM?",
        respostas: [
            "Poema",
            "Diálogo",
            "Proposta de intervenção",
            "Resumo"
        ],
        correta: 2
    },

    {
        pergunta: "Um argumento baseado em dados é chamado de:",
        respostas: [
            "Opinião",
            "Achismo",
            "Argumento de autoridade",
            "Argumento fundamentado"
        ],
        correta: 3
    },

    {
        pergunta: "Coesão textual significa:",
        respostas: [
            "Ligação entre as ideias",
            "Quantidade de linhas",
            "Tamanho do título",
            "Número de parágrafos"
        ],
        correta: 0
    },

    {
        pergunta: "O conectivo 'portanto' indica:",
        respostas: [
            "Explicação",
            "Conclusão",
            "Comparação",
            "Tempo"
        ],
        correta: 1
    }

],
    
    Português: [
        

    {
        pergunta: "Qual palavra está escrita corretamente?",
        respostas: [
            "Excessão",
            "Exceção",
            "Exessão",
            "Exeção"
        ],
        correta: 1
    },

    {
        pergunta: "Qual é o plural de 'cidadão'?",
        respostas: [
            "Cidadãos",
            "Cidadões",
            "Cidadães",
            "Cidadans"
        ],
        correta: 0
    },

    {
        pergunta: "Qual é um substantivo?",
        respostas: [
            "Bonito",
            "Correr",
            "Casa",
            "Rapidamente"
        ],
        correta: 2
    },

    {
        pergunta: "A palavra 'feliz' é:",
        respostas: [
            "Verbo",
            "Substantivo",
            "Adjetivo",
            "Pronome"
        ],
        correta: 2
    },

    {
        pergunta: "Qual frase possui pontuação correta?",
        respostas: [
            "Olá como vai?",
            "Olá, como vai?",
            "Olá como, vai?",
            "Olá; como vai."
        ],
        correta: 1
    },

    {
        pergunta: "Sinônimo de 'alegre':",
        respostas: [
            "Triste",
            "Contente",
            "Bravo",
            "Cansado"
        ],
        correta: 1
    },

    {
        pergunta: "Antônimo de 'alto':",
        respostas: [
            "Grande",
            "Baixo",
            "Largo",
            "Curto"
        ],
        correta: 1
    },

    {
        pergunta: "Qual é um pronome pessoal?",
        respostas: [
            "Bonito",
            "Eu",
            "Grande",
            "Rapidamente"
        ],
        correta: 1
    },

    {
        pergunta: "Qual palavra é um verbo?",
        respostas: [
            "Escola",
            "Mesa",
            "Estudar",
            "Livro"
        ],
        correta: 2
    },

    {
        pergunta: "A palavra 'rápido' é:",
        respostas: [
            "Adjetivo",
            "Verbo",
            "Pronome",
            "Artigo"
        ],
        correta: 0
    }

],
    

    Biologia: [
       

    {
        pergunta: "Qual órgão bombeia o sangue no corpo humano?",
        respostas: [
            "Pulmão",
            "Fígado",
            "Coração",
            "Rim"
        ],
        correta: 2
    },

    {
        pergunta: "Qual é a unidade básica da vida?",
        respostas: [
            "Átomo",
            "Molécula",
            "Célula",
            "Tecido"
        ],
        correta: 2
    },

    {
        pergunta: "As plantas produzem alimento através da:",
        respostas: [
            "Respiração",
            "Digestão",
            "Fotossíntese",
            "Fermentação"
        ],
        correta: 2
    },

    {
        pergunta: "Qual gás é absorvido pelas plantas?",
        respostas: [
            "Oxigênio",
            "Nitrogênio",
            "Gás carbônico",
            "Hidrogênio"
        ],
        correta: 2
    },

    {
        pergunta: "Quantos cromossomos possui o ser humano?",
        respostas: [
            "23",
            "46",
            "44",
            "92"
        ],
        correta: 1
    },

    {
        pergunta: "Qual sistema é responsável pela respiração?",
        respostas: [
            "Digestório",
            "Circulatório",
            "Respiratório",
            "Nervoso"
        ],
        correta: 2
    },

    {
        pergunta: "Os animais que se alimentam de plantas são:",
        respostas: [
            "Carnívoros",
            "Onívoros",
            "Herbívoros",
            "Insetívoros"
        ],
        correta: 2
    },

    {
        pergunta: "O DNA está localizado principalmente:",
        respostas: [
            "No núcleo celular",
            "Na pele",
            "Nos ossos",
            "No sangue"
        ],
        correta: 0
    },

    {
        pergunta: "Qual vitamina é produzida pela exposição ao sol?",
        respostas: [
            "Vitamina A",
            "Vitamina B",
            "Vitamina C",
            "Vitamina D"
        ],
        correta: 3
    },

    {
        pergunta: "A água corresponde a aproximadamente quanto do corpo humano?",
        respostas: [
            "20%",
            "40%",
            "60%",
            "90%"
        ],
        correta: 2
    }

],
    

    Física: [
        

    {
        pergunta: "Qual é a unidade de força no Sistema Internacional?",
        respostas: [
            "Joule",
            "Newton",
            "Watt",
            "Pascal"
        ],
        correta: 1
    },

    {
        pergunta: "Quem formulou as leis do movimento?",
        respostas: [
            "Einstein",
            "Galileu",
            "Newton",
            "Tesla"
        ],
        correta: 2
    },

    {
        pergunta: "A velocidade é dada por:",
        respostas: [
            "distância × tempo",
            "distância ÷ tempo",
            "tempo ÷ distância",
            "massa × tempo"
        ],
        correta: 1
    },

    {
        pergunta: "A unidade de energia é:",
        respostas: [
            "Joule",
            "Newton",
            "Volt",
            "Ampère"
        ],
        correta: 0
    },

    {
        pergunta: "Qual é a aceleração da gravidade na Terra aproximadamente?",
        respostas: [
            "5,8 m/s²",
            "9,8 m/s²",
            "12 m/s²",
            "15 m/s²"
        ],
        correta: 1
    },

    {
        pergunta: "O som se propaga por meio de:",
        respostas: [
            "Ondas",
            "Luz",
            "Calor",
            "Gravidade"
        ],
        correta: 0
    },

    {
        pergunta: "A corrente elétrica é medida em:",
        respostas: [
            "Volt",
            "Ohm",
            "Ampère",
            "Watt"
        ],
        correta: 2
    },

    {
        pergunta: "A energia do movimento chama-se:",
        respostas: [
            "Potencial",
            "Cinética",
            "Térmica",
            "Química"
        ],
        correta: 1
    },
    {
        pergunta: "A velocidade da luz no vácuo é aproximadamente:",
        respostas: [
            "300 mil km/s",
            "150 mil km/s",
            "30 mil km/s",
            "3 mil km/s"
        ],
        correta: 0
    },
    {
        pergunta: "Qual instrumento mede a temperatura?",
        respostas: [
            "Barômetro",
            "Higrômetro",
            "Termômetro",
            "Amperímetro"
        ],
        correta: 2
    }
],
    Ciências: [
    {
        pergunta: "Qual planeta é conhecido como planeta vermelho?",
        respostas: [
            "Vênus",
            "Marte",
            "Júpiter",
            "Saturno"
        ],
        correta: 1
    },
    {
        pergunta: "A água ferve a quantos graus Celsius?",
        respostas: [
            "50°C",
            "80°C",
            "100°C",
            "120°C"
        ],
        correta: 2
    },
    {
        pergunta: "Qual é o satélite natural da Terra?",
        respostas: [
            "Sol",
            "Lua",
            "Marte",
            "Vênus"
        ],
        correta: 1
    },
    {
        pergunta: "O Sol é uma:",
        respostas: [
            "Galáxia",
            "Estrela",
            "Lua",
            "Nebulosa"
        ],
        correta: 1
    },
    {
        pergunta: "Qual gás é essencial para a respiração humana?",
        respostas: [
            "Nitrogênio",
            "Oxigênio",
            "Hidrogênio",
            "Hélio"
        ],
        correta: 1
    },
    {
        pergunta: "Qual estado da matéria possui forma própria?",
        respostas: [
            "Líquido",
            "Gasoso",
            "Sólido",
            "Plasma"
        ],
        correta: 2
    },
    {
        pergunta: "Quantos planetas existem no Sistema Solar?",
        respostas: [
            "7",
            "8",
            "9",
            "10"
        ],
        correta: 1
    },
    {
        pergunta: "A mistura de água e sal é:",
        respostas: [
            "Homogênea",
            "Heterogênea",
            "Orgânica",
            "Natural"
        ],
        correta: 0
    },
    {
        pergunta: "O ciclo da água envolve:",
        respostas: [
            "Evaporação",
            "Condensação",
            "Precipitação",
            "Todas as alternativas"
        ],
        correta: 3
    },
    {
        pergunta: "A camada que protege a Terra dos raios UV é:",
        respostas: [
            "Atmosfera",
            "Camada de ozônio",
            "Troposfera",
            "Estratosfera"
        ],
        correta: 1
    }
],
    História: [
        
    {
        pergunta: "Quem descobriu o Brasil em 1500?",
        respostas: [
            "Dom Pedro I",
            "Pedro Álvares Cabral",
            "Tiradentes",
            "Getúlio Vargas"
        ],
        correta: 1
    },
    {
        pergunta: "Em que ano ocorreu a Independência do Brasil?",
        respostas: [
            "1822",
            "1889",
            "1500",
            "1808"
        ],
        correta: 0
    },
    {
        pergunta: "Quem foi o primeiro imperador do Brasil?",
        respostas: [
            "Dom Pedro II",
            "Getúlio Vargas",
            "Dom Pedro I",
            "Juscelino Kubitschek"
        ],
        correta: 2
    },
    {
        pergunta: "A Proclamação da República ocorreu em:",
        respostas: [
            "1822",
            "1889",
            "1930",
            "1964"
        ],
        correta: 1
    },
    {
        pergunta: "Quem liderou a Inconfidência Mineira?",
        respostas: [
            "Tiradentes",
            "Cabral",
            "Dom Pedro I",
            "Deodoro"
        ],
        correta: 0
    },
    {
        pergunta: "A Segunda Guerra Mundial terminou em:",
        respostas: [
            "1940",
            "1945",
            "1950",
            "1939"
        ],
        correta: 1
    },
    {
        pergunta: "Quem foi o primeiro presidente do Brasil?",
        respostas: [
            "Getúlio Vargas",
            "Deodoro da Fonseca",
            "Jânio Quadros",
            "Floriano Peixoto"
        ],
        correta: 1
    },
    {
        pergunta: "A Revolução Francesa ocorreu em:",
        respostas: [
            "1789",
            "1822",
            "1889",
            "1914"
        ],
        correta: 0
    },
    {
        pergunta: "Qual civilização construiu as pirâmides?",
        respostas: [
            "Romanos",
            "Gregos",
            "Egípcios",
            "Maias"
        ],
        correta: 2
    },
    {
        pergunta: "A escravidão foi abolida no Brasil em:",
        respostas: [
            "1822",
            "1888",
            "1889",
            "1930"
        ],
        correta: 1
    }
],
    Atualidades: [

    {
        pergunta: "Qual tecnologia está relacionada à inteligência artificial?",
        respostas: [
            "Machine Learning",
            "Máquina de escrever",
            "Fax",
            "DVD"
        ],
        correta: 0
    },

    {
        pergunta: "O aquecimento global está relacionado principalmente a:",
        respostas: [
            "Chuvas",
            "Gases do efeito estufa",
            "Vulcões",
            "Terremotos"
        ],
        correta: 1
    },

    {
        pergunta: "A reciclagem ajuda a:",
        respostas: [
            "Aumentar o lixo",
            "Reduzir impactos ambientais",
            "Produzir fumaça",
            "Gastar água"
        ],
        correta: 1
    },

    {
        pergunta: "Qual fonte de energia é renovável?",
        respostas: [
            "Carvão",
            "Petróleo",
            "Energia solar",
            "Diesel"
        ],
        correta: 2
    },

    {
        pergunta: "A internet 5G oferece:",
        respostas: [
            "Menor velocidade",
            "Maior velocidade",
            "Sem conexão",
            "Somente chamadas"
        ],
        correta: 1
    },

    {
        pergunta: "As fake news são:",
        respostas: [
            "Notícias antigas",
            "Notícias falsas",
            "Jornais impressos",
            "Propagandas"
        ],
        correta: 1
    },

    {
        pergunta: "O trabalho remoto também é chamado de:",
        respostas: [
            "Home office",
            "Freelance",
            "Estágio",
            "Plantão"
        ],
        correta: 0
    },

    {
        pergunta: "Qual rede social é focada em vídeos curtos?",
        respostas: [
            "TikTok",
            "Excel",
            "Word",
            "PowerPoint"
        ],
        correta: 0
    },

    {
        pergunta: "A coleta seletiva separa:",
        respostas: [
            "Alimentos",
            "Pessoas",
            "Resíduos",
            "Animais"
        ],
        correta: 2
    },

    {
        pergunta: "A energia eólica é produzida pelo:",
        respostas: [
            "Sol",
            "Mar",
            "Vento",
            "Carvão"
        ],
        correta: 2
    }

]
    

};

// ======================
// CONTROLE
// ======================

const materias = Object.keys(quiz);

let materiaAtual = 0;
let perguntaAtual = 0;

const pontos = {};

materias.forEach(materia => {
    pontos[materia] = 0;
});

// ======================
// ELEMENTOS
// ======================

const inicio = document.getElementById("inicio");
const quizTela = document.getElementById("quiz");
const blocoTela = document.getElementById("bloco");
const resultadoTela = document.getElementById("resultadoFinal");

const materiaEl = document.getElementById("materia");
const progressoEl = document.getElementById("progresso");
const perguntaEl = document.getElementById("pergunta");
const respostasEl = document.getElementById("respostas");

const tituloBloco = document.getElementById("tituloBloco");
const resultadoBloco = document.getElementById("resultadoBloco");

const listaResultados =
    document.getElementById("listaResultados");

const totalFinal =
    document.getElementById("totalFinal");

// ======================
// BOTÕES
// ======================

document
    .getElementById("btnIniciar")
    .addEventListener("click", iniciarQuiz);

document
    .getElementById("btnContinuar")
    .addEventListener("click", proximaMateria);

document
    .getElementById("reiniciar")
    .addEventListener("click", reiniciarQuiz);

// ======================
// INICIAR
// ======================

function iniciarQuiz() {

    inicio.classList.remove("ativa");
    quizTela.classList.add("ativa");

    carregarPergunta();
}

// ======================
// CARREGAR QUESTÃO
// ======================

function carregarPergunta() {

    const materia = materias[materiaAtual];

    const questoes = quiz[materia];

    const questao = questoes[perguntaAtual];

    materiaEl.textContent = materia;

    progressoEl.textContent =
        `Questão ${perguntaAtual + 1} de ${questoes.length}`;

    perguntaEl.textContent =
        questao.pergunta;

    respostasEl.innerHTML = "";

    questao.respostas.forEach((resposta, indice) => {

        const botao = document.createElement("button");

        botao.classList.add("resposta");

        botao.textContent = resposta;

        botao.addEventListener("click", () => {

            responder(indice);

        });

        respostasEl.appendChild(botao);
    });
}

// ======================
// RESPONDER
// ======================

function responder(indice) {

    const materia = materias[materiaAtual];

    const questao =
        quiz[materia][perguntaAtual];

    if (indice === questao.correta) {

        pontos[materia]++;
    }

    perguntaAtual++;

    if (
        perguntaAtual <
        quiz[materia].length
    ) {

        carregarPergunta();

    } else {

        mostrarBloco();
    }
}

// ======================
// RESULTADO DO BLOCO
// ======================

function mostrarBloco() {

    quizTela.classList.remove("ativa");

    blocoTela.classList.add("ativa");

    const materia = materias[materiaAtual];

    tituloBloco.textContent =
        `${materia} concluída`;

    resultadoBloco.textContent =
        `Você acertou ${pontos[materia]} de ${quiz[materia].length} questões.`;
}

// ======================
// PRÓXIMA MATÉRIA
// ======================

function proximaMateria() {

    blocoTela.classList.remove("ativa");

    materiaAtual++;

    perguntaAtual = 0;

    if (materiaAtual < materias.length) {

        quizTela.classList.add("ativa");

        carregarPergunta();

    } else {

        mostrarResultadoFinal();
    }
}

// ======================
// RESULTADO FINAL
// ======================

function mostrarResultadoFinal() {

    resultadoTela.classList.add("ativa");

    let totalAcertos = 0;

    let totalQuestoes = 0;

    listaResultados.innerHTML = "";

    materias.forEach(materia => {

        const quantidade =
            quiz[materia].length;

        totalAcertos += pontos[materia];

        totalQuestoes += quantidade;

        listaResultados.innerHTML += `

            <div class="resultado-item">

                ${materia}:
                ${pontos[materia]}/${quantidade}

            </div>

        `;
    });

    totalFinal.textContent =
        `Total: ${totalAcertos}/${totalQuestoes}`;
}

// ======================
// REINICIAR
// ======================

function reiniciarQuiz() {

    location.reload();
}