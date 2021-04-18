function News(img, heading, para) {
    this.img = img
    this.heading = heading
    this.para = para
}
var arr = []
let news1 = new News("../image/csk.jpg", "Chahar's 4 for 13 sets up big CSK win", "Punjab Kings never recovered after being 26 for 5 in the seventh over")
let news2 = new News("../image/pak.jpg", "Nawaz drags stumbling Pakistan to series win", "Both teams suffered collapses, but South Africa's 145 target proved insufficient in fourth T20I")
let news3 = new News("../image/319496.4.jpg", "Do players trust data insights? Not as much as analysts and coaches might want", "Cricketers are now incoreasingly exposed to numbers, but many factors still hold them back from wholehearted acceptance")


arr = [news1, news2, news3]
console.log(arr)
//console.log(news1, news2, news3, news4, news5, news6, news7, news8)

arr.forEach(el => {
    let newsContent = document.getElementById('newsContent')
    let newsInner = document.createElement('div')
    newsInner.innerHTML = `<div class="newsInner">
    <div style="width: 500px;padding: 10px 22px;">
        <img style="width: 500px; margin: 10px auto;border-radius: 7px;" src="${el.img}" alt="">
        <a class="a_hover" style="color: black;font-size: 1.5rem;text-decoration: none;font-weight: bold;box-sizing: border-box"
            href="">${el.heading}</a>
        <P style="margin-bottom: 10px;">${el.para}</P>
    </div>
</div>`

newsContent.appendChild(newsInner)
})