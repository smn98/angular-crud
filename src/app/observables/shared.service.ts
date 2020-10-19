import { EventEmitter, Injectable, OnInit } from '@angular/core';

@Injectable()
export class SharedService implements OnInit{

  title: string;

  message = new EventEmitter<String>();

  constructor() {
  }
  ngOnInit(): void {
  }



  setTitle(title: string) {
    this.title = title;
    this.message.next(this.title);
  }
}
