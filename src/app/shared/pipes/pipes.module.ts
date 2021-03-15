import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CpfMaskPipe } from './cpf-mask.pipe';
import { InputErrorPipe } from './input-error.pipe';

@NgModule({
  declarations: [CpfMaskPipe, InputErrorPipe],
  imports: [CommonModule],
  exports: [CpfMaskPipe, InputErrorPipe],
})
export class PipesModule {}
