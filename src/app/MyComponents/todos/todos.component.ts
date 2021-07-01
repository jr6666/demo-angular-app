import { Component, OnInit } from '@angular/core';

import {Todo} from 'src/app/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  title: string="Todos Component";

  todos: Todo[]=[];
  constructor() { 
  }

  ngOnInit(): void {
  }

  deleteTodoItem(todo: Todo): void{
    this.todos.splice(this.todos.indexOf(todo), 1);
  }
  addTodoItem(todo: Todo): void{
    this.todos.push(todo);
  }

}
