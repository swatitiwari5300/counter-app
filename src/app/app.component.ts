import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  count:number = 0;

  handleIncrement(){
    this.count = this.count+1;
  }

    handleDecrement(){
    this.count = this.count-1;
  }

  handleReset(){
    this.count = 0;
  }

  handleCounter(val:string){
    if(val === '-'){
      if(this.count>0){
      this.handleDecrement();
      }
    }else if(val === '+'){
      this.handleIncrement();
    }else{
      this.handleReset();
    }
  }
}
