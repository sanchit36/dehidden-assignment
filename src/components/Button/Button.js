import './Button.css';

const Button = (props) => {
  const { iconClass, icon, children, className, style, ...rest } = props;

  return (
    <button className={`btn ${className}`} style={style} {...rest}>
      {icon && (
        <span className={`btn-icon ${iconClass}`}>
          <img className='btn-icon-image' src={icon} alt='icon' />
        </span>
      )}{' '}
      {children}
    </button>
  );
};

export default Button;
