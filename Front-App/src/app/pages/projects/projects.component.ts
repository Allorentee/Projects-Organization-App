import { ProjectService } from '../../services/projects.service';
import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/services/interface/project';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styles: [],
})
export class ProjectsComponent implements OnInit {
  projects!: Project[];
  error!: Error;
  constructor(public projectService: ProjectService) {}
  ngOnInit() {
    this.projectService.getAllProjects().subscribe({
      next: (data) => {
        this.projects = data;
      },
      error: (error) => (this.error = error),
    });
  }
}
