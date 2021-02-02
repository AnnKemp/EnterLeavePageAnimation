import { Component } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
// effie checken of ik hier nu ook het router componente moet importeren en de footer

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('flyInOut', [
      state('in', style({
        transform: 'translateX(0)'
      })),
      transition('void => *', [
        animate(100, style({transform: 'translateX(-100%)' }))
      ]),
      transition('* => void', [
        animate(100, style({transform: 'translateX(100%)' }))
      ])
    ])
  ]
})
export class AppComponent {
  
}
