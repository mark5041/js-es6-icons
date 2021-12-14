const ObjCard = [
	{
		name: 'cat',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'crow',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dog',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dove',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dragon',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'horse',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'hippo',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'fish',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'carrot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'apple-alt',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'lemon',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'pepper-hot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'user-astronaut',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-graduate',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-ninja',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-secret',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	}
];

// Milestone 1
// Partendo dalla struttura dati fornita, visualizzare in pagina un box per ogni icona, in cui è presente il nome dell'icona e l'icona stessa.
// Milestone 2
// Ciascuna icona ha una proprietà "color": utilizzare questa proprietà per visualizzare le icone del colore corrispondente.

function insertCardIntoContainer(array, container)
{
  container.innerHTML = '';
  for(let i = 0; i < array.length; i++)
  {
    const card = `
	<button class="box d-flex flex-column align-items-center">
		<i class="${array[i].family} ${array[i].prefix}${array[i].name} " style = "color: ${array[i].color}"></i>
		<span>${array[i].name}</span>
	</button>
    `;

    container.innerHTML += card;
  }
}

let card_container = document.querySelector(".card-container");
insertCardIntoContainer(ObjCard, card_container);


// Milestone 3
// Aggiungere alla pagina una select in cui le options corrispondono ai vari tipi di icone (animal, vegetable, user). 
// Quando l'utente seleziona un tipo dalla select, visualizzare solamente le icone corrispondenti.

let filtro = document.getElementById("filtro");

let selectValue = [];
ObjCard.forEach(element => {
	if(!selectValue.includes(element.type))
	{
		selectValue.push(element.type);
	}
})
console.log(selectValue);

filtro.addEventListener("change", 
	function()
	{
		if(filtro.value == "all")
		{
			insertCardIntoContainer(ObjCard, card_container);
		}
		else
		{
			let selected;
			for(let i = 0; i < selectValue.length; i++)
			{
				if(filtro.value == selectValue[i])
				{
					selected = selectValue[i];
				}
			}

			let filtredObj = ObjCard.filter((element) => {
				return element.type == selected;
			});

			iconColor = randomColor();
			filtredObj.forEach(element => {
				element.color = iconColor;
			});

			insertCardIntoContainer(filtredObj, card_container);
		}
	}
)

// 1- modificare la struttura dati fornita e valorizzare la proprietà "color" in modo dinamico: 
// generare in modo casuale un codice colore, sapendo che la notazione esadecimale è formata dal simbolo "#" 
// seguito da 6 caratteri alfanumerici compresi tra 0 e 9 e A e F.

function getCharacterLength (str) {
	return [...str].length;
  }

function randomColor()
{
	let string = "ABCDEF0123456789";
	let color = "#";
	while (getCharacterLength(color) <= 6)
	{
		color += string[Math.floor(Math.random() * string.length)]
	}
	return color;
}

// 2- popolare le options della select della milestone 3 dinamicamente.