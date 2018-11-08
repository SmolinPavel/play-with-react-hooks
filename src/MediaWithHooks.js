import React, { useEffect, useState } from 'react';

import './App.css';

const useMedia = (query) => {
    const [matches, setMatches] = useState(window.matchMedia(query).matches); 

    useEffect(
        () => {
            const media = window.matchMedia(query);
            if (media.matches !== matches) {
                setMatches(media.matches);
            } 
            const listener = () => setMatches(media.matches);
            media.addListener(listener);
            return () => media.removeListener(listener);
        },
        [query]
    );

    return matches;
};

const App = () => {
    const small = useMedia("(max-width: 500px)");
    const large = useMedia("(min-width: 1000px)");

    return (
        <div className="Media">
            <h1>Media</h1>
            <p>
                Small? { small ? "Yep" : "Nope" }
            </p>
            <p>
                Large? { large ? "Yep" : "Nope" }
            </p>
        </div>
    );
};

export default App;