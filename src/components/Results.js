import { singleQS } from '../utils/helpers';
import { renderVenue } from './Venue';

const searchResultsBox = singleQS('#searchResultsBox');

export function displayResults(venues) {
  const results = venues.groups[0].items;
  const resultsHTML = results.map(result => renderVenue(result)).join('');

  searchResultsBox.innerHTML = resultsHTML;
}
