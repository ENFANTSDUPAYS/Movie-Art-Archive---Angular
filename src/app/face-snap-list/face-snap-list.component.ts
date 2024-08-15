import { Component, OnInit } from '@angular/core';
import { FaceSnap } from '../Models/Face-Snap';
import { SnapFaceComponent } from '../snap-face/snap-face.component';
import { FaceSnapsService } from '../services/face-snaps.service';

@Component({
  selector: 'app-face-snap-list',
  standalone: true,
  imports: [
    SnapFaceComponent,
  ],
  templateUrl: './face-snap-list.component.html',
  styleUrl: './face-snap-list.component.scss'
})
export class FaceSnapListComponent implements OnInit {
  tableaufacesnaps!:FaceSnap[];

  constructor(private faceSnapsService: FaceSnapsService){}


  ngOnInit(): void { //AJOUT DES FILMS COMME CA
  
  this.tableaufacesnaps = this.faceSnapsService.getFaceSnaps();
  this.tableaufacesnaps[0].setLocation('Nevada');
  }
  

}
