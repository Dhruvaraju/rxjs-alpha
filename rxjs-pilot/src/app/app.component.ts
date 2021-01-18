import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'rxjs-pilot';

  ngOnInit(): void {
    document.addEventListener('click', () => {
      console.log('Event has been triggered');
    });
    let counter = 0;
    let intervalTest = setInterval(() => {
      console.log(
        'triggered from timeout and current trigger number:' + counter
      );
      counter++;
      if (counter >= 2) {
        clearInterval(intervalTest);
      }
    }, 1000);

  }
}
