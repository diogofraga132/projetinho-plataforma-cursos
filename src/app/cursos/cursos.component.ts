
import { CursosService } from './cursos.service';
import { Component, OnInit } from '@angular/core';

import { Subscription } from 'rxjs/RX';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  cursos:any[];
  pagina: number;
  inscricao: Subscription;
  constructor(private route: ActivatedRoute,
    private CursosService:CursosService,
    private Router:Router
  ) { }

  ngOnInit() {
    this.cursos= this.CursosService.getCursos();

    this.inscricao=this.route.queryParams.subscribe(
      (queryParams:any)=>{
        this.pagina=queryParams['pagina'];
      }
    );
  }
  ngOnDestroy(){
    this.inscricao.unsubscribe();
  }

  proximaPagina(){
    //this.pagina++;
    this.Router.navigate(['/cursos'],
  {queryParams:{'pagina':++this.pagina}});
  }

}
