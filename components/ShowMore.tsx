'use client';

import { ShowMoreProps } from '@/types';

import CustomButton from './CustomButton';

const ShowMore = ({ limit, setLimit, totalCount }: ShowMoreProps) => {
  const handleNavigation = () => {
    setLimit(prev => prev + 4); // Just add 4 each time
  };

  const isMaxReached = limit >= totalCount;

  return (
    <div className="w-full flex-center gap-5 mt-10">
      {!isMaxReached && (
        <CustomButton
          title="Show more"
          btnType="button"
          containerStyles="bg-primary-blue rounded-full text-white"
          handleClick={handleNavigation}
        />
      )}
    </div>
  );
};


export default ShowMore;