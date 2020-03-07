import { Injectable } from "@angular/core";
import { Employee } from "../classes/employee";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { BonENL } from "../classes/bon-enl";
import { Mail } from "../classes/mail";
import { BonENLV } from "../classe/bon-enlv";
@Injectable({
  providedIn: "root"
})
export class BonEnlvSrvService {
  readonly rootURL = "https://localhost:44309/api/";
  // readonly rootURL = "https://localhost:44392/odata/";
  employee: Employee;
  List: Employee[];
  constructor(private http: HttpClient) {}

  getAllBon() {
    return this.http.get<any>(this.rootURL + "BONENLVTs");
  }

  getAllBon2() {
    return this.http.get<any>(this.rootURL + "VIEW_TICCBON");
  }

  getBonById(id: number) {
    return this.http.get<any>(this.rootURL + "VIEW_TICCBON/" + id);
  }

  getBonExport() {
    return this.http.get<any>(this.rootURL + "GetByPays");
  }

  getBonImport() {
    return this.http.get<any>(this.rootURL + "Import");
  }

  postBon(bon: BonENL) {
    return this.http.post<any>(this.rootURL + "BONENLVTs/", bon, {
      headers: new HttpHeaders({ "Content-Type": "application/json" }),
      responseType: "text" as "json"
    });
  }

  postBon2(bon: BonENLV) {
    return this.http.post<any>(this.rootURL + "BONENLVTs/", bon, {
      headers: new HttpHeaders({ "Content-Type": "application/json" }),
      responseType: "text" as "json"
    });
  }

  deleteBon(id: number) {
    return this.http.delete(
      this.rootURL + "BONENLVTs/" + id
    ) /*.subscribe(
      data => console.log(data),
      error => console.log(error),
      () => console.log("completed!")
    )*/;
  }

  DeleteBonColis(id: number) {
    return this.http.delete(this.rootURL + "DeleteBONENLVTColis/" + id);
  }

  SendEmail(/*to: string , subject: string, body: string*/ mail: Mail) {
    return this.http.post<any>(
      this.rootURL + "Postsendmail/",
      mail /*+ "/" + subject + "/" + body*/,
      {
        headers: new HttpHeaders({ "Content-Type": "application/json" }),
        responseType: "text" as "json"
      }
    );
  }
}
