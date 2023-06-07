import Editora from "../modelo/Editora";

const editoras: Array<Editora> = [
  {
    codEditora: 1,
    nome: "Saraiva",
    autor: "Fábio Ulhoa Coelho"
  },
  {
    codEditora: 2,
    nome: "Campus Jurídico",
    autor: "Marcio Pestana"
  },
  {
    codEditora: 3,
    nome: "Atlas",
    autor: "Alexandre de Moraes"
  },
];

export class ControleEditora {
  public getEditoras = (): Editora[] => {
    return editoras;
  };

  public getNomeEditora = (codEditora: number): string => {
    const editoraEncontrada = editoras.find(
      (editora) => editora.codEditora === codEditora
    );
    if (editoraEncontrada) {
      return editoraEncontrada.nome;
    } else {
      throw new Error("Editora não encontrada");
    }
  };

  public getEditora = (codEditora: number): Editora | undefined => {
    return editoras.find((editora) => editora.codEditora === codEditora);
  };
}
