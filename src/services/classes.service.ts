import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Classes } from 'src/model/buisness/Disciplines';
import { ApiRequestService } from './api-request.service';

export interface LoginRequestParam {
  username: string;
  password: string;
}

@Injectable()
export class ClassesService {

  constructor(
    private router: Router,
    private apiRequest: ApiRequestService
  ) {}

  update(product: Classes): Observable<any>
  {
    return this.apiRequest.post('classes/', product)
    .pipe(map(Classes.map));
  }

  get(id: number): Observable<any>
  {
    return this.apiRequest.get('classes/' + id)
    .pipe(map(Classes.map));
  }
  
  delete(id: number): Observable<any> {
    return this.apiRequest.delete('classes/'+id);
  }

  getAll(): Observable<any> {
    return this.apiRequest.get('classes/all')
      .pipe(map(res => res.map(Classes.map)));
  }
}
