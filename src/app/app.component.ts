import { Component } from '@angular/core';
import { SocketIoConfig } from 'ngx-socket-io';

export const config: SocketIoConfig = { url: 'http://localhost:4444', options: {} };

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent {
  title = 'socketChat';
}
