import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { CodeComponent } from './code/code.component';
import { ContactComponent } from './contact/contact.component';
 

const routes: Routes = [
  { path: 'home-component', component: HomeComponent },
  { path: 'portfolio-component', component: PortfolioComponent },
  { path: 'code-component', component: CodeComponent },
  { path: 'contact-component', component: ContactComponent },
  { path: '', redirectTo: '/home-component', pathMatch: 'full' }, // redirect to the home-page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
