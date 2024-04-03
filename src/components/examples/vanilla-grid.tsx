import GridItem from '../grid-item';
import styles from '../grid.module.css';
import Paragraph from '../paragraph';

export default () => {
  return (
    <div className={styles.grid}>
      {/* 1st */}
      <GridItem id={1} className={styles['grid-item']}>
        <Paragraph />
        <Paragraph />
      </GridItem>

      {/* 2nd */}
      <GridItem id={2} className={styles['grid-item']}>
        <Paragraph />
      </GridItem>

      {/* 3rd */}
      <GridItem id={3} className={styles['grid-item']}>
        <Paragraph />
      </GridItem>

      {/* 4th */}
      <GridItem id={4} className={styles['grid-item']}>
        <Paragraph />
        <Paragraph />
      </GridItem>

      {/* 5th */}
      <GridItem id={5} className={styles['grid-item']}>
        <Paragraph />
        <Paragraph />
        <Paragraph />
      </GridItem>
    </div>
  );
};
