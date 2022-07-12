import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PopupComponent } from 'src/app/popup-add/popup.component';

@Component({
  selector: 'app-carta',
  templateUrl: './carta.component.html',
  styleUrls: ['./carta.component.css']
})
export class CartaComponent implements OnInit {




  constructor(public dialog:MatDialog) {


  }

  ngOnInit(): void {
  }






  ///material
  openDialog():void{
    const dialogRef=this.dialog.open(PopupComponent,{
      width:'55em',



    });
    dialogRef.afterClosed().subscribe(res=>{
      console.log(res);
    });
  }



}
