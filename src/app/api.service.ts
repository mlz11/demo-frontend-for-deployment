import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  // private readonly http = inject(HttpClient);

  getHello(): Observable<string> {
    // return this.http.get<string>('http://localhost:3000');
    return of('Hello World!');
  }
}
