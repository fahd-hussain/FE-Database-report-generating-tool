import React, { useContext, useEffect, useState } from "react"
import { Grid, makeStyles } from "@material-ui/core";
import CustomList from "../../../Components/CustomList";
import DragAndDrop from "../../../Components/DragAndDrop";
import { useDispatch, useSelector } from "react-redux";
import { getDatabases } from "../../../Redux/Reducers/Database/database.actions";
import { getTables } from "../../../Redux/Reducers/Table/table.actions";
import styles from "../../../Assets/jss/dashboardStyle";
import { AuthContext } from "../../../Utils/authContext";
import { useHistory } from "react-router";
import { getRelations } from "../../../Redux/Reducers/Relation/relation.actions";

const useStyles = makeStyles(styles);

const DashboardScreen = () => {
  const auth = useContext(AuthContext);
  const history = useHistory();

  const { database, error, loading } = useSelector(store => store.database);
  const { table } = useSelector(store => store.table);
  const { relation } = useSelector(store => store.relation);

  const classes = useStyles();

  const [newTable, setNewTable] = useState();
  const [newRelation, setNewRelation] = useState();
  const dispatch = useDispatch();

  useEffect(() => {
    setNewTable({ Tables: JSON.parse(JSON.stringify(table)), Schema: [] })
  }, [table])

  useEffect(() => {
    setNewRelation({ Relations: JSON.parse(JSON.stringify(relation)), JOINS: [] })
  }, [relation])

  useEffect(() => {
    dispatch(getDatabases());
  }, [dispatch])

  const handleClickDatabase = async (event) => {
    await dispatch(getTables({ database_id: event.id }))
    await dispatch(getRelations({ database_id: event.id }))
  }

  if (loading) return <div>Loading.....</div>

  if (error) return <div>Failure</div>

  return (
    <Grid container className={classes.dashboardMainContainer}>
      <Grid item xs={2} className={classes.dashboardListContainer}>
        <CustomList data={database} handleClickDatabase={handleClickDatabase} handleLogout={() => { auth.logout(); history.push('/') }} />
      </Grid>
      <Grid container xs={10} direction="row">
        <Grid xs={6}>
          <DragAndDrop data={newTable} setData={setNewTable} />
        </Grid>
        <Grid xs={6}>
          <DragAndDrop data={newRelation} setData={setNewRelation} />
        </Grid>
      </Grid>
    </Grid>
  )
}

export default DashboardScreen;