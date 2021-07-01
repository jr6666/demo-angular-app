import { Component, OnInit } from '@angular/core';
import { Input, Output, EventEmitter } from '@angular/core';

import {Todo} from 'src/app/Todo';
@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input("todo")
  public todo!: Todo;

  @Output()
  public todoDeleteEvent: EventEmitter<Todo>=new EventEmitter<Todo>();
  onClick(todo: Todo): void{
    this.todoDeleteEvent.emit(todo);
  }

  constructor() { }
  ngOnInit(): void {
  }

  changeActiveStatus(): void{
    this.todo.active=!this.todo.active
  }

}
