import React, { useEffect, useState } from 'react';
import { RepositoryItem } from './RepositoryItem';

interface Repository {
    name: string;
    description: string;
    html_url: string;
    owner: {
        avatar_url: string;
    }
}

export const RepositoryList: React.FC = () => {
    const [repositories, setRepositories] = useState<Repository[]>([]);

    useEffect(() => {
        fetch('https://api.github.com/orgs/facebook/repos')
        .then(response => response.json())
        .then(data => setRepositories(data))
    }, []);

    return (
        <ul>
            {repositories.map(repository => <RepositoryItem key={repository.name} repository={repository} />)}
        </ul>
    )
}