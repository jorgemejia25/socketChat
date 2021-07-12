import { Component, OnInit } from '@angular/core';
import { SocketService } from '../services/socket-service.service';

@Component({
  selector: 'app-chat-main',
  templateUrl: './chat-main.component.html',
  styleUrls: ['./chat-main.component.scss']
})
export class ChatMainComponent implements OnInit {

  constructor(private socketSerice: SocketService) { }

  ngOnInit(): void {
  }

}
