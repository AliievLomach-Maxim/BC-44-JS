// ⁡⁣⁣⁢​‌‌‍Модуль 6. Заняття 11. ​‌‍‌𝗗𝗢𝗠⁡​

// https://codesandbox.io/s/tribute-page-8rw5u?file=/style.css:0-2537
const data = [
	'He was born in Paris, France on February 24<sup>th</sup>, 1932.',
	'His father was himself a conductor and composer, and his mother, who was Armenian, was the sister of a conductor.',
	'His sister was a Soprano and a member of the Swingle Singers.',
	'Along his career, he composed more than two hundred film and television scores.',
	'He was also a Jazz player and worked with giants like Miles Davis or Stan Getz.',
	'He won a huge amount of awards, including Oscars, Grammy Awards and Golden Globes.',
	'He died of sepsis during the night of the 25<sup>th</sup> to 26<sup>th</sup> January 2019 in the American Hospital of Paris.',
	'He was interred at the P&egrave;re Lachaise Cemetery in Paris, France.',
]

//get dom element
const mainRef = document.querySelector('#main')

//create DOM element
const titleRef = document.createElement('h1')
titleRef.id = 'title'
titleRef.textContent = '- Michel Legrand -'

const img = document.createElement('img')
img.id = 'image'
img.src =
	'https://salvemusic.com.ua/wp-content/uploads/2021/04/michel-legrand-mishel-legran-biografiya-kompozitora-1-1-1024x1024.jpg'
img.alt = 'Michel Legrand conducting his orchestra.'

const figCaption = document.createElement('figcaption')
figCaption.id = 'img-caption'
figCaption.textContent = 'Michel Legrand conducting his orcherstra.'

const figure = document.createElement('figure')
figure.id = 'img-div'

const dataArr = data.map((el) => {
	// const liElem = document.createElement('li')
	// liElem.textContent = el
	// return liElem
	return `<li>${el}</li>`
})

console.log(dataArr.join(''))

const htmlElems = ` <article id="tribute-info">
        <div id="intro"><p>&bull; Michel Legrand (1932 - 2019) was a famous French musician. &bull;</p></div>
        <p><u>Here are some major facts about him:</u></p>
        <p>
          <ul>
		  ${dataArr.join('')}
          </ul>
      </p>
        <blockquote id="quote">
          <p>Writing is a mental thing, while playing is essentially a physical feeling.</p>
          <cite>-- Michel Legrand</cite>
        </blockquote>
        <hr>
        <p>To find out more about him, feel free to have a look at his biography on <a id="tribute-link" href="https://en.wikipedia.org/wiki/Michel_Legrand" target="_blank">Wikipedia</a>.</p>
      </article>`

//add element to DOM
figure.append(img, figCaption)
mainRef.append(titleRef, figure)
mainRef.insertAdjacentHTML('beforeend', htmlElems)

// const ulElem = document.querySelector('ul')
// ulElem.insertAdjacentHTML('beforeend', dataArr.join(''))
// // ulElem.append(...dataArr)
// // mainRef.innerHTML = ' <p><u>Here are some major facts about him:</u></p>'
