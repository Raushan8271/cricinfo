export function footer() {
    let div = document.createElement('div')
    div.setAttribute('id', 'footerInner')
    div.innerHTML = `<div id="footerMain">
    <div style="width: 100%;height: auto; border-radius: 7px;">
        <h5 style="padding: 15px 16px 0px 0px;">Key Series</h5>
        <hr>
        <div>
            <li><a href="">IPL 2021</a></li>
            <li><a href="">South Africa v Pakistan</a></li>
            <li><a href="">Zimbabwe v Pakistan</a></li>
            <li><a href="">Sri Lanka v Bangladesh</a></li>
            <li><a href="">Nepal Tri-Nation T20I</a></li>
            <li><a href="">County Championship</a></li>
            <li><a href="">Sheffield Shield</a></li>
            <li><a href="">Women's Championship</a></li>
            <li><a href="">World Test Championship</a></li>
            <li><a href="">World Cup Super League</a></li>
        </div>
    </div>
    <div style="width: 100%;height: auto; border-radius: 7px;">
        <h5 style="padding: 15px 16px 0px 0px;">Quick Links</h5>
        <hr>
        <div>
            <li><a href="">T20 Timeout</a></li>
            <li><a href="">Sahi Hai Fan</a></li>
            <li><a href="">Best Performances</a></li>
            <li><a href="">Fantasy Pick</a></li>
            <li><a href="">Sahi Hai Decisions</a></li>
            <li><a href="">ICC Rankings</a></li>
        </div>
    </div>
    <div style="width: 100%;height: auto; border-radius: 7px;">
        <h5 style="padding: 15px 16px 0px 0px;">ESPNcricinfo Apps</h5>
        <hr>
        <div>
            <li><a href="">Android App</a></li>
            <li><a href="">iOS App</a></li>
        </div>
    </div>
    <div style="width: 100%;height: auto; border-radius: 7px;">
        <h5 style="padding: 15px 16px 0px 0px;">Follow ESPNcricinfo</h5>
        <hr>
        <div>
            <li><a href="">YouTube</a></li>
            <li><a href="">Facebook</a></li>
            <li><a href="">Twitter</a></li>
            <li><a href="">Instagram</a></li>
        </div>
    </div>
    <div style="width: 100%;height: auto; border-radius: 7px;">
        <h5 style="padding: 15px 16px 0px 0px;">ESPN Sites</h5>
        <hr>
        <div>
            <li><a href="">The Cricket Monthly</a></li>
            <li><a href="">ESPN</a></li>
        </div>
    </div>
</div>
<hr style="width: 90%;">
<div id="footerButtom">
    <div>
        <img style="width: 100px;" src="https://a.espncdn.com/redesign/assets/img/logos/espn-404@2x.png" alt="">
    </div>
    <div id="footerButtomLink">
        <a href="">Terms of Use</a>
        <a href="">Privacy Policy</a>
        <a href="">Addendum to the Global Privacy Policy</a>
        <a href="">Interest-Based Ads</a>
    </div>

</div>
<p style="padding: 0px 56px 24px;color: rgb(163, 163, 163);">© 2021 ESPN Sports Media Ltd. All rights reserved</p>`

    return div
}