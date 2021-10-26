import React, { useState } from "react";

const Position = ({ jobTitle, stardDate, endDate, companyName, children }) => {
    return (
        <div className="description">
            <h4 className="job-title">{jobTitle}</h4>
            <div className="company-intro">
                <span>{companyName}</span> |  <span>{stardDate} - {endDate || 'present'}</span>
            </div>
            <div className="description_inner">
                <div className="">
                    <p>
                        {children}
                    </p>
                </div>
                {/* END LEFT */}
            </div>
            {/* END DESCRIPTION INNER */}
        </div>
    );
};

export default Position;
