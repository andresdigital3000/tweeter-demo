import { Component, OnInit, Input } from '@angular/core';
import {LikeComponent} from '../like/like.component';

@Component({
  selector: 'tweet',
  templateUrl: './tweet.component.html',
  styleUrls: ['./tweet.component.css']
})
export class TweetComponent implements OnInit {
    @Input() data = { 
            imageUrl: "http://lorempixel.com/100/100/people?1",
            author: "Windward",
            handle: "@windwardstudios",
            body: "Looking for a better company reporting or docgen app?",
            totalLikes: 0,
            iLike: false
        }
    ngOnInit() {
    }
    constructor(){
        console.log(this.data);
    }

}
