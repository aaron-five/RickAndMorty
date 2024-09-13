import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Character } from '../../models/characters';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../../components/card/card.component';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [CommonModule, CardComponent],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss',
})
export class MainPageComponent implements OnInit {
  //Create constructor to use de api
  constructor(private apiService: ApiService) {}

  characters: Character[] = [];
  charactersCopy: Character[] = [];

  ngOnInit(): void {
    this.getCharacters();
    console.log(this.characters);
  }

  trackByFn(index: number, item: Character) {
    return item.id;
  }

  //Calling endpoint
  getCharacters() {
    this.apiService.getCharacters().subscribe((data: any) => {
      this.characters = data.results;
      this.charactersCopy = data.results;
    });
  }

  filter = (e: any) => {
    const search: string = e.target.value;
    console.log({ search });
    //Todo: filter
    this.characters = this.charactersCopy.filter(({ name }: Character) => {
      return name.toLowerCase().includes(search.toLowerCase());
    });
  };
}
