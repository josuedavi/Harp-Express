import { Component, OnInit, Directive, ElementRef } from '@angular/core';
import {FormBuilder, FormGroup, FormsModule, NgForm, NgModel} from '@angular/forms';
import { Router } from '@angular/router';
import {AppModule} from '/Users/computer/Desktop/Harp-Express/src/app/app.module';
import { AngularFireDatabase} from 'angularfire2/database';
import {  Validators } from '@angular/forms';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import { FirebaseApp, AngularFireModule } from 'angularfire2';
import * as firebase from 'firebase';
import {Personal, FormData, Leadid } from 'app/formData/form-data.model';
import {FormDataService} from 'app/formData/form-data.service';



@Component({
  selector: 'app-thanks',
  templateUrl: './thanks.component.html',
  styleUrls: ['./thanks.component.css']
})
export class ThanksComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
