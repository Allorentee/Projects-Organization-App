import { Component } from '@angular/core';
import { Project } from 'src/app/services/interface/project';
import { ProjectService } from 'src/app/services/projects.service';

@Component({
  selector: 'app-projects-list',
  templateUrl: './projects-list.component.html',
  styleUrls: ['./projects-list.component.scss'],
})
export class ProjectsListComponent {
  projects!: Project[];
  error!: Error;
  loading: boolean;

  constructor(public projectService: ProjectService) {
    this.loading = true;
    this.projectService.getAllProjects().subscribe({
      next: (data) => {
        console.log(data);
        this.projects = data;
        this.loading = false;
        console.log(this.projects);
      },
      error: (error) => (console.log(this.projects), (this.error = error)),
    });
  }

  ngOnInit() {
    this.projects = [];
    console.log(this.projects);
  }
}
