import { render, screen } from "@testing-library/react";
import Products from "./products";

test('Render products list',()=>{
    render( <Products/>);
    const linkElement = screen.getAllByDisplayValue(/TV/i);
    expect(linkElement).toBeInTheDocument();
})