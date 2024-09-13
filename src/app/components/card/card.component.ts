import { Component, Input, OnInit } from '@angular/core';
import { Character } from '../../models/characters';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent implements OnInit {
  @Input() character!: Character;
  @Input() showButton: boolean | undefined = undefined;

  ngOnInit(): void {
    console.log(this.character);
  }
}
