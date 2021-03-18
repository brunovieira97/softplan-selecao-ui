import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private SESSION_BASE64_ATTR_NAME: string = 'authenticatedUser';

  private username!: string | null;
  private password!: string | null;

  constructor(private http: HttpClient) {}

  public authenticate(username: string, password: string): Observable<void> {
    const url = `${environment.apiPath}/auth`;

    const options = {
      headers: {
        authorization: this.generateToken(username, password),
      },
    };

    return this.http.get<string>(url, options).pipe(
      map(() => {
        this.username = username;
        this.password = password;

        this.registerAuthenticatedUser(window.btoa(`${username}:${password}`));
      })
    );
  }

  public getAuthHeader(): string {
    const token = sessionStorage.getItem(this.SESSION_BASE64_ATTR_NAME);

    return `Basic ${token}`;
  }

  private generateToken(username: string, password: string): string {
    const token = window.btoa(`${username}:${password}`);

    return `Basic ${token}`;
  }

  private registerAuthenticatedUser(token: string): void {
    sessionStorage.setItem(this.SESSION_BASE64_ATTR_NAME, token);
  }

  public logout(): void {
    sessionStorage.removeItem(this.SESSION_BASE64_ATTR_NAME);
    this.username = null;
    this.password = null;
  }

  public isUserAuthenticated(): boolean {
    const user = sessionStorage.getItem(this.SESSION_BASE64_ATTR_NAME);

    return user === null ? false : true;
  }
}
