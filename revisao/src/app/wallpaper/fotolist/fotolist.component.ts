import { Component, OnInit } from '@angular/core';
import { Wallpaper } from '../wallpaper.model';
import { DatabaseService } from 'src/app/database.service';

@Component({
  selector: 'rev-fotolist',
  templateUrl: './fotolist.component.html',
  styleUrls: ['./fotolist.component.css']
})
export class FotolistComponent implements OnInit {

  imagens: Wallpaper[] = [];

  constructor( private banco: DatabaseService) { }

  ngOnInit(): void {
    this.banco.getWallpaper().subscribe(results => this.imagens = results);
  }

}


