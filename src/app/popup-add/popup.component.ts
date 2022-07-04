import { Tapa } from 'src/app/shared/interfaces/tapa.interface';
import { Component, OnInit,Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DataServicesService } from '../shared/services/data-services.service';
import { ref, Storage } from '@angular/fire/storage';
import { uploadBytes } from '@firebase/storage';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent implements OnInit {

  //formulario
  profileForm:FormGroup;

  file!: File;



  constructor(
    private dataService:DataServicesService,
    public dialogRef:MatDialogRef<PopupComponent>,@Inject(MAT_DIALOG_DATA) public tapa:Tapa,
    private storage:Storage
    ) {
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


    ///se sube la imagen

    try {
     const imgRef=ref(this.storage,`images/${this.file.name}`);///pensar si ponerle un id unico
     uploadBytes(imgRef,this.file)
       .then(response=>console.log(response))
       .catch(error=>console.log(error))
      }
    catch (error) {
      console.error('Here is the error message', error);
    }

     this.dialogRef.close();//cerrar dialog

     await this.dataService.addTapa(this.profileForm.value);
     this.profileForm.reset();//borrar campos del formulario





   }

  ngOnInit(): void {
  }


  uploadImage($event:any){
     this.file=$event.target.files[0];



  }





}
