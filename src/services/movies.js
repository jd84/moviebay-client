import axios from "axios";

export default {
    async getMovies() {
        const { data } = await axios.get("http://localhost:3000/movies/");
        return data;
    }
}