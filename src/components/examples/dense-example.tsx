import styles from './dense-example.module.css';
import GridItem from '../grid-item';

export default () => {
  return (
    <div className={styles.grid}>
      <GridItem id={1} className={styles._1}>
        <b className='text-cyan-500'>
          In smaller devices, I'll be the FIRST one!
        </b>
        <p>
          In larger devices, I will go <b>SECOND</b> having{' '}
          <code>grid-column-start: 2</code>, but if I don't have that style
          property, I would be stay in my original position.
        </p>
      </GridItem>
      <GridItem id={2}>
        <b className='text-teal-500'>In smaller devices, I'll go SECOND!</b>
        <p>
          In larger devices, I will go <b>FIRST</b> having{' '}
          <code>grid-auto-flow: dense</code>, but if I don't have <b>dense</b>,
          I would be pushed to <b>THIRD</b>.
        </p>
      </GridItem>
    </div>
  );
};
