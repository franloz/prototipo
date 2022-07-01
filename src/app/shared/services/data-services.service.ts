import { Observable } from './../../../../node_modules/@firebase/util/dist/node-esm/src/subscribe.d';
import { Injectable } from '@angular/core';
import { collectionData, deleteDoc, doc, Firestore } from '@angular/fire/firestore';
import { addDoc, collection } from '@firebase/firestore';
import { Tapa } from '../interfaces/tapa.interface';


@Injectable({
  providedIn: 'root'
})
export class DataServicesService {

  constructor(private firestore:Firestore) { }//aqui se importarian los servicios para authentification y demas funcionalidades de firebase


  addTapa(tapa:Tapa){
    const dbref=collection(this.firestore,'tapas');//referencia a la base de datos y a su coleccion
    return addDoc(dbref,tapa);//inserta el documento en la base de datos
  }

  getTapas():Observable<Tapa[]>{//observable que devuelve un array con las tapas
    const dbref=collection(this.firestore,'tapas');
    return collectionData(dbref, { idField: 'id' }) as unknown  as Observable<Tapa[]>;
  }

  deleteTapa(tapa:Tapa){
    const dbref=doc(this.firestore,`tapas/${tapa.id}`);
    return deleteDoc(dbref);
  }

  /*updateTapa(tapa:Tapa) {
    this.studentRef.update({
      firstName: student.firstName,
      lastName: student.lastName,
      email: student.email,
      mobileNumber: student.mobileNumber,
    });
  }*/



}
