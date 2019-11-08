import { Injectable } from "@angular/core";
import {
  CanActivate,
  Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from "@angular/router";

@Injectable()
export class AuthService {
  login(user: string, password: string): boolean {
    if (user === "chandlergegg@gmail.com" && password === "csc436!") {
      localStorage.setItem("username", user);

      return true;
    }

    return false;
  }

  logout(): any {
    localStorage.removeItem("username");
  }

  getUser(): any {
    return localStorage.getItem("username");
  }

  isLoggedIn(): boolean {
    return this.getUser() !== null;
  }
}

export const AUTH_PROVIDERS: Array<any> = [
  { provide: AuthService, useClass: AuthService }
];
