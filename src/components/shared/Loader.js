import React from 'react';
import { css } from "@emotion/react";
import ScaleLoader from "react-spinners/ScaleLoader";
const override = css`
  display: block;
  margin: 0 auto;
  border: none;
`;

const Loader = () => {
    return (
        <div className='w-full h-full flex justify-center items-center'>
            <ScaleLoader color="#EEB644" loading={true} css={override} size={150} />
        </div>
    );
};

export default Loader;