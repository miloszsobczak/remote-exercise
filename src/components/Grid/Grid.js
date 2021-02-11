import styled from 'styled-components';


const numberize = numb => (isNumber => Math.max(Math.round((isNumber ? numb : Number(numb)) || 1), 1))(!Number.isNaN(numb))


export const Grid = styled.div`
    display: grid;
    grid-template: repeat(${props => numberize(props.rows)}, 1fr) / repeat(${props => numberize(props.columns)}, 1fr);
    justify-items: ${props => props.justify || 'stretch'};
`

export const Column = styled.div`
    display: flex;
    align-items: center;
    justify-content: ${props => props.justify || 'flex-start'};
    grid-column: ${props => numberize(props.column) || 1};
    grid-row: ${props => numberize(props.row) || 1};
`
