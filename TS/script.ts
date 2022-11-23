// OOP IN TYPESCRIPT
console.log("Learn OOP With Typescript");

/*
    + Tính trừu tượng(Abstraction): giúp mình loại bỏ những đặc tính phức tạp không cần thiết của thế giới thực, chọn lọc những đặc tính cốt lõi quan trọng vào trong lập trình.

    + Tính đóng gói(Encapsulation): Các thuộc tính và phương thức của đối tượng sẽ không bị các đối tượng khác tác động đến được, mà phải thông qua đối tượng đó thì mới có thể thay đổi được.

    Access Modifier (Phạm vi truy xuất của các thuộc tính và phương thức trong class) getter, setter
    + Private: các thuộc tính trong class, sẽ không được truy xuất bởi instance(Object được tạo ra từ class), Không được lấy thông tin hoặc thay đổi thông tin. Có thể dùng hàm get, set để giới hạn phạm vi truy xuất của thuộc tính private.

    + public: Các thuộc tính trong class có thể truy xuất bởi instance(Được lấy thông tin hoặc thay đổi thông tin)

    + Protected: Các thuộc tính và phương thức protected thì instance không thay đổi được, tuy nhiên class con có thể truy xuất đến được (Giống như private mở rộng cho phép lớp con sử dụng)

    + Tính kế thừa(Inheritance): Cho phép class con sử dụng lại những thuộc tính và phương thức của class cha đã định nghĩa trước đó. Class con có thể override lại phương thức của class cha (nếu cần sử dụng lại phương thức thì dùng super.tenPhuongThuc() ). Tuy nhiên để override thì khai báo dưới dạng phương thức (). (Còn các trường hợp còn lại thì không cần override để kế thừa thì arrow function để đảm bảo ngữ cảnh con trỏ this).

    + Tính đa hình (Polymorphism)
*/

// class NhanVien {
//   public maNhanVien: string | number = "";
//   public tenNhanVien: string = "";
//   //   private heSoLuong: number = 1;
//   //   private luongCoBan: number = 1000;

//   protected heSoLuong: number = 1;
//   protected luongCoBan: number = 1000;

//   constructor() {}

//   tinhLuong() {
//     return this.heSoLuong * this.luongCoBan;
//   }

//   hienThiThongTin() {
//     console.log("Mã nhân viên: ", this.maNhanVien);
//     console.log("tên nhân viên: ", this.tenNhanVien);
//     console.log("Hệ số lương: ", this.heSoLuong);
//     console.log("Lương cơ bản: ", this.luongCoBan);
//   }

//   getHeSoLuong() {
//     return this.heSoLuong;
//   }

//   setLuongCoBan(luongCoBan: number) {
//     this.luongCoBan = luongCoBan;
//   }
// }

// class NhanVienKeToan extends NhanVien {
//   duAn: string = "";

//   nghiepVuKeToan() {
//     console.log("Nghiệp vụ kế toán");
//   }

//   tinhLuong(): number { //override: ghi đè
//     return super.tinhLuong() + 4000;
//   }
// }

// let nv1 = new NhanVien();
// nv1.maNhanVien = 1;
// nv1.tenNhanVien = "DoctorStanger";
// let heSoLuong = nv1.getHeSoLuong();
// nv1.setLuongCoBan(20000);
// nv1.hienThiThongTin();

// let keToan1 = new NhanVienKeToan();
// let luongKeToan = keToan1.tinhLuong();
// console.log("Lương kế toán = ",luongKeToan);



// Generic In Typescript
// interface Mang<T> {
//   length: number;
//   [index: number]: T;
// }

// let arrNumber: Mang<number> = [1, 2, 3, 4, 5, 6];

// console.log(arrNumber);

class Product {
  id: number | string = "";
  name: string = "";
  price: number = 0;
  showInfo = (): void => {
    console.log("showInfo", this);
  };
}

let product = new Product();
product.id = 1;
product.name = "Product 1";
product.price = 1000;

class ProductList {
  data: Product[] = [];

  insert(newProduct: Product) {
    this.data.push(newProduct);
  }

  delete(id: number | string) {
    this.data = this.data.filter((product) => product.id !== id);
  }
}

let product2 = { ...product, id: 2, name: "product 2" };
let productList = new ProductList();
productList.insert(product);
productList.insert(product2);
console.log(productList.data);

class User {
  id: string | number = "";
  name: string = "";
  userName: string = "";
  password: string = "";
}
class List<T> {
  data: T[] = [];
  insert(item: T) {
    this.data.push(item);
  }
  delete(id: number | string) {
    this.data = this.data.filter((product: any) => product.id !== id);
  }
}

let user1 = new User();
user1.id = 1;
user1.name = "Trình";
user1.userName = "stranger";
user1.password = "1234567";

let userList = new List<User>();
userList.insert(user1);
console.log("userList", userList.data);



