import { Component, Input, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { Character } from '../../models/characters';
import { CardComponent } from '../../components/card/card.component';

@Component({
  selector: 'app-character-page',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './character-page.component.html',
  styleUrl: './character-page.component.scss',
})
export class CharacterPageComponent implements OnInit {
  @Input('id') id!: number;

  character!: Character;

  constructor(private apiService: ApiService, private router: Router) {}

  getCharacterById(id: number) {
    this.apiService.getCharacterById(id).subscribe({
      next: (character) => {
        console.log(character);
        this.character = character;
      },
      error: (error) => {
        console.error(error.message);
        this.router.navigateByUrl('/');
      },
    });
  }

  ngOnInit(): void {
    this.getCharacterById(this.id);
    console.log(this.character);
  }
}
