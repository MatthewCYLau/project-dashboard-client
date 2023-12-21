import React, { useEffect, useState } from "react";
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
import { API_BASE_URL } from "../../constants";
import api from "../../utils/api";
import Meta from "../../components/Meta";
import Loader from "../../components/Loader";
import TableRow from "@mui/material/TableRow";
import PieChart from "../../components/PieChart";
import Count from "../../components/Count";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { useActions } from "../../hooks/useActions";
import useStyles from "./DashboardPage.style";

interface ProjectSkillsCount {
  _id: string;
  count: number;
}

const DashboardPage: React.FunctionComponent = () => {
  const styles = useStyles();
  const { getProjecs, getSkills } = useActions();
  const [projectSkillsCount, setProjectSkillsCount] = useState<
    ProjectSkillsCount[]
  >([]);
  const { loading } = useTypedSelector((state) => state.authState);
  const { projects } = useTypedSelector((state) => state.projectState);
  const { skills } = useTypedSelector((state) => state.skillState);

  const getProjectSkillsCount = async () => {
    const { data } = await api.get<ProjectSkillsCount[]>(
      `${API_BASE_URL}/api/project-skills-count`
    );
    setProjectSkillsCount(data);
  };

  useEffect(() => {
    getProjecs();
    getProjectSkillsCount();
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
        Dashboard
      </Typography>
      <Container className={styles.chartsContainer}>
        <PieChart
          label="Skills Usages"
          data={projectSkillsCount}
          width={240}
          height={240}
          innerRadius={60}
          outerRadius={120}
        />
        <Count title="Skills Count" count={skills.length} />
      </Container>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Project</TableCell>
              <TableCell>Sector</TableCell>
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
                <TableCell component="th" scope="row">
                  {project.sector}
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
