const isFollowed = (follow, setFollow, id) => {
    if (!follow.includes(id)) {
        const updatedFollow = [...follow, id];
        localStorage.setItem('follow', JSON.stringify(updatedFollow));
        setFollow(updatedFollow);
    } else {
        const updatedFollow = [...follow];
        const index = follow.indexOf(id);
        updatedFollow.splice(index, 1);
        localStorage.setItem('follow', JSON.stringify(updatedFollow));
        setFollow(updatedFollow);
    };
}
export default isFollowed;