import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { TestComponent } from "./test/test.component";
import { AuthentificationComponent } from "./authentification/authentification.component";
import { SaisiBonComponent } from "./saisi-bon/saisi-bon.component";
import { ExportComponent } from "./export/export.component";
import { ImportComponent } from "./import/import.component";
import { ProfileComponent } from "./profile/profile.component";
import { MailComponent } from "./mail/mail.component";
import { GestionProfilComponent } from "./gestion-profil/gestion-profil.component";
import { ContactComponent } from "./contact/contact.component";
import { TiersComponent } from "./tiers/tiers.component";
import { EnlevementsComponent } from "./enlevements/enlevements.component";
import { ConfigMailComponent } from "./config-mail/config-mail.component";

const routes: Routes = [
  {
    path: "dashboard",
    component: DashboardComponent
  },
  { path: "test", component: TestComponent },
  { path: "auth", component: AuthentificationComponent },
  { path: "SaisiBon", component: SaisiBonComponent },
  { path: "export", component: ExportComponent },
  { path: "import", component: ImportComponent },
  { path: "profil", component: ProfileComponent },
  { path: "mail", component: MailComponent },
  { path: "contact", component: ContactComponent },
  { path: "tiers", component: TiersComponent },
  { path: "Enlv", component: EnlevementsComponent },
  { path: "ConfMail", component: ConfigMailComponent },
  { path: "", redirectTo: "/auth", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
