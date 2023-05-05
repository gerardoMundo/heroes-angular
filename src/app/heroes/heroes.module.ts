import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HeroesRoutingModule } from './heroes-routing.module';

import { HeroPageComponent } from './pages/hero-page/hero-page.component';
import { LayoutComponent } from './layout/layout.component';
import { ListPageComponent } from './pages/list-page/list-page.component';
import { NewPageComponent } from './pages/new-page/new-page.component';
import { SearchPageComponent } from './pages/search-page/search-page.component';

@NgModule({
  declarations: [
    HeroPageComponent,
    LayoutComponent,
    ListPageComponent,
    NewPageComponent,
    SearchPageComponent,
  ],
  imports: [CommonModule, RouterModule, HeroesRoutingModule],
})
export class HeroesModule {}