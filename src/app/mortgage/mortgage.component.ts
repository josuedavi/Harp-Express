import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import {Mortgage} from 'app/formData/form-data.model';
import {FormDataService} from 'app/formData/form-data.service';
import { FormBuilder } from '@angular/forms';
import { NouiFormatter } from 'ng2-nouislider';
import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyCxRChvCGUxz3lRtcXRuAz6BwY9B83o4es',
  authDomain: 'harp-asset.firebaseapp.com',
  databaseURL: 'https://harp-asset.firebaseio.com',
  projectId: 'harp-asset',
  storageBucket: 'harp-asset.appspot.com',
  messagingSenderId: '846908702753'
};

firebase.initializeApp(firebaseConfig);

@Component({
  selector: 'app-mortgage',
  templateUrl: './mortgage.component.html',
  styles: [`
  .noUi-connects {
    background: purple;
  }
  .noUi-horizontal, .noUi-handle, .noUi-vertical, .noUi-handle {
    background: purple;
  }
  .noUi-target , .noUi-horizontal, .noUi-tooltip {
    background-color: purple;
  }
  `]
})
export class MortgageComponent implements OnInit {

  formBuilder: any;
  form: any;
  form1: FormBuilder;
 Mortgage: Mortgage;
  @ViewChild('slider', { read: ElementRef }) slider: ElementRef;
  someRange;
  someValue = 500000;

  someKeyboardConfig: any = {
    connect: [true, true, true],
    tooltips: [new MyFormatter, new MyFormatter],
    start: [24, 34],
    step: 1,
    range: {
      min: 0,
      max: 100
    }
  }

  triggerUpdate() {

  }

  // tslint:disable-next-line:use-life-cycle-interface
  ngAfterViewInit() {
    this.func();
  }

  func() {
    const connect = this.newMethod();
    const classes = ['c-1-color', 'c-2-color', 'c-3-color'];
    console.log(connect.length);
    for (let i = 0; i < connect.length; i++) {
      connect[i].classList.add(classes[i]);
    }
  }



  constructor(private router: Router, private formDataService: FormDataService) {
  
  }

  private newMethod() {
    return this.slider.nativeElement.querySelectorAll('.noUi-connect');
  }

  ngOnInit() {
    this.formDataService.getFormData();
    this.Mortgage = this.formDataService.getMortgage();

  }
  save(form: any): boolean {
    if (!form.valid) {
        return false;
    }
    return true;
}

goToPrevious() {

        // Navigate to the work page
        this.router.navigate(['/slider']);

}

goToNext() {

        // Navigate to the result page


}
onSubmit() {

  this.formDataService.setMortgage(this.someValue + '-' + (this.someValue + 50000) );
  console.log(this.formDataService.getMortgage() );
 this.router.navigate(['/cashout']);

}


}


export class MyFormatter implements NouiFormatter {
  to(value: number): string {
    let output = value + ' Day';
    if (value !== 1) { output += 's'; }
    return output;
  }

  from(value: string): number {
    return Number(value.split(' ')[0]);
  }
}
