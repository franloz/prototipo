import { DataServicesService } from './../../../shared/services/data-services.service';
import { Comida } from 'src/app/shared/interfaces/comida.interface';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PopupDeleteComponent } from 'src/app/popups/popup-delete/popup-delete.component';
import { PopupUpdateComponent } from 'src/app/popups/popup-update/popup-update.component';
import { ResponsiveService } from 'src/app/shared/services/responsive.service';

@Component({
  selector: 'app-listaraciones',
  templateUrl: './listaraciones.component.html',
  styleUrls: ['./listaraciones.component.css']
})
export class ListaracionesComponent implements OnInit {

  listaMovil:boolean=false;
  //listaOrdena:boolean=false;

  //array de tapas para llenarlo con la suscripcion
  tapas: Comida[] = [];

  constructor(private dataservice:DataServicesService,public dialog:MatDialog,private responsive:ResponsiveService) { }

  ngOnInit(): void {
    this.dataservice.getComidas('raciones').subscribe(tapas=>{
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




  }

  deleteComida(comida:Comida){
    const dialogRef=this.dialog.open(PopupDeleteComponent,{
      width:'20em',
      data:{
        comida:comida,
        tipo:'raciones'
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
        tipo:'raciones'
      }



    });
    dialogRef.afterClosed().subscribe(res=>{
      console.log(res);
    });

  }

}
