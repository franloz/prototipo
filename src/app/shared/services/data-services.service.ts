import { Observable } from '@firebase/util/dist/node-esm/src/subscribe';
import { Injectable } from '@angular/core';
import { collectionData, deleteDoc, doc, Firestore, setDoc, updateDoc } from '@angular/fire/firestore';
import { addDoc, collection } from '@firebase/firestore';
import { Comida } from '../interfaces/comida.interface';


@Injectable({
  providedIn: 'root'
})
export class DataServicesService {

  constructor(private firestore:Firestore) { }//aqui se importarian los servicios para authentification y demas funcionalidades de firebase


  addComida(comida:Comida,tabla:string){
    const dbref=collection(this.firestore,tabla);//referencia a la base de datos y a su coleccion
    return addDoc(dbref,comida);//inserta el documento en la base de datos
  }

  getComidas(tabla:string):Observable<Comida[]>{//observable que devuelve un array con las tapas
    const dbref=collection(this.firestore,tabla);
    return collectionData(dbref, { idField: 'id' }) as unknown  as Observable<Comida[]>;
  }

  deleteComida(comida:Comida,tabla:string){
    const dbref=doc(this.firestore,`${tabla}/${comida.id}`);
    return deleteDoc(dbref);
  }

  updateComida1(comida:Comida,tabla:string) {
    const dbref = doc(this.firestore,`${tabla}/${comida.id}`);
    return updateDoc(dbref, {

      nombre:comida.nombre,
      ingredientes:comida.ingredientes,
      precio:comida.precio,
    });


  }
  updateComida2(comida:Comida,tabla:string) {
    const dbref = doc(this.firestore,`${tabla}/${comida.id}`);
    return updateDoc(dbref, {

      nombre:comida.nombre,
      ingredientes:comida.ingredientes,
      precio:comida.precio,
      imagen:comida.imagen,
      idImagen:comida.idImagen
    });


  }



}
