import { Component, Input, OnInit } from '@angular/core';
import { Tache } from '../Taches/taches';
import { TachesService } from '../Taches/taches.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  done = false;
  
  @Input() tache!: Tache;

  constructor(private tachesService: TachesService) {
    console.log("Constructeur !")
  }

  ngOnInit(): void { }

  ngOnDestroy(): void { }

  doneTask(): void {
    this.done = true;
  }

}
