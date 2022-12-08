import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'rev-fotos',
  templateUrl: './fotos.component.html',
  styleUrls: ['./fotos.component.css']
})
export class FotosComponent implements OnInit {
  
  @Input() imagens  = "";

  constructor() { }

  ngOnInit(): void {
  }


}




  