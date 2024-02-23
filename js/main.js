// ------------Bài 1------------
// Nhập vào 3 số nguyên, viết chương trình xuất 3 số theo thứ tự tăng dần
// B1: Đầu vào
// 3 số nguyên: num1, num2, num3
// B2: so sánh bằng mệnh đề if else để tìm ra số lớn nhất, số nhỏ nhất
// B3: xuất ra file HTML
function handleNum() {
    var num1 = +document.getElementById("num1").value;
    var num2 = +document.getElementById("num2").value;
    var num3 = +document.getElementById("num3").value;
    if (num1 >= num2 && num1 >= num3) {
        if (num2 >= num3) {
            document.getElementById("result1").innerHTML = `${num3} , ${num2} , ${num1}`;
        } else {
            document.getElementById("result1").innerHTML = `${num2} , ${num3} , ${num1}`;
        }
    } else 
    if (num2 >= num1 && num2 >= num3) {
        if (num1 >= num3) {
            document.getElementById("result1").innerHTML = `${num3} , ${num1} , ${num2}`;
        } else {
            document.getElementById("result1").innerHTML = `${num1} , ${num3} , ${num2}`;
        }
    }
    else if (num3 >= num1 && num3 >= num2) {
        if (num1 >= num2) {
            document.getElementById("result1").innerHTML = `${num2} , ${num1} , ${num3}`;
        } else {
            document.getElementById("result1").innerHTML = `${num1} , ${num2} , ${num3}`;
        }
    };
};
document.getElementById("handleSoTangDan").onclick = function() {
    handleNum();
}

// ------------Bài 2------------
// Viết chương trình chào hỏi các thành viên trong gia đình
// B1: Đầu vào
// 4 thành viên: Ba, mẹ, anh trai, em gái
// B2: xài switch case
// B3: xuất ra file HTML
function handlePerson() {
    var person = document.getElementById("person").value;
    switch (person) {
        case "Ba":
            document.getElementById("result2").innerHTML = 'Chào ba';
            break;
        case "Mẹ":
            document.getElementById("result2").innerHTML = 'Chào mẹ';
            break;
        case "Anh trai":
            document.getElementById("result2").innerHTML = 'Chào anh trai';
            break;
        case "Em gái":
            document.getElementById("result2").innerHTML = 'Chào em gái';
            break;
    };
};
document.getElementById("handlePerson").onclick = function() {
    handlePerson();
}

// ------------Bài 3------------
// Cho 3 số nguyên, viết chương trình xuất ra bao nhiêu số chẵn, bao nhiêu số lẻ
// B1: Đầu vào
// 3 số nguyên
// B2: xài mệnh đề if else
// B3: xuất ra file HTML
function handleChanLe() {
    var number1 = +document.getElementById("number1").value;
    var number2 = +document.getElementById("number2").value;
    var number3 = +document.getElementById("number3").value;
    if (number1 % 2 === 0 && number2 % 2 === 0) {
        if (number3 % 2 === 0) {
        document.getElementById("result3").innerHTML = `Số chắn : 3 - Số lẻ: 0`;
        }
        else {
            document.getElementById("result3").innerHTML = `Số chắn : 2 - Số lẻ: 1`;
        }
    }
    else if (number1 % 2 === 0 && number2 % 2 !== 0) {
        if (number3 % 2 === 0) {
            document.getElementById("result3").innerHTML = `Số chắn : 2 - Số lẻ: 1`;
            }
            else {
                document.getElementById("result3").innerHTML = `Số chắn : 1 - Số lẻ: 2`;
            }
    }
    else if (number1 % 2 !== 0 && number2 % 2 === 0) {
        if (number3 % 2 === 0) {
            document.getElementById("result3").innerHTML = `Số chắn : 2 - Số lẻ: 1`;
            }
            else {
                document.getElementById("result3").innerHTML = `Số chắn : 1 - Số lẻ: 2`;
            }
    }
    else if (number1 % 2 !== 0 && number2 % 2 !== 0) {
        if (number3 % 2 === 0) {
            document.getElementById("result3").innerHTML = `Số chắn : 1 - Số lẻ: 2`;
            }
            else {
                document.getElementById("result3").innerHTML = `Số chắn : 0 - Số lẻ: 3`;
            }
    };
};
document.getElementById("handleChanLe").onclick = function() {
    handleChanLe();
};

// ------------Bài 4------------
// Nhập 3 cạnh tam giác, cho biết là tam giác gì.
// B1: Đầu vào
// 3 cạnh tam giác
// B2: xài mệnh đề if else.
// Nếu 2 cạnh bằng nhau => tam giác cân.
// Nếu 3 cạnh bằng nhau => tam giác đều.
// Nếu 3 cạnh không bằng nhau => tam giác vuông.
// B3: xuất ra file HTML
function handleTamGiac() {
    var canh1 = +document.getElementById("canh1").value;
    var canh2 = +document.getElementById("canh2").value;
    var canh3 = +document.getElementById("canh3").value;
    if (canh1 === canh2) {
        if (canh1 === canh3) {
            document.getElementById("result4").innerHTML = `Tam Giác Đều`;
        }
        else {
            document.getElementById("result4").innerHTML = `Tam Giác Cân`;
        }
    } else if (canh1 === canh3) {
        if (canh1 === canh2) {
            document.getElementById("result4").innerHTML = `Tam Giác Đều`;
        }
        else {
            document.getElementById("result4").innerHTML = `Tam Giác Cân`;
        }
    } else if (canh2 === canh3) {
        if (canh2 === canh1) {
            document.getElementById("result4").innerHTML = `Tam Giác Đều`;
        }
        else {
            document.getElementById("result4").innerHTML = `Tam Giác Cân`;
        }
    }
    else {
        document.getElementById("result4").innerHTML = `Tam Giác Vuông`;
    };
};
document.getElementById("handleTamGiac").onclick = function() {
    handleTamGiac();
}