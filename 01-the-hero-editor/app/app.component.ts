

import { Component } from '@angular/core';

export class Station {
  id: number;
  name: string;
  city: string;
  state: string;
  status: string;
  type: string;
}



@Component({
  selector: 'my-app',
  template: `
    <h2>{{title}}</h2>
    <h3>{{station.name}} details</h3>

    <div style="width:600px;border: 1px dashed #ccc;">

      <div style="float:left;">
        <div>
          <label>Name: </label>
          <input [(ngModel)]="station.name" placeholder="name">
        </div>
        <div>
          City: <input [(ngModel)]="station.city" placeholder="city">, State: <input [(ngModel)]="station.state" placeholder="state" size="2">
        </div>
        <div>
          Status: 
          <select [(ngModel)]="station.status" placeholder="status">
            <option value="Member">Member
            <option value="Non-Member">Non-Member
          </select>
        </div>
        <div>
          Type: 
          <input type="radio" value="News" [(ngModel)]="station.type" placeholder="type">News |
          <input type="radio" value="Music" [(ngModel)]="station.type" placeholder="type">Music
        </div>
      </div>
    

  
      <div style="float:right;">
        <label>id: </label>{{station.id}} <br/> 
        <label>location: </label>{{station.city}},{{station.state}} <br/>  
        <label>member status: </label>{{station.status}} <br/>  
        <label>type: </label>{{station.type}}
      </div>
  
      <div style="clear:both"></div>

    </div>


    `
})

export class AppComponent {
  title = 'NPR Stations';
  station: Station = {
    id: 1,
    name: 'WAMU-FM',
    city: 'Washington',
    state: 'DC',
    status: 'Member',
    type: 'News'
  };
}