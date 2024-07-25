import { Button, Checkbox, Grid, GridColumn, Header, Icon, Label, Segment } from "semantic-ui-react";

export default function Task(props) {
    const { task,deleteTask } = props;
    const {idTask, taskName, categoryTask} = task
   return (
    <Grid.Column  width={8} className="task.container">
        <Segment style={{margin:"10px"}} >
            {categoryTask && (
                <Label ribbon="right" color="teal">
                     {categoryTask}
                    <Checkbox/>
                </Label>
            )}
            <Header textAlign='center' as="h3" className="header-task">
                {taskName}
            </Header>
            <Grid textAlign='center'>
                <GridColumn>
                    <Button color="red" onClick={() =>deleteTask(idTask)}>
                        <Icon name="remove circle"/> Eliminar
                    </Button>
                </GridColumn>
            </Grid>
            
        </Segment>
        
    </Grid.Column>
   )
}