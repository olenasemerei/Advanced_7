import { Component, OnInit } from '@angular/core';
import { IBlog, IBlogResponse, IBlogRequest } from '../shared/interfaces/blog.interface';
import { BlogService } from '../shared/services/blog/blog.service';
@Component({
  selector: 'app-admin-blog',
  templateUrl: './admin-blog.component.html',
  styleUrls: ['./admin-blog.component.scss'],
})
export class AdminBlogComponent implements OnInit {
  public tittleInput!: string;
  public textInput!: string;
  public authorInput!: string;

  public editStatus = false;
  public editID!: number;

  public adminBlog!: IBlogResponse[];

  constructor(private blogService: BlogService) {}

  ngOnInit(): void {
    this.getBlog();
  }

  getBlog(): void {
    this.blogService.getAll().subscribe((data) => {
      this.adminBlog = data;
    });
  }

  add() {
    const random = Math.round(Math.random() * 6);
    const newBlog = {
      tittle: this.tittleInput,
      text: this.textInput,
      author: this.authorInput,
      img: `image_${random}.jpg`,
    };
    this.blogService.create(newBlog).subscribe(() => {
      this.getBlog();
      this.resetForm();
    });
  }

  edit(blog: IBlogResponse): void {
    this.tittleInput = blog.tittle;
    this.textInput = blog.text;
    this.authorInput = blog.author;
    this.editStatus = true;
    this.editID = blog.id;
  }

  save(): void {
    const random = Math.round(Math.random() * 6);
    const updatablog = {
      tittle: this.tittleInput,
      text: this.textInput,
      author: this.authorInput,
      img: `image_${random}.jpg`,
    };
    this.blogService.update(updatablog, this.editID).subscribe((data) => {
      this.getBlog();
      this.resetForm();
    });
  }

  delete(blog: IBlogResponse): void {
    if (confirm('Are you sure?')) {
      this.blogService.delete(blog.id).subscribe((data) => {
        this.getBlog();
      });
    }
  }

  resetForm() {
    this.tittleInput = '';
    this.textInput = '';
    this.authorInput = '';
  }
}
