import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TitleComponent } from './title/title.component';
import { BoardComponent } from './board/board.component';
import { LetterComponent } from './letter/letter.component';
import { KeyBoardComponent } from './key-board/key-board.component';
import { GameStatusComponent } from './game-status/game-status.component';

@NgModule({
  declarations: [
    AppComponent,
    TitleComponent,
    BoardComponent,
    LetterComponent,
    KeyBoardComponent,
    GameStatusComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
