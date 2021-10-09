import React, { useEffect } from "react"
import { Grid } from "@material-ui/core";
import CustomList from "../../../Components/CustomList";
import { useDispatch, useSelector } from "react-redux";
import { getDatabases } from "../../../Redux/Reducers/Database/database.actions";

const DashboardScreen = () => {
  const { database, error, loading } = useSelector(store => store.database);
  const dispatch = useDispatch();

  useEffect(() => {
    debugger
    dispatch(getDatabases());
  }, [dispatch])

  if (loading) return <div>Loading.....</div>

  if (error) return <div>Failure</div>

  return (
    <Grid container>
      <Grid item xs>
        <CustomList data={database}/>
      </Grid>
      <Grid item xs={8}>

      </Grid>
    </Grid>
  )
}

export default DashboardScreen;