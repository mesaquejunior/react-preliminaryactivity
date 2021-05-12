import React from 'react';

import '../styles/footer.scss';

interface FooterProps {
    text: string;
}

export const Footer: React.FC = (props) => {
    return (
        <footer>
            <p>Facebook Repositories</p>
        </footer>
    )
}