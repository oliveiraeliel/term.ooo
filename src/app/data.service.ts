import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';

type TMessage = string | null;

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private messageSource = new BehaviorSubject<TMessage>(null);
  currentMessage = this.messageSource.asObservable();

  currentTerms = this.messageSource.asObservable();

  constructor() {}

  changeMessage(message: TMessage) {
    this.messageSource.next(message);
  }
}
