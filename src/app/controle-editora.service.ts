import { Injectable } from '@angular/core';
import { Editora } from './editora';

@Injectable({
  providedIn: 'root',
})
export class ControleEditoraService {
  editoras: Array<Editora> = [
    { codEditora: 1, nome: 'Bloomsbury Publishing Rocco Presença' },
    { codEditora: 2, nome: 'HarperCollins; 1ª edição (25 novembro 2019)' },
    { codEditora: 3, nome: 'Suma' },
    { codEditora: 4, nome: 'ABC' },
  ];

  constructor() {}

  getNomeEditora(codEditora: number) {
    const editora = this.editoras.find(
      (editor) => editor.codEditora === codEditora
    );
    return editora?.nome;
  }

  getEditoras() {
    return this.editoras;
  }
}
