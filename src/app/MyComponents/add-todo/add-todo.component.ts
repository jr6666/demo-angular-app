import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { Todo } from 'src/app/Todo';
@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {

  title: string="";
  desc: string="";
  constructor() { }

  ngOnInit(): void {
  }

  @Output()
  public addTodoEvent: EventEmitter<Todo>=new EventEmitter<Todo>();
  onSubmit():void{
    const todo: Todo={
      sno: 9,
      title: this.title,
      desc: this.desc,
      active: true
    }
    this.addTodoEvent.emit(todo);
  }

}
