import './Item.css';

const Item = ({ item }) => {
  return (
    <div className='item-container'>
      <div className='underlay'></div>
      <div className='item-container__image-container'>
        <div className='underlay-img'></div>
        <img className='item-container__image' src={item.image} alt='item' />
      </div>

      <div className='item-container__info'>
        <h2 className='item-container__info--heading'>{item.heading}</h2>
        <h4 className='item-container__info--subheading'>{item.subheading}</h4>
      </div>
    </div>
  );
};

export default Item;
