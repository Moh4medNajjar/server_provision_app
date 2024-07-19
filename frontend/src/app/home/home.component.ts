import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
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
    // Add more VM objects as needed
  ];

  

}
