import { Component, OnInit, Input } from '@angular/core';
import { AngularFireDatabase} from 'angularfire2/database';
import * as firebase from 'firebase/app';
import { FormDataService } from 'app/formData/form-data.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit
 // tslint:disable-next-line:one-line
 {
   title = 'Multi-Step Form'
    @Input() formData;
      constructor( private formDataService: FormDataService) {

      }

      ngOnInit() {
        this.formData = this.formDataService.getFormData();
        console.log(this.formData);
      }

}
