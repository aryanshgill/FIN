const Cards = (props) =>{
    const { src, title, alt} = props;
    return(
    <div className="w-[16rem] border border-white bg-green rounded-lg">
        <div className="flex h-[130px] bg-black rounded-t-lg justify-center p-6">
    <img className="w-[100px]" src={src} alt={alt}/>
    </div>
    <p className="font-semibold rounded-lg text-2xl p-8 text-center">{title}</p>
    </div>
    )
}
export default Cards 