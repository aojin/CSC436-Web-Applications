import { Component } from "@angular/core";
import { AuthService } from "../auth.service";
import {
  CanActivate,
  Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent {
  message: string;

  constructor(public authService: AuthService, private router: Router) {
    this.message = "";
  }

  login(username: string, password: string): boolean {
    this.message = "";
    if (!this.authService.login(username, password)) {
      this.message = "Incorrect credentials.";
      setTimeout(
        function() {
          this.message = "";
        }.bind(this),
        2500
      );
    } else {
      this.router.navigateByUrl("/home");
    }
    return false;
  }

  logout(): boolean {
    this.authService.logout();
    return false;
  }
}
