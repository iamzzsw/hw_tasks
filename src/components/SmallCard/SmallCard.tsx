import React from "react";
import styles from './SmallCard.module.css'
import BottomLine from "../BottomLine/BottomLine";

interface SmallCardProps {
    id: number;
    image?: string;
    text: string;
    date: string;
    lesson_num?: string;
    title: string;
    author: number;
}

const SmallCard: React.FC<SmallCardProps> = ({id, image, text, date, lesson_num, title, author}) => (
    <div className={styles.wrapper}>
        <div className={styles.container}>
            <div className={styles.container_text}>
                <p className={styles.data}>{date}</p>
                <h2 className={styles.title}>{title}</h2>
            </div>
            <div className={styles.container_image}>
                <img src={image} alt={title} className={styles.image} />
            </div>
        </div>
        <BottomLine like={20}/>
    </div>

)

export default SmallCard