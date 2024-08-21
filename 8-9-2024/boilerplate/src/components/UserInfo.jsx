import { useContext } from 'react';
import UserContext from '../contexts/UserContexts';

function UserInfo() {
    const { user, login, logout } = useContext(UserContext);

    return (
        <div style={{ marginTop: '20px', textAlign: 'center' }}>
            {user ? (
                <div>
                    <h2>Welcome, {user.name}</h2>
                    <button onClick={logout}>Logout</button>
                </div>
            ) : (
                <div>
                    <h2>Please log in</h2>
                    <button onClick={() => login({ name: 'John Doe' })}>Login</button>
                </div>
            )}
        </div>
    );
}

export default UserInfo;
