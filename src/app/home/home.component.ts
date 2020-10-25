
import { Component, OnInit } from '@angular/core';
import {HomeService} from '../shared/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
 
})

export class HomeComponent implements OnInit{
  TaskName : string;
  Task = [];
  prior:string;
  myDate  = new Date();
 

  constructor(private homservice:HomeService){}

  onAddTask(){
    
    const newTask = {taskname:this.TaskName, taskPrior:this.prior}
    this.homservice.addTask(newTask);
    console.log(this.Task)
  }

  onDeleteTask(i:number){
    this.homservice.deleteTask(i);
  }

  ngOnInit() {
    this.Task=this.homservice.getTasks();
    this.homservice.TaskChanged.subscribe(
      (tasks :[] )=> {
        this.Task=tasks
    
    })
  }
}