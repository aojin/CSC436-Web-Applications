import { Messages } from "./messages";
import { Message } from "./message";
export class User {
  name: string;
  messages: Message[];

  constructor(name: string, messages: Message[]) {
    this.name = name;
    this.messages = messages;
  }
}
