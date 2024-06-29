'use client'
import React from 'react';
import styles from './Testimonials.module.css';

interface Testimonial {
  name: string;
  role: string;
  text: string;
  date: string;
}

const testimonials: Testimonial[] = [
  {
    name: 'Swapnendu Banerjee',
    role: 'Front End Developer',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    date: '2021.03.02'
  },
  {
    name: 'Kfkgjdi Hdtmfnkfg',
    role: 'Student',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    date: '2021.03.02'
  },
  {
    name: 'Wdjgjlf Affjhgk',
    role: 'Student',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    date: '2021.03.02'
  },
  {
    name: 'Kkhvjh Ynvjhb',
    role: 'Student',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    date: '2021.03.02'
  },
  {
    name: 'Sfhfhk Kbgjhgjf',
    role: 'Student',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    date: '2021.03.02'
  },
];

const Testimonials: React.FC = () => {
  return (
    <div className={styles.testimonials}>
        <img src="https://i.postimg.cc/W1xxW0Cv/Image-1.png" alt="" className='bgimg2' />
        <img src="https://i.postimg.cc/L8Jr3xyD/Image-3.png" alt="" className="bgimg4" />
        <img src="https://i.postimg.cc/TY7zbzch/Image-4.png" alt="" className="bgimg5" />
      <h2 className={styles.header}>Our Testimonials</h2>
      <img src="https://i.postimg.cc/nrFtzsWs/1.png" alt="" className=" m-auto" style={{marginTop:"-3rem"}}/>
      <div className={styles.testimonialList}>
        {testimonials.map((testimonial, index) => (
          <div key={index} className={styles.card} style={{ zIndex: testimonials.length - index }}>
            <div className={styles.cardHeader}>
              <div className={styles.avatar}></div>
              <div>
                <h3 className={styles.name}>{testimonial.name}</h3>
                <p className={styles.role}>{testimonial.role}</p>
              </div>
            </div>
            <p className={styles.text}>{testimonial.text}</p>
            <p className={styles.date}>Preplify user, {testimonial.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
