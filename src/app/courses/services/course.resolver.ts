import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';

import {Injectable} from '@angular/core';
import { Observable } from 'rxjs';
import { CoursesService } from './courses.service';
import { Course } from '../model/course';
import { first } from 'rxjs/operators';

@Injectable()
export class CourseResolver implements Resolve<Course> {

  constructor(private coursesService: CoursesService) {

  }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):Observable<Course> {
      // localhost:4200/courses/angular-router-course

      const courseUrl =route.paramMap.get('courseUrl');
      return this.coursesService.loadCourseByUrl(courseUrl);
  }
}
