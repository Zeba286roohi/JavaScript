function searchMovies() {
    const query = document.getElementById('searchInput').value.trim();
    if (query !== '') {
      fetch(`https://api.tvmaze.com/search/shows?q=${query}`)
        .then(response => response.json())
        .then(data => displayResults(data))
        .catch(error => console.error('Error:', error));
    }
  }
  
  function displayResults(data) {
    const resultsContainer = document.getElementById('results');
    resultsContainer.innerHTML = '';
  
    if (data.length === 0) {
      resultsContainer.innerHTML = '<p>No movies found!</p>';
    } else {
      data.forEach(item => {
        if (item.show.image && item.show.name) {
          const movieElement = document.createElement('div');
          movieElement.classList.add('movie');
  
          const title = item.show.name;
          const imageUrl = item.show.image.medium;
  
          const imageElement = document.createElement('img');
          imageElement.src = imageUrl;
  
          const titleElement = document.createElement('h2');
          titleElement.textContent = title;
  
          movieElement.appendChild(imageElement);
          movieElement.appendChild(titleElement);
          resultsContainer.appendChild(movieElement);
        }
      });
    }
  }
  