import { ReservarComponent } from './views/reservar/reservar.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { CartaComponent } from './views/carta/carta.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'carta', component:CartaComponent},
  { path: 'reservar', component:ReservarComponent},





];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
