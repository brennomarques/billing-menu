import { EventEmitter } from '@angular/core';

export class feedbackNotification {
  notifier = new EventEmitter<string>();

  notify(message: string) {
    this.notifier.emit(message);
  }
}
