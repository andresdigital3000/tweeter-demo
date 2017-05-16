import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TweetComponent } from './tweet/tweet.component';
import { LikeComponent } from './like/like.component';
import { TweetsComponent } from './tweets/tweets.component';

@NgModule({
  declarations: [
    AppComponent,
    TweetComponent,
    LikeComponent,
    TweetsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
