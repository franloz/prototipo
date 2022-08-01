import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { Router } from '@angular/router';
import { ResponsiveService } from 'src/app/shared/services/responsive.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  listaMovil: boolean = false;



  profileForm: FormGroup;

  constructor(private router: Router, private responsive: ResponsiveService) {
    //formulario
    this.profileForm = new FormGroup({//formulario reactivo
      nombre: new FormControl('', Validators.required),
      correo: new FormControl('', [Validators.required, Validators.email]),
    });
  }

  ngOnInit(): void {

    this.responsive.cambioTamano().subscribe((result) => {
      this.listaMovil = false;
      //this.listaOrdena=true;

      if (result.matches) {
        this.listaMovil = true;//si llega al ancho pedido se esconde el menu para el movil
        // this.listaOrdena=false;
      }
    })


  }

  async onSubmit() {
    ///buscarrrrrrr
    this.profileForm.reset();


  }
  reservar(): void {
    //this.router.navigate(['reservar']);

    window.open("https://api.whatsapp.com/send?phone=34692031177", "_blank");

  }

}
