import { Location } from "../entities/Location";

const fetchLocation = (input) => {
    const locationUrl = `location/search/?query=${input}`;

    return fetch(locationUrl)
        .then(response => response.json())
        .then(data => {
            const locations = data.map(location => {
                const { woeid, title } = location;
                return new Location(woeid, title)
            })
            return locations;
        })
}

export { fetchLocation }