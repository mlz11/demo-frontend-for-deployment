import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private readonly http = inject(HttpClient);

  getHello(): Observable<string> {
    return this.http.get<string>(
      'http://ec2-35-180-29-30.eu-west-3.compute.amazonaws.com:3000'
    );
  }
}
