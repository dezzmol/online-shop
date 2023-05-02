import React, {FC} from 'react';

export class MyInput extends React.Component {
    private input = React.useRef<HTMLInputElement>(null);

    componentDidMount() {
        if (this.input.current) {
            this.input.current.focus();
        }
    }

    render() {
        return (
            <form>
                <input ref={this.input} type="text" />
            </form>
        );
    }
}