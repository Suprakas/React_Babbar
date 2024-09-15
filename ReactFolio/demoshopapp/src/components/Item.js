import './Item.css';

function Item(props){
    const Itemname = props.name;
    return(
    <div>
         <p className="nirma">{Itemname}</p>
         {props.children}
    </div>
    );
};

export default Item;