import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { GeolocationService } from "./geolocation.service";
import { DataService } from "./data.service";

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatButtonModule, MatIconModule, MatInputModule, MatSelectModule, MatSliderModule,
         MatToolbarModule, MatCardModule, MatSlideToggleModule} from "@angular/material";
import 'hammerjs';
import { ListComponent } from './list/list.component';
import { GeneComponent } from './gene/gene.component';
import { Routes, RouterModule } from "@angular/router";

const routes : Routes = [
  { path: '', component: ListComponent },
  { path: 'gene', component: GeneComponent },
  { path: 'gene/:id', component: GeneComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    GeneComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule, BrowserAnimationsModule,
    MatButtonModule, MatIconModule, MatInputModule, MatSelectModule, MatSliderModule,
    MatToolbarModule, MatCardModule, MatSlideToggleModule
  ],
  providers: [GeolocationService, DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
