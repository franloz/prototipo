import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PopupComponent } from 'src/app/popup/popup.component';

@Component({
  selector: 'app-tapas',
  templateUrl: './tapas.component.html',
  styleUrls: ['./tapas.component.css']
})
export class TapasComponent implements OnInit {



  constructor(public dialog:MatDialog) {


  }

  ngOnInit(): void {
  }






  ///material
  openDialog():void{
    const dialogRef=this.dialog.open(PopupComponent,{
      width:'90%',
      data:'bmvhgv'

    });
    dialogRef.afterClosed().subscribe(res=>{
      console.log(res);
    });
  }





}
