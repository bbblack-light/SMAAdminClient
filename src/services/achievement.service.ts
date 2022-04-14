import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Achievement } from 'src/model/buisness/Achievement';
import { ApiRequestService } from './api-request.service';


@Injectable()
export class AchievementService {

  constructor(
    private apiRequest: ApiRequestService
  ) {}

  update(product: Achievement): Observable<any>
  {
    return this.apiRequest.post('achievement/', product)
      .pipe(map(Achievement.map));
  }

  get(id: number): Observable<any>
  {
    return this.apiRequest.get('achievement/' + id)
      .pipe(map(Achievement.map));
  }
  
  delete(id: number): Observable<any> {
    return this.apiRequest.delete('achievement/'+id);
  }

  getAll(): Observable<any> {
    return this.apiRequest.get('achievement/all')
      .pipe(map(res => res.map(Achievement.map)));
  }
}
