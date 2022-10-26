import { Component, OnInit } from '@angular/core';

@Component({
  /* es el selector que vamos a usar para añadirlo en app.component.html */
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
