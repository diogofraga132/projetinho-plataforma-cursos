
import { Component, OnInit } from '@angular/core';

import { AlunosService } from './../alunos.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/RX';
@Component({
  selector: 'app-aluno-detalhe',
  templateUrl: './aluno-detalhe.component.html',
  styleUrls: ['./aluno-detalhe.component.css']
})
export class AlunoDetalheComponent implements OnInit {

  aluno: any;
  inscricao:Subscription;

  constructor(private route: ActivatedRoute,
  private alunosService:AlunosService,
  private router: Router
) { }

  ngOnInit() {
    this.inscricao= this.route.params.subscribe(
      (params: any)=>{
        let id = params['id'];

        this.aluno= this.alunosService.getAluno(id);
        if(this.aluno === null){
          this.aluno={};
        }
      }
    );
  }
  editarContato(){
    this.router.navigate(['/alunos',this.aluno.id,'edit']);

  }
  ngOnDestroy() {
    this.inscricao.unsubscribe();
  }

}
