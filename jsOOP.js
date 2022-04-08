
var sinhVien = new SinhVien();
var validation = new Validation();

var Onblur_maSinhVien = function(){
  sinhVien.maSV = document.querySelector('#maSinhVien').value;
  var valid = true;
  valid &= validation.kiemTraRong(sinhVien.maSV, 'Mã sinh viên', '#error_maSinhVien_required')
  & validation.kiemTraTatCaLaSo(sinhVien.maSV, 'Mã sinh viên', '#error_maSinhVien_all_number')
  validation.kiemTraDoDaiChuoi(sinhVien.maSV, 'Mã sinh viên', '#error_maSinhVien_min_max_length', 4, 4);
  if (!valid) { 
    return false;
  }
}
var Onblur_tenSinhVien = function(){
  sinhVien.tenSV = document.querySelector('#tenSinhVien').value;
  var valid = true;
  valid &= validation.kiemTraRong(sinhVien.maSV, 'Tên sinh viên', '#error_tenSinhVien_required')
  & validation.kiemTraTatCaLaChu(sinhVien.tenSV, 'Tên sinh viên', '#error_tenSinhVien_all_letter');
  if (!valid) { 
    return false;
  }
}
var Onblur_diemToan = function(){
  sinhVien.diemToan = document.querySelector('#diemToan').value;
  var valid = true;
  valid &= validation.kiemTraRong(sinhVien.diemToan, 'Điểm toán', '#error_diemToan_required')
  & validation.kiemTraTatCaLaSo(sinhVien.diemToan, 'Điểm toán', '#error_diemToan_all_number')
  & validation.kiemTraGiaTri(sinhVien.diemToan, 'Điểm toán', '#error_diemToan_min_max_value', 0, 10);

  if (!valid) { 
    return false;
  }
}
var xuLyXacNhan = function () {
  // Lấy thông tin người dùng nhập vào từ input
  sinhVien.maSV = document.querySelector('#maSinhVien').value;
  sinhVien.tenSV = document.querySelector('#tenSinhVien').value;
  sinhVien.loaiSinhVien = document.querySelector('#loaiSinhVien').value;
  sinhVien.diemToan = document.querySelector('#diemToan').value;
  sinhVien.diemLy = document.querySelector('#diemLy').value;
  sinhVien.diemRenLuyen = document.querySelector('#diemRenLuyen').value;
  // Dom đến giao diện hiển thị dữ liệu
  // Kiểm tra validation
  var valid = true;

  valid &= validation.kiemTraRong(sinhVien.maSV, 'Mã sinh viên', '#error_maSinhVien_required')
          & validation.kiemTraRong(sinhVien.tenSV, 'Tên sinh viên', '#error_tenSinhVien_required')
          & validation.kiemTraRong(sinhVien.diemLy, 'Điểm lý', '#error_diemLy_required')
          & validation.kiemTraRong(sinhVien.diemToan, 'Điểm toán', '#error_diemToan_required')
          & validation.kiemTraRong(sinhVien.diemRenLuyen, 'Điểm rèn luyện', '#error_diemRenLuyen_required');
  
  // Kiểm tra tất cả là số
  valid &= validation.kiemTraTatCaLaSo(sinhVien.maSV, 'Mã sinh viên', '#error_maSinhVien_all_number')
          & validation.kiemTraTatCaLaSo(sinhVien.diemToan, 'Điểm toán', '#error_diemToan_all_number')
          & validation.kiemTraTatCaLaSo(sinhVien.diemLy, 'Điểm lý', '#error_diemLy_all_number')
          & validation.kiemTraTatCaLaSo(sinhVien.diemRenLuyen, 'Điểm rèn luyện', '#error_diemRenLuyen_all_number');

  // Kiểm tra độ dài
  valid &= validation.kiemTraDoDaiChuoi(sinhVien.maSV, 'Mã sinh viên', '#error_maSinhVien_min_max_length', 4, 4);
  // Kiểm tra giá trị
  valid &= validation.kiemTraGiaTri(sinhVien.diemToan, 'Điểm toán', '#error_diemToan_min_max_value', 0, 10)
          & validation.kiemTraGiaTri(sinhVien.diemLy, 'Điểm lý', '#error_diemLy_min_max_value', 0, 10)
          & validation.kiemTraGiaTri(sinhVien.diemRenLuyen, 'Điểm rèn luyện', '#error_diemRenLuyen_min_max_value', 0, 10);
  // Kiểm tra tất cả là chữ
  valid &= validation.kiemTraTatCaLaChu(sinhVien.tenSV, 'Tên sinh viên', '#error_tenSinhVien_all_letter');


  if (!valid) {
    alert('Dữ liệu không hợp lệ');
    return;
  }



  // Xử lý in kết quả ra giao diện
  document.querySelector('#txtTenSinhVien').innerHTML = sinhVien.tenSV;
  document.querySelector('#txtMaSinhVien').innerHTML = sinhVien.maSV;
  document.querySelector('#txtLoaiSinhVien').innerHTML = sinhVien.loaiSinhVien;
  document.querySelector('#txtDiemTrungBinh').innerHTML = sinhVien['tinhDiemTrungBinh']().toFixed(2);
  document.querySelector('#txtXepLoai').innerHTML = sinhVien.xepLoai(); //sinhVien['xepLoai']()
}

document.querySelector('#btnXacNhan').onclick = xuLyXacNhan;
document.querySelector("#maSinhVien").onblur = Onblur_maSinhVien;
document.querySelector("#tenSinhVien").onblur = Onblur_tenSinhVien;
document.querySelector('#diemToan').onblur = Onblur_diemToan;
