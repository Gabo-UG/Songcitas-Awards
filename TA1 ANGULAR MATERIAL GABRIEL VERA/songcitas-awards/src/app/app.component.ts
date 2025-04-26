import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { VotacionComponent } from "./components/votacion/votacion.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, VotacionComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'songcitas-awards';
}
