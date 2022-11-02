import { Injectable } from '@angular/core';
import { Tache } from './taches';

@Injectable({
  providedIn: 'root'
})
export class TachesService {

  private taches: Tache[] = [
    {
      title: "tache 1",
      done: false
    },
    {
      title: "tache 2",
      done: false
    },
    {
      title: "tache 3",
      done: false
    },
    {
      title: "tache 4",
      done: false
    }
  ];

  constructor() { }

  /**
   * Récupère les articles
   * @returns La liste des articles
   */
  getItems(): Tache[] {
    return this.taches;
  }

  addTache(tache: Tache): void {
    this.taches.push(tache);
  }

}
