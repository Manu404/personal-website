import {
  AfterViewInit,
  Component,
  ComponentFactoryResolver,
  Directive,
  ElementRef, Input,
  OnInit,
  ViewChild,
  ViewContainerRef
} from '@angular/core';
import {CommandRepository} from "../../shared/CommandRepository";
import {BioComponent} from "../bio/bio.component";
import {ErrorComponent} from "../error/error.component";
import {WorkComponent} from "../work/work.component";
import {MusicComponent} from "../music/music.component";
import {ProjectComponent} from "../project/project.component";
import {ContactComponent} from "../contact/contact.component";
import {HelpComponent} from "../help/help.component";

import {LicenceComponent} from '../licence/licence.component';

@Component({
  selector: 'app-terminal-input',
  templateUrl: './terminal-input.component.html',
  styleUrls: ['./terminal-input.component.css']
})
export class TerminalInputComponent implements OnInit, AfterViewInit {
  @ViewChild('resultHost', { read: ViewContainerRef }) resultHost: ViewContainerRef;
  @ViewChild('commandInput') commandInput:ElementRef;

  @Input() Command: string;

  public IsEnabled = true;

  constructor(public CommandRepository: CommandRepository, private componentFactoryResolver: ComponentFactoryResolver) {

  }

  ngOnInit() {

  }

  ngAfterViewInit() {
    this.IsEnabled = true;
    if (this.Command.trim() !== '') {
      this.LoadCommandResult();
    }
  }

  OnCommandKeyDown(event) {
    if(event.keyCode === 13) {
      this.CommandRepository.AddCommand(this.Command);
      this.Command = '';
      this.commandInput.nativeElement.focus();
      window.scrollTo(0, document.body.scrollHeight);
    }
  }

  private LoadCommandResult() {
    this.IsEnabled = false;
    this.LoadComponent();
  }

  private LoadComponent() {
    if (this.Command.toLowerCase() === 'bio') {
      this.LoadResult(BioComponent);
    }
    else if (this.Command.toLowerCase() === 'work') {
      this.LoadResult(WorkComponent);
    }
    else if (this.Command.toLowerCase() === 'music') {
      this.LoadResult(MusicComponent);
    }
    else if (this.Command.toLowerCase() === 'project') {
      this.LoadResult(ProjectComponent);
    }
    else if (this.Command.toLowerCase() === 'contact') {
      this.LoadResult(ContactComponent);
    }
    else if (this.Command.toLowerCase() === 'licence') {
      this.LoadResult(LicenceComponent);
    }
    else if (this.Command.toLowerCase() === 'help') {
      this.LoadResult(HelpComponent);
    }
    else if (this.Command.toLowerCase() === 'clear') {
      this.CommandRepository.Clear();
      this.IsEnabled = true;
    }
    else {
      this.LoadResult(ErrorComponent);
    }
  }

  private LoadResult(componentType) {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(componentType);
    const component = componentFactory.create( this.resultHost.parentInjector);
    this.resultHost.insert(component.hostView);
  }
}
