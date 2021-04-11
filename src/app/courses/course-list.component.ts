import { Component, OnInit } from '@angular/core';
import { Course } from './course';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html'
})

export class CourseListComponent implements OnInit {

  courses: Course[] = [];

  ngOnInit(): void {
    this.courses = [
      {
        id: 1,
        name: 'Angular : Forms',
        imageUrl: '/assets/images/forms.png',
        price: 99.99,
        code: 'ANF-9687',
        duration: 120,
        rating: 4.4,
        releaseDate: 'April, 9, 2021',
      },
      {
        id: 2,
        name: 'Angular : HTTP',
        imageUrl: '/assets/images/http.png',
        price: 45.99,
        code: 'ANH-9025',
        duration: 80,
        rating: 4.7,
        releaseDate: 'December, 2, 2020',
      },
      {
        id: 3,
        name: 'Angular : Routes',
        imageUrl: '/assets/images/router.png',
        price: 37.97,
        code: 'ANH-9025',
        duration: 60,
        rating: 4.0,
        releaseDate: 'November, 14, 2020',
      }
    ]

  }
}
