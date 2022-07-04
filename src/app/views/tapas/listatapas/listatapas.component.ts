import { PopupUpdateComponent } from './../../../popup-update/popup-update.component';
import { PopupDeleteComponent } from './../../../popup-delete/popup-delete.component';
import { DataServicesService } from './../../../shared/services/data-services.service';
import { Component, OnInit } from '@angular/core';
import { Tapa } from 'src/app/shared/interfaces/tapa.interface';
import { MatDialog } from '@angular/material/dialog';
import { PopupComponent } from 'src/app/popup-add/popup.component';

@Component({
  selector: 'app-listatapas',
  templateUrl: './listatapas.component.html',
  styleUrls: ['./listatapas.component.css']
})
export class ListatapasComponent implements OnInit {

  //array de tapas para llenarlo con la suscripcion
  tapas: Tapa[] = [];

  constructor(private dataservice:DataServicesService,public dialog:MatDialog) { }

  ngOnInit(): void {
    this.dataservice.getTapas().subscribe(tapas=>{
      this.tapas=tapas;
    })
  }

  deleteTapa(tapa:Tapa){
    const dialogRef=this.dialog.open(PopupDeleteComponent,{
      width:'18%',
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
      width:'40%',
      data:tapa,


    });
    dialogRef.afterClosed().subscribe(res=>{
      console.log(res);
    });

  }


 /* updateTapa():void{

      const dialogRef=this.dialog.open(PopupComponent,{
        width:'40%',
        data:'Introduce los datos de la tapa',


      });
      dialogRef.afterClosed().subscribe(res=>{
        console.log(res);
      });

  }*/

}
