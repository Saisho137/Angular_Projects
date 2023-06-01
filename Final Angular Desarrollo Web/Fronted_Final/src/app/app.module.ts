import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { LoginComponent } from './components/login/login.component'
import { HomeComponent } from './components/home/home.component'
import { RouterModule } from '@angular/router'
import { HttpClientModule } from '@angular/common/http'
import { ReviewsRenderComponent } from './components/home/reviews-render/reviews-render.component';
import { AddReviewsComponent } from './components/home/add-reviews/add-reviews.component'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    ReviewsRenderComponent,
    AddReviewsComponent
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
