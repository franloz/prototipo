import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  hideMenuV:boolean=false;
  hideMenuH:boolean=false;


  constructor(private breakpointService: BreakpointObserver){}

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
  }


}
