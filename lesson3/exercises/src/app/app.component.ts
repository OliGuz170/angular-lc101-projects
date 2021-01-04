import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Exercises: Angular Lesson 3';

  color = 'green';
  height = 0;
  width = 0;
  message = 'Space shuttle ready for takeoff!';
  takeOffEnabled: boolean = true;


handleTakeOff() {
  let result = window.confirm('Are you sure the shuttle is ready for takeoff?');

  if (result) {
     this.color = 'blue';
     this.height = 10000;
     this.width = 0;
     this.message = 'Shuttle in flight.';
  }
}

handleLand() {
  let result = window.confirm('Shuttle is landing. Landing gear engaged');
  if (result) {
     this.color = 'green';
     this.height = 0;
     this.width = 0;
     this.message = 'The shuttle has landed';
     rocketImage.style.bottom = '0px';
  }
}

handleAbort() {
  let result = window.confirm('Are you sure you want to abort the mission?');
  if (result) {
     this.color = 'green';
     this.height = 0;
     this.width = 0;
     this.message = 'Mission aborted';
     rocketImage.style.bottom = '0px';
  }
}

moveRocket(rocketImage, direction){
  if (direction === 'right') {
  let movement = parseInt(rocketImage.style.left) + 10 + 'px';
  rocketImage.style.left = movement;
  this.width = this.width + 10000;
  } else if (direction === 'left'){
    let movement = parseInt(rocketImage.style.left) - 10 + 'px';
    rocketImage.style.left = movement;
    this.width = this.width + 10000;
  } else if (direction === 'up'){
    let movement = parseInt(rocketImage.style.left)  + '100px';
    rocketImage.style.left = movement;
    this.width = this.width + 10000;
  } else {
    let movement = parseInt(rocketImage.style.left) + 10 + '10px';
    rocketImage.style.left = movement;
    this.width = this.width - 10000;
  }
}
}