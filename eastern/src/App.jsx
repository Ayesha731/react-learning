import About from "./Component/About";
import "./App.css"; // Import your CSS file
import "./index.css";
import { useState } from "react";
import Navbar from "./Component/Navbar";
import TextForm from "./Component/TextForm";
import { Box, ThemeProvider, createTheme } from "@mui/material";
import Alert from "./Component/Alert1";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import List from "./Component/ListComponent";
import Record from "./Component/Record";
import FetchApi from "./Component/FetchApi";
import MovieList from "./Component/MovieList";
import Error from "./Component/Error";
import Contact from "./Component/Contact";
import Insta from "./Component/Insta";
import UserDetail from "./Component/UserDetail";
import Hooks from "./Component/Hooks";
import { ToastContainer } from "react-toastify";
import Redux from "./Component/Redux";

function App() {
  let items = [
    "Browser Compatible and User-Friendly",
    "Discover the Power of Text Analysis",
    "Free to Use, No Strings Attached",
    "Your Text, Perfected",
    "Word and Character Count",
    "Sentence Structure Analysis",
    "Reading Level Assessment",
    "Keyword Frequency",
    "Grammar and Spelling Suggestions",
  ];
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  const [background, setBackground] = useState("light");
  const removeBodyClass = () => {
    document.body.classList.remove("success");
    document.body.classList.remove("primary");
    document.body.classList.remove("danger");
    document.body.classList.remove("warning");
  };
  const toggleMode = (cls) => {
    removeBodyClass();
    console.log(cls);
    document.body.classList.add("bg-" + cls);
    if (mode === "light") {
      setMode("dark");
      setBackground("dark");
      showAlert("Dark mode has been enabled", "success");
      document.title = "TextUtils-Dark mode";
      //it is consider bad using setInterval
      setInterval(() => {
        document.title = "R-Learning is an amzaing app!";
      }, 2000);
      setInterval(() => {
        document.title = "Install Now R-Learning";
      }, 1500);
    } else {
      setMode("light");
      document.body.style.backgroundColor = "light";
      setBackground("light");
      showAlert("Light mode has been enabled", "success");
      document.title = "TextUtils-Light mode";
    }
  };
  // const toggleModeYellow=()=>{
  //   if(mode==="light"){
  //     setMode('primary');
  //    setBackground('yellow')
  //    showAlert("Dark mode has been enabled", "success")
  //   }
  //   else{
  //     setMode('light');
  //     document.body.style.backgroundColor='light';
  //     setBackground('light')
  //     showAlert("Light mode has been enabled", "success")
  //   }

  // }
  // const toggleModeRed=()=>{
  //   if(mode==="light"){
  //     setMode('dark');
  //    setBackground('dark')
  //    showAlert("Dark mode has been enabled", "success")
  //   }
  //   else{
  //     setMode('light');
  //     document.body.style.backgroundColor='light';
  //     setBackground('light')
  //     showAlert("Light mode has been enabled", "success")
  //   }

  // }
  // const toggleModeBlue=()=>{
  //   if(mode==="light"){
  //     setMode('dark');
  //    setBackground('dark')
  //    showAlert("Dark mode has been enabled", "success")
  //   }
  //   else{
  //     setMode('light');
  //     document.body.style.backgroundColor='light';
  //     setBackground('light')
  //     showAlert("Light mode has been enabled", "success")
  //   }

  // }
  const theme = createTheme({
    palette: {
      mode: mode,
    },
  });

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  return (
    <>
      <ThemeProvider theme={theme}>
        <Box
          bgcolor={"background.default"}
          color={"text.primary"}
          minHeight="100vh"
        >
          <Router>
            <Navbar
              title="R-Learning"
              about="About"
              mode={mode}
              toggleMode={toggleMode}
            />
            <Alert alert={alert} />
            <ToastContainer />

            <Routes>
              <Route
                exact
                path="/"
                element={<TextForm showAlert={showAlert} />}
              />
              <Route
                exact
                path="/about"
                element={<About showAlert={showAlert} />}
              />

              <Route
                path="/list"
                element={
                  <List
                    data="Ayesha"
                    item={items}
                    title="TextLabs - Empowering Writers with Smart Text Analysis"
                  />
                }
              />
              <Route path="/movie" element={<MovieList />} />
              <Route path="/data" element={<Record />} />
              <Route path="/api" element={<FetchApi />} />
              <Route path="/api/:userId" element={<UserDetail />} />
              <Route path="/hooks" element={<Hooks />} />
              <Route path="/redux" element={<Redux />} />
              <Route path="/contact" element={<Contact />}>
                <Route index element={<Insta />} />
                <Route path="insta" element={<Insta />} />
              </Route>
              <Route path="*" element={<Error />} />
            </Routes>
          </Router>
        </Box>
      </ThemeProvider>
    </>
  );
}

export default App;
