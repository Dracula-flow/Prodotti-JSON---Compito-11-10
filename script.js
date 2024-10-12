// Chiamata fetch dei dati
// Porli in un array ci permette di costruire una base dati da cui attingere per la manipolazione del DOM.

let demo = document.querySelector("#demo"); 


  // URL dell'API da cui recuperare i dati
  const apiUrl = 'https://dummyjson.com/products';

  // Funzione per recuperare i dati
  async function fetchData() {
      try {
          const response = await fetch(apiUrl);
          if (!response.ok) {
              throw new Error('Network response was not ok');
          }
          const data = await response.json();
          populateDivs(data.products);
      } catch (error) {
          console.error('C\'è stato un problema con il fetch:', error);
      }
  }

  // Funzione per popolare i div con i dati
  function populateDivs(products) {
      let container = document.getElementById('demo');
      container.className = "container";
      products.forEach(product => {
          let div = document.createElement('div');
          div.className = 'div';
          div.innerHTML = `
          <p>ID prodotto: ${product.id}</p>
              <h3>${product.title}</h3>
              <p>Prezzo: $${product.price}</p>
              <p>${product.description}</p>
              <img src= ${product.images} >
              `;
          container.appendChild(div);
      });
  }

  // Chiamata alla funzione fetchData per avviare il processo
  fetchData();
