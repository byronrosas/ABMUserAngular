import { AboutComponent } from './page/about/about.component';
import { ShowComponent } from './page/show/show.component';
import { EditComponent } from './page/edit/edit.component';
import { CreateComponent } from './page/create/create.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: 'create', component: CreateComponent },
  { path: 'edit/:id',      component: EditComponent },
  { path: 'show',      component: ShowComponent },  
  { path: 'about',      component: AboutComponent },  
  { path: '',
    redirectTo: '/show',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
