import { Injectable } from "@angular/core";
import { Ipost } from "../models/post.model";

@Injectable({
  providedIn: "root",
})
export class Post {
  private posts: Ipost[] = [
    {
      id: 1,
      date: new Date(),
      title: "Angular Tips",
      body: "Angular is a powerful front-end framework!",
      userid: 101,
      imgurl:
        "https://media.istockphoto.com/id/1885088156/photo/happy-dog-looking-up-at-camera-with-smile.webp?b=1&s=612x612&w=0&k=20&c=Ue5PgFjSJuAqgB9AaLkrvZ7jAVb4BgvzypJtoq9uisM=",
      like: false,
      likes: 0,
      comments: [],
    },
    {
      id: 2,
      date: new Date(),
      title: "TypeScript Rocks",
      body: "TypeScript makes JavaScript safer and scalable.",
      userid: 102,
      imgurl:
        "https://media.istockphoto.com/id/1885088156/photo/happy-dog-looking-up-at-camera-with-smile.webp?b=1&s=612x612&w=0&k=20&c=Ue5PgFjSJuAqgB9AaLkrvZ7jAVb4BgvzypJtoq9uisM=",
      like: false,
      likes: 0,
      comments: [],
    },
    {
      id: 3,
      date: new Date(),
      title: "Learning Angular",
      body: "Components, services, and routing make life easier.",
      userid: 103,
      imgurl:
        "https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=600",
      like: false,
      likes: 0,
      comments: [],
    },
    {
      id: 4,
      date: new Date(),
      title: "Post Four",
      body: "This is a sample post",
      imgurl:
        "https://media.istockphoto.com/id/1885088156/photo/happy-dog-looking-up-at-camera-with-smile.webp?b=1&s=612x612&w=0&k=20&c=Ue5PgFjSJuAqgB9AaLkrvZ7jAVb4BgvzypJtoq9uisM=",
      userid: 104,
      like: false,
      likes: 0,
      comments: [],
    },
    {
      id: 5,
      date: new Date(),
      title: "Funny Post",
      body: "Here’s a meme-worthy post!",
      userid: 105,
      imgurl:
        "https://media.istockphoto.com/id/1885088156/photo/happy-dog-looking-up-at-camera-with-smile.webp?b=1&s=612x612&w=0&k=20&c=Ue5PgFjSJuAqgB9AaLkrvZ7jAVb4BgvzypJtoq9uisM=",
      like: false,
      likes: 0,
      comments: [],
    },
  ];

  getposts(): Ipost[] {
    return this.posts;
  }
  addpots(post: Ipost): void {
    this.posts.push(post);
  }

  deletePost(id: number): void {
    this.posts = this.posts.filter((p) => p.id !== id);
  }
  updatePost(updatapost: Ipost) {
    const index = this.posts.findIndex((p) => p.id === updatapost.id);
    this.posts[index] = { ...updatapost };
  }
}
