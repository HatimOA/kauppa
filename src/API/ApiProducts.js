import React from 'react';

class ApiProducts extends React.Component {

    /**
     * constructor
     *
     * @object  @props  parent props
     * @object  @state  component state
     */
    constructor(props) {

        super(props);

        this.state = {
            products: [],
            isLoadedProducts: false
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
                    products: json,
                    isLoadedProducts: true, 
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

        const { isLoadedProducts, products} = this.state;

        if (!isLoadedProducts)
            return <div>Loading...</div>;

        return (
            <div className="ApiProducts">
                <ul>
                    {products.map(product => (
                        <li key={product.id}>
                            Name: {product.name} | Category: {product.category}
                        </li>
                    ))}
                </ul>
            </div>
        );

    }

}

export default ApiProducts;