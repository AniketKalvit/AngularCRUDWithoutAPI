import { Component, OnInit } from '@angular/core';
import { DepartmentSerice } from './department.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {
constructor(private deptService:DepartmentSerice,private fb:FormBuilder){

}
isUpatebtn:boolean=false;
deptForm=this.fb.group({
deptid:[],
deptname:[]
});

ngOnInit(): void {
  this.getAllDepts();

}

deptList:any=[];
public getAllDepts(){
this.deptList=this.deptService.getAllDepts();
}

saveData(){
  let dept=this.deptForm.value;
  if(this.isUpatebtn){
    this.deptService.updateDept(dept);
    this.isUpatebtn=!this.isUpatebtn;
  }
  else{
    
    this.deptService.saveDept(dept);
  }

  this.getAllDepts();
  this.deptForm.reset();
 
}

edit(dept:any){
  this.isUpatebtn=!this.isUpatebtn;
this.deptForm.setValue({
deptid:dept.deptid,
deptname:dept.deptname
});
}

delete(id:number){
  let result=confirm("Do you want to delete "+id +" ?");
  if(result==true){
    this.deptService.deleteDept(id);
    this.getAllDepts();
  }
}

}
