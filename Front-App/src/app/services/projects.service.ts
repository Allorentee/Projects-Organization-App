import { Project } from './interface/project';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  constructor(private http: HttpClient) {}

  getAllProjects() {
    return this.http.get<Array<Project>>(
      'https://todo-gsmw.onrender.com/projects'
    );
  }
}
