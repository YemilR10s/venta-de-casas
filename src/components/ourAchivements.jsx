import "../styles/ourArchivenments.css"
import image from "/img-archivenments-section.jpg"
import {motion} from "framer-motion"
export const OurAchivements = () => {
  return (
    <>
        <section className='ourAchivements-secction'>
            <div className="ourArchivements-content">
                <article className="ourArchivements-left">
                    <img src={image} alt="" />
                </article>
                <article className="ourArchivements-right">
                    <motion.h1
                    whileInView={{opacity:[0,1], x: [100,0]}}
                    transition={{duration:[2]}}
                    viewport={{once:true}}
                    >Award winnign real estate company in dubai
                    </motion.h1>

                    <motion.p
                    whileInView={{opacity:[0,1], x: [100,0]}}
                    transition={{duration:[2.5]}}
                    viewport={{once:true}}
                    >Always striving for excellence, we take pride in our achievements. Our company stands out with a strong track record of success and recognition in the real estate industry. We continuously deliver outstanding results, ensuring the highest level of service and satisfaction for our clients.
                    </motion.p>

                    <motion.button
                    whileInView={{opacity:[0,1], x: [100,0]}}
                    transition={{duration:[3]}}
                    viewport={{once:true}}
                    >View More
                    </motion.button>
                </article>
            </div>
        </section>
    </>
  )
}
