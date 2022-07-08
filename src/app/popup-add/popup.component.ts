import { Tapa } from 'src/app/shared/interfaces/tapa.interface';
import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DataServicesService } from '../shared/services/data-services.service';
import { getDownloadURL, ref, Storage } from '@angular/fire/storage';
import { uploadBytes } from '@firebase/storage';
import { formatDate } from '@angular/common';
//import { DatePipe } from '@angular/common'

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent implements OnInit {

  //formulario
  profileForm: FormGroup;
  //imagen seleccionada
  file!: File;
  today: Date = new Date();
  todaystring:string='';



  loading:boolean=false;//señal de carga para cuando se inserta una tapa






  constructor(
    private dataService: DataServicesService,
    public dialogRef: MatDialogRef<PopupComponent>, @Inject(MAT_DIALOG_DATA) public tapa: Tapa,
    private storage: Storage,
   // public datepipe: DatePipe
  ) {
    //formulario
    this.profileForm = new FormGroup({//formulario reactivo
      nombre: new FormControl('', Validators.required),
      ingredientes: new FormControl('', Validators.required),
      precio: new FormControl('', Validators.required),
      imagen: new FormControl('', Validators.required),
      idImagen: new FormControl(''),//este lo pongo para guardar el nombre de la foto para borrarla luego
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
    this.loading=true;


    this.todaystring=formatDate(this.today, 'dd-MM-yyyy hh:mm:ss a', 'en-US', '+0530');

    const imgRef = ref(this.storage, `images/${this.todaystring}`);
    uploadBytes(imgRef, this.file)
      .then(async (response) => {
        console.log(response);

        this.dialogRef.close();//cerrar dialog
        const imageUrl = await getDownloadURL(response.ref);//obtengo la url de la imagen q se ha seleccionado

        //this.profileForm.reset();//borrar campos del formulario


        this.profileForm.value.imagen = imageUrl;//meto la url obtenida en el campo imagen del formulario
        this.profileForm.value.idImagen = this.todaystring;//meto el nombre de la imagen para borrarla luego

        await this.dataService.addTapa(this.profileForm.value);


      })
      .catch(error => console.log(error))/////////////////////////////////////////////////////dialog con error











  }

  ngOnInit(): void {
  }


  selectImage($event: any) {
    this.file = $event.target.files[0];



  }





}
