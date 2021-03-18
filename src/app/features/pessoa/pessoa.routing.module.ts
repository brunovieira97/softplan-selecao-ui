import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/core/auth/guard/auth.guard';
import { PessoaManutencaoComponent } from './pessoa-manutencao/pessoa-manutencao.component';
import { PessoaPesquisaComponent } from './pessoa-pesquisa/pessoa-pesquisa.component';

const routes: Routes = [
  {
    path: '',
    component: PessoaPesquisaComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'new',
    component: PessoaManutencaoComponent,
    canActivate: [AuthGuard],
  },
  {
    path: ':id',
    pathMatch: 'full',
    component: PessoaManutencaoComponent,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PessoaRoutingModule {}
