import { Component, OnInit } from "@angular/core";
import { Ipost } from "../models/post.model";
import { Post } from "../services/post";

@Component({
  selector: "app-posts",
  standalone: false,
  templateUrl: "./posts.html",
  styleUrl: "./posts.css",
})
export class Posts implements OnInit {
  showform: boolean = false;
  posts: Ipost[] = [];
  commentInputs: { [postId: number]: string } = {};

  constructor(private postService: Post) {}

  ngOnInit(): void {
    this.posts = this.postService.getposts();
  }

  toggleForm() {
    this.showform = !this.showform;
  }

  newpost: Ipost = {
    id: 0,
    date: new Date(),
    title: "",
    body: "",
    userid: 0,
    imgurl: "",
    like: false,
    likes: 0,
    comments: [],
  };

  addpost() {
    this.postService.addpots({ ...this.newpost });
    this.posts = this.postService.getposts();
    this.newpost = {
      id: 0,
      date: new Date(),
      title: "",
      body: "",
      userid: 0,
      imgurl: "",
      like: false,
      likes: 0,
      comments: [],
    };
  }

  removepost(id: number) {
    this.postService.deletePost(id);
    this.posts = this.postService.getposts();
  }

  likecounter(post: Ipost) {
    if (!post.like) {
      post.like = true;
      post.likes++;
    }
  }

  addcomment(post: Ipost) {
    const comment = this.commentInputs[post.id];
    if (comment && comment.trim() !== "") {
      post.comments.push(comment.trim());
      this.commentInputs[post.id] = "";
    }
  }
}
