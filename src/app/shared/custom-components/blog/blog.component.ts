import { Component, OnInit, Input } from '@angular/core';
import { BlogData } from '../../models/blog-response';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  @Input() blogs: Array<BlogData>;

  constructor() { }

  ngOnInit() {
  }

}
