import { Component } from '@angular/core';
import { Router,RouterModule } from '@angular/router';
import { SliderComponent } from "../slider/slider.component";
@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [RouterModule, SliderComponent]
})
export class HomeComponent  {
  // constructor(private router: Router) { }
  //   refreshPage(route: string) {
  //   this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
  //       this.router.navigate([route]);
  //   });
  // }

}

// import { Component } from '@angular/core';
// import { Router, RouterModule} from '@angular/router';

// @Component({
//   selector: 'app-header',
//   standalone: true,
//   imports: [RouterModule],
//   templateUrl: './header.component.html',
//   styleUrl: './header.component.css'
// })
// export class HeaderComponent {
//   constructor(private router: Router) { }

//   refreshPage(route: string) {
//     this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
//         this.router.navigate([route]);
//     });
//   }

// }
