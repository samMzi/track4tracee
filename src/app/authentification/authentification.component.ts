import { Component, OnInit } from "@angular/core";
import { EmployeeServicesService } from "../services/employee-services.service";

@Component({
  selector: "app-authentification",
  templateUrl: "./authentification.component.html",
  styleUrls: ["./authentification.component.css"]
})
export class AuthentificationComponent implements OnInit {
  constructor(private service: EmployeeServicesService) {}

  ngOnInit() {
    //console.log(this.service.getAllEmployees());
    this.service.getAllProduct().subscribe(res => {
      console.log(res);
    });
  }
}
