import { Component } from '@angular/core';
import {CommandRepository} from "../shared/CommandRepository";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(public CommandRepository: CommandRepository) {

  }

  title = 'app';
}
