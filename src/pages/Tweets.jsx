import { fetchUsers } from "components/API/cards"
import Card from "components/card/card"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

const Tweets = () => {
    const [users, setUsers] = useState([])

    const [follow, setFollow] = useState(JSON.parse(localStorage.getItem('follow')) || [])

    useEffect(() => {
        fetchUsers({ setUsers })


    }, [])
    return (
        <section>
            <Link to="/">Back</Link>
            <Card users={users} follow={follow} setFollow={setFollow} />
        </section>)
}
export default Tweets