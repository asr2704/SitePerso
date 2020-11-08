import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";

import { MatIconModule } from '@angular/material/icon';

import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { HeaderComponent } from "./header/header.component";
import { FamilyComponent } from "./family/family.component";
import { WorkComponent } from "./work/work.component";
import { PersonalComponent } from "./personal/personal.component";
import { FooterComponent } from "./footer/footer.component";

@NgModule({
  imports: [BrowserModule, FormsModule, AppRoutingModule, MatIconModule],
  declarations: [
    AppComponent,
    HomeComponent,
    FamilyComponent,
    WorkComponent,
    PersonalComponent,
    HeaderComponent,
    FooterComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
