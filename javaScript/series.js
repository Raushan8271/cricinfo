let top_ads = ["https://tpc.googlesyndication.com/simgad/4599272747741584314?",
    "https://tpc.googlesyndication.com/simgad/4806003440218956751?"]

let right_ads = ["https://tpc.googlesyndication.com/simgad/12365718001132389279?",
    "https://tpc.googlesyndication.com/simgad/7411421147266363877?",
    "https://tpc.googlesyndication.com/simgad/12598192234913773850?",
    "https://tpc.googlesyndication.com/simgad/15841686395453576998?",
    "https://tpc.googlesyndication.com/simgad/15582684688719062778?",
    "https://tpc.googlesyndication.com/simgad/12239562037567381132?",
    "https://tpc.googlesyndication.com/simgad/6181019838457675129?",
    "https://tpc.googlesyndication.com/simgad/3541276014299803378?",
    "https://tpc.googlesyndication.com/simgad/16995279651211156069?",
    "https://tpc.googlesyndication.com/simgad/4461905471653839514?"]

window.addEventListener('load', () => {
    document.getElementById('series').innerHTML = currentCricket();

    document.getElementById('topAd').setAttribute('src', `${top_ads[Math.floor(Math.random() * 2)]}`)
    document.getElementById('rightAd1').setAttribute('src', `${right_ads[Math.floor(Math.random() * right_ads.length)]}`)
    document.getElementById('rightAd2').setAttribute('src', `${right_ads[Math.floor(Math.random() * right_ads.length)]}`)
})

let series_div = document.getElementById('series')

function asd() {
    console.log('hello')
}

function series() {
    let x = event.target

    console.log(x)

    let ser = document.getElementsByClassName('series');

    for (let i = 0; i < ser.length; i++) {
        console.log(ser[i].setAttribute('style', 'color : #000'))
    }

    x.setAttribute('style', 'color : #439ec9')

    if (x.id == 1) {

        series_div.innerHTML = '';

        series_div.innerHTML = currentCricket();

    }
    else if (x.id == 2) {

        series_div.innerHTML = '';

        series_div.innerHTML = futureSeriesTornaments();

        document.getElementById('ser-right').setAttribute('style', 'border-left : none')

    }
    else {

        series_div.innerHTML = '';

        series_div.innerHTML = recentlyConcluded();

    }
}



