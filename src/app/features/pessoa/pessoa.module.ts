import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { VendorModule } from 'src/app/vendor/vendor.module';
import { PessoaPesquisaComponent } from './pessoa-pesquisa/pessoa-pesquisa.component';
import { PessoaRoutingModule } from './pessoa.routing.module';

@NgModule({
  declarations: [PessoaPesquisaComponent],
  imports: [CommonModule, VendorModule, SharedModule, PessoaRoutingModule],
})
export class PessoaModule {}
