import { singleQS } from '../utils/helpers';
import { renderVenue } from './Venue';

const searchResultsBox = singleQS('#searchResultsBox');

export function displayResults(venues) {
  if (Object.keys(venues).length < 1) return; // Check if empty object
  const results = venues.groups[0].items;
  const resultsHTML = results.map(result => renderVenue(result)).join('');

  searchResultsBox.innerHTML = resultsHTML;
}

export function searchError(searchLocation) {
  const message =
    searchLocation
      ? `Nothing of interest found in <span class="error-location">${searchLocation}</span>, try searching somewhere else`
      : 'Whoops, you forgot to enter a location!'
  const noResults = `
    <div class="error">
      <span>${message}</span>
    </div>
  `;
  searchResultsBox.innerHTML = noResults;
}
