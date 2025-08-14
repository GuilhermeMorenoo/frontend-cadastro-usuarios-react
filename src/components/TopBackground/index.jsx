import { TopBackground } from "./styles";
import UsersImage from "../../assets/users.png"

function TopBackgroundImg (){
    return (
        <TopBackground>
        <img src={UsersImage} alt="imagem-usuarios" />
        </TopBackground>
    )
}

export default TopBackgroundImg