import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PessoaManutencaoComponent } from './pessoa-manutencao/pessoa-manutencao.component';
import { PessoaPesquisaComponent } from './pessoa-pesquisa/pessoa-pesquisa.component';

const routes: Routes = [
  {
    path: '',
    component: PessoaPesquisaComponent,
  },
  {
    path: 'new',
    component: PessoaManutencaoComponent,
  },
  {
    path: ':id',
    pathMatch: 'full',
    component: PessoaManutencaoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PessoaRoutingModule {}
