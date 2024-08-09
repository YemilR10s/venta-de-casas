import "../styles/home.css"
import { motion } from "framer-motion"
import CountUp from "react-countup"

export const Home = () => {
  return (
    <>
    <main className="home-section">
        <div className="home-content">
            <motion.h1 
                whileInView={{opacity:[0,1], x:[-100,0]}}
                transition={{duration:2}}
                viewport={{once:true}}
                className="home-h1">
                    A home is build <br /> 
                    with love and dreams
            </motion.h1>

            <motion.p 
                whileInView={{opacity:[0,1], x:[-100,0]}}
                transition={{duration:2.5}}
                viewport={{once:true}}
                className="home-p">
                Take a deep dive and browse homes for sale, resident reviesw 
                <br /> and local insights to find what is raight for you
            </motion.p>

            <motion.button 
                whileInView={{opacity:[0,1], x:[-100,0]}}
                transition={{duration:3}}
                viewport={{once:true}}
                className="home-button">
                Our Projects
            </motion.button>
        <div className="ProfessionalOverview">
            <div className="previous">
                <p>Previous Projects</p>
                <span><CountUp start={0} end={150} duration={2}/>+</span>
            </div>
            <div className="years">
                <p>Years of experience</p>
                <span><CountUp start={0} end={25} duration={2}/>+</span>
            </div>
            <div className="ongoing">
                <p>Ongoing Projects</p>
                <span><CountUp start={0} end={220} duration={2}/>+</span>
            </div>
        </div>
        </div>
    </main>
    </>
  )
}
