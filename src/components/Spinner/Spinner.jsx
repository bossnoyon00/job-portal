import React from 'react';

const Spinner = () => {
    return (
        <div>
            <div class="flex items-center justify-center">
                <div class="animate-spin radial-progress" style={{ backgroundColor: 'red' }}>LOADING</div>
            </div>
        </div >
    );
};

export default Spinner;