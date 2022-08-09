import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactListRoutingModule } from './contact-list-routing.module';
import { ContactDetailComponent } from './contact-detail/contact-detail.component';
// import { ContactlistComponent } from '../contact/contactlist/contactlist.component';
import { ContactListComponent } from './contact-list.component';


@NgModule({
  declarations: [
    ContactListComponent,
    ContactDetailComponent
  ],
  imports: [
    CommonModule,
    ContactListRoutingModule
  ],
  exports:[
    ContactListComponent,
    ContactDetailComponent
  ]
})
export class ContactListModule { }
