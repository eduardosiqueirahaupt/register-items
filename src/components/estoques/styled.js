import styled from 'styled-components'

export const Wrapper = styled.div`
    display: flex;
    width: 100%;
    place-content: center;
    table {
        border-collapse: collapse;
        width: 50%;
        align-self: center;
    }

    table, th, td {
        border: 1px solid;
        padding: 5px;
        text-align-last: center;
        height: 20px;
    }

    th, td {
        padding: 15px;
        text-align: left;
    }

    th, td {
        border-bottom: 1px solid #ddd;
    }

    tr:nth-child(even) {background-color: #f2f2f2;}

    th {
        background-color: #04AA6D;
        color: white;
        border: solid 1px #000;
    }

`