// // 1.  Single , Multiple, MultiLevel interface
// interface HdfcBank_Version1 {
//   Personal: String;
//   NRI: string;
// }
<<<<<<< HEAD
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var Employee = /** @class */ (function () {
    function Employee() {
        this.FirstName = "";
        this.LastName = "";
        this.Designation = "";
    }
    Employee.prototype.Print = function () {
        document.write("".concat(this.FirstName, " - ").concat(this.LastName, " - ").concat(this.Designation));
    };
    return Employee;
}());
var Developer = /** @class */ (function (_super) {
    __extends(Developer, _super);
    function Developer() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.FirstName = "Kiran";
        _this.LastName = "Kumar";
        _this.Designation = "Developer";
        _this.DeveloperRole = "Build, Debug, Test, Deploy";
        return _this;
    }
    Developer.prototype.Print = function () {
        _super.prototype.Print.call(this);
        document.write(this.DeveloperRole);
    };
    return Developer;
}(Employee));
var Admin = /** @class */ (function (_super) {
    __extends(Admin, _super);
    function Admin() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.FirstName = "Raj";
        _this.LastName = "Kiran";
        _this.Designation = "Admin";
        _this.AdminRole = "Authorizations/Authentication";
        return _this;
    }
    Admin.prototype.Print = function () {
        _super.prototype.Print.call(this);
        document.write(this.AdminRole);
    };
    return Admin;
}(Employee));
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.FirstName = "Tom";
        _this.LastName = "Hanks";
        _this.Designation = "Manager";
        _this.ManagerRole = "Approvals";
        return _this;
    }
    Manager.prototype.Print = function () {
        _super.prototype.Print.call(this);
        document.write(this.ManagerRole);
    };
    return Manager;
}(Employee));
var employees = [new Developer(), new Admin(), new Manager()];
=======
var Database = /** @class */ (function () {
    function Database() {
        this.ConnectionString = null;
    }
    Database.prototype.Connect = function () {
        for (var property in this.ConnectionString) {
            console.log("".concat(property, ":").concat(this.ConnectionString[property]));
        }
    };
    return Database;
}());
console.log("--------Connecting with Oracle---------");
var oracle = new Database();
oracle.ConnectionString = {
    UserName: "scot",
    Password: "tiger",
    Database: "empdb",
};
oracle.Connect();
console.log("-------Connecting with MySql---------");
var mysql = new Database();
mysql.ConnectionString = {
    host: "localhost",
    user: "root",
    password: "1234",
    database: "studb",
};
mysql.Connect();
console.log("-----Connecting with mongoDB--------");
var mongo = new Database();
mongo.ConnectionString = {
    url: "mongodb://127.0.0.1:27017",
};
mongo.Connect();
var Service = /** @class */ (function () {
    function Service() {
    }
    Service.prototype.GetData = function (data) {
        console.log(data);
    };
    return Service;
}());
var tv = new Service();
tv.GetData({ Name: "TV", Price: 35000, Stock: true });
tv.GetData([{ Name: "Mobile", Price: 34000, Stock: true }]);
// 7. Generic----3--------
function Sum(a, b) {
    return a + b;
}
var Demo = /** @class */ (function () {
    function Demo() {
    }
    Demo.prototype.Add = function (a, b) {
        return Sum(a, b);
    };
    return Demo;
}());
var obj = new Demo();
obj.Add(10, 20);
obj.Add("A", "B");
//6---------ENUM---------
var Weekday;
(function (Weekday) {
    Weekday[Weekday["Sunday"] = 0] = "Sunday";
    Weekday[Weekday["Monday"] = 1] = "Monday";
    Weekday[Weekday["Tue"] = 2] = "Tue";
    Weekday[Weekday["Wed"] = 3] = "Wed";
    Weekday[Weekday["Thu"] = 4] = "Thu";
    Weekday[Weekday["fri"] = 5] = "fri";
    Weekday[Weekday["Sat"] = 6] = "Sat";
})(Weekday || (Weekday = {}));
var Months;
(function (Months) {
    Months[Months["Jan"] = 0] = "Jan";
    Months[Months["Feb"] = 1] = "Feb";
    Months[Months["Mar"] = 2] = "Mar";
    Months[Months["Apr"] = 3] = "Apr";
    Months[Months["May"] = 4] = "May";
    Months[Months["Jun"] = 5] = "Jun";
    Months[Months["Jul"] = 6] = "Jul";
    Months[Months["Aug"] = 7] = "Aug";
    Months[Months["Sep"] = 8] = "Sep";
    Months[Months["Oct"] = 9] = "Oct";
    Months[Months["Nov"] = 10] = "Nov";
    Months[Months["Dec"] = 11] = "Dec";
})(Months || (Months = {}));
var now = new Date();
console.log("\n  Month: ".concat(Months[now.getMonth()], " \n\n  Weekday: ").concat(Weekday[now.getDay()], " \n\n  "));
var Values;
(function (Values) {
    Values[Values["A"] = 0] = "A";
    Values["B"] = "Hello ! ";
})(Values || (Values = {}));
>>>>>>> bf0bb76 (first commit)
