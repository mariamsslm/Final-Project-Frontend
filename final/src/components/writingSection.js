import style from '../components/writingSection.module.css'
import React , {useState}from 'react'
import SpeechBubble from '../components/writingsCard'
import image from '../assets/pip.avif'


const WrittingsSection =()=>{
   
        const [writtings, setWrittings] = useState([
          { id: 1, title: 'Life', content: 'You make your life like you want, you choiced', image: image, date: '' },
          { id: 2, title: 'Lif', content: 'You make your life like you want, you choiced', image: image, date: '' },
          { id: 3, title: 'Li', content: 'You make your life like you want, you choiced', image: image, date: '' },
          { id: 4, title: 'Lik', content: 'You make your life like you want, you choiced', image: image, date: '' },
          { id: 5, title: 'Lifwk', content: 'You make your life like you want, you choiced', image: image, date: '' },
          { id: 6, title: 'Lifdjwkq', content: 'You make your life like you want, you choiced', image: image, date: '' }
        ]);
      
        return (
          <section className={style.container}>
            <h2 className={style.title}>Writtings</h2>
            <article className={style.content}>
              {writtings.map((writ) => (
                <SpeechBubble
                  key={writ.id}
                  writ={writ}
                />
              ))}
            </article>
          </section>
        );
      }
      
export default WrittingsSection;