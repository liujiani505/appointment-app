import { Component, OnInit } from '@angular/core';
import { Appointment } from '../models/appointment';

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.css']
})
export class AppointmentListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  appointment:Appointment = {
    id: 1,
    title: "Take dog for a walk",
    date: new Date('2023-10-21'),
  };

}
