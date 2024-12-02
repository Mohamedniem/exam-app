import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainpageComponent } from "./core/pages/mainpage/mainpage.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ MainpageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'test-app';
}
