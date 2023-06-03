import { Select } from 'antd';

const Filter = ({ setFilter, setPage, setFilteredUsers }) => {

    const onChange = (value) => {
        setFilter(value)
        setPage(1)
        setFilteredUsers([])
    };

    return (<Select
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



export default Filter