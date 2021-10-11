import React, { useEffect, useState } from "react"
import { Grid, makeStyles } from "@material-ui/core";
import CustomList from "../../../Components/CustomList";
import DragAndDrop from "../../../Components/DragAndDrop";
import { useDispatch, useSelector } from "react-redux";
import { getDatabases } from "../../../Redux/Reducers/Database/database.actions";
import { getTables } from "../../../Redux/Reducers/Table/table.actions";
import styles from "../../../Assets/jss/dashboardStyle";

const useStyles = makeStyles(styles);

const DashboardScreen = () => {
  const { database, error, loading } = useSelector(store => store.database);
  const { table } = useSelector(store => store.table);

  const classes = useStyles();

  const [newTable, setNewTable] = useState();
  const dispatch = useDispatch();

  useEffect(() => {
    setNewTable({ Tables: JSON.parse(JSON.stringify(table)), Schema: [] })
  }, [table])

  useEffect(() => {
    dispatch(getDatabases());
  }, [dispatch])

  const handleClickDatabase = async (event) => {
    await dispatch(getTables({ database_id: event.id }))
  }

  if (loading) return <div>Loading.....</div>

  if (error) return <div>Failure</div>

  return (
    <Grid container className={classes.dashboardMainContainer}>
      <Grid item xs={2} className={classes.dashboardListContainer}>
        <CustomList data={database} handleClickDatabase={handleClickDatabase} />
      </Grid>
      <Grid item xs={10}>
        <Grid xs={6}>
          <DragAndDrop data={newTable} setData={setNewTable} />
        </Grid>
        <Grid xs={6}>
          <div></div>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default DashboardScreen;