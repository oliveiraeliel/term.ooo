import { Component, Input, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-game-status',
  templateUrl: './game-status.component.html',
  styleUrls: ['./game-status.component.scss'],
})
export class GameStatusComponent implements OnInit {
  // @Input() status: string | null;

  status: string | null;

  constructor(private data: DataService) {}

  ngOnInit(): void {
    this.data.currentMessage.subscribe((status) => (this.status = status));
  }

  handleStatus(): string {
    if (this.status === 'win') {
      return 'green';
    } else if (this.status === 'game-over') {
      return 'red';
    } else {
      return 'transparent';
    }
  }
}
