import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-mail",
  templateUrl: "./mail.component.html",
  styleUrls: ["./mail.component.css"]
})
export class MailComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    this.loadScripts();
  }
  loadScripts() {
    const externalScriptArray = [
      "assets/js/jquery.dataTables.min.js",
      "assets/js/dataTables.bootstrap4.min.js",
      "assets/js/table_data.js",
      "assets/js/jquery-tags-input.js",
      "assets/js/jquery-tags-input-init.js"
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
