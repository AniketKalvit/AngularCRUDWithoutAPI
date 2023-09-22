import { Injectable } from "@angular/core";

@Injectable({
    providedIn:'root'
})
export class DepartmentSerice{
deptList=[
{deptid:1,deptname:"HR"}
];

public getAllDepts(){
    return this.deptList;
}

public saveDept(dept:any){
  this.deptList.push({deptid:dept.deptid,deptname:dept.deptname});
}
public updateDept(dept:any){
    for(let i=0;i<this.deptList.length;i++)
    {
        if(this.deptList[i].deptid==dept.deptid)
        {
            this.deptList[i].deptname=dept.deptname;
        }
    }
}
public deleteDept(id:number){
let i=0;
for(;i<this.deptList.length;i++){
    if(this.deptList[i].deptid==id){
        break;
    }
}
this.deptList.splice(i,1);
}
}