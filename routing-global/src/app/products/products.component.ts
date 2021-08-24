import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { Post } from '../models';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  products?: Post[];

  constructor(private data: DataService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.data.subscribe((data) => {
      this.products = data.posts;
    });
    // this.data
    //   .getPosts()
    //   .pipe(map((res) => res.slice(0, 3)))
    //   .subscribe((res) => {
    //     this.products = res;
    //   });
  }
}
