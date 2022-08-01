import { UserserviceService } from './../../shared/services/userservice.service';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PopupComponent } from 'src/app/popups/popup-add/popup.component';
import { ResponsiveService } from 'src/app/shared/services/responsive.service';
import { getAuth } from "firebase/auth";

@Component({
  selector: 'app-carta',
  templateUrl: './carta.component.html',
  styleUrls: ['./carta.component.css']
})
export class CartaComponent implements OnInit {

  listaMovil: boolean = false;

  public user;


  constructor(public dialog:MatDialog,private responsive: ResponsiveService,private UserserviceService:UserserviceService) {


  }

  ngOnInit(): void {
    this.responsive.cambioTamano().subscribe((result) => {
      this.listaMovil = false;
      //this.listaOrdena=true;

      if (result.matches) {
        this.listaMovil = true;//si llega al ancho pedido se esconde el menu para el movil
        // this.listaOrdena=false;
      }
    })

    const auth = getAuth();
    this.user = auth.currentUser;

  }






  ///material
  openDialog():void{
    const dialogRef=this.dialog.open(PopupComponent,{
      width:'55em',



    });
    dialogRef.afterClosed().subscribe(res=>{
      console.log(res);
    });
  }



}
