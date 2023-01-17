import { TasksRoutingModule } from './tasks-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TasksComponent } from './tasks.component';
import { CoreModule } from 'src/app/shared/core.module';

@NgModule({
  declarations: [TasksComponent],
  imports: [CommonModule, TasksRoutingModule, CoreModule],
})
export class TasksModule {}
