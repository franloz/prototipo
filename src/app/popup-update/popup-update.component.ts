import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Tapa } from '../shared/interfaces/tapa.interface';
import { DataServicesService } from '../shared/services/data-services.service';

@Component({
  selector: 'app-popup-update',
  templateUrl: './popup-update.component.html',
  styleUrls: ['./popup-update.component.css']
})
export class PopupUpdateComponent implements OnInit {

  //formulario
  profileForm:FormGroup;



  constructor(private dataService:DataServicesService,public dialogRef:MatDialogRef<PopupUpdateComponent>,@Inject(MAT_DIALOG_DATA) public tapa:Tapa) {
    //formulario
    this.profileForm = new FormGroup({//formulario reactivo
      id: new FormControl(tapa.id),//lo añado porque sino al llevar los datos al servicio el id es indefinido
      nombre: new FormControl(tapa.nombre, Validators.required),
      ingredientes: new FormControl(tapa.ingredientes, Validators.required),
      precio: new FormControl(tapa.precio, Validators.required),
      imagen: new FormControl(tapa.imagen, Validators.required),
    });
  }
  //formulario
  async onSubmit() {
    //this.profileForm.value, esto contiene todos los valores de los campos del formulario

     /*let nombre:string =this.profileForm.value.nombre;
     let ingredientes=this.profileForm.value.ingredientes;
     let precio=this.profileForm.value.precio;
     let imagen=this.profileForm.value.imagen;

     let tapa=new Tapa(nombre,ingredientes,precio,imagen);*/


     this.dialogRef.close();//cerrar dialog

     await this.dataService.updateTapa(this.profileForm.value);
     this.profileForm.reset();//borrar campos del formulario





   }

  ngOnInit(): void {
  }

}
