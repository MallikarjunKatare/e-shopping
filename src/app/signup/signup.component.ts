import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators, FormControlName, AbstractControl } from "@angular/forms";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  state: any[] = ["Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jammu and Kashmir",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttarakhand",
    "Uttar Pradesh",
    "West Bengal",
    "Andaman and Nicobar Islands",
    "Chandigarh",
    "Dadra and Nagar Haveli",
    "Daman and Diu",
    "Delhi",
    "Lakshadweep",
    "Puducherry"];

  Signupform = new FormGroup({
    firstname: new FormControl("", [Validators.required, Validators.pattern('^[A-Za-z]*$'), Validators.maxLength(30)]),
    lastname: new FormControl("", [Validators.required, Validators.pattern('^[A-Za-z]*$'),  Validators.maxLength(30)]),
    email: new FormControl("", [Validators.required, Validators.email]),
    password: new FormControl("", [Validators.required, Validators.pattern('^[A-Za-z0-9 @]*$'), Validators.minLength(6)]),
    address1: new FormControl("", [Validators.required, Validators.pattern('^[A-Za-z0-9 ,.]*$')]),
    address2: new FormControl("", [Validators.required, Validators.pattern('^[A-Za-z0-9 ,.]*$')]),
    city: new FormControl("", [Validators.required, Validators.pattern('^[A-Za-z]*$')]),
    state1: new FormControl("", [Validators.required]),
    Pincode: new FormControl("", [Validators.required, Validators.pattern('^[0-9]*$'), Validators.minLength(6), Validators.maxLength(6)]),
    correct: new FormControl("", [Validators.requiredTrue])
  })

  // this for error class identify
  getcontrol(name: any): AbstractControl | null {
    return this.Signupform.get(name);
  }



  mess:string="";

  data(signupdata: any) {
    console.log(signupdata);

    alert("Registration is completed Sucessfully");

    this.mess="Registration is completed Sucessfully"

    this.Signupform.reset();

    setTimeout(() => {
      this.mess=""

    }, 5000);
    


  }





}
