import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero-test',
  templateUrl: './hero-test.component.html',
  styleUrl: './hero-test.component.css',
})
export class HeroTestComponent {
  public name: string = 'ironman';
  public age: number = 45;

  get capitalizedName(): string {
    return this.name.toUpperCase();
  }

  getHeroDescription(): string {
    return `${this.name} - ${this.age}`;
  }

  changeHero(): void {
    this.name = 'spiderman';
  }

  changeAge(): void {
    this.age = 25;
  }

  resetHero(): void {
    this.name = 'ironman';
    this.age = 45;
  }
}