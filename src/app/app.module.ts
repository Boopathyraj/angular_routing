import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import { FormsModule } from "@angular/forms";

import {routing} from './app.routing';

import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';
import { HeaderComponent } from './header/header.component';
import { ExampleComponent } from './example/example.component';
import { SubChildComponent } from './sub-child/sub-child.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    UserComponent,
    HeaderComponent,
    ExampleComponent,
    SubChildComponent
  ],
  imports: [
    BrowserModule,FormsModule,
    RouterModule,routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
