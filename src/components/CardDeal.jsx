import {card} from '../assets'
import styles, {layout} from '../style'
import Button from './Button'

const CardDeal = () => (
    <section className={layout.section}>
      <div> className={layout.sectionInfo}
       <h2 className={styles.heading2}>
       Controla todas tus  <br className='sm:block hidden'/> metricas.
       </h2>
       <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
       Te llevamos al siguiente nivel controlando todas las métricas e insights clave. Transformamos datos en estrategias de marketing efectivas que maximizan tu crecimiento.
       </p>
       <Button styles="mt-10"/>
      </div>
      <div className={layout.sectionImg}>
        <img src={card} alt='card' className='w-[100%] h-[100%]'/>

      </div>
    </section>
 )


export default CardDeal
