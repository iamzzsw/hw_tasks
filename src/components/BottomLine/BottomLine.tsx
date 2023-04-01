import React from "react";
import styles from './BottomLine.module.css'
import likeIcon from './icons/like.svg'
import dislikeIcon from './icons/dislike.svg'
import saveIcon from './icons/save.svg'
import dotsIcon from './icons/dots.svg'

interface BottomLineProps {
    like?: number;
    disLike?: number;
}

const BottomLine: React.FC<BottomLineProps> = ({like, disLike}) => (
    <div>
        <div className={styles.container}>
            <div className={styles.leftSide}>
                <img className={styles.icon} src={likeIcon} alt="like" />
                <span className={styles.like}>{like}</span>
                <img className={styles.icon} src={dislikeIcon} alt='dislike' />
                <span className={styles.like}>{disLike}</span>
            </div>
            <div className={styles.rightSide}>
                <img className={styles.icon} src={saveIcon} alt='save' />
                <img className={styles.icon} src={dotsIcon} alt='dots' />
            </div>
        </div>
        <hr className={styles.line}/>
    </div>
)

export default BottomLine