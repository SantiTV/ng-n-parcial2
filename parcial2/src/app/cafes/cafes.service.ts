import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



import { Observable } from 'rxjs';
import { Cafes } from './cafes';
import { CafeListComponent } from './cafe-list/cafe-list.component';



@Injectable({
  providedIn: 'root'
})
export class CafesService {
  private apiUrl: string = 'https://gist.githubusercontent.com/josejbocanegra/fe9511b47ddb335bb0da97ff9ba7462e/raw/a9601bdb1cb26abc1dabec48b7f2417440143541/cafes.json';
constructor(private http: HttpClient) { }

getCafes(): Observable<CafeListComponent[]>{
  return this.http.get<CafeListComponent[]>(this.apiUrl);
}
}
