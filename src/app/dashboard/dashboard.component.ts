import { Component, OnInit } from "@angular/core";
import { DynamicScriptLoaderService } from "../dynamic-script-loader-service.service";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"]
})
export class DashboardComponent implements OnInit {
  constructor(private dynamicScriptLoader: DynamicScriptLoaderService) {}

  ngOnInit() {
    this.loadScript("assets/js/Chart.bundle.js");
    this.loadScript("assets/js/utils.js");
    this.loadScript("assets/js/home-data.js");
  }

  /*loadScripts() {
    this.dynamicScriptLoader
      .loadScript("../assets/js/Chart.bundle.js")
      .subscribe(_ => {});

    this.dynamicScriptLoader
      .loadScript("../assets/js/utils.js")
      .subscribe(_ => {
        console.log("Jquery is loaded!");
      });

    this.dynamicScriptLoader
      .loadScript("../assets/js/home-data.js")
      .subscribe(_ => {});
  }
*/
  public loadScript(url) {
    console.log("preparing to load...");
    let node = document.createElement("script");
    node.src = url;
    node.type = "text/javascript";
    node.async = true;
    node.charset = "utf-8";
    document.getElementsByTagName("head")[0].appendChild(node);
  }
}
