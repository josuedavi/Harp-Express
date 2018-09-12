import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Cashout} from 'app/formData/form-data.model';
import {FormDataService} from 'app/formData/form-data.service';
@Component({
  selector: 'app-cashout',
  templateUrl: './cashout.component.html',
  styleUrls: ['./cashout.component.css']
})
export class CashoutComponent implements OnInit {
Cashout: Cashout;
  constructor(private router: Router, private formDataService: FormDataService) { }

  ngOnInit() {
    this.formDataService.getFormData();
  }

  selectYes()
  // tslint:disable-next-line:one-line
  {
    this.formDataService.setCashout('Yes');
    console.log(this.formDataService.getCashout() );
    console.log(this.formDataService.getFormData() )
    this.router.navigate(['/military']);
  }

  selectNo()
  // tslint:disable-next-line:one-line
  {
    this.formDataService.setCashout('No');
    console.log(this.formDataService.getCashout() );
    console.log(this.formDataService.getFormData() )
    this.router.navigate(['/military']);
  }

  logForm(value: any)
// tslint:disable-next-line:one-line
{
  console.log(value);
  this.router.navigate(['/military']);
}

  save(form: any): boolean {
    if (!form.valid) {
        return false;
    }
    return true;
}

goToPrevious(form: any) {

        // Navigate to the work page
        this.router.navigate(['/slider']);

}

goToNext(form: any) {

        // Navigate to the result page
        this.router.navigate(['/personal']);

}
}

