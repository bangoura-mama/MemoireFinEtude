import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LacroseComponent } from './lacrose/lacrose.component'; // Remplacez par le chemin de votre composant Lac Rose
import { AppComponent } from './app.component';
import { AccComponent } from './acc/acc.component';




const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/acc'
  },
  // Autres routes...
  { path: 'lacrose', component: LacroseComponent },
  { path: 'app', component: AppComponent }, 
  { path: 'acc', component: AccComponent }, // La route vers le composant Lac Rose
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
