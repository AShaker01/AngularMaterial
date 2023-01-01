import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../shared/material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContactManagerAppComponent } from './contactmanager-app/contactmanager-app.component';
import { ToolBarComponent } from './tool-bar/tool-bar.component';
import { MainContentComponent } from './main-content/main-content.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { ContactManagerRoutingModule } from './contactmanager-routing.module';
import { UserService } from './services/user.service';
import { NotesComponent } from './notes/notes.component';
import { NewContactDialogComponent } from './new-contact-dialog/new-contact-dialog.component';


@NgModule({
  declarations: [
    ContactManagerAppComponent,
    ToolBarComponent,
    MainContentComponent,
    SidenavComponent,
    NotesComponent,
    NewContactDialogComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    ContactManagerRoutingModule
  ],
  providers : [UserService]
})
export class ContactManagerModule { }
