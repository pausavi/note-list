import { Header, Icon, Grid, GridRow } from "semantic-ui-react";
import Task from "./Task";

export default function TaskContent(props) {
    const {tasks, deleteTask} = props

    if (tasks.length===0) {
        return null;
    }
    return (
    <Grid style={{padding:"10px"}} centered columns={2}  className="tasks-content">
        <Header as="h3" icon textAlign="center"  >
            <Icon name="edit"/>
             Administra tus tareas
        </Header>
        <GridRow>
            {tasks.map((task, index)=> (
                <Task task={task} key={index} deleteTask={deleteTask}/>
            ))}

        </GridRow>

    </Grid>
    )
}