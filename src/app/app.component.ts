import { Component, OnInit } from '@angular/core';
import { FaceSnap } from './models/face-snap-model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  // title = 'snapface Dydja 2.0';
  //déclarons la propriété en l'initiant
  mySnap!: FaceSnap;
  ngOnInit() {
    this.mySnap = new FaceSnap(
      'Archilbad',
      'Mon meilleur ami depuis tout petit',
      10,
      'https://images.pexels.com/photos/68594/pexels-photo-68594.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      new Date(),
    // this.dislike = 5;



    );
  }
}
