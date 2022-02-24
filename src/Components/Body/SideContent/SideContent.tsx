import React from 'react'
import JunkeywardsAndRecords from './JunkeywardsAndRecords/JunkeywardsAndRecords';
import WithdrawHistory from './WidthdrawHistory/WithdrawHistory';
import Ad from './Ad/Ad';
import JunkeywardsSlumber from './junkeywardSlumber/JunkeywardsSlumber';

const SideContent = () => {
  return (
    <>
        <WithdrawHistory/>
        <JunkeywardsSlumber></JunkeywardsSlumber>
        <JunkeywardsAndRecords/>
        <Ad/>
    </>
  )
}

export default SideContent