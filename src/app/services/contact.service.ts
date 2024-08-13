import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environments';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  URL_API: string = environment.API_AGENDA;

  private http  = inject(HttpClient);

  constructor() { }

  list(){
    return this.http.get(this.URL_API + '/contactList')
  }

  get(id: number){
    return this.http.get(this.URL_API + `/contactList/${id}`)
  }

  create(contact: any){
    return this.http.post(this.URL_API + '/createContact', contact);
  }

  update(id: number,  contact: any){
    return this.http.put(this.URL_API + `/updateContact/${id}`, contact);
  }

  delete(id: number){
    return this.http.delete(this.URL_API + `/deleteContact/${id}`)
  }
}
