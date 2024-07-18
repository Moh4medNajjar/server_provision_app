import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-sign-up-admin',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './sign-up-admin.component.html',
  styleUrl: './sign-up-admin.component.scss'
})
export class SignUpAdminComponent implements OnInit {
  signUpForm: FormGroup;

  ngOnInit(): void {
    this.signUpForm = this.fb.group({
      username: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      employeeId: ['', Validators.required],
      position: ['', Validators.required],
      password: ['', [
        Validators.required,
        Validators.minLength(8),
        Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)
      ]],
      confirmPassword: ['', Validators.required],
      tenantId: ['', Validators.required],
      clientId: ['', Validators.required],
      clientSecret: ['', Validators.required],
      subscriptionId: ['', Validators.required]
    }, { validator: this.passwordMatchValidator });
  }
  constructor(private fb: FormBuilder) {
    this.signUpForm = this.fb.group({
      username: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      employeeId: ['', Validators.required],
      position: ['', Validators.required],
      password: ['', [
        Validators.required,
        Validators.minLength(8),
        Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)
      ]],
      confirmPassword: ['', Validators.required],
      tenantId: ['', Validators.required],
      clientId: ['', Validators.required],
      clientSecret: ['', Validators.required],
      subscriptionId: ['', Validators.required]
    }, {
      validators: this.passwordMatchValidator
    });
  }

  onSubmit(): void {
    if (this.signUpForm.valid) {
      console.log(this.signUpForm.value);
    }
  }

  private passwordMatchValidator(form: FormGroup): void {
    const password = form.get('password');
    const confirmPassword = form.get('confirmPassword');

    if (password && confirmPassword) {
      if (password.value !== confirmPassword.value) {
        confirmPassword.setErrors({ mismatch: true });
      } else {
        confirmPassword.setErrors(null);
      }
    }
  }
}
