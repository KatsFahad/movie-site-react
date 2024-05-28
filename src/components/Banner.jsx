import imgB from '/src/images/x-men.jpg'
const Banner = () => {
    return ( 
        <div className="mb-[2rem]">
            <p className="text-center text-white font-[Satisfy] text-4xl @412:text-[2.5rem] @834: mx-[1rem]">Movie nerds this is an awesome platform for sharing my top movies.</p>
            <img src={imgB} alt="banner image" className="w-[80%] mx-auto @412:h-[250px] @428: h-[350px] @834:h-[450px] @884: h-[500px]" />
        </div>
     );
}
 
export default Banner;