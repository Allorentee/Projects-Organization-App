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
  loading: boolean = true;

  constructor(public projectService: ProjectService) {
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
