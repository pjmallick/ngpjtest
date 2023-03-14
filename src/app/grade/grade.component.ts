import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CourseGrade } from 'src/model/course-grade.model';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-grade',
  templateUrl: './grade.component.html',
  styleUrls: ['./grade.component.scss']
})
export class GradeComponent implements OnInit {
  title = 'grade';
  public grades:Array<CourseGrade> = [];
  public name: String = '';
  public studentId: Number =0;

  constructor( private route: ActivatedRoute,  private router: Router,private studentService: StudentService,){
    
  }

  ngOnInit() {
    this.studentId = Number(this.route.snapshot.paramMap.get('studentId'));
    this.name = String( this.route.snapshot.paramMap.get('name'));
     this.studentService.getGrade(Number(this.studentId)).subscribe((res) => {
        this.grades= JSON.parse(res);
        console.log(this.grades);
      },(err)=>{console.log(err)});
  }

  showStudentList(): void {
    this.router.navigate(['/student']);
  }

  downloadGrade(): void {
    
  }

}
