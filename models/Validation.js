var Validation = function () {
  this.kiemTraRong = function (value, name, selectoError) {
    if (value.trim() === '') {
      document.querySelector(selectoError).innerHTML = name + ' không được bỏ trống';
      document.querySelector(selectoError).style.display = 'block';
      return false;
    }
    document.querySelector(selectoError).innerHTML = '';
    document.querySelector(selectoError).style.display = 'none';
    return true;    
  }
  // Kiểm tra tất cả là số
  this.kiemTraTatCaLaSo = function (value, name, selectoError) {
    var regexNumber = /^[0-9]+$/;
    if (regexNumber.test(value)) {
      document.querySelector(selectoError).innerHTML = '';
      document.querySelector(selectoError).style.display = 'none';
      return true;
    }
    document.querySelector(selectoError).innerHTML = name + ' tất cả là số';
    document.querySelector(selectoError).style.display = 'block';
    return false;
  }
  // Kiểm tra độ dài chuỗi
  this.kiemTraDoDaiChuoi = function (value, name, selectoError, minLength, maxLength) {
    if (value.trim().length < minLength || value.trim().length > maxLength) {
      // document.querySelector(selectoError).innerHTML = name + ' từ ' + minLength + ' đến ' + maxLength + ' ký tự';
      document.querySelector(selectoError).innerHTML = name + ' phai la ' + minLength + ' ký tự';

      document.querySelector(selectoError).style.display = 'block';
      return false;
    }
    document.querySelector(selectoError).innerHTML = '';
    document.querySelector(selectoError).style.display = 'none';
    return true;
  }
  // Kiểm tra giá trị
  this.kiemTraGiaTri = function (value, name, selectoError, minValue, maxValue) {
    if (Number(value) > maxValue || Number(value) < minValue) {
      document.querySelector(selectoError).innerHTML = name + ' giá trị từ ' + minValue + ' đến ' + maxValue;
      document.querySelector(selectoError).style.display = 'block';
      return false
    }
    document.querySelector(selectoError).innerHTML = '';
    document.querySelector(selectoError).style.display = 'none';
    return true;
  }
  // Tất cả là chữ
  this.kiemTraTatCaLaChu = function (value, name, selectoError) {
    var regexAllLetter = /^[A-Za-z ]+$/;
    if (regexAllLetter.test(value)) {
      document.querySelector(selectoError).innerHTML = '';
      document.querySelector(selectoError).style.display = 'none';
      return true;
    }
    document.querySelector(selectoError).innerHTML = name + ' phải là chữ';
    document.querySelector(selectoError).style.display = 'block';
    return false;
  }
  // Kiểm tra email
  this.kiemTraEmail = function (value, name, selectoError) {
    var regexEmail =  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (regexEmail.test(value)) {
      document.querySelector(selectoError).innerHTML = '';
      document.querySelector(selectoError).style.display = 'none';
      return true;
    }
    document.querySelector(selectoError).innerHTML = name + ' không hợp lệ';
    document.querySelector(selectoError).style.display = 'block';
    return false;
  }
}