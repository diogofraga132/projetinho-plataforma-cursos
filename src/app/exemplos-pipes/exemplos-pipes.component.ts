import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'exemplos-pipes',
  templateUrl: './exemplos-pipes.component.html',
  styleUrls: ['./exemplos-pipes.component.css']
})
export class ExemplosPipesComponent implements OnInit {

  livro:any= {
    titulo: 'nome do livro',
    rating: 5.54321,
    numeroPages:300,
    preco: 44.99,
    dataLancamento: new Date(2016,5,23),
    url: 'google.com'
  };
  constructor() { }

  ngOnInit() {
  }

}
