import { useEffect, useState } from "react"
import api from "../../services/api"
import { useNavigate } from "react-router-dom"
import Button from "../../components/Button"
import TopBackground from "../../components/TopBackground"
import { AvatarUser, CardUsers, Container, ContainerUsers, Title, TrashIcon } from "./styles"
import Trash from "../../assets/trash.svg"


function ListUsers() {
    const [users, setUsers] = useState([])

    useEffect(() => {
        async function getUsers() {
            const { data } = await api.get('/usuarios')
            setUsers(data)
        }
        getUsers()
    }, [])

    async function deleteUsers(id) {
        await api.delete(`/usuarios/${id}`)
        const updatedUsers = users.filter (user => user.id !== id)

        setUsers (updatedUsers)
    }

    const navigate = useNavigate()
    return (
        <Container>
            <TopBackground />
            <Title>Listagem de Usuários</Title>

            <ContainerUsers>
                {users.map((user) => (
                    <CardUsers key={user.id}>
                        <AvatarUser src={`https://avatar.iran.liara.run/public?username=${user.id}`} />
                        <div>
                            <h3>{user.name}</h3>
                            <p>{user.age}</p>
                            <p>{user.email}</p>
                        </div>
                        <TrashIcon onClick={() => deleteUsers(user.id)} src={Trash} alt='icone-lixo' />
                    </CardUsers>
                ))}
            </ContainerUsers>

            <Button type="button" onClick={() => navigate('/')}>Voltar</Button>
        </Container>
    )
}

export default ListUsers