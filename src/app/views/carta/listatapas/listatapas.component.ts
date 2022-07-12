import { PopupUpdateComponent } from '../../../popup-update/popup-update.component';
import { PopupDeleteComponent } from '../../../popup-delete/popup-delete.component';
import { DataServicesService } from '../../../shared/services/tapa-services.service';
import { Component, OnInit } from '@angular/core';
import { Tapa } from 'src/app/shared/interfaces/tapa.interface';
import { MatDialog } from '@angular/material/dialog';
import { PopupComponent } from 'src/app/popup-add/popup.component';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-listatapas',
  templateUrl: './listatapas.component.html',
  styleUrls: ['./listatapas.component.css']
})
export class ListatapasComponent implements OnInit {

  listaMovil:boolean=false;
  //listaOrdena:boolean=false;

  //array de tapas para llenarlo con la suscripcion
  tapas: Tapa[] = [];

  constructor(private dataservice:DataServicesService,public dialog:MatDialog,private breakpointService: BreakpointObserver) { }

  ngOnInit(): void {
    this.dataservice.getTapas().subscribe(tapas=>{
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

  deleteTapa(tapa:Tapa){
    const dialogRef=this.dialog.open(PopupDeleteComponent,{
      width:'20em',
      data:tapa



    });
    dialogRef.afterClosed().subscribe(res=>{
      console.log(res);
    });
    ///lanzar ventana preguntando confirmacion un alert
    //await this.dataservice.deleteTapa(tapa);
  }

  updateTapa(tapa:Tapa){
    const dialogRef=this.dialog.open(PopupUpdateComponent,{
      width:'55em',
      data:tapa,


    });
    dialogRef.afterClosed().subscribe(res=>{
      console.log(res);
    });

  }




}
