import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, FormsModule, NgForm} from '@angular/forms';
import { Router } from '@angular/router';
import {FormDataService} from 'app/formData/form-data.service';
import { FormData, Personal, Zipcode } from 'app/formData/form-data.model';



const firebaseConfig = {
  apiKey: 'AIzaSyCxRChvCGUxz3lRtcXRuAz6BwY9B83o4es',
  authDomain: 'harp-asset.firebaseapp.com',
  databaseURL: 'https://harp-asset.firebaseio.com',
  projectId: 'harp-asset',
  storageBucket: 'harp-asset.appspot.com',
  messagingSenderId: '846908702753'
};

@Component({
  selector: 'app-zipcode',
  templateUrl: './zipcode.component.html',
  styleUrls: ['./zipcode.component.css']
})
export class ZipcodeComponent implements OnInit {

Zipcode: Zipcode;

  constructor(private router: Router, private formDataService: FormDataService) {
    this.Zipcode = this.formDataService.getZipcode();
    this.formDataService.getFormData();
    firebase.initializeApp(firebaseConfig);
   }

  ngOnInit() {
    this.formDataService.getFormData();
  }
  save(form: any): boolean {
    if (!form.valid) {
        return false;
    }
    return true;
}
logForm(value: any) {
  console.log(value);
  this.router.navigate(['/slider']);
}
goToPrevious(form: any) {

        // Navigate to the work page
        this.router.navigate(['/credit']);

}

goToNext(form: any) {

        // Navigate to the result page
        this.router.navigate(['/slider']);

}
onSubmit(form: NgForm) {
  this.formDataService.setZipcode(this.Zipcode);
  console.log(this.formDataService.getZipcode());
  this.router.navigate(['/slider']);


}
}
 /*
this.formDataService.setZipcode(this.Zipcode);

  const userinfo = firebase.database().ref('/userinfo');
  userinfo.push(form.value);
  this.form.reset();*/
