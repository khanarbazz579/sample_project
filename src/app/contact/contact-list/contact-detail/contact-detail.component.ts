import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { ContactService } from 'src/app/service/contact.service';
@Component({
  selector: 'app-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.scss']
})
export class ContactDetailComponent implements OnInit {

  public contactId: number;
  public contactDetails: any[] = [];


  constructor(
    private _activateRoute: ActivatedRoute,
    private contactService: ContactService
  ) {
    this.contactId = this._activateRoute.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.contactDetail();
  }
  contactDetail() {

    this.contactService.clientDetails(this.contactId).subscribe((res) => {
      if (res) {
        this.contactDetails.push(res.data);
      }
    })

  }

}
