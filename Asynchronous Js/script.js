// Example of asynchronous Js
/*
const second = () => {
  setTimeout(() => {
console.log('Async Hey There')
  }, 2000)
}


const first = () => {
  console.log('Hey there');
  second();
  console.log('The end');
}

first();

*/



// simulate loading data from a remote web server !!!
// callback hell!!

/*
function getRecipe() {
  setTimeout(() => {
      const recipeID = [523, 883, 432, 974];
      console.log(recipeID);

      setTimeout(id =>{
          const recipe = {
          title: 'Fresh tomato pasta', publisher: 'Saba'};
          console.log(`${id}: ${recipe.title}`);


          setTimeout(publisher => {
              const recipe2 = {
              title: 'Italican Pizza', publisher: 'Saba'};
              console.log(recipe2);
          
        }, 1500, recipe.publisher)
      
      }, 1500, recipeID[2]);
  }, 1500)

}

getRecipe();

*/



// PROMISE!!!
// object that keeps track about whether a certain even has happened already or not
// if it happened, pro,ise determines what happens after the event has happened
// implement the concept of a future value that we are expecting

/*

      const getIDs = new Promise((resolve,    reject) => {
          setTimeout(() => {
              resolve([523, 883, 432, 974]);
          }, 1500);
      });
      const getRecipe = recID => {
          return new Promise((resolve, reject) => {
            setTimeout(ID => {
            const recipe = {
                title: 'Fresh tomato pasta', publisher: 'Saba'};
                resolve(`${ID}: ${recipe.title}`);
            }, 1500, recID);
          });
      };

      const getRelated = publisher => {
            return new Promise((resolve, reject) => {
              setTimeout(pub => {
                const recipe2 = {
                  title: 'Italican Pizza', publisher: 'Saba'};
                  resolve(`${pub}: ${recipe2.title}`);

            },1500, publisher);
          });

      };

      getIDs
      .then(IDs => {
            console.log(IDs); 
            return getRecipe(IDs[2]);
      })
      .then(recipe => {
        console.log(recipe);
        return getRelated('Saba');
      })
      .then(recipe => {
        console.log(recipe);
      })
      .catch(error => {
        console.log(error);
      });


*/


// most of the time we gonna consume promises

/*
const getIDs = new Promise((resolve,    reject) => {
  setTimeout(() => {
      resolve([523, 883, 432, 974]);
  }, 1500);
});
const getRecipe = recID => {
  return new Promise((resolve, reject) => {
    setTimeout(ID => {
    const recipe = {
        title: 'Fresh tomato pasta', publisher: 'Saba'};
        resolve(`${ID}: ${recipe.title}`);
    }, 1500, recID);
  });
};

const getRelated = publisher => {
    return new Promise((resolve, reject) => {
      setTimeout(pub => {
        const recipe2 = {
          title: 'Italican Pizza', publisher: 'Saba'};
          resolve(`${pub}: ${recipe2.title}`);

    },1500, publisher);
  });

};


async function getRecipesAW() {
    const IDs = await getIDs;
    console.log(IDs);
    const recipe = await getRecipe(IDs[2]);
    console.log(recipe);
    const related = await getRelated('Saba Megrelishvili');
    console.log(related);

}



getRecipesAW();


*/


// just a little example if ajax call using fetch nad then adn catch methods!!! feth is returing promise
/*
function getWeather(woeid){
fetch(`https://crossorigin.me/https://www.metaweather.com/api/location/${woeid}`)
.then(result => {
  console.log(result);
  return result.json();
})
.then(data => {
  const today = data.consolidated_weather[0];
  console.log(`Temperatures today in ${data.title}
  stay between ${today.min_temp} and ${today.max_temp}`);
})
.catch(error => console.log(error));
}
getWeather(2487956);
getWeather(44418);

*/

/*
async function getWeatherAW(woeid) {
  try {
    const result = await fetch(`https://crossorigin.me/https://www.metaweather.com/api/location/${woeid}`);
    const data = await result.json();
    console.log(data);
    const tomorrow = data.consolidated_weather[1];
    console.log(`Temperatures tomorrow in ${data.title}
    stay between ${tomorrow.min_temp} and ${tomorrow.max_temp}`);
    return data;
  } catch(error) {
    alert(error);
  }
}
getWeatherAW(2487956);
let dataLondon;
getWeatherAW(44418).then(data => {
  dataLondon = data;
  console.log(dataLondon);
});

*/











