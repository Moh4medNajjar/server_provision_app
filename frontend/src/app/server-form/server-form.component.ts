import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ReqService } from '../services/req.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-server-form',
  standalone: true,
  imports: [HttpClientModule, ReactiveFormsModule],
  templateUrl: './server-form.component.html',
  styleUrls: ['./server-form.component.scss'],
  providers: [Router, FormBuilder, ReqService]
})
export class ServerFormComponent implements OnInit {
  requestForm: FormGroup;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private authService: AuthService,
    private requestService: ReqService
  ) {
    this.requestForm = this.fb.group({
      requesterId: ['', Validators.required],
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', Validators.required],
      position: ['', Validators.required],
      department: ['', Validators.required],
      environment_type: ['', Validators.required],
      machineName: ['', Validators.required],
      machineDescription: ['', Validators.required],
      desired_start_date: ['', Validators.required],
      operating_system: ['', Validators.required],
      disk_space: ['', Validators.required],
      ram: [''],
      vcpus: [''],
      software_list: [''],
      status: ['Pending'],
      approvedBy: ['']
    });
  }

  ngOnInit() {
    const token = this.authService.getToken();
    if (token) {
      const decodedPayload = atob(token.split('.')[1]);
      const userData = JSON.parse(decodedPayload);
      console.log(userData);

      this.requestForm.patchValue({
        requesterId: userData.id,
        firstname: userData.firstname,
        lastname: userData.lastname,
        email: userData.email,
        position: userData.position,
        department: userData.department
      });
    }
  }

  onSubmit() {
    if (this.requestForm.valid) {
      const formValue = this.requestForm.value;
      formValue.software_list = formValue.software_list
        ? formValue.software_list.split('\n').map((item: { split: (arg0: string) => [any, any]; }) => {
            const [name, version] = item.split(':');
            return { name, version };
          })
        : [];

      console.log('Form Value:', formValue);

      this.requestService.createRequest(formValue).subscribe(
        response => {
          alert('Request created successfully!');
          console.log(response);
          this.router.navigate(['/home']);
        },
        error => {
          console.error('Error:', error);
          alert('Error creating request: ' + error.message);
        }
      );
    }
  }
}
