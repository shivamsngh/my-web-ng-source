import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {


  about = {
    heading: `A little about me!`,
    introText: `Human Computer Interaction, Internet of Things, Open Source Innovation, AI, Machine Learning, Modern Web Development,
    Progressive Web Apps.`,
    // tslint:disable-next-line:max-line-length
    abtPassionText: `I wander, try to jump from highest peaks in the world (Last jump was 160 M), take keen interest in Defence and Strategy discussions.`
  };
  constructor() { }

  ngOnInit() {
  }

}
