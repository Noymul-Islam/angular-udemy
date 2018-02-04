import { Component, OnInit } from '@angular/core';


@Component({
  // selector: 'app-servers',
  selector: '.app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer: boolean = false;
  serverCreationStatus: String= 'No server was created';
  serverName= 'Test';
  serverCreated: boolean = false;

  onCreationServer(){
    this.serverCreated=true;
    this.serverCreationStatus='server was created'+this.serverName;
  }
  constructor() { 

    setTimeout(()=>{
     this.allowNewServer= true;

    },2000);
  }
  onUpdateServerName(ev :Event){
    this.serverName= (<HTMLInputElement>ev.target).value;


  }
  ngOnInit() {
  }

}
