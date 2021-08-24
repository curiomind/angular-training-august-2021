import { Component, HostBinding, HostListener, OnInit } from '@angular/core';
import { DataService } from './services/data.service';
import {
  ActivatedRoute,
  NavigationEnd,
  NavigationStart,
  Router,
} from '@angular/router';
import { AuthService } from './services/auth.service';
import { UrlService } from './services/url.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'routing-global';
  activeClass = '';
  featureActiveClass = '';

  @HostBinding('class') appClass: string;

  constructor(
    private dataService: DataService,
    private route: ActivatedRoute,
    private router: Router,
    private urlService: UrlService,
    public auth: AuthService
  ) {
    this.appClass = '';
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    if (event.target) {
      const thisWindow = <typeof window>event.target;

      if (thisWindow.innerWidth < 1000) {
        this.appClass = 'bgdark';
      } else {
        this.appClass = '';
      }
    }
  }

  ngOnInit() {
    console.log('Todo', this.dataService.todo);

    this.route.paramMap.subscribe((params) => {
      console.log('AppComponent - Route has ID', params.has('id'));
    });

    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        if (event.url.startsWith('/product/')) {
          this.activeClass = 'active';
        }
        if (event.url.startsWith('/featureone/')) {
          this.featureActiveClass = 'active';
        }
      }

      if (event instanceof NavigationStart) {
        this.activeClass = '';
        this.featureActiveClass = '';

        this.urlService.previousUrl = this.urlService.currentUrl;
        this.urlService.currentUrl = event.url;
      }
    });
  }

  createError() {
    throw new Error('Error Created');
  }

  goToProduct(id: number) {
    this.router.navigateByUrl(`/products/${id}`);
    // this.router.navigate(['product', '1'], {
    //   queryParams: { user: 1, limit: 100 },
    // });
  }

  allowActivatingAbout() {
    this.auth.AllowActivate = !this.auth.AllowActivate;
  }

  allowDeActivatingAbout() {
    this.auth.AllowDeActivate = !this.auth.AllowDeActivate;
  }

  allowActivatingProduct() {
    this.auth.AllowActivateChild = !this.auth.AllowActivateChild;
  }

  allowLoadingFeatureTwo() {
    this.auth.AllowLoadingChild = !this.auth.AllowLoadingChild;
  }
}
