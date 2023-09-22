import "./App.css";

// https://fluentsite.z22.web.core.windows.net/quick-start
import { Loader, Provider, teamsTheme } from "@fluentui/react-northstar";
import { Route, HashRouter as Router, Routes } from "react-router-dom";

import DialogPage from "./DialogPage";
import DialogResizePage from "./DialogResize";
import PagesTab from "./PagesTab";
import Privacy from "./Privacy";
import Tab from "./Tab";
import TabConfig from "./TabConfig";
import { TeamsFxContext } from "./Context";
import TermsOfUse from "./TermsOfUse";
import { useTeamsFx } from "@microsoft/teamsfx-react";

/**
 * The main app which handles the initialization and routing
 * of the app.
 */
const App = () => {
  const { loading, theme, themeString, teamsfx } = useTeamsFx();

  return (
    <TeamsFxContext.Provider value={{ theme, themeString, teamsfx }}>
      <Provider
        theme={theme || teamsTheme}
        styles={{ backgroundColor: "#eeeeee" }}
      >
        <Router>
          {loading ? (
            <Loader style={{ margin: 100 }} />
          ) : (
            <Routes>
              <Route path="/" Component={Tab} />
              <Route path="/privacy" Component={Privacy} />
              <Route path="/termsofuse" Component={TermsOfUse} />
              <Route path="/tab" Component={Tab} />
              <Route path="/config" Component={TabConfig} />
              <Route path="/dialog" Component={DialogPage} />
              <Route path="/dialogresize" Component={DialogResizePage} />
              <Route path="/pagesTab" Component={PagesTab} />
            </Routes>
          )}
        </Router>
      </Provider>
    </TeamsFxContext.Provider>
  );
};
export default App;