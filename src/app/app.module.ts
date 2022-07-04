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

//material, esto deberia haber ido en otro modulo
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PopupComponent } from './popup-add/popup.component';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { PopupDeleteComponent } from './popup-delete/popup-delete.component';
import { PopupUpdateComponent } from './popup-update/popup-update.component';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideStorage,getStorage } from '@angular/fire/storage';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TapasComponent,
    ListatapasComponent,
    PopupComponent,
    PopupDeleteComponent,
    PopupUpdateComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    MatDialogModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,



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
