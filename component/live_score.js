var showdata = document.getElementById("match_data1");
var showdata1 = document.getElementById("match_data2");


async function data() {
  var responce = await fetch(
    "https://hs-consumer-api.espncricinfo.com/v1/pages/matches/current?latest=true"
  );
  var collect = await responce.json();
  console.log(collect);
  // console.log(collect.matches[17].teams[0])

  for( var i=collect.matches.length-1;i>=0;i--){
      var element=collect.matches[i]
      live_score(element)
  }
  //  console.log(element)
}
data();


function live_score(element) {
  var div = document.createElement("div");
  var team1_scoreinfo = "";
  var team2_scoreinfo = "";
  var team1_score = "";
  var team2_score = "";

  if (element.teams[1].scoreInfo != null) {
    team2_scoreinfo = element.teams[1].scoreInfo;
  }
  if (element.teams[1].score != null) {
    team2_score = "  " + element.teams[1].score;
  }
  if (element.teams[0].scoreInfo != null) {
    team1_scoreinfo = element.teams[0].scoreInfo;
  }
  if (element.teams[0].score != null) {
    team1_score = "  " + element.teams[0].score;
  }

  div.innerHTML = ` <div class="data">
            
     <p style="color: red;">${element.status}</p>
<div style="margin-top: 5px;"></div>
<p>${element.title},${element.ground.smallName},${element.series.name}</p>
<div  class="match">
   <img src="https://www.espncricinfo.com${element.teams[0].team.image.url}" alt="1"> 
    <h4>${element.teams[0].team.abbreviation}</h4>
     <h5>${team1_scoreinfo} ${team1_score}</h5> 
</div>
<div  class="match">
   <img src="https://www.espncricinfo.com${element.teams[1].team.image.url}" alt="1"> 
    <h4>${element.teams[1].team.abbreviation}</h4>
     <h5>${team2_scoreinfo} ${team2_score}</h5> 
</div>
<div style="margin-top:15px"></div>
<p>${element.statusText}</p>

<div style="margin-top: 5px;"></div>
<div id="button_score">
 <button>Report</button>
 <button>Live</button>
 <button>Series Home</button>
</div>
</div>
 `;
  showdata.appendChild(div);
}


 



async function data1() {
    var responce = await fetch(
      "https://hs-consumer-api.espncricinfo.com/v1/pages/matches/current?latest=true"
    );
    var collect = await responce.json();
    console.log(collect);
    var z = collect.matches;
// z = z.reverse();
console.log(z);
z.forEach((element) => {
  live_score1(element);
});

    
  }
  data1();
  showdata1.innerHTML=zdata


  function live_score1(element) {
    var div = document.createElement("div");
    var team1_scoreinfo = "";
    var team2_scoreinfo = "";
    var team1_score = "";
    var team2_score = "";
  
    if (element.teams[1].scoreInfo != null) {
      team2_scoreinfo = element.teams[1].scoreInfo;
    }
    if (element.teams[1].score != null) {
      team2_score = "  " + element.teams[1].score;
    }
    if (element.teams[0].scoreInfo != null) {
      team1_scoreinfo = element.teams[0].scoreInfo;
    }
    if (element.teams[0].score != null) {
      team1_score = "  " + element.teams[0].score;
    }
  
    div.innerHTML = ` <div class="data">
              
       <p style="color: red;">${element.status}</p>
  <div style="margin-top: 5px;"></div>
  <p>${element.title},${element.ground.smallName},${element.series.name}</p>
  <div  class="match">
     <img src="https://www.espncricinfo.com${element.teams[0].team.image.url}" alt="1"> 
      <h4>${element.teams[0].team.abbreviation}</h4>
       <h5>${team1_scoreinfo} ${team1_score}</h5> 
  </div>
  <div  class="match">
     <img src="https://www.espncricinfo.com${element.teams[1].team.image.url}" alt="1"> 
      <h4>${element.teams[1].team.abbreviation}</h4>
       <h5>${team2_scoreinfo} ${team2_score}</h5> 
  </div>
  <div style="margin-top:15px"></div>
  <p>${element.statusText}</p>
  
  <div style="margin-top: 5px;"></div>
  <div id="button_score">
   <button>Report</button>
   <button>Live</button>
   <button>Series Home</button>
  </div>
  </div>
   `;
     showdata1.append(div)
  }
  