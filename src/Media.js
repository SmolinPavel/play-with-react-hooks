import React, { PureComponent} from 'react';

import './App.css';

class Media extends PureComponent {
    state = {
        matches: window.matchMedia(this.props.query).matches
    };

    componentDidMount() {
        this.setup();
    }

    setup = () => {
        const media = window.matchMedia(this.props.query);
        if (media.matches !== this.state.matches) {
            this.setState({ matches: media.matches });
        } 
        const listener = () => this.setState({ matches: media.matches });
        media.addListener(listener);
        this.removeListener = () => media.removeListener(listener);
    }

    // Actually this one (cDU) can be commented out since we're not changing our props as they're hardcoded
    // I think guys from React team were just trying to impress everyone by the huge code compression by adding hooks
    // But Pavel Smolin is smart enough to notice that :)
    componentDidUpdate(prevProps) {
        if (prevProps.query !== this.props.query) {
            this.removeListener();
            this.setState({
            matches: window.matchMedia(this.props.query)
                .matches
            });
            this.setup();
        }
    }

    componentWillUnmount() {
        this.removeListener();
    }

    render() {
        return this.props.children(this.state.matches);
    }
}

const App = () => (
    <Media query="(max-width: 400px)">
        {
            small => (
                <Media query="(min-width: 800px)">
                    {
                        large => (
                            <div className="Media">
                                <h1>Media</h1>
                                <p>
                                    Small? { small ? "Yep" : "Nope" }
                                </p>
                                <p>
                                    Large? { large ? "Yep" : "Nope" }
                                </p>
                            </div>
                        )
                    }
                </Media>
            )
        }
    </Media>
);

export default App;