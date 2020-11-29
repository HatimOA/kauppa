import React from 'react';

/**
 * App
 *
 * Simple react js fetch example
 */
class ApiAvailability extends React.Component {

    /**
     * constructor
     *
     * @object  @props  parent props
     * @object  @state  component state
     */
    constructor(props) {

        super(props);

        this.state = {
            availabilities: [],
            isLoaded: false
        }

    }

    /**
     * componentDidMount
     *
     * Fetch json array of objects from given url and update state.
     */
    componentDidMount() {

        fetch('https://bad-api-assignment.reaktor.com/')
            .then(res => res.json())
            .then(json => {
                this.setState({
                    availabilities: json,
                    isLoaded: true, 
                })
            }).catch((err) => {
                console.log(err);
            });

    }

    /**
     * render
     *
     * Render UI
     */
    render() {

        const { isLoaded, availabilities } = this.state;

        if (!isLoaded)
            return <div>Loading...</div>;

        return (
            <div className="App">
                <ul>
                    {availabilities.map(availability => (
                        <li key={availability.id}>
                            Date: {availability.date} | Manufacturer: {availability.manufacturer}
                        </li>
                    ))}
                </ul>
            </div>
        );

    }

}

export default ApiAvailability;