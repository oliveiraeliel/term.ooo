import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss'],
})
export class BoardComponent implements OnInit {
  answer: Array<string | null>;
  term: Array<string | null>;
  terms: Array<Array<string | null>>;
  positions: Array<Array<number>>;
  plays: number;
  win: boolean;
  counter: number;

  constructor() {}

  ngOnInit(): void {
    this.newGame();
  }

  newGame(): void {
    this.win = false;
    this.counter = 0;
    this.plays = 6;
    this.answer = ['E', 'L', 'I', 'E', 'L'];
    // this.term = ['E', 'L', 'I', 'E', 'L'];
    // this.term = Array(5).fill(null);
    this.terms = Array(6).fill([]);
    this.positions = Array(6).fill([]);
    for (let i = 0; i < 6; i++) {
      this.terms[i] = Array(5).fill(null);
      this.positions[i] = Array(5).fill(0);
    }
  }

  verifyTerm(): void {
    if (this.terms[this.counter].includes(null)) {
      return;
    }
    let correct = 0;
    for (let i = 0; i < 5; i++) {
      if (this.terms[this.counter][i] === this.answer[i]) {
        this.positions[this.counter][i] = 1;
        correct++;
      } else if (this.answer.includes(this.terms[this.counter][i])) {
        this.positions[this.counter][i] = 2;
      } else {
        this.positions[this.counter][i] = 3;
      }
    }
    if (correct === 5) {
      this.win = true;

      this.counter = -1;
      return;
    }
    this.counter++;
  }

  changeLetter(letter: string, position: number): void {
    if (!this.win) {
      this.terms[this.counter][position] = letter;
    }
  }

  keyPress(event: KeyboardEvent, i: number, j: number): void {
    if (event.key === 'Backspace') {
      this.terms[i][j] = null;
    } else if (event.code.includes(`Key${event.key.toUpperCase()}`)) {
      this.terms[i][j] = event.key.toUpperCase();
    }
  }

  setColor(i: number, j: number): string | null {
    switch (this.positions[i][j]) {
      case 0:
        return 'white';
      case 1:
        return 'green';
      case 2:
        return 'yellow';
      case 3:
        return 'red';
      default:
        return 'white';
    }
  }
}
