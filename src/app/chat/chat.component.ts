import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, NavigationError, Router} from "@angular/router";


@Component({
  selector: 'chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  constructor(private route:ActivatedRoute, private router:Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationError) {
        console.error('Navigation error:', event.error);
      }
    });
   }

  ngOnInit(): void {
  }

}
