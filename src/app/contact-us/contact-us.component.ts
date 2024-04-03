import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  contactUsForm !: FormGroup;
  email: any;
  constructor(private formbuilder: FormBuilder, private http: HttpClient) {
  }

  ngOnInit(): void {
    this.contactUsForm = this.formbuilder.group({
      name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
      phoneNumber: ['', [Validators.required, this.phoneValidator]],
      email: ['', [Validators.required, Validators.email]],
      query: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(500)]],
    })
  }

  phoneValidator(control: { value: any; }) {
    const valid = /^\d{10,}$/.test(control.value);  // a phone number must be numeric and at least 10 digits
    return valid ? null : { invalidPhone: true };
  }
  get f() {
    return this.contactUsForm.controls;
  }
  // getErrorMessage() {
  //   return this.email.hasError('required') ? 'You must enter a value' :
  //       this.email.hasError('email') ? 'Not a valid email' :
  //           '';
  // }

  submit() {
    alert("Your message has been received! A member of our team will contact you shortly.");
    window.location.reload();
  }
}
