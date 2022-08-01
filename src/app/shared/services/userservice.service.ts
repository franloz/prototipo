import { Injectable } from '@angular/core';
import {Auth,signInWithEmailAndPassword} from '@angular/fire/auth';
import { Observable, Subject } from 'rxjs';
import { getAuth, User } from '@firebase/auth';
@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  constructor(private auth:Auth) {

  }


  login(email:string,password:string){
    return signInWithEmailAndPassword(this.auth,email,password);

  }

}
