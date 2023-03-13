import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Article} from './models/article';
import {Client} from './models/client';
 
@Injectable({
  providedIn: 'root'
})
export class DataService {
public Url="http://localhost:8000/api/articles";
public Urlc="http://localhost:8000/api/clients";

  constructor(private http:HttpClient) { }
  addArticle(article?: Article): Observable<Object>{
    return this.http.post<Object>('${this.Url}',article);
  }
getArticles(){
  return this.http.get(this.Url);
}
deleteArticle(id:any){
  return this.http.delete('http://localhost:8000/api/articles'+id);
}
updateArticle(data: any){
  return this.http.put('http://localhost:8000/api/articles',data);
}

getArticleById(id:any){
  return this.http.get('http://localhost:8000/api/articles'+id);
}


addClient(client?: Client): Observable<Object>{
  return this.http.post<Object>('${this.Url}',client);
}

}
