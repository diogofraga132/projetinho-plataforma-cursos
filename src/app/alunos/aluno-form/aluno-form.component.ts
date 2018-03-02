import { Component, OnInit } from '@angular/core';

import { AlunosService } from './../alunos.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/RX';
import { IFormCanDeactivate } from "../../guards/iform-candeactivate";
@Component({
  selector: 'app-aluno-form',
  templateUrl: './aluno-form.component.html',
  styleUrls: ['./aluno-form.component.css']
})
export class AlunoFormComponent implements OnInit,IFormCanDeactivate {

  aluno: any;
  inscricao:Subscription;
  formMudou:boolean = false;

  constructor(private route: ActivatedRoute,
  private alunosService:AlunosService
) { }

  ngOnInit() {
    this.inscricao= this.route.params.subscribe(
      (params: any)=>{
        let id = params['id'];

        this.aluno= this.alunosService.getAluno(id);

        if(this.aluno === null){
          this.aluno={};
        }
      });
  }
  ngOnDestroy() {
    this.inscricao= this.route.params.subscribe((params: any)=>{
      let id= params[ 'id' ];
      this.aluno= this.alunosService.getAluno(id);

      if(this.aluno === null){
        this.aluno={};
      }
    });
  }
  onInput(){
    this.formMudou=true;
    console.log('form mudou');

  }
  podeMudarRota(){
    if(this.formMudou){
      confirm ('Tem certeza que deseja sair da pagina?')
    }
    console.log('podemudarrota');
    return true;
  }

  podeDesativar(){
    console.log("pode desativar");
    return this.podeMudarRota();
    
  }

}

