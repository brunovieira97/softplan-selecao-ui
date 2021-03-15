import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PipesModule } from './pipes/pipes.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, PipesModule],
  exports: [PipesModule],
})
export class SharedModule {}
