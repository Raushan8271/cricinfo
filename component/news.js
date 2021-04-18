


 

///  getting data .
   var data_cont=document.getElementById("showdata")
   

  async function data(){
      for( var i=1;i<=10;i++){
        var responce=await fetch(`https://www.espncricinfo.com/ci/content/story/data/index.json?;type=7;page=${i}`)
        var collect=await responce.json()
    

      
       collect.forEach(element => {
        
        
            var div=document.createElement("div")
            div.innerHTML=`  <div id="news_data">
            <div id="data_contain">
            <p>${element.author}</p>
            <div class="img">
                <img   src="${element.image_path}" width="280px" height="200" alt="">
            </div>
            <div class="data">
                <a href="#" style="text-decoration: none; color: black;"><h1>${element.headline}</h1></a>
                <p><h3> ${element.date} </h3>${element.summary}</p>
            </div>
        </div>
    </div>
    <div style="clear: both;"></div>`
  
    data_cont.append(div)
        });
    }
      }
      
  data()



//    search functinality

      var input_value=document.getElementById("search_data")

      input_value.addEventListener("keyup",function(e){
   
    {
        var grabvalue=input_value.value
        // console.log(grabvalue)
        data_cont.innerHTML=null;

        async function data(){
              for( var i=1;i<=10;i++){
              var responce=await fetch(`https://www.espncricinfo.com/ci/content/story/data/index.json?;type=7;page=${i}`)
               var collect=await responce.json()
              collect.forEach(element => {
               
                if(element.headline.includes(grabvalue) ){
                    var div=document.createElement("div")
                    div.innerHTML=` 

               <div id="news_data">
                <div id="data_contain">
                    <p>${element.author}</p>
                         <div class="img">
                           <img   src="${element.image_path}" width="280px" height="200" alt="">
                         </div>
                         <div class="data">
                           <a href="#" style="text-decoration: none; color: black;"><h1>${element.headline}</h1></a>
                            <p><h3> ${element.date} </h3>${element.summary}</p>
                        </div>
                   </div>
               </div>
              <div style="clear: both;"></div>`
          
              data_cont.append(div)
       
                }

          });
            }
        }
        data()   
}
})




//   filtering date
    

    async function filter_date(){
   
        var start=document.getElementById("start").value
        var end=document.getElementById("end").value
        // console.log(start)
        var start1=start.split("-")
           var start12=  Number(start1[2])
        var end1=end.split("-")
        var end12= Number(end1[2])

        data_cont.innerHTML=null
         for( var i=1;i<=10;i++){
            var responce=await fetch(`https://www.espncricinfo.com/ci/content/story/data/index.json?;type=7;page=${i}`)
             var collect=await responce.json()
            //  console.log(collect)
             
           
             
              collect.forEach(element => {
             //    console.log(element.date)
             var date=element.date.split(" ")
             var new_date=date[1].split(",")
               // console.log(Number( new_date[0]))
  
           if(new_date[0]<=start12  && new_date[0]>=end12)
           {
            var div=document.createElement("div")
            div.innerHTML=` 

     <div id="news_data">
        <div id="data_contain">
            <p>${element.author}</p>
                 <div class="img">
                   <img   src="${element.image_path}" width="280px" height="200" alt="">
                 </div>
                 <div class="data">
                   <a href="#" style="text-decoration: none; color: black;"><h1>${element.headline}</h1></a>
                    <p><h3> ${element.date} </h3>${element.summary}</p>
                </div>
           </div>
     </div>
    <div style="clear: both;"></div>`
  
    data_cont.append(div)
           }
   })
            
         }

    }
