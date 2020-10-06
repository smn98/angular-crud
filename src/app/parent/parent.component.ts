import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { SharedService } from './shared.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  title: string = "Parent";

  constructor(public sharedService: SharedService) { }

  ngOnInit(): void {
    this.sharedService.message.subscribe((title) => this.title = title);
  }

}
