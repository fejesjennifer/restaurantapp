import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, RouterLink, Router } from '@angular/router';
import { ImageFilterPipe } from './image-detail/filter.pipe';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TopviewComponent } from './topview/topview.component';
import { MidviewComponent } from './midview/midview.component';
import { BottomviewComponent } from './bottomview/bottomview.component';
import { HomeComponent } from './home/home.component';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { EndComponent } from './end/end.component';
import { QuoteComponent } from './quote/quote.component';
import { ImageDetailComponent } from './image-detail/image-detail.component';
import { ImageService } from './image-detail/image.service';
import { RestaurantDetailsComponent } from './restaurant-details/restaurant-details.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { LoginComponent } from './login/login.component';
import { Observable } from 'rxjs/Observable';
import { AuthService } from './services/auth.service';
import { UserService } from './services/user.service';
import { CommentSectionComponent } from './comment-section/comment-section.component';
import { CommentService } from './services/comment.service';
import { FormsModule } from '@angular/forms';
import { GMapComponent } from './g-map/g-map.component';


export const firebaseConfig = {
  apiKey: "AIzaSyBzQKzxbtt9p0il-L5xIV_g_jXEGP42iII",
    authDomain: "restaurant-17718.firebaseapp.com",
    databaseURL: "https://restaurant-17718.firebaseio.com",
    projectId: "restaurant-17718",
    storageBucket: "restaurant-17718.appspot.com",
    messagingSenderId: "3779735978"
};


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TopviewComponent,
    MidviewComponent,
    BottomviewComponent,
    HomeComponent,
    RestaurantComponent,
    EndComponent,
    QuoteComponent,
    ImageDetailComponent,
    ImageFilterPipe,
    RestaurantDetailsComponent,
    LoginComponent,
    CommentSectionComponent,
    GMapComponent
  ],
  imports: [
    BrowserModule,
    AngularFirestoreModule.enablePersistence(),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    FormsModule,
    RouterModule.forRoot([
      { path: 'home', component: HomeComponent },
      { path: 'restaurant', component: RestaurantComponent },
      { path: 'details', component: RestaurantDetailsComponent },
      { path: 'login', component: LoginComponent },
      { path: '**', redirectTo: 'home' },


    ])
  ],
  providers: [
    ImageService,
    ImageFilterPipe,
    AuthService,
    UserService,
    CommentService
  ],
  bootstrap: [AppComponent]
})


export class AppModule {


}
