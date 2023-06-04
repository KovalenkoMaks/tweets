import axios from "axios";

const endpoint = 'https://647a0124a455e257fa642e7a.mockapi.io/users';

export const fetchUsers = async ({ setUsers }) => {
    await axios.get(endpoint)
        .then(response => {
            setUsers(response.data)
        })
        .catch(error => {
            console.error('Something went wrong:', error);
        });
};