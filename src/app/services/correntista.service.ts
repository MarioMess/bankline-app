import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CorrentistaService {

  constructor(private http: HttpClient) { }

  list(): Observable<any> {
    return this.http.get(`${environment.baseUrl}/correntistas`);
  }

  create(correntista: any): Observable<any> {
    return this.http.post(`${environment.baseUrl}/correntistas`, correntista);
  }
}
