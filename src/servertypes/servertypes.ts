export interface CategoryType {
  id: number;
  category: string;
  img: string;
  link: string;
}

export interface ServerTypes {
  id: string;
  title: string;
  price: number;
  mainimg: string;
  imgchild1: string;
  imgchild2: string;
  imgchild3: string;
  imgchild4: string;
  category: string;
  detail: string;
}

export interface discountType {
  id: number;
  code: string;
  percentage: number;
}

export interface Ipagination {
  first: number|null;
  items: number|null;
  last: number|null;
  next: number|null;
  pages: number;
  prev: number|null;
  data:ServerTypes[]
}
