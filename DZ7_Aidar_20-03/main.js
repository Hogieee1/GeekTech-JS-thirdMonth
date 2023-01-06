const cardBlock = document.querySelector('.block-cards')
const url = 'https://jsonplaceholder.typicode.com/posts'

showCards = cards => {
    cards.forEach(elem => {
        const card = document.createElement('div')
        card.innerHTML = `
            <div class="card">
                <img src="images/world-news.jpeg" alt="global-news">
                <div class="card-title">
                    <h2>${elem.title}</h2>
                    <p>${elem.body}</p>
                </div>
            </div>
        `
        card.style = `
            width: 350px;
            height: 450px;
            margin-bottom: 30px;
            -webkit-box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
            -moz-box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
            box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
        `
        cardBlock.append(card)
    })
}



const getCards = async (url) => {
    try {
        const response = await fetch(url, { method: 'GET', })
        const result = await response.json();
    showCards(result)
    } catch {
        console.log('Error');
    } finally {
        console.log('Response was end');
    }
}

getCards(url);




    // fetch ('https://jsonplaceholder.typicode.com/posts', {
    //     method: 'GET',
    //     headers: {
    //         ContentType: 'application/json'
    //     }
    // }).then(result => result.json())
    //     .then(card => {
    //         card.forEach(cards => {
    //             const card = document.createElement('div')
    //             card.innerHTML = `
    //                 <div class="card">
    //                     <img src="images/world-news.jpeg" alt="global-news">
    //                     <div class="card-title">
    //                         <h2>${cards.title}</h2>
    //                         <p>${cards.body}</p>
    //                     </div>
    //                 </div>
    //             `
    //             card.style = `
    //             width: 350px;
    //             height: 450px;
    //             margin-bottom: 30px;
    //             -webkit-box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
    //             -moz-box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
    //             box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
    //             `
    //             cardBlock.append(card)
    //         })
    //     })

