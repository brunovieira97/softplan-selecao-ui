import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { UiModule } from 'src/app/ui/ui.module';
import { VendorModule } from 'src/app/vendor/vendor.module';
import { PessoaManutencaoComponent } from './pessoa-manutencao/pessoa-manutencao.component';
import { PessoaPesquisaComponent } from './pessoa-pesquisa/pessoa-pesquisa.component';
import { PessoaRoutingModule } from './pessoa.routing.module';

@NgModule({
  declarations: [PessoaPesquisaComponent, PessoaManutencaoComponent],
  imports: [
    CommonModule,
    VendorModule,
    SharedModule,
    PessoaRoutingModule,
    UiModule,
  ],
})
export class PessoaModule {}
