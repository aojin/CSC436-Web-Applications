import { Component } from "@angular/core";
import { MyServiceService } from "./my-service.service";
import { MessagesService } from "./messages.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  providers: [MyServiceService, MessagesService]
})
export class AppComponent {
  title = "mydist";
  messages;

  constructor(private messagesService: MessagesService) {
    messagesService.addMessages();
    this.messages = this.messagesService.mObj.messages;
  }
}
