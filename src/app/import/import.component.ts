import { Component, OnInit } from "@angular/core";
// Service
import { DynamicScriptLoaderService } from "../dynamic-script-loader-service.service";
import { BonENL } from "../classes/bon-enl";
import { BonEnlvSrvService } from "../services/bon-enlv-srv.service";
import { TidossSrvService } from "../services/tidoss-srv.service";
import { Tidoss } from "../classe/tidoss";

@Component({
  selector: "app-import",
  templateUrl: "./import.component.html",
  styleUrls: ["./import.component.css"]
})
export class ImportComponent implements OnInit {
  constructor(
    private serviceBon: BonEnlvSrvService,
    private serviceImExp: TidossSrvService
  ) {}
  public showContent: boolean = false;
  ListImport: Tidoss[]; //BonENL[];

  ngOnInit() {
    this.loadScripts();
    /*
    this.serviceBon.getBonImport().subscribe(
      res => {
        console.log(res);
        this.ListImport = res;
      },
      error => console.log(error)
    );*/
    this.serviceImExp.getDossierImport().subscribe(res => {
      this.ListImport = res;
    });
  }

  loadScripts() {
    const externalScriptArray = [
      "assets/js/jquery.dataTables.min.js",
      "assets/js/dataTables.bootstrap4.min.js",
      "assets/js/dataTables.buttons.min.js",
      "assets/js/buttons.flash.min.js",
      "assets/js/jszip.min.js",
      "assets/js/pdfmake.min.js",
      "assets/js/vfs_fonts.js",
      "assets/js/buttons.html5.min.js",
      "assets/js/buttons.print.min.js",
      "assets/js/table_data.js"
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
  test() {
    this.serviceImExp.getDossierImport().subscribe(res => {
      console.log(res);
    });
  }
}
