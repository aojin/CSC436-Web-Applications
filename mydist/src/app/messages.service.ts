import { Injectable } from "@angular/core";
import { Message } from "./models/message";
import { Messages } from "./models/messages";
import { User } from "./models/user";

@Injectable({
  providedIn: "root"
})
export class MessagesService {
  mObj;
  constructor() {
    this.mObj = new Messages();
  }

  addMessages() {
    this.mObj.messages.push(new Message("message 1"));
    this.mObj.messages.push(new Message("message 2"));
    this.mObj.messages.push(new Message("message 3"));
    return this.mObj;
  }
}
