import React from 'react'
import { Link,useRouteMatch,useLocation } from 'react-router-dom'
import classes from "./Group.module.scss"

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

const Group = (props)=>{ 
    let query = useQuery();
    let match = useRouteMatch();
return (
    <div className={classes.Group}>
        <img src="/images/face_1.jpg" alt="Group"/>
        <Link to={`${match.url}/group?user=${query.get("user")}`}>Grupo 1</Link>
    </div>
) 
}

export default Group
