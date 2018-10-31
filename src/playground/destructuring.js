//ES2015 syntax for object destructuring

const person = {
    name: 'Dave', 
    age: 22,
    location: {
        city: 'Eastleigh',
        temp: 40
    }
};

const { name: firstName = 'Anonymous', age } = person;

console.log(`${firstName} is ${age}.`)

// const {city, temp} = person.location;
// if (city && temp) {
//     console.log(`It's ${temp} in ${city}.`)
// }

const { city, temp: temprature } = person.location;
if (city && temprature) {
    console.log(`It's ${temprature} in ${city}.`)
}



const book = {
    title: 'Ego is the Enemy',
    author: 'Ryan Holiday',
    publisher: {
        // name: 'Penguin'
    }
};

const { name: publisherName = 'Self-published' } = book.publisher

console.log(publisherName);

//ES2015 syntax for Array destructuring

const address = ['Eastleigh', 'Nairobi', 'Kamukunji'];

const [state, county = 'Buru'] = address; 

console.log(`You are in ${county}.`);

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];

const [coffee, , cost] = item;

console.log(`A medium ${coffee} costs ${cost}`);
