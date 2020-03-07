import { Injectable } from "@angular/core";
import { Employee } from "../classes/employee";
import { HttpClient, HttpHeaders } from "@angular/common/http";
@Injectable({
  providedIn: "root"
})
export class EmployeeServicesService {
  readonly rootURL = "https://localhost:44347/api/";
  employee: Employee;
  List: Employee[];

  constructor(private http: HttpClient) {}

  getAllEmployees() {
    return this.http
      .get(this.rootURL + "EMPLOYEEs", {
        headers: new HttpHeaders({ "Content-Type": "application/json" }),
        responseType: "text" as "json"
      })
      .toPromise()
      .then(res => (this.List = res as Employee[]));
  }
  getAllEmployees1(lista: Employee[]) {
    return this.http
      .get(
        this.rootURL +
          "EMPLOYEEs" /*, {
        headers: new HttpHeaders({ "Content-Type": "application/json" }),
        responseType: "text" as "json"
      }*/
      )
      .subscribe(res => {
        lista = res as Employee[];
        console.log(lista);
      });
  }

  getAllProduct() {
    return this.http.get<any>(this.rootURL + "EMPLOYEEs");
  }
}
