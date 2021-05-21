import { Injectable } from '@angular/core';
import { Student } from './student.model';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private students: Student[] = [];

  setstudent(student: Student) {
    this.students.push(student);
  }

  getStudent() {
    return this.students;
  }
}
