import { RouterModule } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { HeaderComponent } from './header/header.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpinnerComponent } from './spinner/spinner.component';

@NgModule({
  declarations: [HeaderComponent, MenuComponent, SpinnerComponent],
  imports: [CommonModule, RouterModule],
  exports: [HeaderComponent, MenuComponent, SpinnerComponent],
})
export class CoreModule {}
