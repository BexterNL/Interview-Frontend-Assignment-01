import { Component, OnInit } from '@angular/core';
import { CityService } from '../../shared/services/city.service';
import { City } from '../../shared/models/city';

@Component({
  selector: 'app-assignment',
  templateUrl: './assignment.component.html',
  styleUrls: ['./assignment.component.scss']
})
export class AssignmentComponent implements OnInit {
  private cities: City[];

  constructor(private _service: CityService) {}

  refreshGrid(page?: number, pageSize?: number) {
    const self = this;
    this._service.getCities(page, pageSize).subscribe(data => {
      self.cities = data;
    });
  }

  ngOnInit() {
    this.refreshGrid();
  }
}
