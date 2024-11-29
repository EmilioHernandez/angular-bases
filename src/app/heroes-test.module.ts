import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';

import { HeroTestComponent } from './hero-test/hero-test.component';
import { ListTestComponent } from './list-test/list-test.component';

@NgModule({
  declarations: [HeroTestComponent, ListTestComponent],
  exports: [HeroTestComponent, ListTestComponent],
  imports: [CommonModule],
})
export class HeroesTestModule {}
