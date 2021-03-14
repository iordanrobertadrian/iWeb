import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { HomeComponent } from './components/home/home.component';
import { ProjectsComponent } from './components/projects/projects.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'acasa'
  },
  {
    path:'acasa',
    component: HomeComponent
  },
  {
    path:'proiecte',
    component: ProjectsComponent
  },
  {
    path:'despre-noi',
    component: AboutUsComponent
  },
  {
    path:'contact',
    component: ContactUsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    anchorScrolling: 'enabled',
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
