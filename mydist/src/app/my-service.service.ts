import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class MyServiceService {
  isLiked: Boolean = false;

  constructor() {}

  likeImage() {
    this.isLiked = !this.isLiked;
    console.log(this.isLiked);
    return this.isLiked;
  }
}
