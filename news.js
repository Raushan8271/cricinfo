


  var small_nav=document.getElementById("small_nav")
  var img=document.getElementById("img")
  var heading=document.getElementById("heading")
  var small_heading=document.getElementById("small_heading")
  var date=document.getElementById("date")



  async function data(){
      var responce=await fetch('https://www.espncricinfo.com/ci/content/story/data/index.json?;type=7;page=1')
      var collect=await responce.json()
      console.log(collect)

     collect.forEach(element => {
           var p=document.createElement("p")
           p.innerHTML=`${element.}`
      });
  }
  data()