import { useState, useEffect } from "react"; // useEffect will shoot a function when something i.e. a variabel changed happens in our application
import { RepositoryItem } from "./RepositoryItem";

import '../styles/repositories.scss';

interface Repository {
    name: string;
    description: string;
    html_url: string;
}
export function RepositoryList () {
    const [repositories, setRepositories] = useState<Repository[]>([]);

    useEffect(() => {
        fetch('https://api.github.com/orgs/rocketseat/repos')
        .then(response => response.json()
        .then(data => setRepositories(data)))
    }, []); // first parameter: function we want to execute; second parameter: when we want to execute it, if the second parameter is empty, the funtion will execute only once bc there isnt anything to change all the time ??? also never leave only the first parameter otherwise it will loop forever;;; empty array != from no array at all
    return(
        <section className="repository-list">
            <h1> Repository List</h1>
        
            <ul>
                {repositories.map(repository => {
                    return <RepositoryItem key={repository.name} repository={repository}/>
                })}
            </ul>
        </section>
    )
}