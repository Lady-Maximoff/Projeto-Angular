import { Component, OnInit } from '@angular/core';
import { DatabaseService } from 'src/app/database.service';
import { Router } from '@angular/router';


@Component({
  selector: 'rev-formulatio',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  constructor( private banco: DatabaseService, private router: Router) { }

  ngOnInit(): void {
  }

  submit(valor:any){
    this.banco.postWallpaper(valor.value);
    this.router.navigate(['/']);
  }
}
