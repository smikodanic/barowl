import { Component, OnInit, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { NavComponent } from '../../shared/components/app-nav/nav.component';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true,
  imports: []
})
export class HomeComponent implements OnInit {
  constructor(
  ) { }

  ngOnInit() {
  }


}
