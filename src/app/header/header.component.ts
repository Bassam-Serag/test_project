import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-header',
    standalone: true,
    templateUrl: './header.component.html',
    styleUrl: './header.component.css',
    imports: [RouterModule]
})
export class HeaderComponent {

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

