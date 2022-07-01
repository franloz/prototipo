import { MatDialogModule } from '@angular/material/dialog';
import { DataServicesService } from './shared/services/data-services.service';
import { HomeComponent } from './views/home/home.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TapasComponent } from './views/tapas/tapas.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { ReactiveFormsModule } from '@angular/forms';
import { ListatapasComponent } from './views/tapas/listatapas/listatapas.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PopupComponent } from './popup/popup.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TapasComponent,
    ListatapasComponent,
    PopupComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    MatDialogModule,


    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,//formularios reactivos
    provideFirebaseApp(() => initializeApp(environment.firebase)),///firebase
    provideFirestore(() => getFirestore()), BrowserAnimationsModule,
  ],
  providers: [DataServicesService],
  bootstrap: [AppComponent]
})
export class AppModule {

}
