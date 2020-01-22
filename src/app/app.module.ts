import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuComponent } from './components/menu/menu.component';
import { MatSidenavModule, MatPaginatorModule, MatInputModule, MatListModule, MatCardModule, MatButtonModule, MatGridListModule } from '@angular/material';
import { ItemComponent } from './components/item/item.component';
import { ListComponent } from './components/list/list.component';
import { FormComponent } from './components/form/form.component';
import { CreateComponent } from './page/create/create.component';
import { ShowComponent } from './page/show/show.component';
import { EditComponent } from './page/edit/edit.component';
import { AboutComponent } from './page/about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ItemComponent,
    ListComponent,
    FormComponent,
    CreateComponent,
    ShowComponent,    
    EditComponent, AboutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatInputModule,
    MatPaginatorModule,
    ReactiveFormsModule,
    FormsModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    MatGridListModule,    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
