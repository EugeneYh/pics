import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID NZiEdmTEFrHesCZPH9wy_rkF7obMb3RLIkNcLSOuFH8',
    }
});