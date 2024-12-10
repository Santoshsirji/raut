const SlateTitle = ({text, subtitle, size}) => {
    return (
        <div className={`text-${size} font-semibold text-zinc-900 dark:text-white w-full flex flex-col`}>
            <h3 className={size ? " " : "lg:text-2xl text-lg md:text-xl"}>
            {text}
            </h3>
            <h2
            className="
            font-normal
            text-sm
            "
            >
                {subtitle}
            </h2>
        </div>
    )
};

export default SlateTitle;