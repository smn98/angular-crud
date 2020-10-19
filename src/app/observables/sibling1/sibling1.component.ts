import { Component, Input, OnInit } from '@angular/core';
import { SharedService } from '../../observables/shared.service';

@Component({
  selector: 'app-sibling1',
  templateUrl: './sibling1.component.html',
  styleUrls: ['./sibling1.component.css']
})
export class Sibling1Component implements OnInit {

  @Input() backGroundStyle = "primary";
  @Input() buttonStyle = "warning";
  title:string = "Sibling 1";

  constructor(public sharedService: SharedService) { }

  ngOnInit(): void {
    this.sharedService.message.subscribe((title) => this.title = title);
  }

  setTitle(){
    this.sharedService.setTitle("Sibling 1");
  }

}
