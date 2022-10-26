import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  /* creo un arrau vacio para llamarlo y coger*/
  msg : any;
  /* inyecto el sercicio para coger la peticion del data.service */
  constructor( private dataService: DataService) { }



  ngOnInit(){
    /* con el metodo getPosts recojo los datos de la url los miuestro por consola */
   this.msg = this.dataService.getPosts();
    /* .subscribe((posts: any) => {
      console.log(posts);
      this.msg = posts;
    }); */
    
  }

}
