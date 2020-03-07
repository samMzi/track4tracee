import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class TidossSrvService {
  readonly rootURL = "https://localhost:44309/api/";
  constructor(private http: HttpClient) {}

  getDossierImport() {
    return this.http.get<any>(this.rootURL + "GETDosImport");
  }

  getDossierExport() {
    return this.http.get<any>(this.rootURL + "GETDosExport");
  }
}
