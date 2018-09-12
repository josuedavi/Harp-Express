import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import {Slider, FormData} from 'app/formData/form-data.model';
import {FormDataService} from 'app/formData/form-data.service';
import { NouisliderModule } from 'ng2-nouislider';
import { FormGroup, FormBuilder, FormControl, NgForm } from '@angular/forms';
import { NouiFormatter } from 'ng2-nouislider';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';



@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
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

export class SliderComponent implements OnInit {
  formBuilder: any;
  form: any;
  form1: FormBuilder;
  Slider: Slider;
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

  triggerUpdate(event) {

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
    this.Slider = this.formDataService.getSlider();

  }
  save(form: any): boolean {
    if (!form.valid) {
        return false;
    }
    return true;
}

goToPrevious(form: any) {

        // Navigate to the work page
        this.router.navigate(['/zipcode']);

}

goToNext(form: any) {

        // Navigate to the result page


}
onSubmit() {

  this.formDataService.setSlider(this.someValue + '-' + (this.someValue + 50000) );
  console.log(this.formDataService.getSlider() );
 this.router.navigate(['/mortgage']);

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
