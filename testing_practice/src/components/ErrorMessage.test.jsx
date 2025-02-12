import { render, screen } from "@testing-library/react";
import { describe, it} from "vitest";
import ErrorMessage from "./ErrorMessage";

describe("Default Error Message",() => {
    it("renders the default Error Message",() => {
       render(<ErrorMessage/>)
       expect(screen.getByTestId('message_container')).toHaveTextContent('something went wrong');
    });

    it("renders the custom Error Message",() => {
        render(<ErrorMessage message="Email is already taken"/>)
        expect(screen.getByTestId('message_container')).toHaveTextContent('Email is already taken');
     });
});