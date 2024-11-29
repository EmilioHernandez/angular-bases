import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list-test',
  templateUrl: './list-test.component.html',
  styleUrl: './list-test.component.css',
})
export class ListTestComponent {
  public title: string = 'Listado de Héroes';

  public heroNames: string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor'];
  public deletedHero?: string;

  removeLastHero(): void {
    this.deletedHero = this.heroNames.pop();
  }
}
