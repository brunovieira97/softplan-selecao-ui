import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { VendorModule } from 'src/app/vendor/vendor.module';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [LoginComponent],
  imports: [CommonModule, VendorModule, SharedModule],
  exports: [LoginComponent],
})
export class AuthModule {}
