import { NgModule } from '@angular/core';

import { AlunosComponent } from './alunos.component';
import { CommonModule } from '@angular/common';
import { AlunoFormComponent } from './aluno-form/aluno-form.component';
import { AlunoDetalheComponent } from './aluno-detalhe/aluno-detalhe.component';
import { AlunosRoutingModule } from './aluno.routing.module';
import { AlunosService } from './alunos.service';
import { FormsModule } from '@angular/forms';
import { AlunosDeactivateGuard } from './../guards/alunos.deactivate.guard';

@NgModule({
    imports:[
        CommonModule,
        FormsModule,
        AlunosRoutingModule
    ],
    
    exports:[],

    declarations:[
        AlunosComponent,
        AlunoFormComponent,
        AlunoDetalheComponent,
    ],

    providers:[AlunosService,
        AlunosDeactivateGuard
    ],
})
    export class AlunosModule{

    }