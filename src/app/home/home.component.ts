import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {FormBuilder, FormGroup, FormsModule, NgForm} from '@angular/forms';
import { HomeType } from '../formData/form-data.model'; import {FormDataService} from 'app/formData/form-data.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  form: any;
  hometype: HomeType;

logHome() {
  console.log(this.form.value);
}
  selectSingle() {
this.formDataService.setHomeType('Single-Family Home');
console.log(this.formDataService.getHomeType() );
      // Navigate to the work page
      this.router.navigate(['/credit']);
  }

  selectMulti() {
    this.formDataService.setHomeType('Multi-Family Home');
    console.log(this.formDataService.getHomeType() );
         // Navigate to the work page
         this.router.navigate(['/credit']);
  }

  selectTown() {
    this.formDataService.setHomeType('Town Home');
    console.log(this.formDataService.getHomeType() );
         // Navigate to the work page
         this.router.navigate(['/credit']);
  }


  selectCondo() {
    this.formDataService.setHomeType('Condo Home');
    console.log(this.formDataService.getHomeType() );
         // Navigate to the work page
         this.router.navigate(['/credit']);
  }

  constructor(private router: Router, private formDataService: FormDataService  ) { }

  ngOnInit() {
    this.formDataService.getFormData();
  }

  save(form: any): boolean {
    if (!form.valid) {
        return false;
    }
    return true;
}

goToNext() {

        // Navigate to the work page
        this.router.navigate(['/credit']);

}

}
