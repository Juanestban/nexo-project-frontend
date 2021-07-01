import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  centered = false;
  disabled = false;
  unbounded = false;

  radius!: number;
  color: string = '#09f';
}
