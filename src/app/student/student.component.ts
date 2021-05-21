import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from '../student.model';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  student: Student;
  studentCopy: Student;
  name: String;

  constructor(private studentService: StudentService, private router: Router) {}

  ngOnInit() {
    this.student = {
      name: null,
      marks: null
    };
  }

  onSubmit(): void {
    console.log(this.student);
    this.studentCopy = Object.assign({}, this.student);
    //this.studentService.setstudent(studentCopy);
    //this.router.navigateByUrl('confirm');
  }

  confirmDisplay(name: String): void {
    setTimeout(() => {
      this.name = name;
      console.log(this.name);
    });
  }
}
