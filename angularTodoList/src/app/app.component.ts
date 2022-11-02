import { Component } from '@angular/core';
import { Tache } from './Taches/taches';
import { TachesService } from './Taches/taches.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'todoList';

  taches: Tache[] = [];

  newTache: Tache = {
    title: "",
    done: false
  }

  // Injection de la dépendance ArticleService
  constructor(private tachesService: TachesService) { }

  ngOnInit() {
    this.taches = this.tachesService.getItems();
  }

  addTache(): void {
    this.tachesService.addTache({...this.newTache});
  }
}
