import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { environment } from 'src/environments/environment';
import type { GiphyResponse } from '../interfaces/giphy.interfaces';
import { single } from 'rxjs';
import { Gif } from '../interfaces/gif.interface';
import { gifMapper } from '../mapper/gifs.mapper';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  trendginsGifs=signal<Gif[]>([])
  
  private http=inject(HttpClient)

  constructor(){
    this.loadTrendigGifs()
  }
  
  loadTrendigGifs(){
    this.http.get<GiphyResponse>(`${environment.api_url}/gifs/trending?`,{
      params:{
        api_key:environment.api_key_gihpy,
        limit:20
      }
    }).subscribe((resp)=>{
      const gifs = gifMapper.mapGiphystoGifs(resp.data)
      console.log({gifs})
    })
  }
}
