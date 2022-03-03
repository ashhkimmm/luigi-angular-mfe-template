import { Component } from '@angular/core';
import * as LuigiClient from '@luigi-project/client';
import { LinkManager } from "@luigi-project/client";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor() {
  }

  ngOnInit() {
    LuigiClient.luigiClientInit();
  }

}
