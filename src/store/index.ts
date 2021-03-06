import * as authActionCreators from "./auth/action-creators";
import * as todoActionCreators from "./todo/action-creators";
import * as alertActionCreators from "./alert/action-creators";
import * as skillActionCreators from "./skill/action-creators";
import * as projectActionCreators from "./project/action-creators";
import * as projectSkillActionCreators from "./projectSkill/action-creators";

export * from "./store";
export * from "./reducers";

const combinedActionCreators = {
  ...authActionCreators,
  ...todoActionCreators,
  ...alertActionCreators,
  ...skillActionCreators,
  ...projectActionCreators,
  ...projectSkillActionCreators,
};

export default combinedActionCreators;
