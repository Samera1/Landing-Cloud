import {apple, bill , google} from '../assets';
import styles, {layout} from '../style'

const Billing = () => {
  return (
    <section id='product' className={layout.sectionReverse}>
      <div className={layout.sectionImgReverse}>
        <img src={bill} alt='billing' className="w-[100%] h-[100%] relative z-[5]"/>
        <div className='absolute  z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient'/>
        <div className='absolute  z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient'/>
      </div>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>Encuentra mejores <br className='sm:block hidden'/> clientes.</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Comprendemos profundamente cada etapa del ciclo de vida del cliente y nos especializamos en aumentar su valor a lo largo del tiempo. Desde la adquisición y la conversión hasta la retención y la lealtad, utilizamos datos y métricas clave para optimizar cada interacción con el cliente.
        </p>
      </div>
    </section>
  )
}

export default Billing
