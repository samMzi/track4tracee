import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgForm } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { TestComponent } from "./test/test.component";
import { AuthentificationComponent } from "./authentification/authentification.component";
import { HomeComponent } from "./home/home.component";
import { GlobalComponent } from "./global/global.component";
import { SaisiBonComponent } from "./saisi-bon/saisi-bon.component";
import { ExportComponent } from "./export/export.component";
import { ImportComponent } from "./import/import.component";
import { ColisageComponent } from "./colisage/colisage.component";
import { FooterComponent } from "./footer/footer.component";
import { ToastrModule } from "ngx-toastr";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ProfileComponent } from "./profile/profile.component";
import { MailComponent } from "./mail/mail.component";
import { GestionProfilComponent } from "./gestion-profil/gestion-profil.component";
import { ContactComponent } from "./contact/contact.component";
import { TiersComponent } from "./tiers/tiers.component";
import { HttpClientModule } from "@angular/common/http";
import { EnlevementsComponent } from './enlevements/enlevements.component';
import { ConfigMailComponent } from './config-mail/config-mail.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DashboardComponent,
    TestComponent,
    AuthentificationComponent,
    HomeComponent,
    GlobalComponent,
    SaisiBonComponent,
    ExportComponent,
    ImportComponent,
    ColisageComponent,
    FooterComponent,
    ProfileComponent,
    MailComponent,
    GestionProfilComponent,
    ContactComponent,
    TiersComponent,
    EnlevementsComponent,
    ConfigMailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ToastrModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
