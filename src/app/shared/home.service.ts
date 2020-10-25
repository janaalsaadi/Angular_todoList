import { Observable, Subject } from 'rxjs';
export class HomeService {
 TaskChanged = new Subject<any>();

  private Tasks = [];


  getTasks(){
      return this.Tasks.slice();
  }

  addTask (task:{}){
   this.Tasks.push(task);
   this.TaskChanged.next(this.Tasks.slice());
  }


  deleteTask(id:number){
      this.Tasks.splice(id,1);
      this.TaskChanged.next(this.Tasks.slice());
  }

}