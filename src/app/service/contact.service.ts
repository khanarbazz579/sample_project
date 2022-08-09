import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { map } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private baseUrl = environment.baseUrl

  constructor(private http: HttpClient ) { }

  public clientList(params:any){
    return this.http.get(`${this.baseUrl}/contacts`,{params}).pipe(map((res:any)=>{
     return res;
    }))
  }
  public clientDetails(id:any){
    return this.http.get(`${this.baseUrl}/contacts/${id}/email_addresses`).pipe(map((res:any)=>{
      return res;
  }
    ))
}
}