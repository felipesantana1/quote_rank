import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class QuoteComponent implements OnInit {

  quotes_list = [];

  quote = {
    'content' : '',
    'author' : '',
    'rating' : 0
  }

  addQuote(){
    this.quotes_list.push(this.quote)
    console.log(this.quote, this.quotes_list)
    this.quote = {
      'content' : '',
      'author' : '',
      'rating' : 0
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
