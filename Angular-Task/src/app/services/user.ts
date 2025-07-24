import { Injectable } from '@angular/core';
import { Iuser } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class User {
   private users: Iuser[] = [
    {
      id: 1,
      name: "maostafa tarek",
      imgurl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJqQNJt7Lz7TkAx-GvujbqXgpy0yrB0hhlGg&s",
      password: "123"
    },
    {
      id: 2,
      name: "mana ali",
      imgurl: "https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg",
      password: "356"
    }
  ];
    getAllUsers(): Iuser[] {
      return this.users;
    }
    getUserById(id:number):Iuser|undefined{
       return this.users.find(user => user.id === id);
    }
    addUser(user:Iuser){
      this.users.push(user);
    }
     updateUser(updatedUser: Iuser){
     const index = this.users.findIndex(user => user.id === updatedUser.id);
      this.users[index] = { ...updatedUser };
     }
    deleteUser(id: number){
      this.users= this.users.filter(u=>u.id!==id);
    }
    login(name:string,password:string):Iuser|undefined{
      return  this.users.find(u=>u.name===name&&u.password===password);
    }
    loggedinuser:Iuser|null=null;
    setlogeduser(user:Iuser){
      this.loggedinuser=user
      localStorage.setItem('user',JSON.stringify(user));
    }
    getlogeduser():Iuser{
      return this.loggedinuser||JSON.parse(localStorage.getItem('user')!);
    }
    logout(){
      this.loggedinuser=null;
      localStorage.removeItem('user');
    }

}
