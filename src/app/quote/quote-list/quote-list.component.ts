import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';

@Component({
  selector: 'app-quote-list',
  templateUrl: './quote-list.component.html',
  styleUrls: ['./quote-list.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class QuoteListComponent implements OnInit {
  
  @Input() list;


  vote_up(index){
    this.list[index].rating += 1;
    return this.list[index].rating
  }

  vote_down(index){
    this.list[index].rating -= 1;
    console.log(this.list[index].rating);
    return this.list[index].rating
  }

  delete(index){
    this.list.splice(index, 1);
    return this.list
  }

  constructor() { }

  ngOnInit() {
  }

}
