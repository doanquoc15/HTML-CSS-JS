var canvas = document.getElementById('gamezone');
var context = canvas.getContext('2d');// sử dụng để vẽ các khối đồ họa 2D
var scoreshow = document.getElementById('score');

// Tao cac hinh anh do hoa cho game
var birdImage = new Image()
var hinhnenchinh = new Image();
var ongtren = new Image();
var ongduoi = new Image();
//B1 : Nap cac hinh anh vao 
// gan duong dan hing anh den cac doi tuong tao ra truoc do
birdImage.src = "./assets/image/bird.png"
hinhnenchinh.src = "./assets/image/nenchinh.png";
ongtren.src = "./assets/image/ongtren.png";
ongduoi.src = "./assets/image/ongduoi.png";

//B2 : Tao bien can thiet

var score = 0;
var khoangcachhaiong = 200;
var khoangcachdenongduoi;//tu dau ong tren den vi tri dau ong duoi
var khoangcachdenongtren;
// Tạo đối tượng bird với tọa độ (x,y) là một nữa canvas
var bird = {
    x: hinhnenchinh.width / 2,
    y: hinhnenchinh.height / 5
}
// Mảng ống để chứa các ống di chuyển
var ong = []
ong[0] = //Khởi tạo ống thứ nhất bên phải ngoài cùng
{
    x: canvas.width,
    y: 0
}
// confirm(ong[0])
//tạo dáy màu linergradient
var gradient = context.createLinearGradient(0, 0, canvas.width, 0);
gradient.addColorStop("0", "green");
gradient.addColorStop("0.2", "red");
gradient.addColorStop("0.4", "yellow");
gradient.addColorStop("0.6", "purple");
gradient.addColorStop("0.8", "pink");
gradient.addColorStop("1.0", "blue");
// TẠo function để chạy trò chơi
function run() {
    // Load hình ảnh vào
    // drawImage(img, x, y, (width),(height)) : vị trí anyhr trên canvas
    // 
    context.drawImage(hinhnenchinh, 0, 0)
    context.drawImage(birdImage, bird.x, bird.y)
    for (var i = 0;i < ong.length;i++) {
        khoangcachdenongduoi = ongtren.height + khoangcachhaiong;
        context.drawImage(ongtren, ong[i].x, ong[i].y);
        //      Vẽ ống trên theo tọa độ của ống đó
        //      Ống dưới phụ thuộc vào ống trên
        context.drawImage(ongduoi, ong[i].x, ong[i].y + khoangcachdenongduoi);
        ong[i].x -= 5;//Ống di chuyển
        // Lập trình thêm ống tạo ra thêm ống nữa
        if (ong[i].x == canvas.width / 2) {
            ong.push({
                x: canvas.width,
                y: Math.floor(Math.random() * ongtren.height) - ongtren.height
            })
        }
        if (ong[i].x + ongtren.width == 0)
            ong.splice(0, 1);//Nếu ống bị đụng lề trái thì xóa nó đi để tránh mảng ống bị đầy

        if (ong[i].x == bird.x)
            score += 100;

        // trường hợp thua
        if (bird.y <= 0 || bird.y + birdImage.height == canvas.height ||
            bird.x + birdImage.width >= ong[i].x && bird.x <= ong[i].x + ongtren.width
            && (bird.y <= ong[i].y + ongtren.height || bird.y + birdImage.height >= ong[i].y + khoangcachdenongduoi)
        ) {
            context.font = "40px Georgia";
            context.fillStyle = gradient
            // context.fontWeight = "bold"
            context.fillText("GAME OVER: ", 400, 250)

                ;
            // location.reload();
            return;
        }
    }

    // Hiển thị điểm
    scoreshow.innerHTML = "SCORE : " + score;


    // cho  bird rơi xuống
    bird.y += 3;
    requestAnimationFrame(run);//bắt dầu run
}
//tạo function bay lên khi click vào bird 
// keydown : nhấn xuống một key
document.addEventListener("keydown", function () {
    bird.y -= 85
})
run();
function choilai() {
    location.reload();
    return;
}
