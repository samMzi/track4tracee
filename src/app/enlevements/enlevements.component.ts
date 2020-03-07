import { Component, OnInit } from "@angular/core";
import { BonEnlvSrvService } from "../services/bon-enlv-srv.service";
import { BonENL } from "../classes/bon-enl";
import { Colis } from "../classe/colis";
import { ColisSrvService } from "../services/colis-srv.service";
import { BonENLV } from "../classe/bon-enlv";
import { BonColis } from "../classe/bon-colis";

@Component({
  selector: "app-enlevements",
  templateUrl: "./enlevements.component.html",
  styleUrls: ["./enlevements.component.css"]
})
export class EnlevementsComponent implements OnInit {
  constructor(
    private serviceBon: BonEnlvSrvService,
    private serviceColis: ColisSrvService
  ) {}
  //$: any;
  //heroes: BonENL[];
  heroes: BonENLV[];
  colisList: BonColis[]; //Colis[];

  ngOnInit() {
    this.loadScripts();
    /*this.service.getAllEmployees1(this.heroes);*/
    this.serviceBon.getAllBon2().subscribe(res => {
      //console.log(res[1]);
      this.heroes = res;

      // console.log(this.heroes[]);
      //console.log(this.heroes);
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
  Delete(a) {
    /* var result = confirm("Want to delete?");
    if (result) {
      //Logic to delete the item
      this.serviceBon.deleteBon(a).subscribe(data => {
        console.log(data);
        return this.serviceBon
          .getAllBon()
          .subscribe(data => (this.heroes = data));
      });
    }*/

    $("#textid").val(a);
  }

  Deletecolid(a) {
    /* var result = confirm("Want to delete?");
    if (result) {
      //Logic to delete the item
      this.serviceBon.deleteBon(a).subscribe(data => {
        console.log(data);
        return this.serviceBon
          .getAllBon()
          .subscribe(data => (this.heroes = data));
      });
    }*/

    $("#textidd").val(a);
  }
  confirmDelete() {
    var a = parseInt(
      $("#textid")
        .val()
        .toString()
    );
    this.serviceBon.DeleteBonColis(a).subscribe(data => {
      console.log(data);
      return this.serviceBon
        .getAllBon()
        .subscribe(data => (this.heroes = data));
    });
  }

  loadModal(
    idbon,
    numbon,
    labelDateEnlv,
    //HEUREENLV,
    expéditeur,
    adrExpéditeur,
    cp,
    destinataire,
    AdrDestinataire,
    dateLiv
  ) {
    this.serviceColis.getcoliByIdBon(700079).subscribe(res => {
      this.colisList = res;
      console.log(res);
    });
    /* this.serviceBon.getBonById(idbon).subscribe(res => {
      this.serviceColis.getcoliByIdBon(700079).subscribe(res => {
        console.log("colis= " + res);
      });

      // this.colisList = res["TICOLIS"];
      //console.log(this.colisList);
    });*/
    $("#bon").text(numbon);
    $("#labelnum").text(numbon);
    $("#labelDateEnlv").text(labelDateEnlv + " " + "HEUREENLV");
    $("#labelExp").text(expéditeur);
    $("#labelAdrExp").text(adrExpéditeur);
    $("#labelCP").text(cp);
    $("#labelDest").text(destinataire);
    $("#labelAdrDest").text(AdrDestinataire);
    $("#labelDateliv").text(dateLiv);
  }

  deleteColis() {
    var IDCOL = +$("#textidd").val();
    this.serviceColis.deleteColis(IDCOL).subscribe(data => {
      this.serviceColis.getAllColis().subscribe(res => {
        this.colisList = res;
      });
      //this.serviceColis.getColisById
      //console.log(err);
    });
  }
}
