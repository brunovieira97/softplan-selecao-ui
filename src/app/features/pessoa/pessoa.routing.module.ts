import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PessoaPesquisaComponent } from './pessoa-pesquisa/pessoa-pesquisa.component';

const routes: Routes = [
  {
    path: '',
    component: PessoaPesquisaComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PessoaRoutingModule {}
