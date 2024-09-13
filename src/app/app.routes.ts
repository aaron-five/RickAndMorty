import { Routes } from '@angular/router';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { CharacterPageComponent } from './pages/character-page/character-page.component';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/main-page/main-page.component').then(
        (c) => c.MainPageComponent
      ),
  },
  {
    path: 'character/:id',
    loadComponent: () =>
      import('./pages/character-page/character-page.component').then(
        (c) => c.CharacterPageComponent
      ),
  },
  {
    path: '**',
    redirectTo: '/',
  },
];
