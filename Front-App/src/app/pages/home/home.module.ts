import { HomeComponent } from './home.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from 'src/app/shared/core.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, CoreModule],
})
export class HomeModule {}
