import React, { useEffect, useState } from 'react';
import Button from '../common/button/Button';
import Picture from '../../images/picture.png';
import Boy from '../../images/Boy.png';

import { ReactComponent as Logo } from '../../images/Logo.svg';
import { pagination } from '../../utils/pagination';

import './style.scss'
import Filter from 'components/common/filter/Filter';
import { formatNumber } from 'utils/formatNumbers';
import isFollowed from 'utils/isFollowed';

const Card = ({ users, follow, setFollow }) => {
    const [filter, setFilter] = useState('show all');
    const [filteredUsers, setFilteredUsers] = useState([]);
    const [visibleUsers, setVisibleUsers] = useState([]);
    const [page, setPage] = useState(1);

    useEffect(() => {
        pagination(page, users, setVisibleUsers, filter, follow, setFilteredUsers);
    }, [users, page, filter, follow]);


    const onBtnClick = (id) => {
        isFollowed(follow, setFollow, id)
    }
    const loadMore = async (e) => {
        await setPage(prev => prev + 1);
        if (filteredUsers.length <= (page + 1) * 3) {
            e.target.classList.add('isHidden');
        }
    }

    return (
        <div className='card--wrapper'>
            <Filter setFilter={setFilter} setPage={setPage} setFilteredUsers={setFilteredUsers} />
            <ul className='list'>
                {visibleUsers?.map(e => {
                    const checked = follow.includes(e.id)
                    const avatar = e.avatar.length > 0 ? e.avatar : Boy
                    return <li key={e.id}>
                        <div className="card">
                            <Logo className='card__logo' />
                            <img className='card__img card__img--messages' src={Picture} alt="message" />
                            <span className='card__center-line'></span>
                            <div className='card__img-wrapper'>
                                <img className='card__img card__img--avatar' src={avatar} alt="avatar" />
                            </div>
                            <p className="card__text">{e.tweets} Tweets</p>
                            <p className="card__text" >
                                <span>{checked ? formatNumber(e.followers, 1) : formatNumber(e.followers)}</span> Followers
                            </p>
                            <Button onClick={onBtnClick} id={e.id} checked={checked} />
                        </div>
                    </li>
                })}

            </ul>
            {filteredUsers.length > 3 ? <button className='btn' type='button' onClick={loadMore}>Load More</button> : null}
        </div>
    );
};
export default Card;
