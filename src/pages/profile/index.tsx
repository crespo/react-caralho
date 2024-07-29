import "./styles.css"

const user = {
    name: 'Raul Crespo',
    imageUrl: 'https://plus.unsplash.com/premium_photo-1664870883044-0d82e3d63d99?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    imageSize: 90,
};

export default function Profile() {
    return (
        <>
            <div className="card">
                <h1>{user.name}</h1>
                <img 
                    className="avatar"
                    src={user.imageUrl}
                    alt={'Profile picture by Unsplash'}
                    style={{
                        width: user.imageSize,
                        height: user.imageSize,
                        borderRadius: '50%'
                    }}
                />
            </div>
        </>
    );
}