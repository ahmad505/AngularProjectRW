import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent{


   value:Date = new Date('2022-12-10');
   text:string = "Ahmad Afifi";
   number:number = 0.85;

}
