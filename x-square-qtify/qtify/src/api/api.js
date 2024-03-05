import axios from "axios";

export const BACKEND_ENDPOINT = "https://qtify-backend-labs.crio.do";

export const fetchTopAlbum = async () => {
    try {
        const response = await axios.get(`${BACKEND_ENDPOINT}/album/top`);
        return response.data;
    }
    catch (e) {
        console.log("error")
        console.error(e)
    }

}

export const fetchNewAlbum = async () => {
    try {
        const response = await axios.get(`${BACKEND_ENDPOINT}/album/new`);
        return response.data;
    }
    catch (e) {
        console.error(e)
    }

}

export const fetchSongs = async () => {
    try {
        const response = await axios.get(`${BACKEND_ENDPOINT}/album/songs`);
        return response.data;
    }
    catch (e) {
        console.error(e)
    }

}

export const fetchFilters = async () => {
    try {
        const response = await axios.get(`${BACKEND_ENDPOINT}/album/geners`);
        return response.data;
    }
    catch (e) {
        console.error(e)
    }

}