import GridItem from './grid-item';
import Paragraph from './paragraph';

export default () => {
  return (
    <div className='grid sm:grid-cols-4 gap-6'>
      {/* 1st */}
      <GridItem id={1} className='sm:col-span-2'>
        <Paragraph />
        <Paragraph />
      </GridItem>

      {/* 2nd */}
      <GridItem id={2}>
        <Paragraph />
      </GridItem>

      {/* 3rd */}
      <GridItem id={3}>
        <Paragraph />
      </GridItem>

      {/* 4th */}
      <GridItem id={4} className='sm:col-span-2'>
        <Paragraph />
        <Paragraph />
      </GridItem>

      {/* 5th */}
      <GridItem id={5} className='sm:col-start-4 sm:row-start-1 sm:row-span-2'>
        <Paragraph />
        <Paragraph />
        <Paragraph />
      </GridItem>
    </div>
  );
};
