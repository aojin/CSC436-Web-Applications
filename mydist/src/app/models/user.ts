export class User {
  name: string;
  messages: Messages;

  constructor(name: string, messages: Messages) {
    this.name = name;
    this.messages = messages;
  }
}
