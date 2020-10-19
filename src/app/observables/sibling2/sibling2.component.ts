import { Component, Input, OnInit } from '@angular/core';
import { SharedService } from '../../observables/shared.service';

@Component({
  selector: 'app-sibling2',
  templateUrl: './sibling2.component.html',
  styleUrls: ['./sibling2.component.css']
})
export class Sibling2Component implements OnInit {

  @Input() backGroundStyle = "primary";
  @Input() buttonStyle = "warning";
  title: string = "Sibling 2";

  constructor(public sharedService: SharedService) { }

  ngOnInit(): void {
    this.sharedService.message.subscribe((title) => this.title = title);
  }

  setTitle() {
    this.sharedService.setTitle("Sibling 2");
  }


}
