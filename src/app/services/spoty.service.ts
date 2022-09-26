import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpotyService {

  uri:string="https://api.spotify.com/v1/artists/329e4yvIujISKGKz1BZZbO/top-tracks?market=US";

  token:string="Bearer BQBwU6KoX_VkrH8J4hV1r3xwB3Q0xUn8z79H6kzkLRah_K1I298chXqOasVkdK0VpUdGoKD_NdI-ArDQXLa97ZNplSmXabmi2IU-U6cdAyLEEfwZixSyeGGt-OTFsE91MSUc7JbfZLuNMgZq85xezKnMYOO6aqkhQ74plVNmXTPxm0xQdxrdCrJRXVZBp_c";

  constructor(public peticion:HttpClient) {
    console.log("Arrancando el servicio")
  }

  public traerCanciones():Observable<any>{

    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: this.token
      })
    };

    return this.peticion.get(this.uri,httpOptions);

  }

}
