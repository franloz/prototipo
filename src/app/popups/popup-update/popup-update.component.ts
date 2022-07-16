import { Comida } from 'src/app/shared/interfaces/comida.interface';
import { formatDate } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { ref, uploadBytes, Storage, getDownloadURL, deleteObject, } from '@angular/fire/storage';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DataServicesService } from '../../shared/services/data-services.service';

@Component({
  selector: 'app-popup-update',
  templateUrl: './popup-update.component.html',
  styleUrls: ['./popup-update.component.css'],
})
export class PopupUpdateComponent implements OnInit {
  //formulario
  profileForm: FormGroup;

  file!: File;
  today: Date = new Date();
  todaystring: string = '';

  loading: boolean = false; //señal de carga para cuando se inserta una comida

  constructor(
    private dataService: DataServicesService,
    public dialogRef: MatDialogRef<PopupUpdateComponent>,
    @Inject(MAT_DIALOG_DATA) public data:{comida:Comida,tipo:string},
    private storage: Storage
  ) {

    //formulario
    this.profileForm = new FormGroup({
      //formulario reactivo
      id: new FormControl(this.data.comida.id), //lo añado porque sino al llevar los datos al servicio el id es indefinido
      nombre: new FormControl(this.data.comida.nombre, Validators.required),
      ingredientes: new FormControl(this.data.comida.ingredientes, Validators.required),
      precio: new FormControl(this.data.comida.precio, Validators.required),
      imagen: new FormControl(this.data.comida.imagen),
      idImagen: new FormControl(this.data.comida.idImagen),
    });
  }
  //formulario
  async onSubmit() {
    ///se sube la imagen
    this.loading = true;

    if (this.file == undefined) {
      await this.dataService.updateComida1(this.profileForm.value,this.data.tipo);
      this.dialogRef.close(); //cerrar dialog
    } else {
      ///borrar la imagen anterior
      const imgRef0 = ref(this.storage, `images/${this.data.comida.idImagen}`);

      deleteObject(imgRef0)
        .then(() => {
          // File deleted successfully
        })
        .catch((error) => {
          // Uh-oh, an error occurred!/////////////////dialog para errores
        });
      ////

      this.todaystring = formatDate(
        this.today,
        'dd-MM-yyyy hh:mm:ss a',
        'en-US',
        '+0530'
      );

      const imgRef = ref(this.storage, `images/${this.todaystring}`);
      uploadBytes(imgRef, this.file)
        .then(async (response) => {
          console.log(response);
          this.dialogRef.close(); //cerrar dialog
          const imageUrl = await getDownloadURL(response.ref); //obtengo la url de la imagen q se ha seleccionado

          //this.profileForm.reset();//borrar campos del formulario

          this.profileForm.value.imagen = imageUrl; //meto la url obtenida en el campo imagen del formulario
          this.profileForm.value.idImagen = this.todaystring; //meto el nombre de la imagen para borrarla luego

          await this.dataService.updateComida2(this.profileForm.value,this.data.tipo);
        })
        .catch((error) => console.log(error)); /////////////////////////////////////////////////////dialog con error
    }
  }

  ngOnInit(): void { }

  selectImage($event: any) {
    this.file = $event.target.files[0];
  }
}
