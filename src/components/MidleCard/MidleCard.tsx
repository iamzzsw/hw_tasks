import React from "react";
import styles from './MidleCard.module.css'
import BottomLine from "../BottomLine/BottomLine";

interface MidleCardProps {
    id: number;
    image?: string;
    text: string;
    date: string;
    lesson_num?: string;
    title: string;
    author: number;
}

const MidleCard: React.FC<MidleCardProps> = ({id, image, text, date, lesson_num, title, author}) => (
        <div className={styles.container}>
            <div className={styles.container_image}>
                <img src={image} alt={title} className={styles.image} />
            </div>
            <div className={styles.container_text}>
                <p className={styles.data}>{date}</p>
                <h2 className={styles.title}>{title}</h2>
            </div>
            <BottomLine like={20}/>
        </div>

)

export default MidleCard