function currentCricket() {
    let current_cricket = `<div id="ser-left">
    <h2>International Tours</h2>
    <ul>

        <li><a href="https://www.espncricinfo.com/series/pakistan-tour-of-south-africa-2021-1251556">South Africa v Pakistan</a></li>
        <li><a href="https://www.espncricinfo.com/series/bangladesh-tour-of-sri-lanka-2021-1255822">Sri Lanka v Bangladesh</a></li>
        <li><a href="https://www.espncricinfo.com/series/pakistan-tour-of-zimbabwe-2021-1257180">Zimbabwe v Pakistan</a></li>
        <li><a href="https://www.espncricinfo.com/series/nepal-tri-nation-t20i-series-2021-1257942">Nepal Tri-Nation T20I</a></li>
        
    </ul>

    <h2>ICC Tournaments</h2>
    <ul>

        <li><a href="https://www.espncricinfo.com/series/_/id/1122932/icc-womens-championship">ICC Women's Championship</a></li>
        <li><a href="https://www.espncricinfo.com/series/_/id/19439/season/2019/icc-mens-cricket-world-cup-league-2">Men's Cricket World Cup League 2</a></li>
        <li><a href="https://www.espncricinfo.com/scores/series/19553/season/2019/cwc-challenge-league-group-a">CWC Challenge League Group A</a></li>
        <li><a href="https://www.espncricinfo.com/scores/series/19653/season/2019/cwc-challenge-league-group-b">CWC Challenge League Group B</a></li>
        <li><a href="https://www.espncricinfo.com/series/world-cup-super-league-2020-2022-23-1227837">ICC CWC Super League</a></li>
        <li><a href="https://www.espncricinfo.com/series/_/id/19430/season/2019/icc-world-test-championship">ICC World Test Championship</a></li>
        
    </ul>

  </div>

  <div id="ser-right">

    <h2>T20/T10 Tournaments</h2>
    <ul>

        <li><a href="https://www.espncricinfo.com/series/ipl-2021-1249214">IPL 2021</a></li>     
        <li><a href="https://www.espncricinfo.com/series/a20-league-2020-21-1255254">A20 League</a></li>
        
    </ul>

    <h2>Associate Cricket</h2>
    <ul>

        <li><a href="https://www.espncricinfo.com/series/uganda-tour-of-namibia-2021-1257402/match-schedule-fixtures">Namibia v Uganda</a></li>                      
        <li><a href="https://www.espncricinfo.com/series/franchise-t20-2020-21-1256730/match-schedule-fixtures">Richelieu Franchise T20</a></li>                      
        <li><a href="https://www.espncricinfo.com/series/all-stars-t20-series-2020-21-1256757/match-schedule-fixtures">Hong Kong All Stars T20</a></li>                   
        <li><a href="https://www.espncricinfo.com/series/all-stars-50-over-series-2020-21-1256756/match-schedule-fixtures">Hong Kong All Stars 50-Over</a></li>
        
    </ul>

    <h2>Australia Domestic</h2>
    <ul>

        <li><a href="https://www.espncricinfo.com/series/_/id/8044/season/2020/big-bash-league">Big Bash League</a></li>   
        <li><a href="https://www.espncricinfo.com/series/the-marsh-cup-2020-21-1244113">Marsh Cup</a></li>   
        <li><a href="https://www.espncricinfo.com/series/_/id/8043/season/2020/sheffield-shield">Sheffield Shield</a></li>   
        <li><a href="https://www.espncricinfo.com/series/women-s-national-cricket-league-2020-21-1249591">WNCL</a></li>   
        <li><a href="https://www.espncricinfo.com/series/_/id/18042/season/2020/womens-big-bash-league">Women's Big Bash League</a></li>
        
    </ul>

    <h2>England Domestic</h2>
    <ul>

        <li><a href="https://www.espncricinfo.com/series/the-hundred-2021-1252040">The Hundred</a></li>   
        <li><a href="https://www.espncricinfo.com/series/the-women-s-hundred-2021-1252659">Women's Hundred</a></li>   
        <li><a href="https://www.espncricinfo.com/series/county-championship-2021-1244186">County Championship</a></li>   
        <li><a href="https://www.espncricinfo.com/series/vitality-blast-2021-1250122">Vitality Blast</a></li>  
        <li><a href="https://www.espncricinfo.com/series/royal-london-one-day-cup-2021-1250123">RL One-Day Cup</a></li>   
        <li><a href="https://www.espncricinfo.com/series/rachael-heyhoe-flint-trophy-2021-1252263">RHFT Trophy</a></li>  
        <li><a href="https://www.espncricinfo.com/series/women-s-regional-t20-2021-1252410">Women's Regional T20</a></li>
        
    </ul>

    <h2>India Domestic</h2>
    <ul>

        <li><a href="https://www.espncricinfo.com/series/women-s-senior-one-day-trophy-2020-21-1255263/match-schedule-fixtures">Women's Senior OD</a></li>
        <li><a href="https://www.espncricinfo.com/series/vijay-hazare-trophy-2020-21-1250891">Vijay Hazare Trophy</a></li>
        <li><a href="https://www.espncricinfo.com/series/syed-mushtaq-ali-trophy-2020-21-1244188">SMA Trophy</a></li>
        
    </ul>

    <h2>Nepal Domestic</h2>
    <ul>

        <li><a href="https://www.espncricinfo.com/series/lalitpur-mayor-women-s-championship-2021-1257621/match-schedule-fixtures">Lalitpur Women's Championship</a></li>
        
    </ul>

    <h2>Pakistan Domestic</h2>
    <ul>

        <li><a href="https://www.espncricinfo.com/series/_/id/8840/season/2020/quaid-e-azam-trophy" "="">Quaid-e-Azam Trophy</a></li>  
        <li><a href="https://www.espncricinfo.com/scores/series/19556/season/2020/quaid-e-azam-second-xi-trophy">Quaid-e-Azam Second XI</a></li>  
        <li><a href="https://www.espncricinfo.com/series/_/id/17924/season/2021/pakistan-cup">Pakistan Cup</a></li> 
        <li><a href="https://www.espncricinfo.com/scores/series/19914/season/2020/pakistan-cup-second-xi-trophy">Pakistan Cup Second XI</a></li> 
        <li><a href="https://www.espncricinfo.com/series/_/id/8660/season/2020/national-t20-cup">	National T20 Cup</a></li> 
        <li><a href="https://www.espncricinfo.com/scores/series/19602/season/2020/national-t20-2nd-xi-cup">National T20 2nd XI Cup</a></li>
        
    </ul>

    <h2>South Africa Domestic</h2>
    <ul>

        <li><a href="https://www.espncricinfo.com/series/_/id/8877/season/2020/4-day-franchise-series">4-Day Franchise Series</a></li> 
        <li><a href="https://www.espncricinfo.com/series/_/id/8726/season/2021/csa-3-day-provincial-cup">3-Day-Provincial Cup</a></li>
        <li><a href="https://www.espncricinfo.com/series/_/id/8808/season/2021/momentum-one-day-cup">Momentum 1-day Cup</a></li>
        <li><a href="https://www.espncricinfo.com/series/_/id/8723/season/2021/csa-provincial-one-day-challenge">1-day Challenge</a></li>
        <li><a href="https://www.espncricinfo.com/series/_/id/8656/season/2021/csa-t20-challenge">CSA T20 Challenge</a></li>
        <li><a href="https://www.espncricinfo.com/series/women-s-t20-super-league-2020-21-1244114/match-results">WSL T20</a></li>
        
    </ul>

    <h2>Sri Lanka Domestic</h2>
    <ul>

        <li><a href="https://www.espncricinfo.com/series/major-clubs-limited-over-tournament-2020-21-1256084/match-schedule-fixtures">Major Clubs Limited Over</a></li>
        
    </ul>

    <h2>New Zealand Domestic</h2>
    <ul>

        <li><a href="https://www.espncricinfo.com/series/_/id/8828/season/2020/plunket-shield">Plunket Shield</a></li>
        <li><a href="https://www.espncricinfo.com/series/_/id/8880/season/2020/the-ford-trophy">Ford Trophy</a></li>
        <li><a href="https://www.espncricinfo.com/series/_/id/8654/season/2020/super-smash">Super Smash</a></li>
        <li><a href="https://www.espncricinfo.com/scores/series/8819/season/2020/new-zealand-cricket-women's-twenty20">Women's Twenty20</a></li>
        
    </ul>

    <h2>West Indies Domestic</h2>
    <ul>

        <li><a href="https://www.espncricinfo.com/series/super50-cup-2020-21-1249420">Super50 Cup</a></li>
        
    </ul>

    <h2>Zimbabwe Domestic</h2>
    <ul>

        <li><a href="https://www.espncricinfo.com/series/pro50-championship-2021-1257979">Pro50</a></li>
        <li><a href="https://www.espncricinfo.com/series/zimbabwe-domestic-twenty20-2021-1257981">Domestic T20</a></li>
        
    </ul>

  </div>`

    return current_cricket;
}

