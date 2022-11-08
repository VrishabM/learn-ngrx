import {Component, Input} from '@angular/core';

@Component({
  selector: 'legacy-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.less']
})
export class ResultComponent {

  @Input() counter!: number;

}
