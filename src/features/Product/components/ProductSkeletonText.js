import Skeleton from '@mui/material/Skeleton';
import { Box } from '@mui/system';
import PropTypes from 'prop-types';
import React from 'react';
ProductSkeletonText.propTypes = {
    length: PropTypes.number,
};
ProductSkeletonText.defaultProps = {
    length: 6,
}
function ProductSkeletonText({length}) {
    return (
        <Box>
            {Array.from(new Array(length)).map((x,index) => (
                    <Box key={index} padding={2} >
                            <Skeleton variant="text" style={{minWidth: '260px'}} width="90%" animation="wave"/>
                    </Box>
                ))}
        </Box>
    );
}

export default ProductSkeletonText;