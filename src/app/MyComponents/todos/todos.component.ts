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
    const localItem=localStorage.getItem("todos");
    if(localItem!=null)
      this.todos=JSON.parse(localItem);
  }

  ngOnInit(): void {
  }

  deleteTodoItem(todo: Todo): void{
    this.todos.splice(this.todos.indexOf(todo), 1);
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }
  addTodoItem(todo: Todo): void{
    this.todos.push(todo);
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }

}
