import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { HeroService } from '../../services/heroes.service';
import { switchMap } from 'rxjs';
import { Hero } from '../../interfaces/hero.interface';

@Component({
  selector: 'app-new-page',
  templateUrl: './new-page.component.html',
  styles: [],
})
export class NewPageComponent {
  public publishers = [
    { id: 'Dc Comics', desc: 'DC Comics' },
    { id: 'Marvel Comics', desc: 'Marvel Comics' },
  ];
}
