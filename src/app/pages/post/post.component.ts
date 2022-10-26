import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';



@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  /* inyecto el sercicio para coger la peticion del data.service */
  constructor( private dataService: DataService) { }

  ngOnInit(){

    this.dataService.getPosts().subscribe(posts => {
      console.log(posts);
    });
    
  }

}
