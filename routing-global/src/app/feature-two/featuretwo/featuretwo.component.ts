import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Subscription, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-featuretwo',
  templateUrl: './featuretwo.component.html',
  styleUrls: ['./featuretwo.component.scss'],
})
export class FeaturetwoComponent implements OnInit, OnDestroy {
  isFeatureHome: boolean;
  urlSubscription?: Subscription;
  routerEventSubscription?: Subscription;
  unSub: Subject<Boolean>;

  constructor(private router: Router, private route: ActivatedRoute) {
    this.isFeatureHome = false;
    this.unSub = new Subject();
  }

  ngOnInit(): void {
    this.urlSubscription = this.route.url.subscribe((url) => {
      this.isFeatureHome = url.length === 0;
    });
    this.routerEventSubscription = this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.isFeatureHome =
          event.urlAfterRedirects.endsWith('/featuretwo') ||
          event.urlAfterRedirects.endsWith('/featuretwo/');
      }
    });
  }

  ngOnDestroy(): void {
    if (this.urlSubscription) {
      this.urlSubscription.unsubscribe();
    }
    if (this.routerEventSubscription) {
      this.routerEventSubscription.unsubscribe();
    }

    // this.unSub.unsubscribe();
  }
}
