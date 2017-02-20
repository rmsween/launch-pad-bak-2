import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-launch-conflict',
  templateUrl: './launch-conflict.component.html',
  styles: []
})
export class LaunchConflictComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    var form = document.getElementById("form");
    form.addEventListener("focus", function( event ) {
      //event.target.style.background = "pink";
    }, true);
    form.addEventListener("blur", function( event ) {
      //event.target.style.background = "";
      console.log(event.target);
    }, true);
  }

}
