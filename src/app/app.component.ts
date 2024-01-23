import { Component, OnInit, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  standalone: true,
  imports: [RouterModule],
  selector: 'demo-frontend-for-deployment-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  private readonly api = inject(ApiService);
  title = '';

  ngOnInit() {
    this.api.getHello().subscribe((title) => (this.title = title));
  }
}
