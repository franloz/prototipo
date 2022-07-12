import { RacionServicesService } from './../../../shared/services/racion-services.service';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PopupDeleteComponent } from 'src/app/popup-delete/popup-delete.component';
import { PopupUpdateComponent } from 'src/app/popup-update/popup-update.component';
import { Racion } from 'src/app/shared/interfaces/racion.interface';

@Component({
  selector: 'app-listaraciones',
  templateUrl: './listaraciones.component.html',
  styleUrls: ['./listaraciones.component.css']
})
export class ListaracionesComponent implements OnInit {

  listaMovil:boolean=false;
  //listaOrdena:boolean=false;

  //array de tapas para llenarlo con la suscripcion
  tapas: Racion[] = [];

  constructor(private dataservice:RacionServicesService,public dialog:MatDialog,private breakpointService: BreakpointObserver) { }

  ngOnInit(): void {
    this.dataservice.getRacion().subscribe(tapas=>{
      this.tapas=tapas;
    })



    this.breakpointService
      .observe(Breakpoints.XSmall)
      .subscribe((result)=>{
        this.listaMovil=false;
        //this.listaOrdena=true;

        if(result.matches){
          this.listaMovil=true;//si llega al ancho pedido se esconde el menu para el movil
         // this.listaOrdena=false;
        }
      })




  }

  deleteTapa(racion:Racion){
    const dialogRef=this.dialog.open(PopupDeleteComponent,{
      width:'20em',
      data:racion



    });
    dialogRef.afterClosed().subscribe(res=>{
      console.log(res);
    });
    ///lanzar ventana preguntando confirmacion un alert
    //await this.dataservice.deleteTapa(tapa);
  }

  updateTapa(racion:Racion){
    const dialogRef=this.dialog.open(PopupUpdateComponent,{
      width:'55em',
      data:racion,


    });
    dialogRef.afterClosed().subscribe(res=>{
      console.log(res);
    });

  }

}
