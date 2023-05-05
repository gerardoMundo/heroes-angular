import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LayoutComponent } from './layout/layout.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { MaterialModule } from '../material/material.module';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [LoginPageComponent, RegisterPageComponent, LayoutComponent],
  imports: [CommonModule, AuthRoutingModule, RouterModule, MaterialModule],
})
export class AuthModule {}
