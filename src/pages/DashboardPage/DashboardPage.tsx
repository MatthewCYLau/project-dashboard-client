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
import CircularProgress from "@mui/material/CircularProgress";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { useActions } from "../../hooks/useActions";
import useStyles from "./DashboardPage.style";

const DashboardPage: React.FunctionComponent = () => {
  const styles = useStyles();
  const { loadUser, getProjecs } = useActions();
  const { loading, user } = useTypedSelector((state) => state.authState);
  const { projects } = useTypedSelector((state) => state.projectState);

  useEffect(() => {
    getProjecs();
    loadUser();
    // eslint-disable-next-line
  }, []);

  return loading ? (
    <CircularProgress className={styles.loader} />
  ) : (
    <Container component="main" maxWidth="lg">
      <CssBaseline />
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
                  <Link
                    to={`/projects/${project._id}`}
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    {project.name}
                  </Link>
                </TableCell>
                <TableCell align="right">
                  {project.project_skills.map((projectSkill, i) => (
                    <Chip key={i} label={projectSkill.name} />
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
