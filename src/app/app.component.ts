import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title(title: any) {
    throw new Error('Method not implemented.');
  }

  hideMenuV:boolean=false;
  hideMenuH:boolean=false;

  //@ViewChild('buttondrawer') myNameElem: ElementRef<HTMLInputElement>;
  //@ViewChild('drawer') myNameElem2: ElementRef<HTMLInputElement>;

  /*mmm():void{
    this.rendere2.setAttribute(this.myNameElem.nativeElement, "disabled", "true");

  }*/

  constructor(private breakpointService: BreakpointObserver,/*private rendere2:Renderer2*/){}

  ngOnInit(){


    this.breakpointService
      .observe(Breakpoints.XSmall)
      .subscribe((result)=>{
        this.hideMenuV=false;
        this.hideMenuH=true;

        if(result.matches){
          this.hideMenuV=true;//si llega al ancho pedido se esconde el menu para el movil
          this.hideMenuH=false;
        }
      })

      //this.mmm();
  }

  /*click():void{

    this.myNameElem2.nativeElement.focus();

  }*/

}




