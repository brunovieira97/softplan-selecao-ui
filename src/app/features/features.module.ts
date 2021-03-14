import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PessoaModule } from './pessoa/pessoa.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, PessoaModule],
  exports: [PessoaModule],
})
export class FeaturesModule {}
