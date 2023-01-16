import { TasksRoutingModule } from './tasks-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TasksComponent } from './tasks.component';

@NgModule({
  declarations: [TasksComponent],
  imports: [CommonModule, TasksRoutingModule],
})
export class TasksModule {}
