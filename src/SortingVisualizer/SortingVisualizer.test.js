import { render, screen } from '@testing-library/react'
import SortingVisualizer from "./SortingVisualizer"

describe('Buttons render test', () => {
    test('Generate button render test', () => {
        render(<SortingVisualizer />);
        let button = screen.getByText(/Generate new array/i);
        expect(button).toBeInTheDocument();
    })
    
    test('Merge sort button render test', () => {
        render(<SortingVisualizer />);
        const button = screen.getByText(/Merge Sort/i);
        expect(button).toBeInTheDocument();
    })
    
    test('Bubble sort button render test', () => {
        render(<SortingVisualizer />);
        const button = screen.getByText(/Bubble Sort/i);
        expect(button).toBeInTheDocument();
    })
    
    test("Quick sort button render test", () => {
        render(<SortingVisualizer />);
        const button = screen.getByText(/Quick Sort/i);
        expect(button).toBeInTheDocument();
    })
})