import { Component } from "@angular/core";
import { MyServiceService } from "../my-service.service";

@Component({
  selector: "app-my-button",
  templateUrl: "./my-button.component.html",
  styleUrls: ["./my-button.component.css"],
  providers: [MyServiceService]
})
export class MyButtonComponent {
  isLiked;
  constructor(private myService: MyServiceService) {
    this.isLiked = this.myService.isLiked;
  }

  public get displayBoolean(): Boolean {
    return this.myService.isLiked;
  }

  toggleLiked() {
    this.myService.likeImage;
  }
}
