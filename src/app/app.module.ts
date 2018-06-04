import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { TerminalInputComponent } from './terminal-input/terminal-input.component';
import {CommandRepository} from "../shared/CommandRepository";
import { BioComponent } from './bio/bio.component';
import { ErrorComponent } from './error/error.component';
import { WorkComponent } from './work/work.component';
import { MusicComponent } from './music/music.component';
import { ProjectComponent } from './project/project.component';
import { ContactComponent } from './contact/contact.component';
import { HelpComponent } from './help/help.component';
import { LicenceComponent } from './licence/licence.component';


@NgModule({
  declarations: [
    AppComponent,
    TerminalInputComponent,
    BioComponent,
    ErrorComponent,
    WorkComponent,
    MusicComponent,
    ProjectComponent,
    ContactComponent,
    HelpComponent,
    LicenceComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [CommandRepository],
  bootstrap: [AppComponent],
  entryComponents: [BioComponent, ErrorComponent, WorkComponent, MusicComponent, ProjectComponent, ContactComponent, HelpComponent, LicenceComponent]
})
export class AppModule { }
