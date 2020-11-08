import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { HeaderComponent } from "./header/header.component";
import { HomeComponent } from "./home/home.component";
import { FamilyComponent } from "./family/family.component";
import { WorkComponent } from "./work/work.component";
import { PersonalComponent } from "./personal/personal.component";

const routes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "home", component: HomeComponent },
  { path: "family", component: FamilyComponent },
  { path: "work", component: WorkComponent },
  { path: "personal", component: PersonalComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
