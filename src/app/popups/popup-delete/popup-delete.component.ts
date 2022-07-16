import { Comida } from 'src/app/shared/interfaces/comida.interface';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DataServicesService } from '../../shared/services/data-services.service';
import {  deleteObject, ref, Storage } from '@angular/fire/storage';

@Component({
  selector: 'app-popup-delete',
  templateUrl: './popup-delete.component.html',
  styleUrls: ['./popup-delete.component.css']
})
export class PopupDeleteComponent implements OnInit {

  constructor(private dataservice:DataServicesService,
    public dialogRef:MatDialogRef<PopupDeleteComponent>,
    @Inject(MAT_DIALOG_DATA) public data:{comida:Comida,tipo:string} ,
    private storage: Storage) { }

  ngOnInit(): void {
  }

  async deleteComida(){
    this.dialogRef.close();//cerrar dialog

    const imgRef = ref(this.storage, `images/${this.data.comida.idImagen}`);

    await this.dataservice.deleteComida(this.data.comida,this.data.tipo);

    deleteObject(imgRef).then(() => {
      // File deleted successfully
    }).catch((error) => {
      // Uh-oh, an error occurred!/////////////////dialog para errores
    });
  }

}
