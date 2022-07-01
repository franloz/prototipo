import { Component, OnInit,Inject } from '@angular/core';
import { MatDialogRef,MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent implements OnInit {

  constructor(public dialogRef:MatDialogRef<PopupComponent>,@Inject(MAT_DIALOG_DATA) public message:string) { }

  ngOnInit(): void {
  }

  clickNo():void{
    this.dialogRef.close();
  }

}
