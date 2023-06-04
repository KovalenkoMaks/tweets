const perPage = 3;
export const pagination = (page, users, setVisibleUsers, filter, follow, setFilteredUsers) => {
    let data = [...users];
    switch (filter) {
        case 'follow':
            data = data.filter(user => !follow.includes(user.id));
            setFilteredUsers(data);
            break;
        case 'followings':
            data = data.filter(user => follow.includes(user.id));
            setFilteredUsers(data);
            break;

        default:
            break;
    }
    setVisibleUsers([...data.slice(0, perPage * page)]);
    setFilteredUsers(data);

}