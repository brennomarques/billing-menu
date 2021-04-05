import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { feedbackNotification } from '../core/services/feedback-notification.service';
import { timer } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';

@Component({
  selector: 'app-feed-back',
  templateUrl: './feed-back.component.html',
  styleUrls: ['./feed-back.component.css'],
  animations: [
    trigger('feed-back-visibility', [
      state(
        'hidden',
        style({
          opacity: 0,
          bottom: '0px',
        })
      ),
      state(
        'visible',
        style({
          opacity: 1,
          bottom: '30px',
        })
      ),
      transition('hidden => visible', animate('500ms 0s ease-in')),
      transition('visible => hidden', animate('500ms 0s ease-out')),
    ]),
  ],
})
export class FeedBackComponent implements OnInit {
  public message: string;
  public feedbackVisibility: string = 'hidden';

  constructor(private feedbakNotification: feedbackNotification) {}

  ngOnInit(): void {
    this.feedbakNotification.notifier
      .pipe(
        tap((message) => {
          this.message = message;
          this.feedbackVisibility = 'visible';
        }),
        switchMap((massage) => timer(3000))
      )
      .subscribe((timer) => (this.feedbackVisibility = 'hidden'));
  }

  toogleFeed() {
    this.feedbackVisibility =
      this.feedbackVisibility === 'hidden' ? 'visible' : 'hidden';
  }
}
