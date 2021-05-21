import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Student } from '../student.model';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit {
  students: Student[] = [];

  private _student: Student;

  @Output() displayed: EventEmitter<String> = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  @Input()
  get student() {
    return this._student;
  }
  set student(student: Student) {
    this._student = student;
    this.students.push(student);
    if (student != null) {
      this.displayed.emit(student.name);
    }
  }
}
