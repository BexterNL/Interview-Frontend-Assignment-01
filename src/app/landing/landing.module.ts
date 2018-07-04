import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { AssignmentComponent } from './assignment/assignment.component';
import { CityService } from '../shared/services/city.service';

@NgModule({
  imports: [CommonModule],
  declarations: [HomeComponent, AssignmentComponent],
  providers: [CityService]
})
export class LandingModule {}
