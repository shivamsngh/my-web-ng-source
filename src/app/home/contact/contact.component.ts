import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

   contact = {
    heading: `Let's Get In Touch!`,
    text: `Up for a discussion? That's great! Give a call or send an email and I will get back to you as soon as possible!`,
    phone: `+91 9696644017`,
    email: `shivamsngh@hotmail.com`
  };
  constructor() { }

  ngOnInit() {
  }

}
