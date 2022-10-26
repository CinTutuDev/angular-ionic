
import { Component, OnInit, Input } from '@angular/core';
@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
/* paso el i que es el iterador del ngFor del html */
  @Input() i :any;

  constructor() { }

  ngOnInit(): void {
  }

}
