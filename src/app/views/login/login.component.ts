import { UserserviceService } from './../../shared/services/userservice.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  profileForm: FormGroup;
  constructor(private userservice:UserserviceService) {
    this.profileForm = new FormGroup({//formulario reactivo
      correo: new FormControl('', [Validators.required, Validators.email]),
      contrasena: new FormControl('', Validators.required),

    });
  }

  ngOnInit(): void {
  }

  onSubmit():void{

    this.userservice.login(this.profileForm.value.correo,this.profileForm.value.contrasena)
      .then(response=>{
        console.log('gggbgb'+response);
      })
      .catch(error=>{
        console.log('fffff'+error);
      });
      this.profileForm.reset();
  }
}
