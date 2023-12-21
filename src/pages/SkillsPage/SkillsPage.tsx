import React, { useEffect } from "react";
import {
  Container,
  CssBaseline,
  Paper,
  TableContainer,
  TableHead,
  TableCell,
  Table,
  TableBody,
  Typography,
} from "@material-ui/core";
import Meta from "../../components/Meta";
import Loader from "../../components/Loader";
import TableRow from "@mui/material/TableRow";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { useActions } from "../../hooks/useActions";
import useStyles from "./SkillsPage.style";

const DashboardPage: React.FunctionComponent = () => {
  const styles = useStyles();
  const { getSkills } = useActions();
  const { loading } = useTypedSelector((state) => state.authState);
  const { skills } = useTypedSelector((state) => state.skillState);

  useEffect(() => {
    getSkills();
    // eslint-disable-next-line
  }, []);

  return loading ? (
    <Loader />
  ) : (
    <Container component="main" maxWidth="lg" className={styles.root}>
      <Meta title="Project Dashboard" />
      <CssBaseline />
      <Typography variant="h3" gutterBottom component="div">
        Skills
      </Typography>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Skill</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {skills.map((skill, i) => (
              <TableRow
                key={i}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {skill.name}
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
