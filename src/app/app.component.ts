import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppModule } from './app.module';

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.scss'],
    template: `<div  class="container"><router-outlet></router-outlet></div>`
})
export class AppComponent {}