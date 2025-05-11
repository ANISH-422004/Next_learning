    import type React from "react";

    type Admin = {
        id: number;
        name: string;
        role: "admin";
        permissions: string[];
    }

    type Guest = {
        id: number;
        name: string;
        role: "guest";
        expiry: Date
    }


    type User = Admin | Guest

    type UserCardProps = {
        user: User;
    }
    
    // Type guard for Admin
    function isAdmin(user: User): user is Admin {
        return user.role === 'admin';
    }

    // Type guard for Guest
    function isGuest(user: User): user is Guest {
        return user.role === 'guest';
    }


    const UserCard: React.FC<UserCardProps> = ({ user }): React.ReactElement => {
        return (
            <div>
                {
                    isAdmin(user) &&
                    <div>
                        <h1 className="text-2xl font-bold">Admin</h1>
                        <p className="text-lg">ID: {user.id}</p>
                        <p className="text-lg">Name: {user.name}</p>
                        <p className="text-lg">Permissions: {user.permissions.join(", ")}</p>
                    </div>
                }

                {
                    isGuest(user) &&
                    <div>
                        <h1 className="text-2xl font-bold">Guest</h1>
                        <p className="text-lg">ID: {user.id}</p>
                        <p className="text-lg">Name: {user.name}</p>
                        <p className="text-lg">Expiry: {user.expiry.toString()}</p>
                    </div>


                }
            </div>
        )
    }


    export default UserCard;