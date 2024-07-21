import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule  } from '@angular/forms';
import { Router } from '@angular/router';
import { ReqService} from '../services/req.service'

@Component({
  selector: 'app-server-form',
  standalone: true,
  imports: [HttpClientModule, ReactiveFormsModule],
  templateUrl: './server-form.component.html',
  styleUrl: './server-form.component.scss',
  providers: [Router, FormBuilder, ReqService]
})
export class ServerFormComponent implements OnInit {
  requestForm: FormGroup;
  successMessage: string | null = null;
  errorMessage: string | null = null;

  constructor(private fb: FormBuilder, private router: Router, private reqService: ReqService) {
    this.requestForm = this.fb.group({
      requesterId: ['', Validators.required],
      appName: ['', Validators.required],
      appCompany: ['', Validators.required],
      environmentType: ['', Validators.required],
      machineName: ['', Validators.required],
      machineDescription: ['', Validators.required],
      startDate: ['', Validators.required],
      os: ['', Validators.required],
      diskSpace: [''],
      ram: [''],
      cpu: [''],
      softwareList: [''],
      configFiles: [''],
      logFiles: [''],
      tempFiles: [''],
      services: [''],
      appServerVersion: [''],
      dbVersion: [''],
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.requestForm.valid) {
      const requestData = this.requestForm.value;
      this.reqService.createRequest(requestData).subscribe(
        (        response: any) => {
          console.log('Request submitted', response);
          this.successMessage = 'Request submitted successfully!';
          setTimeout(() => {
            this.router.navigate(['/requests']);
          }, 2000); // Redirect to requests page or another page
        },
        (        error: any) => {
          console.error('Request submission error', error);
          this.errorMessage = 'Request submission failed. Please try again.';
        }
      );
    }
  }
}
