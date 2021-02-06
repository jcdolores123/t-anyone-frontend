import { Component, OnDestroy, HostListener } from '@angular/core';
import { MockService } from 'src/app/services/mock.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy {
  title = 'treayanyone-ecommerce';

  constructor(
    private mockService: MockService
    ) { }
  
  @HostListener('window:beforeunload', ['$event']) unloadHandler(event: Event) {
    this.mockService.removeSelectedItems();
    return false;
  }  

  ngOnDestroy(){
    this.mockService.removeSelectedItems();
  }
}
