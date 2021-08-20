import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { CommonModule } from '@angular/common'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChildoneComponent } from './childone/childone.component';

import { CustomHttpService } from './custom-http.service';
import { TodoComponent } from './todo/todo.component'

@NgModule({
  declarations: [
    AppComponent,
    ChildoneComponent,
    TodoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule
  ],
  providers: [CustomHttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
