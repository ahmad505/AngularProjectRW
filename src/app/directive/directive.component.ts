import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.css']
})
export class DirectiveComponent implements OnInit {

  courses = ["IT","Networking","Frontend"];

  constructor() { }

  ngOnInit(): void {
  }

}
