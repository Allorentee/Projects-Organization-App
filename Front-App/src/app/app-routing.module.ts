import { HomeComponent } from './pages/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'Home', component: HomeComponent },
  {
    path: 'Projects',
    loadChildren: () =>
      import('./pages/projects/projects/projects.module').then(
        (m) => m.ProjectsModule
      ),
  },
  {
    path: 'Tasks',
    loadChildren: () =>
      import('./pages/tasks/tasks.module').then((m) => m.TasksModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
