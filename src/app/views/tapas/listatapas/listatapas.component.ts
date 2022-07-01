import { DataServicesService } from './../../../shared/services/data-services.service';
import { Component, OnInit } from '@angular/core';
import { Tapa } from 'src/app/shared/interfaces/tapa.interface';

@Component({
  selector: 'app-listatapas',
  templateUrl: './listatapas.component.html',
  styleUrls: ['./listatapas.component.css']
})
export class ListatapasComponent implements OnInit {

  //array de tapas para llenarlo con la suscripcion
  tapas: Tapa[] = [];

  constructor(private dataservice:DataServicesService) { }

  ngOnInit(): void {
    this.dataservice.getTapas().subscribe(tapas=>{
      this.tapas=tapas;
    })
  }

  async deleteTapa(tapa:Tapa){

    ///lanzar ventana preguntando confirmacion un alert
    await this.dataservice.deleteTapa(tapa);
  }

}
