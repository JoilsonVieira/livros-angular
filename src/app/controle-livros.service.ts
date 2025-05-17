import { Injectable } from '@angular/core';
import { Livro } from './livro';

@Injectable({
  providedIn: 'root'
})
export class ControleLivrosService {
  livros: Array<Livro> = [
    { codigo: 2025, codEditora: 1, titulo: 'Harry Potter', resumo: 'Harry Potter é um garoto órfão que vive infeliz com seus tios, os Dursleys. Ele recebe uma carta contendo um convite para ingressar em Hogwarts, uma famosa escola especializada em formar jovens bruxos. Inicialmente, Harry é impedido de ler a carta por seu tio, mas logo recebe a visita de Hagrid, o guarda-caça de Hogwarts, que chega para levá-lo até a escola. Harry adentra um mundo mágico que jamais imaginara, vivendo diversas aventuras com seus novos amigos, Rony Weasley e Hermione Granger.', autores: ['JK Rowling'] },
    { codigo: 2028, codEditora: 2, titulo: 'O Senhor dos Anéis', resumo: ' "O Senhor dos Anéis" é uma história épica ambientada na Terra-Média, onde a luta contra o mal é travada para impedir que o Anel do Poder, um objeto de poder supremo, caia nas mãos do Senhor do Escuro. A trama acompanha a jornada de Frodo Bolseiro, um hobbit, que é encarregado de destruir o anel, liderando uma sociedade de diferentes raças para enfrentar o perigo. ', autores: ['R.R Tolkien', 'R.R Rowling'] },
    { codigo: 2027, codEditora: 3, titulo: 'As crônicas de gelo e fogo', resumo: 'Situada nos Sete Reinos, narra uma luta entre clãs rivais, que se desenvolve após a morte do rei Robert Baratheon. O trono é reivindicado por seu filho Joffrey Baratheon, apoiado pela influente família de sua mãe, a Casa Lannister.', autores: ['George R.R. Martin'] }
  ]

  constructor() { }

  obterLivros() {
    return this.livros
  }

  incluir(novoLivro: Livro) {
    let id = 0;
    this.livros.forEach(livro => {
      if (id < livro.codigo) {
        id = livro.codigo
      }
    })
    novoLivro.codigo = 2028;
    this.livros.push(novoLivro)
  }

  excluir(codigo: number) {
    const livro = this.livros.findIndex((livro) => livro.codigo === codigo);
    this.livros.splice(livro, 1);
  }
}
