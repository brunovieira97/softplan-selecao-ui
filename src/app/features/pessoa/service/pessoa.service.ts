import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, ObservableInput } from 'rxjs';
import { Pessoa } from '../model/pessoa.model';
import { environment } from 'src/environments/environment';
import { throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class PessoaService {
  private serviceBaseUrl = `${environment.apiPath}/v2/pessoas`;

  constructor(private http: HttpClient) {}

  public findById(id: number): Observable<Pessoa> {
    const url = `${this.serviceBaseUrl}/${id}`;

    return this.http
      .get<Pessoa>(url)
      .pipe(retry(2), catchError(this.handleError));
  }

  public findAll(): Observable<Array<Pessoa>> {
    return this.http
      .get<Array<Pessoa>>(this.serviceBaseUrl)
      .pipe(retry(2), catchError(this.handleError));
  }

  public create(pessoa: Pessoa): Observable<Pessoa> {
    return this.http
      .post<Pessoa>(this.serviceBaseUrl, pessoa)
      .pipe(catchError(this.handleError));
  }

  public update(pessoa: Pessoa): Observable<void> {
    if (!pessoa.id) {
      throw new Error('Pessoa sem ID não pode ser atualizada!');
    }

    const url = `${this.serviceBaseUrl}/${pessoa.id}`;

    return this.http
      .put<Pessoa>(url, pessoa)
      .pipe(catchError(this.handleError));
  }

  public delete(pessoa: Pessoa): Observable<void> {
    if (!pessoa.id) {
      throw new Error('Pessoa sem ID não pode ser excluída!');
    }

    const url = `${this.serviceBaseUrl}/${pessoa.id}`;

    return this.http.delete<Pessoa>(url).pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse): ObservableInput<any> {
    let errorMessage = '';

    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `ERROR ${error.status}: ${error.message}`;
    }

    console.log(errorMessage);

    return throwError(errorMessage);
  }
}
