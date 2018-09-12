import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Military} from 'app/formData/form-data.model';
import {FormDataService} from 'app/formData/form-data.service';

@Component({
  selector: 'app-military',
  templateUrl: './military.component.html',
  styleUrls: ['./military.component.css']
})
export class MilitaryComponent implements OnInit {
Military: Military;
  constructor(private router: Router, private formDataService: FormDataService) { }

  ngOnInit() {
    this.formDataService.getFormData();
  }

  selectYes()
  // tslint:disable-next-line:one-line
  {
    this.formDataService.setMilitary('Yes');
    console.log(this.formDataService.getFormData() );
    this.router.navigate(['/personal']);
  }

  selectNo()
  // tslint:disable-next-line:one-line
  {
    this.formDataService.setMilitary('No');
    console.log(this.formDataService.getFormData() );
    this.router.navigate(['/personal']);
  }
  save(form: any): boolean {
    if (!form.valid) {
        return false;
    }
    return true;
}

goToPrevious(form: any) {

        // Navigate to the work page
        this.router.navigate(['/cashout']);

}

goToNext(form: any) {

        // Navigate to the result page
        this.router.navigate(['/personal']);

}
}
