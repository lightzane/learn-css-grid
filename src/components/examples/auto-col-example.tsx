import GridItem from '../grid-item';
import Paragraph from '../paragraph';
import styles from './auto-col-example.module.css';

const items = [1, 2, 3, 4, 5];

export default () => {
  return (
    <div className={styles.grid}>
      {items.map((i) => (
        <GridItem key={i} id={i} className={styles[`_${i}`]}>
          {i === 1 && (
            <>
              <p>
                <code>grid-auto-flow: column;</code>
                <br />
                <code>align-items: end;</code>
              </p>
              <Paragraph />
            </>
          )}

          {i === 3 && (
            <p>
              <code>align-self: center;</code>
            </p>
          )}

          {i === 4 && (
            <p>
              <code>align-self: self-start;</code>
            </p>
          )}
        </GridItem>
      ))}
    </div>
  );
};
