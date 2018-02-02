import React from 'react';

const ContestPreview = (contest) => (
    <div className="ContestPreview">
        <div className = "category-name">
            {contest.category}
        </div>
        <div className="content-name">
            {contest.contest}
        </div>
    </div>
);

export default ContestPreview;


