/*
Các công việc phải làm
1.Render songs
2.Scrool top
3.Play, pause, seek
4.CD(image) rotate
5.Next/ previous
6.Randoms
7.Next / repeat when end
8.Active song
9.Scroll active song into view
10.Play song when click
*/

// Tìm kiếm element theo một class hay id nào đó, nó sử dụng lai được nhiều lần(chỉ cần gọi $('element')).
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
// List bài hát 
//Tao object 
const app = {
    songs: [
        // Bai1
        {
            name: 'HiKerryMaSongDaiBorRemix',
            singer: 'Grup Mattes',
            path: './assets/music/song1.mp3',
            image: 'https://avatar-nct.nixcdn.com/song/2021/03/08/1/3/2/2/1615174076654.jpg',
        },
        // Bai2
        {
            name: 'LemonTree',
            singer: 'Desa',
            path: './assets/music/song2.mp3',
            image: 'https://avatar-nct.nixcdn.com/singer/avatar/2019/10/02/2/c/8/c/1569987761461.jpg'
        },
        // Bai3
        {
            name: 'Nắm lấy tay anh',
            singer: 'Tuấn Hưng',
            path: './assets/music/song3.mp3',
            image: 'https://avatar-nct.nixcdn.com/song/2019/09/11/6/d/c/4/1568183645028.jpg'
        },
        // Bai4
        {
            name: 'Nàng thơ',
            singer: 'Huy Anh',
            path: './assets/music/song4.mp3',
            image: 'https://avatar-nct.nixcdn.com/singer/avatar/2018/12/14/f/f/f/e/1544795511047.jpg'
        },
        // Bai5
        {
            name: 'Nevada',
            singer: 'Vicetone',
            path: './assets/music/song5.mp3',
            image: 'https://avatar-nct.nixcdn.com/song/2021/03/04/1/3/6/a/1614846314097.jpg'
        },
        // Bai6
        {
            name: 'Ngày chư giông bão',
            singer: 'Phan Mạnh Quỳnh',
            path: './assets/music/song6.mp3',
            image: 'https://avatar-nct.nixcdn.com/singer/avatar/2018/02/06/c/8/f/4/1517890221437.jpg'
        },
        //Bai7
        {
            name: 'Trên tình bạn dưới tình yêu',
            singer: 'MIN',
            path: './assets/music/song7.mp3',
            image: 'https://avatar-nct.nixcdn.com/song/2020/11/05/4/4/6/c/1604574284072.jpg',
        },
        //Bai8
        {
            name: 'Níu duyên',
            singer: 'Lê Bảo Bình',
            path: './assets/music/song8.mp3',
            image: 'https://avatar-nct.nixcdn.com/singer/avatar/2018/01/24/a/3/d/e/1516765405718.jpg',
        },
        //Bai9
        {
            name: 'Tipo',
            singer: 'Hương Ly',
            path: './assets/music/song9.mp3',
            image: 'https://avatar-nct.nixcdn.com/singer/avatar/2020/11/02/c/4/b/1/1604299335097.jpg',
        },
        //Bai10
        {
            name: 'Nụ hồng mong manh',
            singer: 'Wendy Thảo',
            path: './assets/music/song10.mp3',
            image: 'https://avatar-nct.nixcdn.com/singer/avatar/2017/10/24/d/0/b/5/1508827650609.jpg',
        },


    ],
// Oject render : render song vào trong playlist ở HTML
    render: function () {
        const htmls = this.songs.map((song,index)=> {
            return ` <div class="song">
                        <div class="thumb" style="background-image: url('${song.image}')">   
                        </div>
                        <div class="body">
                            <h3 class="title">${song.name}</h3>
                            <p class="author">${song.singer}</p>
                        </div>
                        <div class="option">
                            <i class="fas fa-ellipsis-h"></i>
                        </div>
                    </div >` ;
        
            
        })
        // Hien thi nd cua list nhac
        $('.playlist').innerHTML = htmls.join('');
    },
    //Object  handleEvents : chứa tất cả các xử lí sự  kiện 
    handleEvents: function ()
    {
        const cd = $('.cd')
        const cdWidth = cd.offsetWidth; //Lay ra chieu dai hien tai cua class = cd
        // Nghe sự kiện kéo thanh cuôn trong cửa sổ Windown 
        document.onscroll = function () {
            //scrollTop : do dai dc cuon len hoac cuon xuong
            const scrollTop = window.scrollY || document.documentElement.scrollTop
            const newCdWidth = cdWidth - scrollTop
            cd.style.width = newCdWidth + 'xp';
        }
    },




// Chi cần gọi app.start() và chạy mọi thứ trong object
    start: function () {
    
        this.handleEvents();
        this.render();
    },
 
}
app.start();










