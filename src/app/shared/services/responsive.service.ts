import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Injectable, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResponsiveService {




  constructor(private breakpointService: BreakpointObserver) {
   }

  cambioTamano():Observable<BreakpointState>{
    return this.breakpointService.observe(Breakpoints.XSmall)

  }


}
