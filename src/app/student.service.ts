import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()
export class StudentService {

    private apiUrl = `${environment.apiUrl}`;
    constructor(private httpClient: HttpClient) {
    }

    public getStudents(): Observable<any> {
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            }),
            responseType: 'text' as const
        };

        const apiUrl = `${this.apiUrl}/student`;
        return this.httpClient.get(apiUrl, httpOptions);
    }

   public downloadGrade(studentId:number): Observable<any> {
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/octet-stream'
            }),
            responseType: 'blob' as const
        };

        const apiUrl = `${this.apiUrl}/student/download`;
        return this.httpClient.post(apiUrl,studentId, { responseType: 'blob' as const});
    }


    public getGrade(studentId:number): Observable<any> {
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            }),
            responseType: 'text' as const
        };

        const apiUrl = `${this.apiUrl}/student/getgrade/${studentId}`;
        return this.httpClient.get(apiUrl, httpOptions);
    }
}
