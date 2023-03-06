import React from 'react';
import styles from '../styles/Card.module.css';

interface Props {
	title?: string | null;
	content: string;
}
 
const Card: React.FC<Props> = ({ title, content }) => {
	return (  
		<div className={`${styles.cardWrapper}`}>
			{title ? <h1 className={`${styles.title}`}>{title}</h1> : null}
			<p className={`${styles.content}`}>{content}</p>
		</div>
	);
}
 
export default Card;