function renderAddress(addressArray) {
  const address = addressArray.map(addressLine => `<li class="address__line">${addressLine}</li>`).join('');
  return address;
}

export function renderVenue(venueData) {
  const venue = venueData.venue;
  const rating = venue.rating ? `${venue.rating}/10` : 'No Ratings';
  return `
    <li class="venue">
     <a href="https://foursquare.com/v/${venue.id}">
      <ul class="detail">
        <span class="name">${venue.name}</span>
        <li class="rating">${rating}</li>
        <li class="checkins">Checkins: ${venue.stats.checkinsCount}</li>
      </ul>
      <ul class="address">
        ${renderAddress(venue.location.formattedAddress)}
      </ul>
     </a>
    </li>
  `;
}
