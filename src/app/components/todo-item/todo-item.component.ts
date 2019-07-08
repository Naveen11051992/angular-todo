import { Component, OnInit, Input , EventEmitter, Output } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { Todo } from 'src/app/models/Todo';
@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
@Input() todo: Todo;
@Output() deleteTodo: EventEmitter<Todo> = new EventEmitter();

constructor(private  todoService:TodoService) { }
  ngOnInit() {
  }
  setClass(){
    let classes = {
      todo:true,
      'Is-completed' : this.todo.completed
    }
     return classes;
  }
  onToggle(todo){
    // toggle in ui 
    todo.completed = !todo.completed;
    // toggle in service
      this.todoService.toggleCompleted(todo).subscribe(
        todo => console.log("service called")
      )
  }

  onDel(todo){

   this.deleteTodo.emit(todo);
  }
}
