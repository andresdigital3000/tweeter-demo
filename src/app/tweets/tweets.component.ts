import { Component, OnInit, Input } from '@angular/core';
import { TweetService } from '../tweet/tweet.service'
import { TweetComponent } from "app/tweet/tweet.component";
import { CourseService } from "app/tweet/course.service";


@Component({
  selector: 'tweets',
  template: `
        <div let *ngFor="let tweet of tweets">
            <tweet [data]="tweet"></tweet>
        </div>

  `,
  providers: [TweetService, CourseService]

})
export class TweetsComponent implements OnInit {
  tweets: any[]; 
  courses;
  
  constructor(tweetService : TweetService) { 
      this.tweets = tweetService.getTweets();
  }

  ngOnInit() {
  }

}