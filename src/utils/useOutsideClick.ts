import React from 'react';

const useOutsideClick = (
  ref: React.RefObject<HTMLDivElement>,
  onClick:
    | React.MouseEventHandler<HTMLElement>
    | React.MouseEventHandler<SVGGElement>,
) => {
  React.useEffect(() => {
    const handleClickOutside = (e) => {
      if (!ref?.current) return;
      if (!ref.current.contains(e.target)) {
        onClick?.(e);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    // eslint-disable-next-line consistent-return
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref, onClick]);
};

export default useOutsideClick;
