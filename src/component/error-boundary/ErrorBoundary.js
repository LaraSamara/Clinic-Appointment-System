import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Component } from "react";
import ErrorComponent from "../error-component";
import classes from "./style.module.css";
class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.handleRetry = () => {
            this.setState({
                hasError: false,
                errorMessage: "",
            });
        };
        this.state = {
            hasError: false,
            errorMessage: "",
        };
    }
    static getDerivedStateFromError(error) {
        return {
            hasError: true,
            errorMessage: error.message,
        };
    }
    componentDidCatch(error, errorInfo) {
        console.error(`Error caught from Error Boundary:  ${error}, ${errorInfo}`);
    }
    render() {
        if (this.state.hasError) {
            return (_jsxs(Box, { sx: {
                    display: "flex",
                    flexDirection: { xs: "column", sm: "column", md: "row" },
                    alignItems: "center",
                    justifyContent: "center"
                }, children: [_jsx(ErrorComponent, { imgPath: "/public/errorBoundary.gif", altText: "Error Boundary" }), _jsxs(Box, { className: `${classes.content} flexCenter`, children: [_jsx(Typography, { children: " Oops! Something went wrong \uD83D\uDE22 " }), _jsxs(Typography, { sx: {
                                    width: { xs: "100%", sm: "100%", md: "50%" }
                                }, children: [" ", this.state.errorMessage, " "] }), _jsx(Button, { onClick: this.handleRetry, className: classes.button, sx: {
                                    border: "2px solid #87BFF7",
                                    padding: "10px 15px",
                                    borderRadius: "10px",
                                    textTransform: "capitalize",
                                    transition: "all 0.3s ease",
                                }, children: "Please Try Again .." })] })] }));
        }
        return this.props.children;
    }
}
export default ErrorBoundary;
