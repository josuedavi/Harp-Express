import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormGroup, FormBuilder, ReactiveFormsModule} from '@angular/forms';
import {FormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { HomeComponent } from './home/home.component';
import { CreditComponent } from './credit/credit.component';
import { SliderComponent } from './slider/slider.component';
import { MilitaryComponent } from './military/military.component';
import { PersonalComponent } from './personal/personal.component';
import { ZipcodeComponent } from './zipcode/zipcode.component';
import { CashoutComponent } from './cashout/cashout.component';
// tslint:disable-next-line:no-use-before-declare
import { RouterModule, Routes} from '@angular/router';
import { AngularFireModule, FirebaseApp } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { NouisliderModule } from 'ng2-nouislider';
import {FormDataService} from 'app/formData/form-data.service';
import { MortgageComponent } from './mortgage/mortgage.component';
import { ThanksComponent } from './thanks/thanks.component';
import {  Validators } from '@angular/forms';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';
import { ErrorComponent } from './error/error.component';


const Routes: Routes = [
  {path: '', component:  HomeComponent },

  {path: 'credit', component:  CreditComponent },

  {path: 'zipcode', component:  ZipcodeComponent },

  {path: 'slider', component:  SliderComponent },

  {path: 'cashout', component:  CashoutComponent },

  {path: 'military', component:  MilitaryComponent},

  {path: 'personal', component:  PersonalComponent},

  {path: 'mortgage', component: MortgageComponent},

  {path: 'thankspage', component: ThanksComponent},

  {path: '**', component: ErrorComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    HomeComponent,
    CreditComponent,
    SliderComponent,
    MilitaryComponent,
    PersonalComponent,
    ZipcodeComponent,
    CashoutComponent,
    MortgageComponent,
    ThanksComponent,
    ErrorComponent
  ],
  imports: [
    RouterModule.forRoot(
    Routes),
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    NouisliderModule


  ],
  providers: [AngularFireDatabase, FirebaseApp, FormDataService, NouisliderModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
