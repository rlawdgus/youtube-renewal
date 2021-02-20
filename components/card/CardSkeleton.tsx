import React from "react";

import { Skeleton } from "@material-ui/lab";

const CardSkeleton: React.FC = () => {
    return (
        <>
            <Skeleton variant="rect" width="375px" height="208px" />
            <Skeleton variant="circle" width={36} height={36} />
            <Skeleton variant="rect" width="375px" height="64px" />
        </>
    );
};

export default CardSkeleton;
