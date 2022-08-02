import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-status',
  templateUrl: './game-status.component.html',
  styleUrls: ['./game-status.component.scss'],
})
export class GameStatusComponent implements OnInit {
  @Input() status: string | null;

  constructor() {}

  ngOnInit(): void {
    this.status = null;
  }

  handleStatus(): string {
    if (this.status === 'win') {
      return 'green';
    } else if (this.status === 'game-over') {
      return 'red';
    }
    return 'invisible';
  }
}
