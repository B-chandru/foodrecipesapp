var btn=document.getElementById("button");
var div=document.getElementById("food_details");
var div_left=document.getElementById("food_img")
var rname=document.getElementById("rname")
var video=document.getElementById("t_video")

btn.addEventListener("click",()=>{
    fetch("https://www.themealdb.com/api/json/v1/1/random.php")
    .then(res => res.json())
    .then(res =>  displayMeals(res.meals[0]))

})


function displayMeals(meals) {
   rname.innerHTML=`${meals.strMeal}`
    div.innerHTML=`<div class="contain">
    <p id="p"> <strong>INSTRUCTION : </strong>${meals.strInstructions}<p>
    </div>`
   div_left.innerHTML=`<div class="info">
   <img src="${meals.strMealThumb}"style="border-radius:50%;margin-top: 30px;"alt="meals pic" width="350px" height="300px"/>
   <p style="text-align:center;
   font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;"> <strong style="text-align:center;
   font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;">CATEGORY : </strong>${meals.strCategory}</p>
   <p style="text-align:center;
   font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;"> <strong style="text-align:center;
   font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;">AREA : </strong>${meals.strArea}<p>
    <p style="text-align:center;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;"> <strong style="text-align:center;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;">TAGS  : </strong>${meals.strTags}<p>

    </div>`
    video.innerHTML=`
    <iframe src="https://www.youtube.com/embed/${meals.strYoutube.slice(-11)}" width="600px" height="400px" ></iframe> `
  
   
}