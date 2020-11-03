import React from 'react'
import Greeter from './Greeter'
import {render, screen} from '@testing-library/react'

describe('<Greeter />', () => {
    test("shows a greeting", () => {
        render(<Greeter greeting="yo aihe" />)
        console.log(screen.debug())
        let heading = screen.getByRole('heading')
    })
})