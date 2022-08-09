import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ContactService } from '../../service/contact.service';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent implements OnInit {

  public contactList: any[] = [];
  private limit : number = 5;
  private offset : number = 0;

  constructor(
    private router: Router,
    private contactService: ContactService
  ) { }

  ngOnInit(): void {
    this.getContacts(this.offset);
  }

  public gotoDetail(id: any) {
    this.router.navigate(['/details', id])
  }
  private getContacts( offset:number) {
    this.contactService.clientList({
      limit : this.limit,
      offset
    }).subscribe((res) => {
      if (res) {
        this.contactList = res.data
      }
    })
  }

  public nextPage(){
    this.offset = this.limit + this.offset;
    this.getContacts(this.offset);
  }

  public previousPage(){
    if(this.offset - this.limit >= 0){
      this.offset = this.offset - this.limit;
      this.getContacts(this.offset)
    }
  }


}
