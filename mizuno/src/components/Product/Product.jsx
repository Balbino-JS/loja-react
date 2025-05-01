import Tennisimage from "../../assets/tennisJS.png";
import{motion} from "framer-motion";
import "./Product.css"
import { FaPlay } from "react-icons/fa";

const slideUp = (delay) => ({
    hidden: {
        opacity: 0,
        y:100,
    },
    show: {
        opacity:1,
        y:0,
        transition: {
            duration:0.8,
            delay: delay
        }
    }
})

const Product = () => {
    return (
        <section className="product-session">
            <div className="product-container">
                <div className="brand-info">
                    <div className="brand-text">
                        <motion.h1 variants={slideUp(0.3)} initial="hidden" animate="show" className="product-title">
                        Chuck Pro Mid
                        </motion.h1>

                        <motion.p variants={slideUp(0.5)} initial="hidden" animate="show">
                            <h2>Improved Project</h2><br />
                            <p>
                            Redesigned for running. This JS Chunk Balbino-JS shoe features all the essential elements of the original 2025 model with high-performance technologies</p><br />
                            <a href="*/mais-informacoes" className="more-info">More information</a>
                        </motion.p>

                        <motion.div variants={slideUp(0.7)} initial="hidden" animate="show" className="size-selection">
                            <p className="title-size">Select your size (N)</p>
                            <div className="size-options">
                                <p className="size-box">sm</p>
                                <p className="size-box">md</p>
                                <p className="size-box">lg</p>
                                <p className="size-box">xl</p>
                                <p className="size-box">8</p>
                                <p className="size-box">9</p>
                                <p className="size-box">10</p>
                                <p className="size-box">11</p>
                                <p className="size-box">12</p>
                                <p className="size-box">13</p>
                                <p className="size-box">14</p>
                                <p className="size-box">15</p>
                            </div>
                        </motion.div>
                    </div>
                </div>
                <div className="container-image-section">
                    <motion.img 
                    initial={{opacity:0, x: 100, rotate:20}} 
                    whileInView={{opacity: 1, x: 0, rotate: 0}} 
                    transition={{duration: 0.6, delay: 0.4}} 
                    src={Tennisimage} 
                    alt="Imagen de um tenis JS" 
                    className="content-image" />

                    <motion.div 
                    initial={{opacity:0, scale:0}} 
                    whileInView={{opacity:1, scale:1}} 
                    transition={{duration:0.5, 
                    delay: 0.8}} 
                    className="play-button-container">
                        <a href="/" target="blank" className="content-play">
                            <button className="play-button">
                                <FaPlay />
                                
                            </button>
                            <p>Play Video</p>
                        </a>
                    </motion.div>
                    
                </div>
            </div>
        </section>
    )
}

export default Product;