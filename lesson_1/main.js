// var fullName = 'Nguyễn Ngọc Quỳnh';
// var agg = '25';
// alert(fullName)
// alert(agg)
//Coment 1 dòng
/* Commet nhiều dòng*/
/*
    //Các hàm built-in cơ bản
1. Alert
Bật lên hộp thoại(OK)
2. Console

3. Confirm
Bật lên hộp message (Cancel or OK)
4. Prompt
Kết hợp của hàm alert và hàm confirm và thêm textbox để chúng ta nhập thông tin vào
5. Set timeout 
Bật lên hộp thông báo và chỉ chạy một lần
6. Set interval
Bật lên hộp thông báo và chạy nhiều lần sau bn thời gian mà chúng ta đặt
*/


// console.log(fullName);
// confirm('xac nhan ban la nu');
// prompt('ban bao nhieu tuoi');
// setTimeout(function(){alert('Thong bao')},1000);
// setInteval(function(){alert('đây là một thông báo')},1000);


    /* Toán tủ số học
+       --> Cộng
-       --> Trừ
*       --> Nhân
**      --> Lũy thừa
/       --> Chia
%       --> Chia lấy số dư
++      --> Tăng 1 giá trị số
--      --> Giảm 1 giá trị số
*/
// VD 

// var a = 2;
// var b = 4;
// var c = a + b;
// c++;
// c++;
// console.log(c);


    /* Toán tử gán

Toán tử     Ví dụ       Tương đương
=           x = y       x = y
+=          x += y      x = x + y
-=          x -= y      x = x - y
*=          x *= y      x = x * y
/=          x /= y      x = x / y
**=         x **= y     x = x ** y 

*/
//VD

// var a = 2;
// a **= 1;
// console.log(a);
 
    /* Toán tử ++ --
Prefix (Tiền tố)
- Thực hiện cộng/trừ 1 cho hàm số và trả về kết quả sau khi cộng/ trừ
Postfix (Hậu tố)
- Thực hiện cộng trừ 1 cho hàm số và trả về kết quả trước khi cộng/ trừ
*/
//VD


// var a = 1;
// var b = 2;
// console.log(++a + a++);//4
// console.log(--b + b--);//2

    // Toán tử chuỗi
//VD

// var firtname = ('Nguyen');
// var lastname = ('Quynh');
// console.log(firtname,lastname );
// console.log(firtname + ' '+ lastname);


    /* Toán tử so sánh

==      -->     Bằng
!=      -->     Không bằng
>       -->     Lớn hơn
<       -->     Nhỏ hơn
>=      -->     Lớn hơn hoặc bằng
<=      -->     Nhỏ hơn hoặc bằng */


// var a = 5;
// var b = 7;
// if (a > b) {
//     console.log('a lớn hơn b')
    
// } else {console.log('a nhỏ hơn b')
    
// }
    /*Kiểu dữ liêu Boolean 
*/
// var a = 1;
// var b = 2;
// var inSuccess = a > b;

// console.log (inSuccess);
// var age = 16;
// var age2 = 18;
// var canBuyAlcohol = age >= age2;
// console.log(canBuyAlcohol);

    /* Câu lệnh If -else*/
    // var a = 5;
// var b = 7;
// if (a > b) {
//     console.log('a lớn hơn b')
    
// } else {console.log('a nhỏ hơn b')
    /*Hàm (function) trong Javascript
    1. Hàm?
    - Một khối mã
    - Làm một việc cụ thể
    2. Loại hàm
    - Built-in
    - Tự định nghĩa
    3. Tính chất
    - Không thực thi khi định nghĩa
    - Sẽ thực thi khi được gọi
    - Có thể nhận tham số
    - Có thể trả về 1 giá trị
    4. Tạo hàm đầu tiên

    */
   // a-z A-Z 0-0;
   //function  tên() {};
  /*1 Tham số 
  - Định Nghĩa?
    +tham số là 1 giá trị có thể truyền vào khi gọi 1 function, được làm một việc gì đó trong một function
VD: function tenham(thamso){
    console.log(thamso)
}
tenham(doiso);
 
  - Kiểu dữ liệu?
  - Tính ptivate
    + Là tính riêng tư mỗi tham số đều có tinh private
  - 1 Tham số
  - Nhiều tham số
    2 Truyền tham số
  - 1 Tham số
  - Nhiều tham số
    3 Argument?
    - Đối tượng Argument
  */
   
  
  //function meme (sothunhat , sothuhai) {
