import { Component, OnInit, Input } from '@angular/core';
import { FaceSnap } from '../models/face-snap-model';
@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss'],
})
export class FaceSnapComponent implements OnInit {
  //injectons le modele l'initiant
  @Input() faceSnap!: FaceSnap;
  // //declarons les propriétes
  // title!: string;
  // description!: string;
  // createdDate!: Date;
  // snaps!: number;
  // // dislike!: number;
  // imageUrl!: string;
  buttonText!: string;

  ngOnInit() {
    //initialise les composants
    // this.title = 'Archilbad';
    // this.description = 'Mon meilleur ami depuis tout petit';
    // this.createdDate = new Date();
    // this.snaps = 10;
    // // this.dislike = 5;
    // this.imageUrl =
    //   'https://images.pexels.com/photos/68594/pexels-photo-68594.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260';
    this.buttonText = 'Oh Snap';
  }

  //Methode d'incrementation en recuperant le click du user
  onSnap() {
    if (this.buttonText === 'Oh Snap!') {
      this.faceSnap.snaps++;
      this.buttonText = 'Oops, unSnap!';
    } else {
      this.faceSnap.snaps--;
      this.buttonText = 'Oh Snap!';
    }
  }
  // //Methode d'incrementation
  // OnSnapDecrypt() {
  //   this.dislike--;
  // }

  // getText() {
  //   //à convertir le résultat de getElementById()comme HTMLInputElementsuit
  //   let input = (<HTMLInputElement>document.getElementById('text')).value;
  //   alert(input);
  // }
}
