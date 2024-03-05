import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { AboutComponent } from './pages/user/about/about.component';
import { HeaderComponent } from "./header/header.component";
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, AboutComponent,HomeComponent, RouterModule, HeaderComponent,FooterComponent]
})
export class AppComponent {
  title = 'Project';
}

// import { Component,OnInit } from '@angular/core';
// import { NavigationEnd, Router, RouterModule, RouterOutlet } from '@angular/router';
// import { AboutComponent } from './pages/user/about/about.component';
// import { HeaderComponent } from "./header/header.component";
// import { HomeComponent } from './home/home.component';
// import { FooterComponent } from "./footer/footer.component";

// @Component({
//     selector: 'app-root',
//     standalone: true,
//     templateUrl: './app.component.html',
//     styleUrl: './app.component.css',
//     imports: [RouterOutlet, AboutComponent, HomeComponent, RouterModule, HeaderComponent, FooterComponent]
// })
// export class AppComponent implements OnInit{
//   title = 'Project';
//   constructor(private router: Router) {}

//   ngOnInit() {
//     this.router.events.subscribe((event: any) => {
//       if (event instanceof NavigationEnd) {
//         // Trick the Router into believing it's last link wasn't previously loaded
//         this.router.navigated = false;
//         // if you need to scroll back to top, here is the right place
//         window.scrollTo(0, 0);
//       }
//     });
//   }
// }
