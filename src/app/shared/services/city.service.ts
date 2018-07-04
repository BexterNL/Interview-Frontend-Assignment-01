import { Injectable } from '@angular/core';
import * as _ from 'lodash';
import { CITIES } from './mock-cities';
import { of, Observable } from 'rxjs';
import { City } from '../models/city';

@Injectable({
  providedIn: 'root'
})
export class CityService {
  constructor() {}

  getCities(page?: number, pageSize?: number): Observable<City[]> {
    const currentPage = page || 1;
    const currentPageSize = pageSize || 50;
    const skip = (currentPage - 1) * currentPageSize;
    console.log(`Skipping ${skip} enties`);
    const result = _.take(_.drop(CITIES, skip), currentPageSize);
    return of(result);
  }
}
