import { Component, OnInit } from '@angular/core';
import { animateStatus } from '../animations';
import { DataService } from '../data.service';

@Component({
  selector: 'app-game-status',
  templateUrl: './game-status.component.html',
  styleUrls: ['./game-status.component.scss'],
  animations: [animateStatus],
})
export class GameStatusComponent implements OnInit {
  status: string | null;

  constructor(private data: DataService) {}

  ngOnInit(): void {
    this.data.currentMessage.subscribe((status) => (this.status = status));
  }
}
