import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { CourseGrade } from 'src/model/course-grade.model';
import { Student } from 'src/model/student.model';
import { StudentService } from '../student.service';


@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {
  public students:Array<Student> = [];

  constructor(public studentService: StudentService, private router: Router) { 

  }

  ngOnInit(): void {
    this.studentService.getStudents().subscribe((res) => {
        this.students= JSON.parse(res);
      },(err)=>{console.log(err)});
  
  }

//   getGrade(student: Student):void {
//     this.studentService.getGrade(student.id).subscribe((res) => {
//         this.grade= JSON.parse(res);;
//       },(err)=>{console.log(err)});
  
//   }

  showGrade(student: Student):void {
    this.router.navigate(['/grade', { studentId: student.id, name: `${student.lastName},${student.firstName}`  }]);
   
  
  }

  downloadGrade(student: Student):void {
    
  }
}
