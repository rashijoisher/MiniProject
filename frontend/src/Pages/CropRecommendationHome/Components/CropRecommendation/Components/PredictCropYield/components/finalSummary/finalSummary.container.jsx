//built in modules
import React from "react";

//component files
import FinalSummaryView from "./finalSummary.view";

const FinalSummary = ({
  approach,
  chosenstate,
  locationval,
  crop,
  npkValues,
  areaval,
  seasonval,
  cropyield,
  handlePageChange,
  handleProgressChange,
}) => {
  return (
    <>
      <FinalSummaryView
        approach={approach}
        chosenstate={chosenstate}
        locationval={locationval}
        crop={crop}
        npkValues={npkValues}
        areaval={areaval}
        seasonval={seasonval}
        cropyield={cropyield}
        handlePageChange={handlePageChange}
        handleProgressChange={handleProgressChange}
      />
    </>
  );
};

export default FinalSummary; 