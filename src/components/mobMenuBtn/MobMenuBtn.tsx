import React from 'react';
import styles from './MobMenuBtn.module.scss';
import { MdMenu, MdOutlineClose } from 'react-icons/md';

interface IMobMenuBtn {
    isOpen: boolean;
    clickHandler: (...args: any[]) => void;
}

export const MobMenuBtn: React.FC<IMobMenuBtn> = ({ isOpen, clickHandler }: IMobMenuBtn) => {
    return (
        <button
            className={styles['burger-menu']}
            onClick={clickHandler}
        >
            {
                isOpen ?
                    <MdOutlineClose />
                    : <MdMenu />
            }
        </button>
    )
}