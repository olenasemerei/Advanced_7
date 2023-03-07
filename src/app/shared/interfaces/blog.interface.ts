export interface IBlog {
  id: number;
  author: string;
  tittle: string;
  text: string;
  img: string;
}

export interface IBlogRequest {
  author: string;
  tittle: string;
  text: string;
  img: string;
}

export interface IBlogResponse extends IBlogRequest {
  id: number;
}
