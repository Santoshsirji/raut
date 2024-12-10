const Slate = ({children})=> {
    return (
        <div
        className="
        min-w-full
        h-max
        py-5
        md:py-10
        px-1
        sm:px-5
        md:px-10
        lg:px-14
        border
        dark:bg-[#212121]
        bg-white
        dark:text-white
        rounded-3xl
        shadow-lg
        text-sm
        lg:text-lg
        "
        >
            {children}
        </div>
    )
};

export default Slate;