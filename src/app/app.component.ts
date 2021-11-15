import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'switchCase';


  employees = [
    { id:'emp001', name:'varadharj', role: 'admin', salary:10000 },
    { id:'emp002', name:'arun', role: 'developer', salary:10000 },
    { id:'emp003', name:'mani', role: 'testing', salary:10000 }
  ];

  // netSalary=0;


  newSalary(employees:any){

    const arr :any[] = employees;
    // console.log(arr);

    for (let i = 0; i < arr.length; i++) {
      const element = arr[i];
      console.log(element);


      switch (element.role) {
        case 'admin':
           return element.salary + (((element.salary)/100)*30);
          break;
          case 'developer':
          console.log(element.salary + (((element.salary)/100)*20));
          break;
          case 'testing':
          console.log(element.salary + (((element.salary)/100)*10));
          break;

        default:
          break;
      }

    }

    // console.log(role,salary);
    // const admin = role.admin;
    // const developer = role.developer;

    // let netbey:number = 0;

    //   switch (role) {
    //   case  admin :
    //   // console.log(salary+((salary/100)*50));
    //   return netbey = salary + ((salary/100)*50);
    //   break;
    //   case developer:
    //   // console.log(salary+((salary/100)*30));
    //   return netbey = salary + ((salary/100)*30);
    //    break;
    //   default :
    //   // console.log(salary+((salary/100)*10));
    //   return netbey = salary + ((salary/100)*10)
    //   break;
    // }
  }

  ngOnInit(): void {

    const employees = [
      { id:'emp001', name:'varadharj', role: 'admin', salary:10000 },
      { id:'emp002', name:'arun', role: 'developer', salary:10000 },
      { id:'emp003', name:'mani', role: 'testing', salary:10000 },
      { id:'emp004', name:'kumar', role: 'admin', salary:20000 },
      { id:'emp005', name:'vj', role: 'developer', salary:12000 },

    ];

    const arr :any[] = employees;
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];

    console.log(element.name);
    console.log(element.salary);
    console.log(element.role);

    switch (element.role) {
      case 'admin':
        console.log(element.salary + (((element.salary)/100)*30));
        break;
        case 'developer':
        console.log(element.salary + (((element.salary)/100)*20));
        break;
        case 'testing':
        console.log(element.salary + (((element.salary)/100)*10));
        break;

      default:
        break;
    }

  }






    let targetId = 'btnUpdate';

    switch (targetId) {

    case 'btnUpdate':
      if('btnUpdate' == 'btnUpdate')
        console.log('Update');
        break;
    case 'btnDelete':
        console.log('Delete');
        break;
    case 'btnNew':
        console.log('New');
        break;
  }

// change the month and year
let month = 5,
year = 2020;

let day = 0;
switch (month) {
case 1:
case 3:
case 5:
case 7:
case 8:
case 10:
case 12:
    day = 31;
    break;
case 4:
case 6:
case 9:
case 11:
    day = 30;
    break;
    case 2:
      // leap year
      if (((year % 4 == 0) && !(year % 100 == 0)) || (year % 400 == 0))
          day = 29;
      else
          day = 28;
      break;

default:
    throw Error('Invalid month');
}

console.log(`The month ${month} in ${year} has ${day} days`);
  }
}
