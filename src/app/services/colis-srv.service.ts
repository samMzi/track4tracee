import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Colis } from "../classe/colis";

@Injectable({
  providedIn: "root"
})
export class ColisSrvService {
  readonly rootURL = "https://localhost:44309/api/";
  // readonly rootURL = "https://localhost:44392/odata/";
  constructor(private http: HttpClient) {}

  getAllColis() {
    return this.http.get<any>(this.rootURL + "TICOLIs");
  }

  getColisById(idcolis: number) {
    return this.http.get<any>(this.rootURL + "TICOLIs/" + idcolis);
  }
  getcoliByIdBon(idcolis: number) {
    return this.http.get<any>(this.rootURL + "GETCOLIS/" + idcolis);
  }
  postColis(colis: Colis) {
    return this.http.post(this.rootURL + "TICOLIs", colis, {
      headers: new HttpHeaders({ "Content-Type": "application/json" }),
      responseType: "text" as "json"
    });
  }

  deleteColis(id: number) {
    return this.http.delete(
      this.rootURL + "TICOLIs/" + id
    ) /*.subscribe(
      data => console.log(data),
      error => console.log(error),
      () => console.log("completed!")
    )*/;
  }
}
