import React from 'react';

interface RepositoryItemProps {
    repository: {
        name: string;
        description: string;
        html_url: string;
        owner: {
            avatar_url: string;
        }
    }
}

export function RepositoryItem(props: RepositoryItemProps) {
    return (
        <li>
            <img src={props.repository.owner.avatar_url} alt={`Facebook - ${props.repository.name}`} />
            <span>
                <strong>{props.repository.name}</strong>
                <p>{props.repository.description}</p>
                <a href={props.repository.html_url} target="_blank">Acesso ao repositório</a>
            </span>
        </li>
    )
}