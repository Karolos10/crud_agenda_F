
import { Component, inject, OnInit } from '@angular/core';
import { ContactService } from '../services/contact.service';
import { DatePipe } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Contact } from '../model/contact.interface';

@Component({
  selector: 'app-contact-list',
  standalone: true,
  imports: [DatePipe, RouterModule],
  templateUrl: './contact-list.component.html',
  styleUrl: './contact-list.component.css'
})
export default class ContactListComponent implements OnInit{

  private contactservice = inject(ContactService);

  contacts: Contact[] = [];

  ngOnInit(): void {

    this.loadAll();
      
  }

  loadAll(){
    this.contactservice.list().subscribe((contacts) =>{
    this.contacts = contacts;
    })
  }

  deleteContact(contac: Contact){
    this.contactservice.delete(contac.id).subscribe( () => {
      this.loadAll();
    })
  }

}
