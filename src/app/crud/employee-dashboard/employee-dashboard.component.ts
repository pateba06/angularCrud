import { Component, OnInit } from '@angular/core';
// Essential for - Reactive Forms
import { FormBuilder, FormGroup } from '@angular/forms'
import { CrudserviceService } from 'src/app/shared/service/crudservice.service';
// imported Employeemodel
import { EmployeeModel } from './employee-dashboard.model';

@Component({
  selector: 'app-employee-dashboard',
  templateUrl: './employee-dashboard.component.html',
  styleUrls: ['./employee-dashboard.component.css']
})
export class EmployeeDashboardComponent implements OnInit {
  // formValue we will bind in form
  formValue !: FormGroup;
  // we created interface object in employee-dashboard Models.. EmployeeModel is imported
  employeeModelObj: EmployeeModel = new EmployeeModel();
  employeeData !: any;


  constructor(private formbuilder: FormBuilder, private crudApi: CrudserviceService) {

  }


  ngOnInit() {
    this.formValue = this.formbuilder.group({
      firstName: [''],
      lastName: [''],
      email: [''],
      mobile: [''],
      salary: ['']
    })

    // So when our application run it will call this method. Get method in service > subscribing in method and then calling it here
    this.getAllEmployee();
  }

  /*
  / post method to post data to the api. once we add the data
 */
  postEmployeeDetails() {
    this.employeeModelObj.firstName = this.formValue.value.firstName;
    this.employeeModelObj.lastName = this.formValue.value.lastName;
    this.employeeModelObj.email = this.formValue.value.email;
    this.employeeModelObj.mobile = this.formValue.value.mobile;
    this.employeeModelObj.salary = this.formValue.value.salary;
    // lets post the data//we already imported CrudserviceService in constructor
    this.crudApi.postEmployee(this.employeeModelObj)
      // subscribing to the data thrugh the success response
      .subscribe(res => {
        // we are subscribing the response and what we want to do if it success
        console.log(res)
        alert("Employee Is Added successfully")
        // want to close the model once the form is successfully added
        let ref = document.getElementById('cancel')
        ref?.click();
        // after successfully form is submitted we want to reset it
        // this.formValue.reset();
      },
        err => {
          // if no error response from http then what we want to do?
          alert("Something Went Wrong")
          this.formValue.reset();
        }
      )
  }

  /*
  / Get Method. Get the data from Json i.e from server and pass it in the table. Then we will call this method in ngOnit
  */
  getAllEmployee(){
    // calling getEmployee() function of crudservice 
    this.crudApi.getEmployee()
    // subscribing the response -- we need to create property so we creat employeeData property above and store the response
    .subscribe(res =>{
      this.employeeData =res;
    }
    )
  }

  /*
  / Delete Method
  */
  deleteEmployee(empdata : any){
    this.crudApi.deleteEmployee(empdata.id)
    .subscribe(res =>{
      alert("Employees Deleted")
      this.getAllEmployee()
    })
  }

   /*
  / edit Method to update the api
  */
  onEdit(empdata:any){
    this.formValue.controls['firstName'].setValue(empdata.firstName);
    this.formValue.controls['lastName'].setValue(empdata.lastName);
    this.formValue.controls['email'].setValue(empdata.email);
    this.formValue.controls['mobile'].setValue(empdata.mobile);
    this.formValue.controls['salary'].setValue(empdata.salary);

  }


}
