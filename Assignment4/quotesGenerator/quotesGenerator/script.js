async function getQuote() {
    const quoteDiv = document.getElementById('quote');
    
    try {
      const response = await fetch('https://api.quotable.io/random');
      const data = await response.json();
      console.log(data)
      const quoteText = data.content;
      const quoteAuthor = data.author;
      
      quoteDiv.innerHTML = `
        <p class="quote-text">${quoteText}</p>
        <p class="quote-author">- ${quoteAuthor}</p>
      `;
    } catch (error) {
      console.log('Error fetching quote', error);
      quoteDiv.innerHTML = '<p>Failed to fetch a quote. Please try again later.</p>';
    }
  }
  