import { Component, OnInit, ElementRef } from '@angular/core';
import {NgForm} from '@angular/forms';
import { Router } from '@angular/router';
import * as firebase from 'firebase';
import {Personal } from 'app/formData/form-data.model';
import {FormDataService} from 'app/formData/form-data.service';
//import { ThanksComponent } from './thanks/thanks.component';


@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.css'],
})

export class PersonalComponent implements OnInit {
  Personal: Personal;
  value: string;


constructor(private router: Router, private formDataService: FormDataService) {


}

ngOnInit() {
this.Personal = this.formDataService.getPersonal();
this.formDataService.getFormData();


}
// tslint:disable-next-line:use-life-cycle-interface

onSubmit() {

this.formDataService.setPersonal(this.Personal);




  // this.formDataService.setLeadId(LeadiDscript);
console.log(this.formDataService.getFormData() );
 const userinfo = firebase.database().ref('/userinfo');

  this.router.navigate(['/thankspage']);
userinfo.push(
  this.formDataService.getFormData()



);
 

}

goToPrevious() {
  // Navigate to the work page
  this.router.navigate(['/military']);
}

save(form: any): boolean {
  if (!form.valid) {
      return false;
  }
  return true;
}

}






