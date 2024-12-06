import myimg1 from './assets/NEha 123.webp'
const Hero = () => {
    return(
        <>
           <h1>from public folder</h1>
            <img src="about.png" alt="" height="200px"/>


            <h1> from src folder</h1>
            <img src={myimg1} alt="" height="200px"/>
    
        </>
    )
}
export default Hero