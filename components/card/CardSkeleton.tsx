import React from "react";

import { Skeleton } from "@material-ui/lab";

const CardSkeleton: React.FC = () => {
    return (
        <>
            <Skeleton variant="rect" width="100%" height="56%" />
            <Skeleton variant="circle" width={36} height={36} />
            <Skeleton variant="rect" width="100%" height="26.667%" />
        </>
    );
};

export default CardSkeleton;
