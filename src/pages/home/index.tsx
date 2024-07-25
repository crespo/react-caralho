import { IAdmin } from "../../models/Admin"

let admin: IAdmin = {name: "Raul"};

function Presentation() {
    return (
        <h2>My name is {admin.name}!</h2>
    )
}

function UnknownUser() {
    return (
        <h2>{"How you doing, fellow user? =)"}</h2>
    )
}

export default function Home() {
    let content;
    let isRaul = admin.name === "Raul";

    if (isRaul) {
        content = <Presentation /> 
    } else {
        content = <UnknownUser />
    }
    return (
        <>
            <h1>Hello World!</h1>
            {content}
        </>
    )
}