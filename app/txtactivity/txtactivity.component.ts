import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-txtactivity',
  templateUrl: './txtactivity.component.html',
  styleUrls: ['./txtactivity.component.css']
})
export class TXTActivityComponent implements OnInit {

  appTitle: string = 'Ivan - Angular 7 Activity'
  titleOfBox: string = 'Title'
  contentsOfBox: string = 'Contents'
  sumbitBox: string = 'Submit' 


  constructor() { }

  ngOnInit() {
  }

}
