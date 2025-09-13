import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  // img url
  imgParent = 'https://www.w3schools.com/howto/img_avatar.png';

  onLoaded(url: string) {
    console.log('log padre!', url);
  }
}
