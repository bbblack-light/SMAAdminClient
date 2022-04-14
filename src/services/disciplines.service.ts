import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Disciplines } from 'src/model/buisness/Disciplines';
import { ApiRequestService } from './api-request.service';

@Injectable()
export class DisciplineService {

  constructor(
    private apiRequest: ApiRequestService
  ) {}

  update(product: Disciplines): Observable<any>
  {
    return this.apiRequest.post('discipline/', product)
      .pipe(map(Disciplines.map));
  }

  get(id: number): Observable<any>
  {
    return this.apiRequest.get('discipline/' + id)
      .pipe(map(Disciplines.map));
  }
  
  delete(id: number): Observable<any> {
    return this.apiRequest.delete('discipline/'+id);
  }

  getAll(): Observable<any> {
    return this.apiRequest.get('discipline/all')
      .pipe(map(res => res.map(Disciplines.map)));
  }
}
