"use strict";
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
class NhanVien {
    constructor() {
        this.maNhanVien = "";
        this.tenNhanVien = "";
        //   private heSoLuong: number = 1;
        //   private luongCoBan: number = 1000;
        this.heSoLuong = 1;
        this.luongCoBan = 1000;
    }
    tinhLuong() {
        return this.heSoLuong * this.luongCoBan;
    }
    hienThiThongTin() {
        console.log("Mã nhân viên: ", this.maNhanVien);
        console.log("tên nhân viên: ", this.tenNhanVien);
        console.log("Hệ số lương: ", this.heSoLuong);
        console.log("Lương cơ bản: ", this.luongCoBan);
    }
    getHeSoLuong() {
        return this.heSoLuong;
    }
    setLuongCoBan(luongCoBan) {
        this.luongCoBan = luongCoBan;
    }
}
class NhanVienKeToan extends NhanVien {
    constructor() {
        super(...arguments);
        this.duAn = "";
    }
    nghiepVuKeToan() {
        console.log("Nghiệp vụ kế toán");
    }
    tinhLuong() {
        return super.tinhLuong() + 4000;
    }
}
let nv1 = new NhanVien();
nv1.maNhanVien = 1;
nv1.tenNhanVien = "DoctorStanger";
let heSoLuong = nv1.getHeSoLuong();
nv1.setLuongCoBan(20000);
nv1.hienThiThongTin();
let keToan1 = new NhanVienKeToan();
let luongKeToan = keToan1.tinhLuong();
console.log("Lương kế toán = ", luongKeToan);
