import { Component } from '@angular/core';
import { JokesService } from '../services/jokes.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
   jokes: any;

  constructor(private jokesService: JokesService) {
    this.getJokes();
  }

  getJokes(){
    this.jokesService.getJokes()
      .subscribe(response => {
        this.jokes = response.jokes;
    })
  }

}
