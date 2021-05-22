import { Injectable } from '@angular/core';
// required for api httpClient ..also we need to import in app module
import { HttpClient } from '@angular/common/http'
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class CrudserviceService {

  constructor(private http: HttpClient) { }

  // Post Method
  postEmployee(data: any) {
    return this.http.post<any>("http://localhost:3000/posts", data)
      .pipe(map((res: any) => {
        return res;
      }))
  }

  //Pipe Method
  getEmployee() {
    return this.http.get<any>("http://localhost:3000/posts")
      .pipe(map((res: any) => {
        return res;
      }))
  }

  //Update Method
  updateEmployee(data: any,id: number) {
    return this.http.put<any>("http://localhost:3000/posts"+id, data)
      .pipe(map((res: any) => {
        return res;
      }))
  }

  //Delete Employee
  deleteEmployee(id: number) {
    return this.http.delete<any>("http://localhost:3000/posts" + id)
      .pipe(map((res: any) => {
        return res;
      }))
  }


}



/*
1 - First import HTTPClient
2- all four methosds and will use pipe to map it.
*/