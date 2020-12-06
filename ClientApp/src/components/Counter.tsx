import * as React from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router';
import { ApplicationState } from '../store';
import * as CounterStore from '../Interfaces/Counter';
import { incrementActionTest } from '../Actions/counter-action';

export interface CounterDispatchProps {
    incrementTest: () => void;
}

type CounterProps =
    CounterStore.CounterState &
    CounterDispatchProps &
    RouteComponentProps<{}>;

class Counter extends React.PureComponent<CounterProps> {
    public render() {
        console.log('entering render');
        console.log(this.props.count);
        return (
            <React.Fragment>
                <h1>Counter</h1>

                <p>This is a simple example of a React component.</p>

                <p aria-live="polite">Current count: <strong>{this.props.count}</strong></p>

                <button type="button"
                    className="btn btn-primary btn-lg"
                    onClick={() => { this.props.incrementTest(); }}>
                    Increment
                </button>
            </React.Fragment>
        );
    }
};

export const mapDispatchToProps = (dispatch: Function): CounterDispatchProps => {
    return {
        incrementTest: (): void => dispatch(incrementActionTest()),
    };
};

export default connect(
    (state: ApplicationState) => state.counter,
    mapDispatchToProps
)(Counter);
