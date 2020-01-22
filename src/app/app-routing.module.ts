import { EditComponent } from './page/edit/edit.component';
import { ListComponent } from './components/list/list.component';
import { CreateComponent } from './page/create/create.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: 'create', component: CreateComponent },
  { path: 'edit',      component: EditComponent },
  { path: 'list',      component: ListComponent },  
  { path: 'about',      component: ListComponent },  
  { path: '',
    redirectTo: '/list',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
