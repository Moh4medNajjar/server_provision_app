import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-requests',
  standalone: true,
  imports: [],
  templateUrl: './my-requests.component.html',
  styleUrl: './my-requests.component.scss'
})
export class MyRequestsComponent implements OnInit {
  requests = [
    {
      id: 1,
      submissionTime: '2024-07-15 14:23:00',
      specs: '4 vCPUs, 16GB RAM, 100GB Storage',
      status: 'Pending'
    },
    {
      id: 2,
      submissionTime: '2024-07-14 11:05:00',
      specs: '2 vCPUs, 8GB RAM, 50GB Storage',
      status: 'Accepted'
    },
    {
      id: 3,
      submissionTime: '2024-07-13 16:45:00',
      specs: '8 vCPUs, 32GB RAM, 200GB Storage',
      status: 'Refused'
    },
    {
      id: 3,
      submissionTime: '2024-07-13 16:45:00',
      specs: '8 vCPUs, 32GB RAM, 200GB Storage',
      status: 'Refused'
    },{
      id: 3,
      submissionTime: '2024-07-13 16:45:00',
      specs: '8 vCPUs, 32GB RAM, 200GB Storage',
      status: 'Refused'
    },{
      id: 3,
      submissionTime: '2024-07-13 16:45:00',
      specs: '8 vCPUs, 32GB RAM, 200GB Storage',
      status: 'Refused'
    },{
      id: 3,
      submissionTime: '2024-07-13 16:45:00',
      specs: '8 vCPUs, 32GB RAM, 200GB Storage',
      status: 'Refused'
    },{
      id: 3,
      submissionTime: '2024-07-13 16:45:00',
      specs: '8 vCPUs, 32GB RAM, 200GB Storage',
      status: 'Refused'
    },
    // Add more requests as needed
  ];

  constructor() {}

  ngOnInit(): void {}

  editRequest(request: any): void {
    alert(`Editing request with ID: ${request.id}`);
    // Implement your edit logic here
  }

  deleteRequest(request: any): void {
    alert(`Deleting request with ID: ${request.id}`);
    // Implement your delete logic here
  }
}
