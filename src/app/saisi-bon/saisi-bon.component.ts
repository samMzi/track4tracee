import { Component, OnInit } from "@angular/core";
import { DynamicGrid } from "../grid.model";
//import { ToastrService } from "ngx-toastr";
import { NgForm } from "@angular/forms";
import { BonEnlvSrvService } from "../services/bon-enlv-srv.service";
import { BonENL } from "../classes/bon-enl";
import { Mail } from "../classes/mail";
@Component({
  selector: "app-saisi-bon",
  templateUrl: "./saisi-bon.component.html",
  styleUrls: ["./saisi-bon.component.css"]
})
export class SaisiBonComponent implements OnInit {
  //$: any;
  constructor(
    /*private toastr: ToastrService*/ private service: BonEnlvSrvService
  ) {}
  bonEnlv: BonENL = new BonENL();
  mail: Mail = new Mail();
  ngOnInit() {
    this.loadScripts();
  }
  /*public loadScript(url) {
    console.log("preparing to load...");
    let node = document.createElement("script");
    node.src = url;
    node.type = "text/javascript";
    node.async = true;
    node.charset = "utf-8";
    document.getElementsByTagName("head")[0].appendChild(node);
  }*/

  loadScripts() {
    const externalScriptArray = [
      "assets/js/bootstrap-datepicker.js",
      "assets/js/datepicker-init.js",
      "assets/js/bootstrap-datetimepicker.js",
      "assets/js/bootstrap-datetimepicker-init.js"
    ];
    for (let i = 0; i < externalScriptArray.length; i++) {
      const scriptTag = document.createElement("script");
      scriptTag.src = externalScriptArray[i];
      scriptTag.type = "text/javascript";
      scriptTag.async = false;
      scriptTag.charset = "utf-8";
      document.getElementsByTagName("head")[0].appendChild(scriptTag);
    }
  } /*
  show() {
    this.bonEnlv.NUMBON = $("#numBon")
      .val()
      .toString();
    this.bonEnlv.DONNEURORDRE = $("#DonneurOrdre")
      .val()
      .toString();
    this.bonEnlv.DATEENLV = $("#DateEnlv")
      .val()
      .toString();
    this.bonEnlv.HEUREENLV ==
      $("#HeureEnlv")
        .val()
        .toString();
    this.bonEnlv.EXPEDITEUR = $("#Expediteur")
      .val()
      .toString();
    this.bonEnlv.ADR1EXPEDITEUR = $("#Adr1Expediteur")
      .val()
      .toString();
    this.bonEnlv.ADR2EXPEDITEUR = $("#Adr2Expediteur")
      .val()
      .toString();
    this.bonEnlv.ADR3EXPEDITEUR = $("#Adr3Expediteur")
      .val()
      .toString();
    this.bonEnlv.DEPT = $("#Dept")
      .val()
      .toString();
    this.bonEnlv.VILLE = $("#Ville")
      .val()
      .toString();
    this.bonEnlv.PAYS = $("#Pays")
      .val()
      .toString();
    this.bonEnlv.CP = $("#CP")
      .val()
      .toString();
    this.bonEnlv.TEL = $("#Tel")
      .val()
      .toString();
    this.bonEnlv.EMAIL = $("#Email")
      .val()
      .toString();
    this.bonEnlv.DESTINATAIRE = $("#Destinataire")
      .val()
      .toString();
    this.bonEnlv.ADR1DESTINATAIRE = $("#Adr1Destinataire")
      .val()
      .toString();
    this.bonEnlv.ADR2DESTINATAIRE = $("#Adr2Destinataire")
      .val()
      .toString();
    this.bonEnlv.ADR3DESTINATAIRE = $("#Adr3Destinataire")
      .val()
      .toString();
    this.bonEnlv.DATELIV = $("#DateLiv")
      .val()
      .toString();
    this.bonEnlv.HEURELIV = $("#HeureLiv")
      .val()
      .toString();
    this.bonEnlv.COMMENT1 = $("#Comment1")
      .val()
      .toString();
    this.bonEnlv.COMMENT2 = $("#Comment2")
      .val()
      .toString();
    this.bonEnlv.COMMENT3 = $("#Comment3")
      .val()
      .toString();
    this.bonEnlv.STATUS = "0";
    this.service.postBon(this.bonEnlv).subscribe(
      data => alert(Math.floor(parseInt(data.toString()))),

      error => console.log(error)
      //() => console.log(product.designation)
    );

    //alert("hello");
    //alert($("#dest3").val());
    //alert($("#adr1dest").val());
  }*/
  testbon() {
    this.service.getAllBon2().subscribe(data => {
      console.log(data);
    });
  }
  sendMAil() {
    this.mail.to = "sam.mezzi21@gmail.com";
    this.mail.subject = "sujet1";
    this.mail.body = "body sample";
    this.service.SendEmail(this.mail).subscribe(
      res => {
        console.log(res);
      },
      error => console.error(error)
    );
  }
}
