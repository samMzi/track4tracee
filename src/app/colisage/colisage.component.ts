import { Component, OnInit } from "@angular/core";
import { DynamicGrid } from "../grid.model";
import { BonEnlvSrvService } from "../services/bon-enlv-srv.service";
import { BonENL } from "../classes/bon-enl";
import { Colis } from "../classe/colis";
import { ColisSrvService } from "../services/colis-srv.service";
@Component({
  selector: "app-colisage",
  templateUrl: "./colisage.component.html",
  styleUrls: ["./colisage.component.css"]
})
export class ColisageComponent implements OnInit {
  constructor(
    private service: BonEnlvSrvService,
    private serviceColis: ColisSrvService
  ) {}
  bonEnlv: BonENL = new BonENL();
  dynamicArray: Array<DynamicGrid> = [];
  newDynamic: any = {};
  colis: Colis = new Colis();
  list: any[];
  ngOnInit() {
    this.newDynamic = { title1: "", title2: "", title3: "" };
    this.dynamicArray.push(this.newDynamic);
  }
  addRow() {
    this.newDynamic = { title1: "", title2: "", title3: "" };
    this.dynamicArray.push(this.newDynamic);
    // this.toastr.success("New row added successfully", "New Row");
    console.log(this.dynamicArray);
    return true;
  }
  show(i) {
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
    /*this.bonEnlv.STATUS == "0";
    alert(this.bonEnlv.STATUS);*/
    this.service.postBon(this.bonEnlv).subscribe(
      data => {
        alert(data);
        this.list = data;
        alert(this.list[0]["value"]);
        var count = $("#test tbody tr").length - 1;

        for (i = 0; i < count; i++) {
          this.colis.NBRCOLIS = +$("#nbrcolis" + i).val();
          this.colis.LONGCOLIS = +$("#Longueurcm" + i).val();
          this.colis.HAUTCOLIS = +$("#hauteurcm" + i).val();
          this.colis.VOLCOLIS = +$("#volume" + i).val();
          this.colis.GERBABLE = $("#gerbable" + i)
            .val()
            .toString();
          this.colis.POIDSCOLIS = +$("#poidsbrut" + i).val();
          this.colis.POIDTACK = +$("#poidstaxable" + i).val();
          this.colis.IDBONCOLI = Math.floor(parseInt(data.toString()));
          this.serviceColis
            .postColis(this.colis)
            .subscribe(error => console.log("Erreur de colis: " + error));
        }
      },

      error => console.log(error)
    );
  }

  deleteRow(index) {
    if (this.dynamicArray.length == 1) {
      return false;
    } else {
      this.dynamicArray.splice(index, 1);
      return true;
    }
  }

  //Ajout d'un bon et ses colis

  /* add() {
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
    this.bonEnlv.STATUS = "0".toString();
    alert(this.bonEnlv.STATUS);
    this.service.postBon(this.bonEnlv).subscribe(
      data => alert(Math.floor(parseInt(data.toString()))),

      error => console.log(error)
    );
  }*/
}
