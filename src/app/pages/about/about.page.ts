import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
})
export class AboutPage implements OnInit {
  today: Date = new Date(); // Para usar com o pipe date (built-in)

  constructor() { }

  ngOnInit() {
  }
}