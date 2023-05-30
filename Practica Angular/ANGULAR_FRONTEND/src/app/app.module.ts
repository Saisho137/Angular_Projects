import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { LoginComponent } from './components/login/login.component'
import { HomeComponent } from './components/home/home.component'
import { RouterModule } from '@angular/router'
import { HttpClientModule } from '@angular/common/http';
import { ContactRenderComponent } from './components/home/contact-render/contact-render.component';
import { AddContactSectionComponent } from './components/home/add-contact-section/add-contact-section.component'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    ContactRenderComponent,
    AddContactSectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {path:"login", component: LoginComponent},
      {path:"", component: LoginComponent},
      {path:"home", component: HomeComponent},
    ], {onSameUrlNavigation: 'reload'}),
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
