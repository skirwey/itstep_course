import { useState } from 'react';

function Button({startCount,btnClass, step}) {
    const [count, setCount] = useState(startCount);

    function handleClick() {
        setCount(count + step);
    }

    return (
      <button className={btnClass} onClick={handleClick}>Кнопка нажата {count} раз </button>
    );
}

export default Button;