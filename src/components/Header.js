import { Header as Head, HeaderContent, Icon } from "semantic-ui-react";
export default function Header() {
    return(
       <div style={{padding:"10px"}} className="header">
        <Head  as="h1" icon textAlign="center" color="blue" >
         <Icon circular inverted color="blue" name="list alternate outline"  /> 
         <HeaderContent>Listado de tareas</HeaderContent>

        </Head> 
       </div>
    )
}