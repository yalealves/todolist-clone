import { styled } from "styled-components";

export const MainContainer = styled.main`

    width: 100%;
    max-width: 850px;
    margin: 64px auto;
    user-select: none;

    @media screen and (max-width: 800px) {
        padding: 0 20px;
    }

`

export const HeaderTasks = styled.div`

    display: flex;
    justify-content: space-between;
`

export const Text = styled.span`

    font-size: ${props => props.size ? props.size : '12px'};
    color: ${props => props.color ? props.color : 'white'};
    font-weight: ${props => props.fontWeight ? props.fontWeight : 'normal'};
    text-decoration: ${props => props.textDecoration ? props.textDecoration : 'none'};

`

export const Pill = styled.div`

    border-radius: 999px;
    font-size: 12px;
    background-color: #333333;
    width: fit-content;
    padding: 2px 8px;
    font-weight: bold;
    color: white;
`
export const CreatedTasks = styled.div`

    display: flex;
    align-content: start;
    gap: 8px;

    .created-tasks-text{
        align-self: center;
    }
`

export const ConcludedTasks = styled.div`

    display: flex;
    align-content: start;
    gap: 8px;

    .concluded-tasks-text{
        align-self: center;
    }

`

export const TaskList = styled.div`

    margin-top: 24px;
    height: 100%;
    min-height: 250px;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 12px;
    

`

export const EmptyTasks = styled.div`


    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 16px;
    border-radius: 8px;
    border-top: 1px solid #333333;
    padding: 64px 24px;
    .empty-tasks-text{
        display: flex;
        flex-direction: column;
    }

`

export const TaskItem = styled.div`

    background-color: #333333;
    border-radius: 8px;
    padding: 16px;
    color: white;

    display: flex;
    justify-content: space-between;

    .dot-concluded, .dot-inconcluded{
        cursor: pointer;
    }
    .dot-inconcluded{
        border-radius: 50%;
        height: 17.5px;
        width: 17.5px;
        border: 1px solid #4EA8DE;
    }

    .dot-concluded{
        border-radius: 50%;
        height: 17.5px;
        width: 17.5px;
        border: 1px solid #5E60CE;
        background-color: #5E60CE;
        color: white;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .task-details{
        display: flex;
        gap: 12px;
    }

    .delete-icon{
        cursor: pointer;
    }

`