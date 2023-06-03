import './style.scss'

const Button = ({ onClick, id, checked }) => {

    return (
        <button className={checked ? 'checked btn' : 'btn'} type="button" onClick={() => { onClick(id) }} >
            {checked ? 'Following' : 'Follow'}
        </button >
    );
};
export default Button;
