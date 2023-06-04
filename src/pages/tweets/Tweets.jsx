import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Card from "components/card/card";
import { fetchUsers } from "components/API/cards";

import './style.scss'

const Tweets = () => {
    const [users, setUsers] = useState([]);
    const [follow, setFollow] = useState(JSON.parse(localStorage.getItem('follow')) || []);

    useEffect(() => {
        fetchUsers({ setUsers });
    }, []);
    return (
        <section className="tweets">
            <Link className="tweets__link" to="/">Back</Link>
            <Card users={users} follow={follow} setFollow={setFollow} />
        </section>)
}
export default Tweets;