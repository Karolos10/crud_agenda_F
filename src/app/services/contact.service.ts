import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environments';
import { Contact } from '../model/contact.interface';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  URL_API: string = environment.API_AGENDA;

  private http  = inject(HttpClient);

  constructor() { }

  list(){
    return this.http.get<Contact[]>(this.URL_API + '/contactList')
  }

  get(id: number){
    return this.http.get<Contact>(this.URL_API + `/contactList/${id}`)
  }

  create(contact: any){
    return this.http.post<Contact>(this.URL_API + '/createContact', contact);
  }

  update(id: number,  contact: any){
    return this.http.put<Contact>(this.URL_API + `/updateContact/${id}`, contact);
  }

  delete(id: number){
    return this.http.delete(this.URL_API + `/deleteContact/${id}`)
  }
}
