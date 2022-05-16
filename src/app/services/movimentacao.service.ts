import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MovimentacaoService {

  constructor(private http: HttpClient) { }

  list(): Observable <any> {
    return this.http.get(`${environment.baseUrl}/movimentacoes`);
  }

  findByIdConta(idConta:any): Observable<any> {
    return this.http.get(`${environment.baseUrl}/movimentacoes/${idConta}`);
  }
  // adicionando o método de inclusão (POST) via API
create(movimentacao:any): Observable<any> {
  return this.http.post(`${environment.baseUrl}/movimentacoes`,movimentacao);
}
}
