import { Tapa } from 'src/app/shared/interfaces/tapa.interface';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DataServicesService } from '../shared/services/data-services.service';
import {  deleteObject, ref, Storage } from '@angular/fire/storage';

@Component({
  selector: 'app-popup-delete',
  templateUrl: './popup-delete.component.html',
  styleUrls: ['./popup-delete.component.css']
})
export class PopupDeleteComponent implements OnInit {

  constructor(private dataservice:DataServicesService,
    public dialogRef:MatDialogRef<PopupDeleteComponent>,
    @Inject(MAT_DIALOG_DATA) public tapa:Tapa,
    private storage: Storage) { }

  ngOnInit(): void {
  }

  async deleteTapa(){
    this.dialogRef.close();//cerrar dialog

    const imgRef = ref(this.storage, `images/${this.tapa.idImagen}`);

    await this.dataservice.deleteTapa(this.tapa);

    deleteObject(imgRef).then(() => {
      // File deleted successfully
    }).catch((error) => {
      // Uh-oh, an error occurred!/////////////////dialog para errores
    });
  }

}
