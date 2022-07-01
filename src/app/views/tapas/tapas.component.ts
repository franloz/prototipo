import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DataServicesService } from 'src/app/shared/services/data-services.service';
import { MatDialog } from '@angular/material/dialog';
import { PopupComponent } from 'src/app/popup/popup.component';

@Component({
  selector: 'app-tapas',
  templateUrl: './tapas.component.html',
  styleUrls: ['./tapas.component.css']
})
export class TapasComponent implements OnInit {

  profileForm:FormGroup;

  constructor(private dataService:DataServicesService,public dialog:MatDialog) {

    this.profileForm = new FormGroup({//formulario reactivo
      nombre: new FormControl('', Validators.required),
      ingredientes: new FormControl('', Validators.required),
      precio: new FormControl('', Validators.required),
      imagen: new FormControl('', Validators.required),
    });
  }

  ngOnInit(): void {
  }



  async onSubmit() {
   //this.profileForm.value, esto contiene todos los valores de los campos del formulario

    /*let nombre:string =this.profileForm.value.nombre;
    let ingredientes=this.profileForm.value.ingredientes;
    let precio=this.profileForm.value.precio;
    let imagen=this.profileForm.value.imagen;

    let tapa=new Tapa(nombre,ingredientes,precio,imagen);*/



    await this.dataService.addTapa(this.profileForm.value);
    this.profileForm.reset();//borrar campos del formulario

  }

  openDialog():void{
    const dialogRef=this.dialog.open(PopupComponent,{
      width:'200px',
      data:'bmvhgv'

    });
    dialogRef.afterClosed().subscribe(res=>{
      console.log(res);
    });
  }

}
