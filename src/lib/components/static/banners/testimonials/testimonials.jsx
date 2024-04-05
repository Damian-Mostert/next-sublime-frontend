'use client'

import { Slider, Title } from '@/utils/components'

import styles from './testimonial.module.scss'

import screens from '@/config/styles/screens.json'

export function Testimonials({ data }) {
    return (
        <div className={styles.background}>
            <div className={styles.text}>
                <Title
                    align="center"
                    pre="small title"
                    text="Read our"
                    extra="Testimonials"
                />
            </div>
            <div className="overflow-hidden">
                <Slider
                    config={{
                        infinite: true,
                        slidesToShow: 3,
                        adaptiveHeight: true,
                        responsive: [
                            {
                                breakpoint: Number(
                                    screens.page.replace(/px/g, ''),
                                ),
                                settings: {
                                    slidesToShow: 2,
                                },
                            },
                        ],
                    }}>
                    {data.map((item, key) => {
                        return (
                            <div className={styles.card_container} key={key}>
                                <div className={styles.card}>
                                    <h2>{item.title}</h2>
                                    <p>{item.text}</p>
                                </div>
                            </div>
                        )
                    })}
                </Slider>
            </div>
        </div>
    )
}
