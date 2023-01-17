import { ProjectsComponent } from './projects.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectsListComponent } from './projects-list/projects-list.component';
import { CoreModule } from 'src/app/shared/core.module';

@NgModule({
  declarations: [ProjectsComponent, ProjectsListComponent],
  imports: [CommonModule, ProjectsRoutingModule, CoreModule],
})
export class ProjectsModule {}
