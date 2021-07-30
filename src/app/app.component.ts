import { Component, OnInit, VERSION } from '@angular/core';
import { of, from } from 'rxjs';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  name = 'Angular ' + VERSION.major;

  ngOnInit() {
    of(2, 4, 8, 9, 10).subscribe(console.log);
    from([20, 15, 10, 5]).subscribe(
      item => console.log(`item is : ${item}`),
      err => console.error(`error occured ${err}`),
      () => console.log('complete')
    );

    of('test1', 'test2', 'test3').subscribe(
      item => console.log(`Items are : ${item}`),
      err => console.log(`error occured: ${err}`),
      () => console.log('Complete')
    );
  }
}