//     console.log(sothunhat)
//     console.log(sothuhai)
// }
// meme('hello' ,'hi');
    //Return trong hàm -Javascript cơ bản
    // var isConfirm = confirm('message?');
    // console.log(isConfirm)
 //VD:
  
    // function tru(a,b){
    //     return (a - b)

    //  }
    // var result = tru(4,2);
    // console.log(result)

    /* 
Một số điểu cần biết về function
1. Khi fuction đặt trùng tên?
- Khi định nghĩa nhiều function trùng tên thì function định nghĩa sau nó sẽ đè lên function đc định nghĩa cùng tên trước đó và trả về kết quả của function sau cùng
2. Khai báo biển trong hàm
- Chúng ta có thể định nghĩa biến trong hàm, và phạm vi sử dụng của biến chỉ ở trong function đó thôi
3. Định nghĩa hàm trong hàm?
- Chúng ta có thể định nghĩa hàm trong hàm ,và phạm vi sử dụng của hàm chỉ nằm ở trong function đó thôi
 */
        //VD1:
// function showmess() {
//     console.log('message1');
// } 
// function showmess() {
//     console.log('message2');
// }
// function showmess() {
//     console.log('message3');
// }
// showmess();
        //VD2:
// function hello (){
//     var name ='Quynh'
//     console.log(name)
// }
// hello();
        //VD3:
// function hello1(){
//     function hello2(){
//         console.log('Quynh1');
//     }
//     hello2();
// }
// hello1();

/*
Các loại function
1. Declaration function (Có thể gọi trc khi định nghĩa)
2. Expression function (Không thể gọi khi chưa định nghĩa)
3. Arrow function ()
*/
//Vd:
// declarationFunction();
// function declarationFunction(){
//     console.log('declaration function')
// }
// var expressionFunction = function(){
//     console.log('expression function')
// }
// expressionFunction();


/*
CHUỖI TRONG JAVASCRIPT

1. Tạo chuỗi
   - Các cách tạo chuỗi
   - Nên dùng cách nào ? lý do?
   - Kiểm tra data type
2. Một số case sử dụng backslash (\)
3. Xem độ dài chuỗi (console.log(name.length))
4. Template string ES6
*/

//VD1:
// var myname = 'Ngoc Quynh la \'cong chua\'';
// console.log(myname)
// //VD2:
// var myname = 'Ngoc Quynh la \'cong chua\'';
// console.log(myname.length)
// //VD3:
// var firtname = 'Nguyen'
// var lastname = 'Quynh'
// console.log('Toi ten la: ' + firtname+ ' '+lastname)
// console.log(`Toi ten la: ${firtname} ${lastname}`)

/*
LÀM VIỆC VỚI CHUỖI
var myname = 'Ai là NQ NQ NQ' 
1. length (kiểm tra độ dài của chuỗi)
console.log(myname.length);
2. Find index (Tìm vị trí trong chuỗi)
console.log(myname.indexOf('NQ'))

console.log(myname.search('NQ'))
3. Cut string (Cắt chuỗi)
console.log(myname.slice(0))
4. Replace (thay thế)
console.log(myname.repplace('NQ','NGỌC QUỲNH'))

thay thế từ đầu tiên tìm đc trong chuỗi
console.log(myname.repplace(/NQ/g,'NGỌC QUỲNH'))

thay thế nhiều từ giống nhau tìm đc trong chuỗi

5. Convert to upper case(chuyển các kí tự thành viết HOA)
console.log(myname.toUppercase())

6. Convert to lower case(chuyển các kí tự thành viết thường)
console.log(myname.toLowercase())

7.Trim (Loại bỏ khoảng trắng hai đầu)
console.log(myname.trim().length)

8. Split (Cắt một chuỗi thành một array)
var language = 'Javascript, PHP, Ruby';
console.log(language.split(', '))

9. Get a charater by index (Lấy một kí tự bởi một vị trí cho trước)
const myname1 = 'Ngoc Quynh';
console.log(myname1.charAt(0));
console.log(myname1[1]);
*/

// function getContentLength(content) {
//     return (content.lenght)

// }
// var content = 'JavaScript'
// var content = 'Hello World'
// console.log(content.length)


function getUpperCaseName(name){
    return (name.toUpperCase())
}

console.log(getUpperCaseName("Nguyen van a")) // "NGUYEN VAN A"
console.log(getUpperCaseName("nGuyen vAn C")) // "NGUYEN VAN C"