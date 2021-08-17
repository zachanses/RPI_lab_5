import React from 'react';
import SourceButton from './SourceButton';

export default class SourcesBar extends React.Component {
    render() {
        return (
            <div id="sources" className="app__main-sources">
                <div class="drop">
                    <p>News Source</p>
                        <div class="dropdown_block">
                            <ul>
                                {this.props.sources.map((source) => {
                                    return (
                                        <li>
                                            <SourceButton id={source.id} key={source.id} clickHandler={this.props.clickHandler}>
                                                {source.name}
                                            </SourceButton>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                </div>
            </div>

        );
    }
}