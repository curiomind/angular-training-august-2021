import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from '../models';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  post: Post | null;
  productParent: boolean;

  constructor(private route: ActivatedRoute, private data: DataService) {
    this.post = null;
    this.productParent =
      this.route.parent?.snapshot.url.toString().includes('products') ?? false;
  }

  ngOnInit(): void {
    this.route.data.subscribe((data) => {
      this.post = data.post;
    });

    this.route.queryParamMap.subscribe((query) => {
      console.log('User: ', query.get('user'));
      console.log('Limit: ', query.get('limit'));
    });

    // this.route.params.subscribe((params) => {
    //   // const id = params.get('id');
    //   const id = params.id;
    //   if (id) {
    //     this.data.getPost(id).subscribe((res) => (this.post = res));
    //   }
    // });
    console.log(this.route.snapshot.params.id);

    console.log('User snapshot: ', this.route.snapshot.queryParams.user);
    console.log('Limit snapshot: ', this.route.snapshot.queryParams.limit);
  }
}
