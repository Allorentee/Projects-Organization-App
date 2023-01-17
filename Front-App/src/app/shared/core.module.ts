import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import * as components from './components/index';

@NgModule({
  declarations: [...components.components],
  imports: [CommonModule, RouterModule],
  exports: [...components.components],
})
export class CoreModule {}
