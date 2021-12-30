import { itemsData } from '../../data';
import Item from '../Item/Item';
import './ItemList.css';

const ItemList = () => {
  return (
    <div className='item-list'>
      {itemsData.map((item) => (
        <Item key={item.id} item={item} />
      ))}
    </div>
  );
};

export default ItemList;
