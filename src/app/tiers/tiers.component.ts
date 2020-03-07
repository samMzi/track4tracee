import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-tiers",
  templateUrl: "./tiers.component.html",
  styleUrls: ["./tiers.component.css"]
})
export class TiersComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    this.loadScripts();
  }
  loadScripts() {
    const externalScriptArray = [
      "assets/js/jquery.dataTables.min.js",
      "assets/js/dataTables.bootstrap4.min.js",
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
}
