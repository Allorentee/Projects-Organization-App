import { ProjectsComponent } from './projects.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectsListComponent } from './projects-list/projects-list.component';

@NgModule({
  declarations: [ProjectsComponent, ProjectsListComponent],
  imports: [CommonModule, ProjectsRoutingModule],
})
export class ProjectsModule {}
