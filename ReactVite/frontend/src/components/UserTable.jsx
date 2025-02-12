function UserTable({data})
{
    return (
        <table>
            <thead>
                <tr>
                <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Gender</th>
            <th></th>
            <th></th>
                </tr>
            </thead>
            <tbody>
                {data && data.map((user)=><tr key={user.userId}><td>{user.name}</td><td>{user.email}</td><td>{user.phone}</td><td>{user.gender}</td></tr>)}
            </tbody>
        </table>
    );
}

export default UserTable;