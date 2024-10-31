import Header from "../Header";
import { fireEvent,render, screen } from "@testing-library/react";
import {Provider} from "react-redux";
import appStore from "../../utility/appStore";
import {BrowserRouter} from "react-router-dom";
import "@testing-library/jest-dom";

it("Should load Header component correctly", () => {
    render(<BrowserRouter>
        <Provider store={appStore}>
            render (<Header />);
        </Provider>
    </BrowserRouter>)
});

it("Should load Header component with login button correctly", () => {
    render(<BrowserRouter>
        <Provider store={appStore}>
            render (<Header />);
        </Provider>
    </BrowserRouter>)

    // const loginButton = screen.getByRole("button");              // one way

    // const loginButton = screen.getByText("Login");
    const loginButton = screen.getByRole("button", {name:"LogIn"});

    expect(loginButton).toBeInTheDocument();

});

it("Should load Header component with cart items 0 correctly", () => {
    render(<BrowserRouter>
        <Provider store={appStore}>
            render (<Header />);
        </Provider>
    </BrowserRouter>)

    const cartItems = screen.getByText("Cart (0)");
    expect(cartItems).toBeInTheDocument();

});

it("Should load Header component with cart correctly", () => {
    render(<BrowserRouter>
        <Provider store={appStore}>
            <Header />;
        </Provider>
    </BrowserRouter>)

    const cartItems = screen.getByText(/Cart/);
    expect(cartItems).toBeInTheDocument();

});

it("Should change login to logout on click", () => {
    render(<BrowserRouter>
        <Provider store={appStore}>
            <Header />;
        </Provider>
    </BrowserRouter>)

    const loginButton = screen.getByRole("button", {name:"LogIn"});
    fireEvent.click(loginButton)
    const logoutButton = screen.getByRole("button", {name:"LogOut"});

    expect(logoutButton).toBeInTheDocument();
});
