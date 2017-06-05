import { singleQS } from '../utils/helpers';

const searchResultsBox = singleQS('#searchResultsBox');

export function displayResults(venues) {
  const results = venues.groups[0].items;

  console.log(results);
}
