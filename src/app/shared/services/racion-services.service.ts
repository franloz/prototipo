import { Observable } from '@firebase/util/dist/node-esm/src/subscribe';
import { Injectable } from '@angular/core';
import { collectionData, deleteDoc, doc, Firestore, setDoc, updateDoc } from '@angular/fire/firestore';
import { addDoc, collection } from '@firebase/firestore';
import { Racion } from '../interfaces/racion.interface';

@Injectable({
  providedIn: 'root'
})
export class RacionServicesService {

  constructor(private firestore:Firestore) { }//aqui se importarian los servicios para authentification y demas funcionalidades de firebase


  addRacion(racion:Racion){
    const dbref=collection(this.firestore,'raciones');//referencia a la base de datos y a su coleccion
    return addDoc(dbref,racion);//inserta el documento en la base de datos
  }

  getRacion():Observable<Racion[]>{//observable que devuelve un array con las tapas
    const dbref=collection(this.firestore,'raciones');
    return collectionData(dbref, { idField: 'id' }) as unknown  as Observable<Racion[]>;
  }

  deleteRacion(racion:Racion){
    const dbref=doc(this.firestore,`raciones/${racion.id}`);
    return deleteDoc(dbref);
  }

  updateRacion1(racion:Racion) {
    const dbref = doc(this.firestore,`raciones/${racion.id}`);
    return updateDoc(dbref, {

      nombre:racion.nombre,
      ingredientes:racion.ingredientes,
      precio:racion.precio,
    });


  }
  updateRacion2(racion:Racion) {
    const dbref = doc(this.firestore,`raciones/${racion.id}`);
    return updateDoc(dbref, {

      nombre:racion.nombre,
      ingredientes:racion.ingredientes,
      precio:racion.precio,
      imagen:racion.imagen,
      idImagen:racion.idImagen
    });


  }
}
