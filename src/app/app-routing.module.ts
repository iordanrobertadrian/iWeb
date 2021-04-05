import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { ExtraServicesComponent } from './components/extra-services/extra-services.component';
import { HomeComponent } from './components/home/home.component';
import { OnlineShopComponent } from './components/online-shop/online-shop.component';
import { PresentationWebsiteComponent } from './components/presentation-website/presentation-website.component';
import { ProjectStepsComponent } from './components/project-steps/project-steps.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { NewsComponent } from './components/news/news.component';

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
    path:'magazin-online',
    component: OnlineShopComponent
  },
  {
    path:'site-web-prezentare',
    component: PresentationWebsiteComponent
  },
  {
    path:'servicii-extra',
    component: ExtraServicesComponent
  },
  {
    path:'etapele-unui-proiect',
    component: ProjectStepsComponent
  },
  {
    path:'despre-noi',
    component: AboutUsComponent
  },
  {
    path:'noutati',
    component: NewsComponent
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
