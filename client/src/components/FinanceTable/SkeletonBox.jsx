import React from "react";
import ContentLoader from "react-content-loader";

export const SkeletonBox = () => {
    return (
        <ContentLoader
            speed={2}
            width={88}
            height={30}
            viewBox="0 0 150 57"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"
        >
            <rect x="-1" y="6" rx="0" ry="0" width="88" height="35" />
        </ContentLoader>
    )
}