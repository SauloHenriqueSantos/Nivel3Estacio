import Livro from "../modelo/Livro";

const livros: Array<Livro> = [ 
  {
    codigo: 1,
    codEditora: 1,
    titulo: "Manual de Direito Comercial",
    resumo:
      "O objetivo deste livro é o de reunir, em um único volume, os principais tópicos do direito comercial, de formar a possibilitar uma visão geral dos diversos ramos em que se divide essa disciplina: parte gral, sociedades comerciais, títulos de crédito, direito falimentar e contratos mercantis.",
    autores: ["Fábio Ulhoa Coelho"],
  },
  {
    codigo: 2,
    codEditora: 2,
    titulo: "Direito Administrativo Brasileiro",
    resumo:
      "A obra tem tanto o objetivo de contribuir para a informação dos alunos que se dedicam ao estudo do DIreito Administrativo, na graduação, especialização, pós-graduação,como, também, de auxiliar os profissionais que enfrentam problemas concretos disciplinados por essa área específica do Direito. ",
    autores: ["Marcio Pestana"],
  },
  {
    codigo: 3,
    codEditora: 3,
    titulo: "Direito Constitucional",
    resumo:
      "Este livro condensa a análise doutrinária e jurisprudencial da Constituição Federal, proporcionando segura fonte de consultra para a solução das problemáticas constitucionais e seus reflexos nos diversos campos do Direito. Trata-se de um estudo profundo das normas constitucionais atuais, comparando-as com as Constituições brasileiras anteriores e de diversos países.",
    autores: ["Alexandre de Moraes"],
  },
];

export class ControleLivros {
  obterLivros = (): Livro[] => {
    return livros;
  };

  incluir = (livro: Livro): void => {
    const codigo =
      livros.reduce((max, livro) => Math.max(max, livro.codigo), 0) + 1;
    livros.push({ ...livro, codigo });
  };

  excluir = (codigo: number): void => {
    const indiceLivro = livros.findIndex((livro) => livro.codigo === codigo);
    if (indiceLivro !== -1) {
      livros.splice(indiceLivro, 1);
    }
  };
}
