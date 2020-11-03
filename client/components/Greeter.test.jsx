import { TestScheduler } from 'jest'
import React from 'react'
// import { render } from 'react-dom'
import Greeter from './Greeter'
import {fireEvent, render, screen} from '@testing-library/react'

describe('<Greeter/>', () =>{
    test('shows a greeting', () =>{
        render(<Greeter greeting="yo aihe"/>)
        let heading = screen.getByRole('heading')
        expect(heading.innerHTML).toContain('yo aihe')
    })
    test('clicking button once, hides greeting', () =>{
        render(<Greeter greeting="yo aihe"/>)
        let button = screen.getByRole('button')
        fireEvent.click(button)
        let heading = screen.getByRole('heading')
        expect(heading.innerHTML).toEqual("")
    })
    test('clicking button once, hides greeting', () =>{
        render(<Greeter greeting="yo aihe"/>)
        let button = screen.getByRole('button')
        fireEvent.click(button)
        fireEvent.click(button)
        let heading = screen.getByRole('heading')
        expect(heading.innerHTML).toEqual("yo aihe")
    })
})

