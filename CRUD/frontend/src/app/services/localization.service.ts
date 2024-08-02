```typescript
package localization.service;

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LocalizationService {

  constructor(private http: HttpClient) { }

  getTranslation(key: string): Observable<string> {
    return this.http.get<string>(`/api/translations/${key}`).pipe(
      catchError(error => {
        console.error('Error fetching translation:', error);
        return throwError('Error fetching translation');
      })
    );
  }
}
```