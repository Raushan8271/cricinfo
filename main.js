import { headerSecond } from "./component/headerSecond.js"
import { rightContent } from "./component/rightContent.js"
import { footer } from "./component/footer.js"
document.getElementById('headerSec').append(headerSecond())
document.getElementById('right').append(rightContent())
document.getElementById('footer').append(footer())





async function score() {
    try {
        let req = await fetch('https://cricapi.com/api/cricketScore/?apikey=StC74k5A68dv1fOjQvPXJDVGkeS2&unique_id=1251578')
        let data = await req.json()
            //console.log(data)
    } catch (e) {
        console.log(e)
    }
}
score()