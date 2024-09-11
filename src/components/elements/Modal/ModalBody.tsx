/* eslint-disable @typescript-eslint/no-explicit-any */
import clsx from 'clsx';
import React, { useContext } from 'react';
import { ModalContext } from '.';

interface Props {
    children: React.ReactNode;
    className?: string;
}

const ModalBody: React.FC<Props> = ({ children, className }) => {
    const {
        isCentered,
    }: {
        isCentered: any;
    } = useContext(ModalContext);
    return (
        <div
            className={clsx('overflow-auto pb-6 pt-2 px-6', isCentered ? 'max-h-[calc(100vh_-_220px)] overflow-auto' : 'h-auto', className)}
            data-testid="g-ModalBody"
        >
            {children}
        </div>
    );
};

ModalBody.defaultProps = {
    className: '',
};

export default ModalBody;
