import { Component, OnInit } from '@angular/core';
import { WorkService } from '../work.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
    FirstName;
    lastname;
    email;
    subject;
    message;

  constructor(private ws: WorkService) { }

  ngOnInit() {
  }
  addData(){
    this.ws.addData(this.FirstName,this.lastname,this.email,this.subject,this.message);
  }

}