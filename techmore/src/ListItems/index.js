import "./index.css";

const ListItems = (props) => {
    const { item } = props;
    const { title, imgUrl, link } = item;
    return (
        <li className="listItem">
            <a href={link} target="_blank" rel="noopener noreferrer" className="listItemLink">
                <img className="listItemImg" src={imgUrl} alt={title} />
                <h1 className="listItemName">{title}</h1>
            </a>
        </li>
    );
}

export default ListItems;
