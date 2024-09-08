const CategoryCards = (props) => {
    const { item } = props;
    return (
        <div className="flex flex-col items-center justify-center p-4 rounded-xl">
            <img
                src={item?.imgSrc}
                alt='logo'
                className='w-60 h-60 object-cover bg-black rounded-full'
            />
            <p className="mt-2 text-center font-normal text-lg">{item.name}</p>
        </div>
    )
}
export default CategoryCards;   