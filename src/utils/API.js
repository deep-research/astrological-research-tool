import axios from "axios";

export default {
    // Saves a book to the database
    saveUser: function(bookData) {
        return axios.post("/api/userAuth", bookData);
    }
};
