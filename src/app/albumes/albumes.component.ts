import { Component } from '@angular/core';
import { subscribeOn } from 'rxjs';
import { SpotyService } from '../services/spoty.service';

@Component({
  selector: 'app-albumes',
  templateUrl: './albumes.component.html',
  styleUrls: ['./albumes.component.css']
})
export class AlbumesComponent {

  public canciones:any[]=[

  ]

  constructor(public peticion:SpotyService) {

    this.peticion.traerCanciones()
    .subscribe(respuesta=>{
      console.log(respuesta)
      this.canciones=respuesta.tracks
      console.log(this.canciones)
    })

  }

}
