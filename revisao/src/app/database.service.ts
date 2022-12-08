import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Wallpaper } from './wallpaper/wallpaper.model';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  readonly API = 'http://localhost:3000/imagens/';

  HttpOptions = {
    headers: new HttpHeaders({'Content-Type' : 'application/json'})
  };  

  constructor(private http: HttpClient) { }
  
  getWallpaper(){
    return this.http.get<Wallpaper[]>(this.API);
  }

  postWallpaper(imagens: Wallpaper){
    return this.http.post(this.API, JSON.stringify(imagens), this.HttpOptions).subscribe();
  }

}
