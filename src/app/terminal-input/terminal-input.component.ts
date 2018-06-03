import {
  AfterViewInit,
  Component,
  ComponentFactoryResolver,
  Directive,
  ElementRef,
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

/*@Directive({
  selector: '[content-host]',
})
export class ContentDirective {
  constructor(public viewContainerRef: ViewContainerRef) { }
}*/

@Component({
  selector: 'app-terminal-input',
  templateUrl: './terminal-input.component.html',
  styleUrls: ['./terminal-input.component.css']
})
export class TerminalInputComponent implements OnInit, AfterViewInit {
  @ViewChild('contenthost', { read: ViewContainerRef }) entry: ViewContainerRef;
  @ViewChild('commandInput') cmd:ElementRef;

  public IsEnabled = true;
  public Command = '';
  constructor(public CommandRepository: CommandRepository, private componentFactoryResolver: ComponentFactoryResolver) {
    this.IsEnabled = true;
    console.debug("test");
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.cmd.nativeElement.focus();
    this.IsEnabled = true;
  }

  private LoadResult(componentType) {
    let componentFactory = this.componentFactoryResolver.resolveComponentFactory(componentType);
    let component = componentFactory.create( this.entry.parentInjector);
    this.entry.insert(component.hostView);
  }

  OnCommandKeyDown(event) {
    if(event.keyCode == 13) {
      this.IsEnabled = false;
      this.CommandRepository.TypedCommands.push(this.Command);

      if(this.Command.toLowerCase() === "bio") {
        this.LoadResult(BioComponent);
      }
      else if(this.Command.toLowerCase() == "work") {
        this.LoadResult(WorkComponent);
      }
      else if(this.Command.toLowerCase() == "music") {
        this.LoadResult(MusicComponent);
      }
      else if(this.Command.toLowerCase() == "project") {
        this.LoadResult(ProjectComponent);
      }
      else if(this.Command.toLowerCase() == "contact") {
        this.LoadResult(ContactComponent);
      }
      else if(this.Command.toLowerCase() == "help") {
        this.LoadResult(HelpComponent);
      }
      else if(this.Command.toLowerCase() == "clear") {
        this.CommandRepository.TypedCommands = [ ' ' ];
        this.IsEnabled = true;
      }
      else
        this.LoadResult(ErrorComponent);
    }
  }

}
