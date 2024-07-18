import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms'; // Import ReactiveFormsModule

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent {
  signUpForm: FormGroup | any;

  constructor(private fb: FormBuilder) {
    // Initialize the form in the constructor
    this.signUpForm = this.fb.group({
      fullName: ['', Validators.required],
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', Validators.required],
      phoneNumber: [''],
      organization: [''],
      role: ['', Validators.required],
      azureClientId: [''],
      azureClientSecret: [''],
      azureTenantId: [''],
      azureSubscriptionId: ['']
    });
  }


  onRoleChange(event: any): void {
    if (event.target.value === 'Admin') {
      this.signUpForm.get('azureClientId').setValidators(Validators.required);
      this.signUpForm.get('azureClientSecret').setValidators(Validators.required);
      this.signUpForm.get('azureTenantId').setValidators(Validators.required);
      this.signUpForm.get('azureSubscriptionId').setValidators(Validators.required);
    } else {
      this.signUpForm.get('azureClientId').clearValidators();
      this.signUpForm.get('azureClientSecret').clearValidators();
      this.signUpForm.get('azureTenantId').clearValidators();
      this.signUpForm.get('azureSubscriptionId').clearValidators();
    }
    this.signUpForm.get('azureClientId').updateValueAndValidity();
    this.signUpForm.get('azureClientSecret').updateValueAndValidity();
    this.signUpForm.get('azureTenantId').updateValueAndValidity();
    this.signUpForm.get('azureSubscriptionId').updateValueAndValidity();
  }

  onSubmit(): void {
    if (this.signUpForm.valid) {
      console.log(this.signUpForm.value);
    } else {
      console.error('Form is invalid');
    }
  }
}
