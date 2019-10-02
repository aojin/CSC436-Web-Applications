export class Message {
  timestamp: any;
  text: string;

  constructor(text: string) {
    this.timestamp = new Date();
    this.text = text;
  }
}
