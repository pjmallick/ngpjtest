import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GradeComponent } from './grade/grade.component';
import { StudentComponent } from './student/student.component';

const routes: Routes = [
  { path: 'student', component: StudentComponent },
  { path: 'grade', component: GradeComponent },
  { path: '*', component: StudentComponent },
  { path: '', component: StudentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
