import { Component, OnInit } from '@angular/core';
import { Personaje } from '../interfaces/personaje';

@Component({
  selector: 'app-integrantes',
  templateUrl: './integrantes.component.html',
  styleUrls: ['./integrantes.component.css']
})
export class IntegrantesComponent  {

   // Atributos = variables

   nombre:string="Juan";
   edad:number=33;
 
   numeros:any[]=[1,2,3,4,5];
   //personajes:any[]=["https://firebasestorage.googleapis.com/v0/b/queen-5c2a4.appspot.com/o/Dan_Reynolds.jpg?alt=media&token=11cca822-d169-4130-a495-f395933a6d21"]
 
   personajes:Personaje[]=[
     {
       "nombre":"Dan Reynolds",
       "edad":35,
       "foto":"https://firebasestorage.googleapis.com/v0/b/queen-5c2a4.appspot.com/o/Dan_Reynolds.jpg?alt=media&token=11cca822-d169-4130-a495-f395933a6d21",
       "info":"Dan Reynolds nació el 14 de julio de 1987 en Las Vegas, mide 193cm y es un músico estadounidense conocido principalmente por ser el cantante principal de la banda de indie-rock Imagine Dragons. Dan se negaba a convertirse en un músico profesional en parte porque Wayne Sermon, su compañero de banda le dijo: Don't do music because you want to do music, do music if you have to do music. (No hagas música porque quieres hacer música, haz música si tienes que hacer músó que no podría hacer nada más que música, asi que junto a Wayne Sermon y el baterista Andrew Tolman creó la banda Imagine Dragons. Dan fuè invitado a la apertura de la banda Nico Vega y ahi conoció a Aja Volkman, la cantante de dicha banda y su actual esposa en 2010. Actualmente Dan vive en Las Vegas y tiene un hijo llamado Arrow Reynolds"
     },
 
     {
       "nombre":"Daniel Platzman",
       "edad":35,
       "foto":"https://firebasestorage.googleapis.com/v0/b/queen-5c2a4.appspot.com/o/Daniel_Platzman.jpg?alt=media&token=195aaea0-6222-4f73-a518-38a2c8d2802f",
        "info":"Daniel James Platzman, nacido el 28 de septiembre de 1986, es un músico estadounidense mejor conocido como el baterista de la banda de indie-rock con sede en Las Vegas, Imagine Dragons. Daniel nació en Atlanta, Georgia y estudió en Berklee School of Music, junto a sus futuros compañeros de banda Wayne Sermon y Ben Mckee. Platzman fué invitado a Imagine Dragons por McKee y Wayne Sermon McKee se retiró de su último semestre en el Berklee para unirse a la banda, invitando a Daniel Platzman a tocar la batería, completando la alineación."
     },
 
     {
       "nombre":"Daniel Wayne Sermon",
       "edad":38,
       "foto":"https://firebasestorage.googleapis.com/v0/b/queen-5c2a4.appspot.com/o/Wayne_Sermon_-_Ilosaarirock_2013_2.jpg?alt=media&token=a2a33414-15e2-4216-a2e3-27590047da25",
       "info":"Daniel Wayne Wing Sermon nació en Las Vegas el 15 de junio de 1984, es un músico estadounidense y es conocido por ser el guitarrista de la banda de indie-rock Imagine Dragons. Daniel comenzó desde temprana edad a interesarse a la guitarra, desde niño que estaba decidido a ser guitarrista. Su padre tenía un amplificador de audios, un tocadiscos y todos los álbumes de los Beatles en vinilo, a los que Sermon tanto le gustaba escuchar. También le gustaba el sonido de Tom Scholz (de Boston) y su acercamiento a los solos. Asistió a la Escuela de Música de Berklee, donde se especializó en doble interpretación de guitarra y composición, donde se graduó en 2008. Mientras estuvo en Berklee formó parte de un grupo de cinco guitarristas de jazz fusión llamado The Eclectic Electrics. Wayne Sermon oyó a Dan Reynolds actuar en un club en Utah y aprovechó la ocasión para acercarse y hablarle de sus intereses musicales. Reynolds lo invitó a unirse a su banda y mudarse a Las Vegas. Sermon invitó al bajista Ben McKee a unirse a la banda en Las Vegas,quien invitó al batería Daniel Platzman, amigo de Sermon del Berklee College of Music, finalizando así la formación de la banda."
     },
     
     {
       "nombre":"Ben McKee",
       "edad":37,
       "foto":"https://firebasestorage.googleapis.com/v0/b/queen-5c2a4.appspot.com/o/ben.jpg?alt=media&token=377db798-dc41-49d0-a306-baa6d1aeb439",
       "info":"Ben Mckee, de su verdadero nombre Benjamín Arthur Mckee nació el 07 de abril de 1985, Ben vivió sus primeros años en Forestville en California, el creció tocando la guitarra acústica y el violín, antes de elegir tocar el bajo acústico en quinto grado. Continuo el aprendizaje de la guitarra baja en secundaria como miembro de un trío de jazz, lo que lo hizo decidir de integrarse a Berklee College of Music. Mientras que en Berklee, McKee juega en un conjunto del funcionamiento guitarra con compañeros de la futura banda Imagine Dragons, Wayne Sermon y Daniel Platzman. Fué en 2008 que Ben fue invitado por Wayne Sermon a unirse a la banda Imagine Dragons, con sede en Las Vegas. McKee se retiró de su último semestre en el Berklee para unirse a la banda, invitando a Daniel Platzman a tocar la batería, y completando la alineación. En los primeros años de la banda, Ben, fue arrestado por desnudez pública antes de abrir para la banda australiana The Temper Trap, fue rescatado de la carcel 15 minutos mas tarde por Dan Reynolds, su compañero de banda, sobornando al Sheriff con una copia firmada de uno de sus EPs."
     }
   ]
 
  
  constructor() { }


}
