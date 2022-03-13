import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  base_url = 'http://localhost:3000';
  tickers: any = [];
  percentag: number = 1;
  inr = 10000;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getTickersData();
  }

  getTickersData() {
    this.http.get(this.base_url + '/tickers/' + this.inr).subscribe((data) => {
      this.tickers = data;
    });
  }

  roundUp(x: any) {
    return Number.parseFloat(x).toFixed(5);
  }
  roundUpinr(x: any) {
    return Number.parseFloat(x).toFixed(2);
  }
}
