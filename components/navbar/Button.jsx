"use client";
import React, { useMemo } from 'react';

const Button = ({
  label,
  onClick,
  disabled,
  outline,
  small,
  icon: Icon,
  className
}) => {
  const buttonClasses = useMemo(() => {
    return `
      ${className || ''}
      ${disabled ? 'cursor-not-allowed opacity-50' : ''}
      overflow-hidden
      relative
      disabled:opacity-10
      disabled-cursor-not-allowed
      rounded-lg
      hover:saturate-150
      transition-none
      text-black
      w-full
      px-1
      saturate-[1.25]
      ${outline ? 'bg-white border-black text-black' : 'bg-[#131313] text-white'}
      ${small ? 'py-1 text-sm border-[1px]' : 'py-3 text-md border-2'}
      peer
    `;
  }, [className, disabled, outline, small]);

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={buttonClasses}
    >
      {Icon && (
        <Icon
          size={24}
          className="absolute left-4 top-3 text-blue-800/100"
        />
      )}
      <span className={className ? 'text-black ' : 'text-black font-bold'}>
        {label}
      </span>
    </button>
  );
};

export default React.memo(Button);
