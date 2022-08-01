import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { getAuth } from '@angular/fire/auth';
import { MatDialog } from '@angular/material/dialog';
import { PopupDeleteComponent } from 'src/app/popups/popup-delete/popup-delete.component';
import { PopupUpdateComponent } from 'src/app/popups/popup-update/popup-update.component';
import { Comida } from 'src/app/shared/interfaces/comida.interface';
import { DataServicesService } from 'src/app/shared/services/data-services.service';
import { ResponsiveService } from 'src/app/shared/services/responsive.service';

@Component({
  selector: 'app-listapostres',
  templateUrl: './listapostres.component.html',
  styleUrls: ['./listapostres.component.css']
})
export class ListapostresComponent implements OnInit {
  listaMovil:boolean=false;
  //listaOrdena:boolean=false;

  public user;

  //array de tapas para llenarlo con la suscripcion
  tapas: Comida[] = [];

  constructor(private dataservice:DataServicesService,public dialog:MatDialog,private responsive:ResponsiveService) { }

  ngOnInit(): void {
    this.dataservice.getComidas('postres').subscribe(tapas=>{
      this.tapas=tapas;
    })



    this.responsive.cambioTamano().subscribe((result)=>{
      this.listaMovil=false;
      //this.listaOrdena=true;

      if(result.matches){
        this.listaMovil=true;//si llega al ancho pedido se esconde el menu para el movil
       // this.listaOrdena=false;
      }
    })

    const auth = getAuth();
    this.user = auth.currentUser;




  }

  deleteComida(comida:Comida){
    const dialogRef=this.dialog.open(PopupDeleteComponent,{
      width:'20em',
      data:{
        comida:comida,
        tipo:'postres'
      }




    });
    dialogRef.afterClosed().subscribe(res=>{
      console.log(res);
    });
    ///lanzar ventana preguntando confirmacion un alert
    //await this.dataservice.deleteTapa(tapa);
  }

  updateComida(comida:Comida){
    const dialogRef=this.dialog.open(PopupUpdateComponent,{
      width:'55em',
      data:{
        comida:comida,
        tipo:'postres'
      }



    });
    dialogRef.afterClosed().subscribe(res=>{
      console.log(res);
    });

  }

}
