
import { Component, OnInit, Input} from '@angular/core';
@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
/* paso el i que es el iterador del ngFor del html */
  @Input() i :any;
 

  ngOnInit(): void {
  }

  /* Creo un evento para sacar el id*/

  onClick(){
    console.log('El id del post es: ' + this.i.id);
    
  }

}
