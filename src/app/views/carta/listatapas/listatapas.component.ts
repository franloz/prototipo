import { ResponsiveService } from './../../../shared/services/responsive.service';
import { PopupUpdateComponent } from '../../../popups/popup-update/popup-update.component';
import { PopupDeleteComponent } from '../../../popups/popup-delete/popup-delete.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Comida } from 'src/app/shared/interfaces/comida.interface';
import { DataServicesService } from 'src/app/shared/services/data-services.service';
import { getAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-listatapas',
  templateUrl: './listatapas.component.html',
  styleUrls: ['./listatapas.component.css']
})
export class ListatapasComponent implements OnInit {

  listaMovil:boolean=false;
  //listaOrdena:boolean=false;

  public user;

  //array de tapas para llenarlo con la suscripcion
  tapas: Comida[] = [];

  constructor(private dataservice:DataServicesService,public dialog:MatDialog,private responsive:ResponsiveService) { }

  ngOnInit(): void {
    this.dataservice.getComidas('tapas').subscribe(tapas=>{
      this.tapas=tapas;
    })



   /* this.breakpointService
      .observe(Breakpoints.XSmall)
      .subscribe((result)=>{
        this.listaMovil=false;
        //this.listaOrdena=true;

        if(result.matches){
          this.listaMovil=true;//si llega al ancho pedido se esconde el menu para el movil
         // this.listaOrdena=false;
        }
      })*/
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
        tipo:'tapas'
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
        tipo:'tapas'
      }


    });
    dialogRef.afterClosed().subscribe(res=>{
      console.log(res);
    });

  }




}
