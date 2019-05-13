let Anh = ["Fish", "Cat", "Sheep", "Dog", "Donkey", "Elephant", "Tiger", "Dragon", "Mouse", "Zebra", "Snake", "Fox", "Raccoon", "Bird"];
let Viet = ["Cá", "Mèo", "Cừu", "Chó", "Lừá", "Voi", "Hổ", "Rồng", "Chuột", "Ngựa vằn", "Rắn", "Cáo", "Chồn", "Chim"];

function abc() {
    let an =document.getElementById("tienganh").value;
    let vi=document.getElementById("tiengviet").value;

    for (let i = 0; i < Anh.length; i++) {
        if (an == Anh[i]) {
            document.getElementById("no").innerHTML=Viet[i];
            break;
        }
        if (vi == Viet[i]) {
            document.getElementById("no").innerHTML=Anh[i];
            break;
        }
        else {
            document.getElementById("no").innerHTML = "Khong thay";
        }
    }
}
document.write("Nhom tu tieng Anh"+"</br>");
document.write(Anh.join()+ "</br>");
document.write("Nhom tu tieng Viet"+"</br>");
document.write(Viet.join()+ "</br>");
