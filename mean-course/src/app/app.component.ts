import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  myStyle: object = {};
	myParams: object = {};
	width: number = 100;
	height: number = 100;

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.authService.autoAuthUser();
    this.myStyle = {
            'position': 'fixed',
            'width': '100%',
            'height': '100%',
            'z-index': 100,
            'top': '0px',
            'left': '0px',
            'right': '0px',
            'bottom': '0px',
        };

	this.myParams = {
            particles: {
                number: {
                    value: 200,
                },
                color: {
                    value: '#003366'
                },
                shape: {
                    type: 'circle',
                },
                move: {
                    speed: 6,
                }
	    },
      interactivity: {
        onhover: {
          mode: "grab",
        },
      }

	};
  }
}
