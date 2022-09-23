import { Component } from '@angular/core';
import { Personaje } from '../interfaces/personaje';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  {

  // Atributos = variables

  nombre:string="Juan";
  edad:number=33;

  numeros:any[]=[1,2,3,4,5];
  //personajes:any[]=["https://firebasestorage.googleapis.com/v0/b/queen-5c2a4.appspot.com/o/Dan_Reynolds.jpg?alt=media&token=11cca822-d169-4130-a495-f395933a6d21"]

  personajes:Personaje[]=[
    {
      "nombre":"Dan Reynolds",
      "edad":35,
      "foto":"https://firebasestorage.googleapis.com/v0/b/queen-5c2a4.appspot.com/o/Dan_Reynolds.jpg?alt=media&token=11cca822-d169-4130-a495-f395933a6d21"
    },

    {
      "nombre":"Daniel Platzman",
      "edad":35,
      "foto":"https://firebasestorage.googleapis.com/v0/b/queen-5c2a4.appspot.com/o/Daniel_Platzman.jpg?alt=media&token=195aaea0-6222-4f73-a518-38a2c8d2802f"
    },

    {
      "nombre":"Daniel Wayne Sermon",
      "edad":38,
      "foto":"https://firebasestorage.googleapis.com/v0/b/queen-5c2a4.appspot.com/o/Wayne_Sermon_-_Ilosaarirock_2013_2.jpg?alt=media&token=a2a33414-15e2-4216-a2e3-27590047da25"
    },
    
    {
      "nombre":"Ben McKee",
      "edad":37,
      "foto":"https://firebasestorage.googleapis.com/v0/b/queen-5c2a4.appspot.com/o/ben.jpg?alt=media&token=377db798-dc41-49d0-a306-baa6d1aeb439"
    }
  ]


  constructor() { }

 

}
