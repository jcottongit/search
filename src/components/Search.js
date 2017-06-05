import { singleQS } from '../utils/helpers';
import { displayResults } from './Results';

const fourSquareID = 'W4OUNOB0FXBX4TIO5IFY14PE3N4PH5YF5SQ124ROHZ4LVS52';
const fourSquareSecret = 'K2WIMXBOR2CUNO0Y3ZBNRTKAWZODWQ4NDBCTSTNJNP0RJG4W';

const searchInput = singleQS('#search');
const searchBox = singleQS('#searchBox');

function searchResults(e) {
  e.preventDefault();
  const searchLocation = searchBox.value;
  const searchValue = searchLocation.replace(' ', '+');
  const searchString = `https://api.foursquare.com/v2/venues/explore?client_id=${fourSquareID}&client_secret=${fourSquareSecret}&v=20130815&near=${searchValue}&limit=100`;

  fetch(searchString)
    .then(data => data.json())
    .then(data => displayResults(data.response));
}

searchInput.addEventListener('submit', searchResults);
