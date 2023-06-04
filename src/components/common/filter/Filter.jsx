import { Select } from 'antd';

import './style.scss'

const Filter = ({ setFilter, setPage, setFilteredUsers }) => {

    const onChange = (value) => {
        setFilter(value);
        setPage(1);
        setFilteredUsers([]);
    };

    return (<Select
        className='filter'
        showSearch
        defaultValue={'show all'}
        placeholder="Filter"
        optionFilterProp="children"
        onChange={onChange}
        filterOption={(input, option) =>
            (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
        }
        options={[
            {
                value: 'show all',
                label: 'Show all',
            },
            {
                value: 'follow',
                label: 'Follow',
            },
            {
                value: 'followings',
                label: 'Followings',
            },
        ]}
    />)
}



export default Filter;