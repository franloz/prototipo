import { Component, OnInit,Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DataServicesService } from '../shared/services/data-services.service';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent implements OnInit {

  //formulario
  profileForm:FormGroup;



  constructor(private dataService:DataServicesService,public dialogRef:MatDialogRef<PopupComponent>,@Inject(MAT_DIALOG_DATA) public message:string) {
    //formulario
    this.profileForm = new FormGroup({//formulario reactivo
      nombre: new FormControl('', Validators.required),
      ingredientes: new FormControl('', Validators.required),
      precio: new FormControl('', Validators.required),
      imagen: new FormControl('', Validators.required),
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

     await this.dataService.addTapa(this.profileForm.value);
     this.profileForm.reset();//borrar campos del formulario





   }

  ngOnInit(): void {
  }


  //dialog
  clickNo():void{

  }




}
