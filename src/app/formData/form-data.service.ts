import { Injectable } from '@angular/core';
import { FormData, Personal, Zipcode, HomeType, Military, Credit, Cashout, Slider, Leadid, Mortgage } from './form-data.model';

@Injectable()
export class FormDataService {
private formData: FormData = new FormData();

getPersonal(): Personal {
  // tslint:disable-next-line:no-shadowed-variable
  const Personal: Personal = {
      firstname: this.formData.firstname,
      lastname: this.formData.lastname,
      email: this.formData.email,
      address: this.formData.address,
      number: this.formData.number,
      
  };
  return Personal;
}

setPersonal(data: Personal) {
  // Update the Personal data only when the Personal Form had been validated successfully
  this.formData.firstname = data.firstname;
  this.formData.lastname = data.lastname;
  this.formData.email = data.email;
  this.formData.address = data.address;
  this.formData.number = data.number;
}


getZipcode(): Zipcode {
  // tslint:disable-next-line:no-shadowed-variable
  const Zipcode: Zipcode = {
    zipcode: this.formData.zipcode
  };
return Zipcode;
}

setZipcode(data: Zipcode) {
this.formData.zipcode = data.zipcode;
}

getHomeType(): HomeType {
  // tslint:disable-next-line:no-shadowed-variable
  const HomeType: HomeType = {
hometype: this.formData.hometype
  };
return HomeType;
}

setHomeType(hometype: string) {
  this.formData.hometype = hometype;
}

setMilitary(military: string) {
this.formData.military = military;
}

getMilitary(): Military {
  // tslint:disable-next-line:no-shadowed-variable
  const Military: Military = {
military: this.formData.hometype
  };
  return Military;
}

setCredit(credit: string) {
this.formData.credit = credit;
}

getCredit(): Credit {
  // tslint:disable-next-line:no-shadowed-variable
  const Credit: Credit = {
credit: this.formData.credit
};
  return Credit;
}

getCashout(): Cashout {
  // tslint:disable-next-line:no-shadowed-variable
  const Cashout: Cashout = {
cashout: this.formData.cashout
  };
return Cashout;
}

setCashout(cashout: string) {
this.formData.cashout = cashout;
}

setSlider(slider: string) {
 this.formData.slider = slider;
}

getSlider(): Slider {
  // tslint:disable-next-line:no-shadowed-variable
  const Slider: Slider = {
slider: this.formData.slider
  };
  return Slider;
}

getMortgage(): Mortgage {
  // tslint:disable-next-line:no-shadowed-variable
  const Mortgage: Mortgage = {
    mortgage: this.formData.mortgage
  }
  return Mortgage;
}

setMortgage(mortgage: string) {
  this.formData.mortgage = mortgage;
}

getFormData(): FormData {
  return this.formData;
}
resetFormData(): FormData {
  // Return the form data after all this.* members had been reset
  return this.formData;
}
}
