import { Component, OnInit } from '@angular/core';
import { SharedService } from './shared.service';

@Component({
  selector: 'app-observables',
  templateUrl: './observables.component.html',
  styleUrls: ['./observables.component.css']
})
export class ObservablesComponent implements OnInit {

  title: string = "Parent";

  constructor(public sharedService: SharedService) { }

  ngOnInit(): void {
    this.sharedService.message.subscribe((title) => this.title = title);
  }


}
