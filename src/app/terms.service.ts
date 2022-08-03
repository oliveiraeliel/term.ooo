import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TermsService {
  private termSource = new BehaviorSubject<Array<Array<string | null>> | null>(
    []
  );
  currentTerms = this.termSource.asObservable();

  constructor() {}

  // updateTerms(letter: string, i: number, j: number) {
  //   this.currentTerms.forEach((e: Array<string | null>, k: number) => {
  //     if (i === k) {
  //     }
  //   });
  // }
}
