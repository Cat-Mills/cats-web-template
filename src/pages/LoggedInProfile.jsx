import { useAuth0 } from "@auth0/auth0-react";
import React from "react";

const Profile = () => {
    const { user, isAuthenticated, isLoading } = useAuth0();

    const displayName = isAuthenticated ? (user.name.includes('@') ? user.nickname : user.name) : null

    if (isLoading) {
        return <div>Loading ...</div>;
    }
    
    return (
        isAuthenticated && (
            <div className="page">
                <img src={user.picture} alt={user.name} />
                <h2>{displayName}</h2>
                <p>{user.email}</p>
            </div>
        )
    );
};

export default Profile;