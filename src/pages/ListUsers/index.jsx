import { useEffect, useState } from "react"
import api from "../../services/api"
import { useNavigate } from "react-router-dom"
import Button from "../../components/Button"
import TopBackground from "../../components/TopBackground"
import { Container } from "./styles"


function ListUsers() {
    const [users, setUsers] = useState([])

    useEffect(() => {
        async function getUsers() {
            const { data } = await api.get('/usuarios')
            setUsers(data)
        }
        getUsers()
    }, [])

    const navigate = useNavigate()
    return (
        <Container>
            <TopBackground />
            <h1>Listagem de Usuários</h1>

            {users.map((user) => (
                <div key={user.id} >
                    <p>{user.name}</p>
                    <p>{user.age}</p>
                    <p>{user.email}</p>
                </div>
            ))}

            <Button onClick={() => navigate('/')}>Voltar</Button>
        </Container>
    )
}

export default ListUsers