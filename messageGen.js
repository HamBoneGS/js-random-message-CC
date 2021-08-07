// Program to randomly generate messages

// Static arrays of options for creating messages
let mealTimes = ['Breakfast', 'Lunch', 'Dinner'];
let cuisines = ['Italian', 'American', 'Japanese'];
let adjs = ['kick', 'extra \"sauce\"', 'surprise', 'je ne sais pas', 'something something'];
let celebs = ['Vin Diesel', 'Cher', 'deadmau5', 'Dwayne \"The Rock\" Johnson'];
let quotes = ['That\'s way too spicy for me', 'I love it! It\'s so healthy!', 'You could not pay me to eat that agian'];

// Object for meal types
let meals = {
    cuisine: {
        Italian: ['Spaghetti', 'Pizza', 'Baked Ziti'],
        American: ['Burger', 'Hot Dog', 'Chili'],
        Japanese: ['Sushi', 'Ramen', 'Bento']
    }
}

// Dynamic function for picking random item from array no matter array length
let randomChoice = array => {
    let index = Math.floor(Math.random()*array.length);
    return array[index];
}

// Function that generates and returns complete message
let generateMessage = () => {
    let cuisine = randomChoice(cuisines);
    console.log(`Not sure what to have for ${randomChoice(mealTimes)} today? If you like ${cuisine} with a little ${randomChoice(adjs)}, may I suggest ${randomChoice(meals.cuisine[cuisine])}. We've heard ${randomChoice(celebs)} likes making this at home, and they even said \"${randomChoice(quotes)}\".`);
}

generateMessage();