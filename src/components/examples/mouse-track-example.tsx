import GridItem from '../grid-item';
import styles from './mouse-track-example.module.css';

export default () => {
  return (
    <div className='flex items-center justify-center flex-col gap-y-5'>
      {/* Example 1 */}
      <div
        className={`${styles.grid} ${styles.green}`}
        style={{ background: 'rgba(255, 0, 0, .1)' }}>
        {/* Nine (9) mouse tracks */}
        <div className={styles.mousetrack}></div>
        <div className={styles.mousetrack}></div>
        <div className={styles.mousetrack}></div>
        <div className={styles.mousetrack}></div>
        <div className={styles.mousetrack}></div>
        <div className={styles.mousetrack}></div>
        <div className={styles.mousetrack}></div>
        <div className={styles.mousetrack}></div>
        <div className={styles.mousetrack}></div>

        {/* Main content */}
        <GridItem id={1} className={styles['item-fit']}>
          <p>
            <span className='bg-green-200'>WITH</span>
            <code>grid-column: 1 / -1</code> and <code>grid-row: 1 / -1</code>{' '}
            for this block element.
          </p>
          <span className='bg-yellow-200'>
            Check grid layout in your browser dev tools
          </span>
        </GridItem>
      </div>

      {/* Example 2 */}
      <div
        className={`${styles.grid} ${styles.red}`}
        style={{ background: 'rgba(255, 0, 0, .1)' }}>
        {/* Nine (9) mouse tracks */}
        <div className={styles.mousetrack}></div>
        <div className={styles.mousetrack}></div>
        <div className={styles.mousetrack}></div>
        <div className={styles.mousetrack}></div>
        <div className={styles.mousetrack}></div>
        <div className={styles.mousetrack}></div>
        <div className={styles.mousetrack}></div>
        <div className={styles.mousetrack}></div>
        <div className={styles.mousetrack}></div>

        {/* Main content */}
        <GridItem id={1} className={styles.item}>
          <p>
            <span className='bg-red-200'>without</span>
            <code>grid-column: 1 / -1</code> and <code>grid-row: 1 / -1</code>{' '}
            for this block element.
          </p>
          <span>Check grid layout in your browser dev tools</span>
        </GridItem>
      </div>
    </div>
  );
};
