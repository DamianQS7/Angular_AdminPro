import { Component, inject, OnDestroy } from '@angular/core';
import { ActivationEnd, Router } from '@angular/router';
import { filter, map, Subscription } from 'rxjs';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrl: './breadcrumbs.component.css'
})
export class BreadcrumbsComponent implements OnDestroy{

  private router: Router = inject(Router);

  public title: string = '';
  public titleSubs$?: Subscription;

  constructor() {
    this.titleSubs$ = this.getRouteArguments();
  }

  ngOnDestroy(): void {
    this.titleSubs$?.unsubscribe();
  }

  private getRouteArguments(): Subscription {
    return this.router.events
      .pipe(
        filter(event => event instanceof ActivationEnd && event.snapshot.firstChild === null),
        map((event: any) => event.snapshot.title as any)
        //filter((event: ActivationEnd) => event.snapshot.title !== 'Dashboard'),
      )
      .subscribe((title) => this.title = title);
  }
}
