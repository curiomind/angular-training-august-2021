export interface Dep {
  name: string;
}

export interface Employee {
  name: string;
  department: Dep;
}

export interface Todos {
  completed: boolean;
  id: number;
  title: string;
  userId: number;
  price: number;
  date: string;
}
