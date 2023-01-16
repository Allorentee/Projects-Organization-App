import { HomeComponent } from './home.component';
import { CoreModule } from './../../components/core.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, CoreModule],
})
export class HomeModule {}
