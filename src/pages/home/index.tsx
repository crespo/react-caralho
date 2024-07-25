import { IAdmin } from "../../models/Admin"

let admin: IAdmin = {name: "rauuuuuuul"};

function Presentation() {
    return (
        <h2>My name is {admin.name}!</h2>
    )
}
export default function Home() {
    return (
        <>
            <h1>Hello World!</h1>
            <Presentation />
        </>
    )
}