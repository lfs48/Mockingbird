import React, { useEffect, useState } from 'react';

export default function Splash() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    return (
        <>
            <h1>Mockingbird</h1>
            <form>
                <input 
                    type="text"
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                    placeholder="username"
                />
                <input 
                    type="password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    placeholder="password"
                />
                <button type="submit">Log In</button>
            </form>
        </>
    );
}

