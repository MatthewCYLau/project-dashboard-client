import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Container,
  CssBaseline,
  Paper,
  TableContainer,
  TableHead,
  TableCell,
  Table,
  TableBody,
  Chip,
  Typography,
} from "@material-ui/core";
import TableRow from "@mui/material/TableRow";
import PieChart from "../../components/PieChart";
import CircularProgress from "@mui/material/CircularProgress";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { useActions } from "../../hooks/useActions";
import useStyles from "./DashboardPage.style";

const DashboardPage: React.FunctionComponent = () => {
  const styles = useStyles();
  const { getProjecs } = useActions();
  const { loading } = useTypedSelector((state) => state.authState);
  const { projects } = useTypedSelector((state) => state.projectState);

  useEffect(() => {
    getProjecs();
    // eslint-disable-next-line
  }, []);

  return loading ? (
    <CircularProgress className={styles.loader} />
  ) : (
    <Container component="main" maxWidth="lg" className={styles.root}>
      <CssBaseline />
      <Typography variant="h3" gutterBottom component="div">
        Dashboard
      </Typography>
      <Container>
        <PieChart />
      </Container>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Project</TableCell>
              <TableCell>Skills</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {projects.map((project, i) => (
              <TableRow
                key={i}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  <Link to={`/projects/${project._id}`} className={styles.link}>
                    {project.name}
                  </Link>
                </TableCell>
                <TableCell align="right">
                  {project.project_skills.map((projectSkill, i) => (
                    <Chip
                      key={i}
                      label={projectSkill.name}
                      className={styles.chip}
                    />
                  ))}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default DashboardPage;
