// // 1.  Single , Multiple, MultiLevel interface
// interface HdfcBank_Version1 {
//   Personal: String;
//   NRI: string;
// }

// interface HdfcBank_Version2 extends HdfcBank_Version1 {
//   Loans: string;
// }
// interface BankApp extends HdfcBank_Version1, HdfcBank_Version2 {
//   BankName: string;
// }

// let BankApp_Legecy: HdfcBank_Version1 = {
//   Personal: "Personal Banking",
//   NRI: "NRI Banking",
// };

// let BankApp_modern: HdfcBank_Version2 = {
//   Personal: "Personal Banking",
//   NRI: "NRI Banking",
//   Loans: "Car, Bike, Home Loans",
// };

// // 2. Static and non-Static

// class Demo {
//   static s = 0;
//   n = 0;
//   constructor() {
//     Demo.s = Demo.s + 1;
//     this.n = this.n + 1;
//   }
//   Print() {
//     console.log(`s=${Demo.s} n=${this.n}`);
//   }
// }

// let obj1 = new Demo();
// obj1.Print();
// let obj2 = new Demo();
// obj2.Print();
// let obj3 = new Demo();
// obj3.Print();

// // 3. public, private, protected

// class Product {
//   public Name: string = "";
//   private Price: number = 0;
//   protected Stock: boolean = false;
// }

// class Derived extends Product {
//   Print() {
//     let obj = new Derived();
//     obj.Name;
//   }
// }

// interface Version1 {
//   Name: string;
//   Price: number;
// }
// interface Version2 extends Version1 {
//   Name: string;
//   Stock: boolean;
// }

// let obj: Version2 = {
//   Name: "Tv",
//   Price: 0,
//   Stock: true,
// };

// 3.Contract

// interface ProductContract {
//   Name: string | null;
//   Price: number;
//   Qty: number;
//   Total(): number;
//   Print(): void;
// }
// // Template
// abstract class ProductTempalte implements ProductContract {
//   public Name: string | null = null;
//   public Price: number = 0;
//   public Qty: number = 0;
//   public abstract Total(): number;
//   public abstract Print(): void;
// }
// // Components
// class ProductComponent extends ProductTempalte {
//   Name = "Samsung Tv";
//   Price = 45600;
//   Qty = 2;
//   Total() {
//     return this.Qty * this.Price;
//   }
//   Print() {
//     console.log(
//       `Name=${this.Name}\nPrice=${this.Price}\nQty=${
//         this.Qty
//       }\nTotal=${this.Total()}`
//     );
//   }
// }

// let obj = new ProductComponent();
// obj.Print();

// 4. Pollymorphism

class Employee {
  public FirstName: string = "";
  public LastName: string = "";
  public Designation: string = "";
  public Print(): void {
    document.write(
      `${this.FirstName} - ${this.LastName} - ${this.Designation}`
    );
  }
}

class Developer extends Employee {
  FirstName = "Kiran";
  LastName = "Kumar";
  Designation = "Developer";
  DeveloperRole = "Build, Debug, Test, Deploy";
  Print() {
    super.Print();
    document.write(this.DeveloperRole);
  }
}

class Admin extends Employee {
  FirstName = "Raj";
  LastName = "Kiran";
  Designation = "Admin";
  AdminRole = "Authorizations/Authentication";
  Print() {
    super.Print();
    document.write(this.AdminRole);
  }
}

class Manager extends Employee {
  FirstName = "Tom";
  LastName = "Hanks";
  Designation = "Manager";
  ManagerRole = "Approvals";
  Print() {
    super.Print();
    document.write(this.ManagerRole);
  }
}

let employees = [new Developer(), new Admin(), new Manager()];

// class Employee {
//   public FirstName: string = "";
//   public LastName: string = "";
//   public Designation: string = "";
//   public Print(): void {
//     document.write(
//       `${this.FirstName} - ${this.LastName} - ${this.Designation}`
//     );
//   }
// }

// class Developer extends Employee {
//   FirstName = "Kiran";
//   LastName = "Kumar";
//   Designation = "Developer";
//   DeveloperRole = "Build, Debug, Test, Deploy";
//   Print() {
//     super.Print();
//     document.write(this.DeveloperRole);
//   }
// }

// class Admin extends Employee {
//   FirstName = "Raj";
//   LastName = "Kiran";
//   Designation = "Admin";
//   AdminRole = "Authorizations/Authentication";
//   Print() {
//     super.Print();
//     document.write(this.AdminRole);
//   }
// }

// class Manager extends Employee {
//   FirstName = "Tom";
//   LastName = "Hanks";
//   Designation = "Manager";
//   ManagerRole = "Approvals";
//   Print() {
//     super.Print();
//     document.write(this.ManagerRole);
//   }
// }

// let employees = [new Developer(), new Admin(), new Manager()];

// 5. -------Generics------------

interface IOracle {
  UserName: string;
  Password: string;
  Database: string;
}

interface IMySql {
  host: string;
  user: string;
  password: string;
  database: string;
}

interface IMongoDb {
  url: string;
}

class Database<T> {
  public ConnectionString: T | null = null;
  public Connect() {
    for (var property in this.ConnectionString) {
      console.log(`${property}:${this.ConnectionString[property]}`);
    }
  }
}

console.log(`--------Connecting with Oracle---------`);
let oracle = new Database<IOracle>();
oracle.ConnectionString = {
  UserName: "scot",
  Password: "tiger",
  Database: "empdb",
};
oracle.Connect();

console.log(`-------Connecting with MySql---------`);
let mysql = new Database<IMySql>();
mysql.ConnectionString = {
  host: "localhost",
  user: "root",
  password: "1234",
  database: "studb",
};

mysql.Connect();

console.log(`-----Connecting with mongoDB--------`);
let mongo = new Database<IMongoDb>();
mongo.ConnectionString = {
  url: "mongodb://127.0.0.1:27017",
};
mongo.Connect();

// 6......Generics-----2
interface IProduct {
  Name: string;
  Price: number;
  Stock: boolean;
}

interface IEmployee {
  FirstName: string;
  LastName: string;
  Designation: string;
}

class Service {
  public GetData<T>(data: T) {
    console.log(data);
  }
}
let tv = new Service();
tv.GetData<IProduct>({ Name: "TV", Price: 35000, Stock: true });
tv.GetData<IProduct[]>([{ Name: "Mobile", Price: 34000, Stock: true }]);

// 7. Generic----3--------

function Sum(a: any, b: any) {
  return a + b;
}

class Demo {
  public Add<T>(a: T, b: T): T {
    return Sum(a, b);
  }
}
let obj = new Demo();
obj.Add<number>(10, 20);
obj.Add<string>("A", "B");

//6---------ENUM---------
enum Weekday {
  Sunday,
  Monday,
  Tue,
  Wed,
  Thu,
  fri,
  Sat,
}
enum Months {
  Jan,
  Feb,
  Mar,
  Apr,
  May,
  Jun,
  Jul,
  Aug,
  Sep,
  Oct,
  Nov,
  Dec,
}
let now: any = new Date();
console.log(
  `
  Month: ${Months[now.getMonth()]} \n
  Weekday: ${Weekday[now.getDay()]} \n
  `
);

const enum Values {
  a = 10,
  b = 20,
  c = a + b,
}

console.log(`Addition=${Values.c}`);
