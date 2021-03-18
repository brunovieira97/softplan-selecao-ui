import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { VendorModule } from '../vendor/vendor.module';

@NgModule({
  declarations: [HeaderComponent],
  imports: [CommonModule, VendorModule],
  exports: [HeaderComponent],
})
export class UiModule {}
