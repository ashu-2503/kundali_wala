import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent implements OnInit {

  genders = [
    { value: 'Prefer not to say', viewValue: 'Prefer not to say' },
    { value: 'Male', viewValue: 'Male' },
    { value: 'Female', viewValue: 'Female' },
  ];

  appointmentForm !: FormGroup;

  constructor(private formbuilder: FormBuilder) {
  }
  ngOnInit(): void {
    this.appointmentForm = this.formbuilder.group({
      name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
      email: ['', [Validators.required, Validators.email]],
      mobileNumber: ['', [Validators.required, this.phoneValidator]],
      genders: ['', [Validators.required]],
      date: ['', [Validators.required]],
      hrs: ['',],
      min: ['',],
      meridiem : ['',],
      address: ['', [ Validators.minLength(10), Validators.maxLength(500)]],
      reason: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(500)]],
    })
  }
  phoneValidator(control: { value: any; }) {
    const valid = /^\d{10,}$/.test(control.value);  // a phone number must be numeric and at least 10 digits
    return valid ? null : { invalidPhone: true };
  }
  submit() {
    alert("Congratulations! Your appointment form has been successfully submitted. We will contact you soon.");
    window.location.reload();
  }
}
