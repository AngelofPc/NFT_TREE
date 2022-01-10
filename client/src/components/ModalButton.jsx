import React from 'react';
import PropTypes from 'prop-types';

function MetaMask({ name, icon, color }) {
    return (
        <button
            type="button"
            className="bg-white  opacity-90 hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:ring-gray-100  rounded-md text-xs inline-flex items-center"
        >
            {icon ? (
                <>
                    <img className="ml-7" src={icon} alt="metamask" />
                    <span
                        style={{ color }}
                        className=" font-bold font-Taviraj -ml-5  py-2.5 w-[133px]"
                    >
                        {name}
                    </span>
                </>
            ) : (
                <span
                    style={{ color }}
                    className="font-medium py-1  text-2xl mx-[32px]"
                >
                    {name}
                </span>
            )}
        </button>
    );
}
MetaMask.defaultProps = {
    icon: '',
};

MetaMask.propTypes = {
    name: PropTypes.string.isRequired,
    icon: PropTypes.string,
    color: PropTypes.string.isRequired,
};
export default MetaMask;
