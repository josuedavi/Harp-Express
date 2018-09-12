import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Credit} from 'app/formData/form-data.model';
import {FormDataService} from 'app/formData/form-data.service';


@Component({
  selector: 'app-credit',
  templateUrl: './credit.component.html',
  styleUrls: ['./credit.component.css']
})
export class CreditComponent implements OnInit {
form: any;
Credit: Credit;

  constructor(private router: Router, private formDataService: FormDataService) {
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

goToPrevious(form: any) {

        // Navigate to the work page
        this.router.navigate(['']);

}

goToNext(form: any) {

        // Navigate to the result page
        this.router.navigate(['/zipcode']);

}

goodCredit()
// tslint:disable-next-line:one-line
{
  this.formDataService.setCredit('Good Credit');
  console.log(this.formDataService.getCredit() );
  this.router.navigate(['/zipcode']);

}
excellCredit()
// tslint:disable-next-line:one-line
{
  this.formDataService.setCredit('Excellent Credit');
  console.log(this.formDataService.getCredit() );
  this.router.navigate(['/zipcode']);
}
fairCredit()
// tslint:disable-next-line:one-line
{
  this.formDataService.setCredit('Fair Credit');
  console.log(this.formDataService.getCredit() );
  this.router.navigate(['/zipcode']);
}
poorCredit()
// tslint:disable-next-line:one-line
{
  this.formDataService.setCredit('Poor Credit');
  console.log(this.formDataService.getCredit() );
  this.router.navigate(['/zipcode']);
}

}
