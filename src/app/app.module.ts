
import { DataServicesService } from './shared/services/data-services.service';
import { HomeComponent } from './views/home/home.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListatapasComponent } from './views/carta/listatapas/listatapas.component';

//material, esto deberia haber ido en otro modulo
import { PopupComponent } from './popups/popup-add/popup.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PopupDeleteComponent } from './popups/popup-delete/popup-delete.component';
import { PopupUpdateComponent } from './popups/popup-update/popup-update.component';



import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideStorage,getStorage } from '@angular/fire/storage';
import { LoadingComponent } from './loading/loading.component';
import { MaterialModule } from './material/material.module';
import { CartaComponent } from './views/carta/carta.component';
import { ListaracionesComponent } from './views/carta/listaraciones/listaraciones.component';
import { ListapostresComponent } from './views/carta/listapostres/listapostres.component';
import { ReservarComponent } from './views/reservar/reservar.component';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListatapasComponent,
    PopupComponent,
    PopupDeleteComponent,
    PopupUpdateComponent,
    LoadingComponent,
    CartaComponent,
    ListaracionesComponent,
    ListapostresComponent,
    ReservarComponent,
  ],
  imports: [
    MaterialModule,
    FormsModule,




    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,//formularios reactivos
    provideFirebaseApp(() => initializeApp(environment.firebase)),///firebase
    provideFirestore(() => getFirestore()),
    provideAuth(() => getAuth()),
    provideStorage(() => getStorage())
  ],
  providers: [DataServicesService],
  bootstrap: [AppComponent]
})
export class AppModule {

}
