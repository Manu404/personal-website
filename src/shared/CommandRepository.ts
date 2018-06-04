import {Injectable} from "@angular/core";

@Injectable()
export class CommandRepository {
  public TypedCommands = [ ];

  public GetLastCommand() {
    return this.TypedCommands[this.TypedCommands.length - 1];
  }

  public AddCommand(command: string) {
    this.TypedCommands.push(command);
  }

  public Clear() {
    this.TypedCommands.splice(0, this.TypedCommands.length);
  }

}
