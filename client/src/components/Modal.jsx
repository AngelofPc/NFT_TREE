import * as React from 'react';
import { VscChevronDown } from 'react-icons/vsc';
import ModalButton from './ModalButton';
import metamax from '../assets/metamask.png';
import trustwallet from '../assets/Trustwallet.png';

export default function PositionedMenu() {
    return (
        <section>
            <button
                type="button"
                id="dropdownButton"
                data-dropdown-toggle="dropdown"
                className="z-20 bg-gradient-to-r from-bgradl to-bgradr  text-white rounded-lg font-Taviraj font-bold px-5 py-1"
            >
                Connect Wallet
                <VscChevronDown size="2em" style={{ display: 'inline' }} />
            </button>
            {/* <button
                id="dropdownButton"
                data-dropdown-toggle="dropdown"
                className="text-white z-20 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                type="button"
            >
                Dropdown button
                <svg
                    className="ml-2 w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                    />
                </svg>
            </button> */}

            <div
                id="dropdown"
                className="hidden bg-opacity-50  -mt-3 z-10 w-52 text-base list-none  rounded divide-y divide-white-100 shadow dark:bg-gray-700"
            >
                <ul
                    className="py-1 modal-css rounded-b-xl"
                    aria-labelledby="dropdownButton"
                >
                    <li className="mx-5 py-2">
                        <ModalButton
                            name="MetaMask"
                            icon={metamax}
                            color="#8B5F5F"
                        />
                    </li>
                    <li className="mx-5 py-2">
                        <ModalButton
                            name="Trust Wallet"
                            icon={trustwallet}
                            color="#3375BB"
                        />
                    </li>
                    <li className="mx-5 py-2">
                        <ModalButton name="coinbase" color="#0081C9" />
                    </li>
                </ul>
            </div>
        </section>
    );
}
