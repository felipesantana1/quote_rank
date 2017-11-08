import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { QuoteComponent } from './quote/quote.component';
import { QuoteListComponent } from './quote/quote-list/quote-list.component';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    QuoteComponent,
    QuoteListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
		HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
