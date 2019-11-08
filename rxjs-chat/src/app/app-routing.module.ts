import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ChatPageComponent } from "./chat-page/chat-page.component";
import { LoginComponent } from "./login/login.component";
import { LoggedInGuard } from "./logged-in.guard";

const routes: Routes = [
  { path: "", component: LoginComponent },
  {
    path: "home",
    component: ChatPageComponent,
    canActivate: [LoggedInGuard]
  },
  { path: "**", redirectTo: "" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
