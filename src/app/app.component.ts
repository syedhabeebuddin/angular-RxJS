import { Component, OnInit, VERSION } from '@angular/core';
import { of, from } from 'rxjs';
import { map, tap, take } from 'rxjs/operators';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  name = 'Angular ' + VERSION.major;

  ngOnInit() {
    of(2, 4, 8, 9, 10).subscribe(console.log);
    from([20, 15, 10, 5])
      .pipe(
        tap(item => console.log(`original item : ${item}`)),
        map(item => item * 2),
        map(item => item - 20),
        map(item => {
          if (item === 0) {
            throw new Error('zero detected');
          }
          return item;
        }),
        take(3)
      )
      .subscribe(
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
