import React from 'react';

import '../styles/main.scss';
import { RepositoryList } from './RepositoryList';

export const Main: React.FC = () => {
    return (
        <main>
            <RepositoryList />
        </main>
    )
}