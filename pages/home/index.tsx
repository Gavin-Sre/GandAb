import Image from 'next/image';
import styles from '../../styles/Home.module.css';
import Card from '../../components/Card';
import { Grid } from '@mui/material';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

const Home = () => {

	let whatILikeAboutYou = 'I love you because abcdefghsalksdidsiljsildfslijsdji';
	return ( 
		<div>
			<div className={styles.titleWrapper}>
				<Image className={styles.titleImage} alt='couple facing river' src={"/images/backfacing-head.JPG"} fill/>
				<div className={styles.titleText}>
					<p>To the love of my life:</p>
					<h1>Happy Anniversary💖💖</h1>
				</div>
			</div>
			<Grid className={styles.introWrapper} container spacing={{ xs: 2, md: 3 }} columns={16}>
				<Grid item xs={8}>
					<div className={`${styles.box1}`}>
						<Image className={styles.introImage} alt='couple sitting and smile' src={"/images/IMG_9668.JPG"} fill/>
					</div>
				</Grid>
				<Grid item xs={8}>
					<div className={`${styles.box2}` }>
						<h2 style={{margin:"0px", padding: "20px"}}>To Aumboon my love</h2>
						<p>Write about my love for AB.</p>
					</div>
				</Grid>
			</Grid>
			{/* What I like about you */}
			<div className={`${styles.questionAnswer}`}>
				<h1>What I like about you...</h1>
				{/* <p>{whatILikeAboutYou}</p> */}
				<Card 
					// title='What I like about you...' 
					content={whatILikeAboutYou}
				/>

			</div>
		</div>
	);
}

export default Home;