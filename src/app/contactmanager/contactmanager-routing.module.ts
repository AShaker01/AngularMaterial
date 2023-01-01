import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactManagerAppComponent as ContactManagerAppComponent } from './contactmanager-app/contactmanager-app.component';
import { MainContentComponent } from './main-content/main-content.component';
import { NewContactDialogComponent } from './new-contact-dialog/new-contact-dialog.component';
const routes: Routes = [
  {
    path: '', component: ContactManagerAppComponent, children: [
      { path: ':id', component: MainContentComponent },
      { path: '', component: MainContentComponent }
    ]
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule]
})
export class ContactManagerRoutingModule { }
