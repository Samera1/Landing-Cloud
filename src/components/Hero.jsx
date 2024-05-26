import styles from "../style"
import { discount,robot } from "../assets"
import GetStarted from "./GetStarted"

const Hero = () => (
    <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
        <img src={discount} alt="discount" className="w-[32px] h-[32px]"/>
          <p className={`${styles.paragraph} ml-2`}>
            <span className="text-white">Descubre los</span> Beneficios del {""}
            <span className="text-white">Growth</span> 
          </p>
        </div>
        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[75px]">
          La Siguiente <br className="sm:block hidden"/>
          {"  "}
          <span className="text-gradient">Generacion</span> {" "}
          </h1>
        </div>
        <div className="flex flex-row justify-between items-center w-full"></div>
        <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100px] leading-[75px]">del Growth</h1>
        <p className={`${styles.paragraph} max-w-[600px] mt-5`}>Nuestro enfoque combina análisis avanzado y creatividad para diseñar campañas efectivas que maximizan el ROI. Transformamos datos en oportunidades de crecimiento sostenible y escalable..</p>
      </div>
      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
        <img src={robot} alt="billing" className="w-[100%] h-[100%] relative z-[5]"/>
        <div className="absolute  w-[40%] h-[35%] z-[0] top-0 pink__gradient"/>
        <div className="absolute  w-[80%] h-[80%] bottom-40 z-[1] top-0 white__gradient"/>
        <div className="absolute  w-[50%] h-[50%] right-20 bottom-20 z-[0] top-0 blue__gradient"/>
      </div>
    </section>
)


export default Hero
