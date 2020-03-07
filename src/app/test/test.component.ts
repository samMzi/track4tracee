import { Component, OnInit } from "@angular/core";
import { EmployeeServicesService } from "../services/employee-services.service";
import { Employee } from "../classes/employee";
import { BonEnlvSrvService } from "../services/bon-enlv-srv.service";

@Component({
  selector: "app-test",
  templateUrl: "./test.component.html",
  styleUrls: ["./test.component.css"]
})
export class TestComponent implements OnInit {
  constructor(
    private service: EmployeeServicesService,
    private serviceBon: BonEnlvSrvService
  ) {}
  heroes: Employee[];

  ngOnInit() {
    this.loadScripts();
    /*this.service.getAllEmployees1(this.heroes);*/
    this.service.getAllProduct().subscribe(res => {
      this.heroes = res;
      //console.log(this.heroes);
    });
  }
  loadScripts() {
    const externalScriptArray = [
      "assets/js/active.js",
      "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.0/jquery.min.js",
      "https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.7/js/bootstrap.min.js"
    ];
    for (let i = 0; i < externalScriptArray.length; i++) {
      const scriptTag = document.createElement("script");
      scriptTag.src = externalScriptArray[i];
      scriptTag.type = "text/javascript";
      scriptTag.async = false;
      scriptTag.charset = "utf-8";
      document.getElementsByTagName("head")[0].appendChild(scriptTag);
    }
  }
}
