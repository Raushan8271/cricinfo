function News(img, heading, para) {
    this.img = img
    this.heading = heading
    this.para = para
}

let news1 = new News("../image/csk.jpg", "Chahar's 4 for 13 sets up big CSK win", "Punjab Kings never recovered after being 26 for 5 in the seventh over")
let news2 = new News("../image/pak.jpg", "Nawaz drags stumbling Pakistan to series win", "Both teams suffered collapses, but South Africa's 145 target proved insufficient in fourth T20I")
let news3 = new News("../image/319496.4.jpg", "Do players trust data insights? Not as much as analysts and coaches might want", "Cricketers are now incoreasingly exposed to numbers, but many factors still hold them back from wholehearted acceptance")
let news4 = new News("", "", "")
let news5 = new News("", "", "")
let news6 = new News("", "", "")
let news7 = new News("", "", "")
let news8 = new News("", "", "")
let news9 = new News("", "", "")
let news10 = new News("", "", "")
console.log(news1, news2, news3, news4, news5, news6, news7, news8)