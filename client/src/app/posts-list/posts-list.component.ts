import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Post } from '../types/post';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrl: './posts-list.component.css'
})
export class PostsListComponent  implements OnInit {
  postsList: Post[] = [];
  isLoading: Boolean = true;
  constructor(private apiService: ApiService) {}

  ngOnInit(): void {

    //Just like then:  this.apiService.getPosts(5).then(posts => {
    this.apiService.getPosts(5).subscribe({
      next: (posts) => {
        this.postsList = posts;
        this.isLoading = false;
      },
      error: (err) => {
        this.isLoading = false;
        console.log(err);
        
      }
    })
  }
}
