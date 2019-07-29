import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HomeComponent } from './home.component';
import { AppDetailComponent } from './app.detail';
import { UpdateComponent } from './app.update';
import { AddComponent } from './app.add';
import { PagerService } from './pager.service';

const routes: Routes = [  
  { path: '', component: HomeComponent },
  { path: 'detail/:id',component: AppDetailComponent },
  { path: 'update/:id', component: UpdateComponent},
  { path: 'add', component: AddComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    AppDetailComponent, 
    UpdateComponent,
    AddComponent, 
    HomeComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [PagerService],
  bootstrap: [AppComponent]
})
export class AppModule { }