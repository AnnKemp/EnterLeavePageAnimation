import { Component, OnInit } from '@angular/core';
import { faHome} from '@fortawesome/free-solid-svg-icons';
import { faMailBulk} from '@fortawesome/free-solid-svg-icons';
import { faPhone} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  faHome= faHome;
  faMailBulk=faMailBulk;
  faPhone=faPhone;

  constructor() { }

  ngOnInit(): void {
  }

}