function futureSeriesTornaments() {
    let future_sereis_tornaments = `<div id="ser-left">

    <h2>International Tours</h2>
    <ul>
        <li><a href="/series/new-zealand-in-england-2021-1249202">New Zealand tour of England, May - Jun 2021</a></li>
        <li><a href="/series/_/id/19959/sri-lanka-in-england-2021">Sri Lanka tour of England, Jun - Jul 2021</a></li> 
        <li><a href="/series/ireland-tour-of-netherlands-2021-1251947">Ireland tour of Netherlands, Jun 2021</a></li>
        <li><a href="/series/_/id/19958/pakistan-tour-of-england-2021">Pakistan tour of England, Jul 2021</a></li>
        <li><a href="/series/south-africa-tour-of-ireland-2021-1251938">South Africa tour of Ireland, Jul 2021</a></li>
        <li><a href="/series/zimbabwe-tour-of-ireland-2021-1251944">Zimbabwe tour of Ireland, Aug 2021</a></li>
        <li><a href="/series/_/id/19955/india-tour-of-england-2021">India tour of England, Aug - Sep 2021</a></li>
        <li><a href="/series/_/id/19952/england-tour-of-pakistan-2021-22">England tour of Pakistan, Oct 2021</a></li>
        <li><a href="/series/england-tour-of-west-indies-2021-22-1256716">England tour of West Indies, Jan - Mar 2022</a></li>   
    </ul>

    <h2>International Tournaments</h2>
    <ul>
        <li><a href="/series/icc-women-s-world-cup-2021-22-1219028">Women's World Cup</a></li>    
    </ul>

</div>
<div id="ser-right"></div>`

    return future_sereis_tornaments;
}

