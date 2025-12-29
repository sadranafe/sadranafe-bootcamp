'use client';

import { CubeIcon } from "@phosphor-icons/react";

const EmptyState = () => {
    return (
        <div className = 'my-5 flex flex-col justify-center items-center'>
            <CubeIcon size = {48} weight = "thin"/>
            <p>هیج داده ای برای نمایش وجود ندارد</p>
        </div>
    );
};

export default EmptyState;