async function logJSONData() {
    const response = await fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a");
    const jsonData = await response.json();
    console.log(jsonData);
    done(jsonData);
  }
  
  function done(jsonData){
    let array = jsonData.drinks;
      for(let i = 0; i<array.length; i++){
        document.getElementById("con").innerHTML=document.getElementById("con").innerHTML+
        `  <div class="col">
        <div class="card" style="width: 18rem;">
    <img src="${array[i].strDrinkThumb}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${array[i].strDrink}</h5>
      <p class="card-text">${array[i].strInstructionsIT}.</p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div> 
   `;
        }
    
  
  }
  logJSONData();