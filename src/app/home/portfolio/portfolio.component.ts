import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

   portfolio = [{
    title: 'Publications',
    details: ['Human Computer Interaction', 'Internet of Things', 'Artificial Intelligence'],
    thumbnail: '1.jpg'
  },
  {
    title: 'Applications',
    details: ['https://github.com/shivamsngh'],
    thumbnail: '2.jpg'
  },
  {
    title: 'Projects',
    details: ['AI, ML, Human Computer Interacion, IoT, Virtual and Augmented reality'],
    thumbnail: '3.jpg'
  }
  ];

  constructor() { }

  ngOnInit() {
  }

}
