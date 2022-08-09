import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactDetailComponent } from './contact-detail/contact-detail.component';
// import { ContactlistComponent } from '../contact/contactlist/contactlist.component';
import { ContactListComponent } from './contact-list.component';

const routes: Routes = [
  { path:'',component:ContactListComponent},
  { path:'details/:id',component:ContactDetailComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactListRoutingModule { }
