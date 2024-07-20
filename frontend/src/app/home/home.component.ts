import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  providers: [AuthService]
})
export class HomeComponent {
  constructor(private authService: AuthService) { }
  vms = [
    {
      name: 'VM1',
      vcpus: 4,
      storage: '100GB',
      ram: '16GB',
      status: 'Running',
      os: 'Ubuntu 20.04',
      ip: '192.168.1.2',
      created: '2023-01-01',
      region: 'US East',
      owner: 'John Doe'
    },
    {
      name: 'VM2',
      vcpus: 2,
      storage: '50GB',
      ram: '8GB',
      status: 'Stopped',
      os: 'Windows Server 2019',
      ip: '192.168.1.3',
      created: '2023-02-15',
      region: 'Europe West',
      owner: 'Jane Smith'
    },
    {
      name: 'VM3',
      vcpus: 8,
      storage: '200GB',
      ram: '32GB',
      status: 'Running',
      os: 'CentOS 8',
      ip: '192.168.1.4',
      created: '2023-03-22',
      region: 'Asia Pacific',
      owner: 'Alice Johnson'
    },
    {
      name: 'VM4',
      vcpus: 32,
      storage: '200GB',
      ram: '32GB',
      status: 'Running',
      os: 'CentOS 8',
      ip: '192.168.1.4',
      created: '2023-03-22',
      region: 'Asia Pacific',
      owner: 'Alice Johnson'
    },
    {
      name: 'VM5',
      vcpus: 32,
      storage: '200GB',
      ram: '32GB',
      status: 'Running',
      os: 'CentOS 8',
      ip: '192.168.1.4',
      created: '2023-03-22',
      region: 'Asia Pacific',
      owner: 'Alice Johnson'
    },
    // Add more VM objects as needed
  ];

  firstname: string = '';
  lastname: string = '';


  ngOnInit() {
    // Check if token exists after component initialization
    const token = this.authService.getToken();
    if (token) {
      // Extract user data (consider using a secure backend API instead)
      const decodedPayload = atob(token.split('.')[1]);
      const userData = JSON.parse(decodedPayload);
      console.log(userData)
      this.firstname = userData.firstname;
      this.lastname = userData.lastname;
    }
  }


}