function recentlyConcluded() {
    let recently_concluded = `<div id="ser-left">

    <h2>International Tours</h2>
    <ul>

        <li><a href="/series/uganda-tour-of-namibia-2021-1257402/match-schedule-fixtures">Namibia v Uganda</a></li>
        <li><a href="/series/zimbabwe-over-50s-tour-of-namibia-2021-1257377/match-schedule-fixtures">NAM Over-50s v ZIM Over-50s</a></li>
        <li><a href="/series/pakistan-under-19s-tour-of-bangladesh-2021-1258027">BDESH-U19 v PAK-U19</a></li>
        <li><a href="/series/england-tour-of-india-2020-21-1243364">India v England</a></li>
        <li><a href="/series/sri-lanka-tour-of-west-indies-2020-21-1252062">West Indies v Sri Lanka</a></li>
        <li><a href="/series/_/id/19923/bangladesh-in-nz-2020-21">New Zealand v Bangladesh</a></li>
        <li><a href="/series/zimbabwe-tour-of-united-arab-emirates-2020-21-1252053">Afghanistan v Zimbabwe</a></li>
        <li><a href="/series/south-africa-women-tour-of-india-2020-21-1253264">South Africa Women in IND</a></li>
        <li><a href="/series/ireland-a-tour-of-bangladesh-2020-21-1251421">Ireland A in BDESH</a></li>
        <li><a href="/series/road-safety-world-series-2019-20-2020-21-1217118">Road Safety Series</a></li>
        <li><a href="/series/_/id/19925/australia-in-new-zealand-2020-21">New Zealand v Australia</a></li>
        <li><a href="/series/england-women-in-new-zealand-2020-21-1249221">England Women in NZ</a></li>
        <li><a href="/series/south-africa-in-pakistan-2020-21-1242968">Pakistan v South Africa</a></li>
        <li><a href="/series/west-indies-in-bdesh-2020-21-1244017">Bangladesh v West Indies</a></li>
        <li><a href="/series/pakistan-women-in-sa-2020-21-1244840">Pakistan Women in SA</a></li>
        <li><a href="/series/england-in-sri-lanka-2020-21-1242951">Sri Lanka v England</a></li>
        <li><a href="/series/_/id/19846/india-in-australia-2020-21">Australia v India</a></li>
        <li><a href="/series/ireland-in-uae-2020-21-1244011">Ireland tour of UAE</a></li>
        <li><a href="/series/afghanistan-in-uae-2020-21-1244010">Afghanistan in UAE</a></li>
        <li><a href="/series/_/id/19928/new-zealand-v-pakistan-2020-21">New Zealand v Pakistan</a></li>
        <li><a href="/series/sri-lanka-in-sa-2020-21-1237354">South Africa v Sri Lanka</a></li>
        <li><a href="/scores/series/19964/pakistan-a-in-nz-2020-21">Pakistan A in New Zealand</a></li>
        <li><a href="/scores/series/19965/west-indies-a-in-nz-2020-21">West Indies A in New Zealand</a></li>
        <li><a href="/series/_/id/19930/west-indies-in-nz-2020-21">New Zealand v West Indies</a></li>
        <li><a href="/series/_/id/19939/south-africa-v-england-2020-21">South Africa v England</a></li>
        <li><a href="/series/_/id/19919/pakistan-v-zimbabwe-2020-21">Pakistan v Zimbabwe</a></li>
        <li><a href="/scores/series/19859/nz-women-in-australia-2020-21">Australia Women v New Zealand Women</a></li>
        
    </ul>

    <h2>T20 Tournaments</h2>
    <ul>

        <li><a href="/series/csa-t20-challenge-2020-21-1235223">T20 Challenge</a></li>
        <li><a href="/series/_/id/8044/season/2020/big-bash-league">Big Bash League</a></li>
        <li><a href="/series/abu-dhabi-t10-2020-21-1245079">Abu Dhabi T10</a></li>
        
    </ul>
</div>

<div id="ser-right">

    <h2>Associate Cricket</h2>
    <ul>

        <li><a href="/series/gautam-buddha-cup-2020-21-1243405/match-schedule-fixtures">Buddha Cup</a></li>
        <li><a href="/scores/series/19935/balkan-cup-2020-21">Balkan Cup</a></li>
        <li><a href="/scores/series/19481/season/2020/hong-kong-premier-league-t20-tournament">Hong Kong PL T20</a></li>
        <li><a href="/series/_/id/8048/season/2020/indian-premier-league">Richelieu Franchise T20</a></li>
        
    </ul>
</div>`

    return recently_concluded;
}


