import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'iWeb';
  ngOnInit(): void {
    setTimeout(
      () => {
        document.getElementById("overlay").style.display = "block";
      }, 5000
    )
  }
  off() {
    document.getElementById("overlay").style.display = "none";
  }
}
