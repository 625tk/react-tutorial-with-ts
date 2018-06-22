import * as React from 'react';

interface ISquareProps{
    value: string | null;
    onClick: () => void;
}

export class Square extends React.Component<ISquareProps>{
    constructor(props: any){
        super(props);
    }

    public render(){
        return(
            <button className="square" onClick={ this.props.onClick }> 
                { this.props.value }
            </button>
        );
    }
}