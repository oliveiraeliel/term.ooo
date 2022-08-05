import { Component, Input, OnInit } from '@angular/core';

import { animateInput } from '../animations';

@Component({
  selector: 'app-letter',
  templateUrl: './letter.component.html',
  styleUrls: ['./letter.component.scss'],
  animations: [animateInput],
})
export class LetterComponent implements OnInit {
  @Input() letter: string | null;
  @Input() disabled: boolean;
  @Input() right: 0 | 1 | 2 | 3;
  focus: boolean;

  constructor() {}

  ngOnInit(): void {}

  setFocus(mode: boolean) {
    this.focus = mode;
  }

  handleAnimation(): string {
    if (!this.focus) {
      if (this.right === 0) return 'non-initialized';
      if (this.right === 1) return 'right';
      if (this.right === 2) return 'partially-right';
      if (this.right === 3) return 'wrong';
    }
    return 'on';
  }
}
