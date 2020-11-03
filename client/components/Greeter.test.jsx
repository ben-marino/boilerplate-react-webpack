import React from 'react'
import Greeter from './Greeter'
import {render, screen, fireEvent} from '@testing-library/react'

describe('<Greeter />', () => {
    test("shows a greeting", () => {
        render(<Greeter greeting="yo aihe" />)
        let heading = screen.getByRole('heading')
        expect(heading.innerHTML).toContain('yo aihe')
    })
    test("clicking button once, hides greeting", () => {
        render(<Greeter greeting="yo aihe" />)
        let button = screen.getByRole('button')
        fireEvent.click(button)
        let heading = screen.getByRole('heading')
        expect(heading.innerHTML).toEqual("")
    })
})