import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss'],
})
export class BoardComponent implements OnInit {
  answer: Array<string | null>;
  terms: Array<Array<string | null>>;
  positions: Array<Array<number>>;
  win: boolean;
  counter: number;
  status: string | null;

  constructor(private data: DataService) {}

  ngOnInit(): void {
    this.newGame();
    this.data.currentMessage.subscribe((status) => (this.status = status));
    // this.keys.currentValue.subscribe((terms)=>this.terms=temrs);
  }

  newGame(): void {
    this.data.changeMessage(null);
    this.status = null;
    this.win = false;
    this.counter = 0;
    this.answer = ['E', 'L', 'I', 'E', 'L'];
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
      this.data.changeMessage('win');
      this.counter = -1;
      return;
    }

    if (this.counter === 5) {
      this.data.changeMessage('game-over');
      return;
    }
    this.counter++;
    console.log(this.status);
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
