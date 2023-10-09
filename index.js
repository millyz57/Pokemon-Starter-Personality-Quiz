alert("Welcome to my quiz! \n Enjoy! :)")

document.addEventListener('DOMContentLoaded', postData);

const data = document.location.search;
const params = new URLSearchParams(data);

const fname =  params.get('fname');
const amount  =  params.get('amount');
const type = params.getAll('type');
const trait =  params.get('trait');
const character =  params.get('character');
const place=  params.get('place');

console.log(amount)


let pokemon;

if (trait =="loving" && character =="Brock" && place == "Sinnoh" &&  400> amount && amount>=300 && type == "ground") {
    pokemon = "Turtwig";
    image = 'images/turt.png';
    paragraph = fname + ", You are Turtwig! You are very affectionate and very caring. You are a good listen and at times can be a little quiet. When in a conflict you like to know all the details before making a rash decisions and typically avoid conflict.";
} else if (trait =="friendly" && character =="May" && place == "Kanto" && 100> amount && amount >=0 && type == "posion") {
    pokemon = 'Bulbasaur';
    image = 'images/bulb.png';
    paragraph  = fname + ", You are Bulbasaur! You can be shy at times, but after knowing someone you are very loyal and create a very friendly atmosphere. You are a free spirit that is up for anything, but at the same time lazy.";
} else if (trait =="calm" && character =="Ash" && place == "Hoenn" && 300>amount && amount>=200 && type == "fighting") {
    pokemon = 'Treecko';
    image = 'images/tree.png';
    paragraph  = fname + ", You are Treecko! You very calm and collected. You don't panic under stress. Though you can be very competitive and don't like to admit when you are wrong, you know to accept it and embrace it ";
} else if (trait =="friendly" && character =="Dawn" && place == "Johto" && 200> amount && amount>=100 && type == "psychic") {
    pokemon = 'Chikorita';
    image = 'images/chik.png';
    paragraph  = fname + ", You are Chikorita! You have high empathy and is hardworking. You are spontaneous and have a tendency to jump into something right away. This can create misunderstandings, but you try your best to maintain as much as peace as possible.";
} else {
    pokemon = 'Bulbasaur';
    image = 'images/bulb.PNG';
    paragraph  = fname + ", You are Bulbasaur! You can be shy at times, but after knowing someone you are very loyal and create a very friendly atmosphere. You are a free spirit that is up for anything, but at the same time lazy.";
}

//writing html code
function postData() {
    const container = document.getElementById('results');
    container.innerHTML = `<h1>You are ${pokemon}</h1>
                        <img src="${image}"></img>
                        <p id="text">"${paragraph}"</p>
                        <div id="retake">
                            <a class="retake" href="form.html"> Retake the quiz</a>
                        </div>`;
                    }

